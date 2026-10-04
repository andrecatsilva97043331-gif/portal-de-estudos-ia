-- Portal de Estudos IA: tabelas e regras de acesso.
-- Rode uma vez no Supabase (SQL Editor > New query > colar > Run).

create table if not exists public.alunos (
  id uuid primary key references auth.users on delete cascade,
  nome text not null check (char_length(nome) between 3 and 120),
  idade int not null check (idade between 5 and 120),
  telefone text not null check (char_length(telefone) between 8 and 25),
  pais text not null check (char_length(pais) between 2 and 60),
  estado text not null check (char_length(estado) between 2 and 60),
  cep text not null check (char_length(cep) between 3 and 12),
  criado_em timestamptz not null default now(),
  ultimo_acesso timestamptz not null default now()
);

-- Perfil do aluno (não guardamos CPF, RG nem documentos com foto)
alter table public.alunos add column if not exists profissao text check (char_length(profissao) <= 80);
alter table public.alunos add column if not exists ocupacao text check (char_length(ocupacao) <= 80);
alter table public.alunos add column if not exists trabalhando boolean;
alter table public.alunos add column if not exists estudante boolean;
alter table public.alunos add column if not exists objetivo text check (char_length(objetivo) <= 60);
alter table public.alunos add column if not exists objetivo_detalhe text check (char_length(objetivo_detalhe) <= 300);

-- Confirmação obrigatória: e-mail (código do Supabase Auth) e WhatsApp (código da função "whatsapp")
alter table public.alunos add column if not exists email text check (char_length(email) <= 120);
alter table public.alunos add column if not exists aceita_contato boolean not null default false;
alter table public.alunos add column if not exists whatsapp_verificado boolean not null default false;
alter table public.alunos add column if not exists whatsapp_verificado_em timestamptz;
create unique index if not exists alunos_email_unico on public.alunos (lower(email));

-- Confirmação gratuita: o aluno manda uma mensagem com o código para o WhatsApp do master, que confere e confirma no painel.
alter table public.alunos add column if not exists codigo_whats text check (char_length(codigo_whats) <= 8);
alter table public.alunos add column if not exists whatsapp_solicitado_em timestamptz;
alter table public.alunos add column if not exists inscricao_notificada_em timestamptz;

-- O aluno só grava os próprios dados de perfil; a confirmação do WhatsApp só o servidor marca.
revoke insert, update on public.alunos from anon, authenticated;
grant insert (id, email, nome, idade, telefone, pais, estado, cep, profissao, ocupacao, trabalhando, estudante, objetivo, objetivo_detalhe, aceita_contato, ultimo_acesso, codigo_whats, whatsapp_solicitado_em)
  on public.alunos to authenticated;
grant update (id, email, nome, idade, telefone, pais, estado, cep, profissao, ocupacao, trabalhando, estudante, objetivo, objetivo_detalhe, aceita_contato, ultimo_acesso, codigo_whats, whatsapp_solicitado_em)
  on public.alunos to authenticated;

-- Trocou o telefone? Precisa confirmar o WhatsApp de novo.
create or replace function public.alunos_telefone_mudou()
returns trigger language plpgsql as $$
begin
  if tg_op = 'INSERT' then
    new.whatsapp_verificado := false; new.whatsapp_verificado_em := null;
  elsif regexp_replace(new.telefone, '\D', '', 'g') is distinct from regexp_replace(old.telefone, '\D', '', 'g') then
    new.whatsapp_verificado := false; new.whatsapp_verificado_em := null;
  end if;
  return new;
end $$;
drop trigger if exists alunos_telefone_mudou on public.alunos;
create trigger alunos_telefone_mudou before insert or update on public.alunos
  for each row execute function public.alunos_telefone_mudou();

-- Códigos de WhatsApp pendentes (só a função do servidor lê e grava; guardamos o hash, nunca o código)
create table if not exists public.verificacoes (
  aluno_id uuid primary key references public.alunos on delete cascade,
  codigo_hash text not null,
  expira_em timestamptz not null,
  tentativas int not null default 0,
  envios int not null default 1,
  janela_inicio timestamptz not null default now(),
  enviado_em timestamptz not null default now()
);
alter table public.verificacoes enable row level security;

create table if not exists public.masters (
  user_id uuid primary key references auth.users on delete cascade
);

create table if not exists public.matriculas (
  aluno_id uuid not null references public.alunos on delete cascade,
  curso_id text not null check (char_length(curso_id) between 1 and 80),
  iniciado_em timestamptz not null default now(),
  primary key (aluno_id, curso_id)
);

create table if not exists public.progresso (
  aluno_id uuid not null references public.alunos on delete cascade,
  curso_id text not null check (char_length(curso_id) between 1 and 80),
  licao_id text not null check (char_length(licao_id) between 1 and 40),
  concluida_em timestamptz not null default now(),
  primary key (aluno_id, curso_id, licao_id)
);

create or replace function public.is_master()
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.masters where user_id = auth.uid());
$$;
revoke all on function public.is_master() from public;
grant execute on function public.is_master() to anon, authenticated;

-- Configuração do portal (uma linha só). exigir_whatsapp = false dispensa temporariamente a confirmação do WhatsApp.
create table if not exists public.config_portal (
  id int primary key default 1 check (id = 1),
  exigir_whatsapp boolean not null default true
);
insert into public.config_portal (id) values (1) on conflict do nothing;
alter table public.config_portal enable row level security;
drop policy if exists "todos leem a configuracao" on public.config_portal;
create policy "todos leem a configuracao" on public.config_portal for select to anon, authenticated using (true);

-- Aluno com e-mail e WhatsApp confirmados: única condição para se matricular e registrar progresso.
create or replace function public.aluno_verificado()
returns boolean language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from public.alunos a join auth.users u on u.id = a.id
    where a.id = auth.uid() and u.email_confirmed_at is not null
      and (a.whatsapp_verificado or not coalesce((select exigir_whatsapp from public.config_portal where id = 1), true))
  );
$$;
revoke all on function public.aluno_verificado() from public;
grant execute on function public.aluno_verificado() to authenticated;

-- Só o master marca (ou desmarca) o WhatsApp do aluno como confirmado.
create or replace function public.confirmar_whatsapp(p_aluno uuid, p_ok boolean default true)
returns void language plpgsql security definer set search_path = public as $$
begin
  if not public.is_master() then raise exception 'Apenas o master pode confirmar.'; end if;
  update public.alunos set whatsapp_verificado = p_ok, whatsapp_verificado_em = case when p_ok then now() end where id = p_aluno;
end $$;
revoke all on function public.confirmar_whatsapp(uuid, boolean) from public;
grant execute on function public.confirmar_whatsapp(uuid, boolean) to authenticated;

alter table public.alunos     enable row level security;
alter table public.masters    enable row level security;
alter table public.matriculas enable row level security;
alter table public.progresso  enable row level security;

drop policy if exists "aluno ou master leem cadastro" on public.alunos;
drop policy if exists "aluno cria o proprio cadastro" on public.alunos;
drop policy if exists "aluno atualiza o proprio cadastro" on public.alunos;
create policy "aluno ou master leem cadastro" on public.alunos for select to authenticated using (id = auth.uid() or public.is_master());
create policy "aluno cria o proprio cadastro" on public.alunos for insert to authenticated
  with check (id = auth.uid() and lower(email) = lower(auth.jwt() ->> 'email'));
create policy "aluno atualiza o proprio cadastro" on public.alunos for update to authenticated
  using (id = auth.uid()) with check (id = auth.uid() and lower(email) = lower(auth.jwt() ->> 'email'));

drop policy if exists "master ve o proprio registro" on public.masters;
create policy "master ve o proprio registro" on public.masters for select to authenticated using (user_id = auth.uid());

drop policy if exists "aluno ou master leem matriculas" on public.matriculas;
drop policy if exists "aluno se matricula" on public.matriculas;
create policy "aluno ou master leem matriculas" on public.matriculas for select to authenticated using (aluno_id = auth.uid() or public.is_master());
create policy "aluno se matricula" on public.matriculas for insert to authenticated with check (aluno_id = auth.uid() and public.aluno_verificado());

drop policy if exists "aluno ou master leem progresso" on public.progresso;
drop policy if exists "aluno registra progresso" on public.progresso;
drop policy if exists "aluno reinicia progresso" on public.progresso;
create policy "aluno ou master leem progresso" on public.progresso for select to authenticated using (aluno_id = auth.uid() or public.is_master());
create policy "aluno registra progresso" on public.progresso for insert to authenticated with check (aluno_id = auth.uid() and public.aluno_verificado());
create policy "aluno reinicia progresso" on public.progresso for delete to authenticated using (aluno_id = auth.uid());

-- Avisos enviados aos alunos (WhatsApp pelo wa.me ou automático pela API). Só o master lê e grava.
create table if not exists public.avisos (
  id bigint generated always as identity primary key,
  aluno_id uuid not null references public.alunos on delete cascade,
  tipo text not null check (tipo in ('abandono','foco','sem-comecar','quase','incentivo','concluiu','pendente')),
  canal text not null check (canal in ('wa.me','api')),
  texto text check (char_length(texto) <= 2000),
  enviado_por uuid default auth.uid() references auth.users on delete set null,
  enviado_em timestamptz not null default now()
);
create index if not exists avisos_aluno on public.avisos (aluno_id, enviado_em desc);
alter table public.avisos enable row level security;
drop policy if exists "master le avisos" on public.avisos;
drop policy if exists "master registra avisos" on public.avisos;
create policy "master le avisos" on public.avisos for select to authenticated using (public.is_master());
create policy "master registra avisos" on public.avisos for insert to authenticated with check (public.is_master());

-- Dispensar o WhatsApp temporariamente:  update public.config_portal set exigir_whatsapp = false;
-- Voltar a exigir:                        update public.config_portal set exigir_whatsapp = true;

-- Depois de criar seu usuário em Authentication > Users (e-mail e senha), torne-o master:
-- insert into public.masters (user_id) select id from auth.users where email = 'SEU-EMAIL@exemplo.com';
