-- Portal de Estudos: tabelas e regras de acesso.
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

alter table public.alunos     enable row level security;
alter table public.masters    enable row level security;
alter table public.matriculas enable row level security;
alter table public.progresso  enable row level security;

drop policy if exists "aluno ou master leem cadastro" on public.alunos;
drop policy if exists "aluno cria o proprio cadastro" on public.alunos;
drop policy if exists "aluno atualiza o proprio cadastro" on public.alunos;
create policy "aluno ou master leem cadastro" on public.alunos for select to authenticated using (id = auth.uid() or public.is_master());
create policy "aluno cria o proprio cadastro" on public.alunos for insert to authenticated with check (id = auth.uid());
create policy "aluno atualiza o proprio cadastro" on public.alunos for update to authenticated using (id = auth.uid()) with check (id = auth.uid());

drop policy if exists "master ve o proprio registro" on public.masters;
create policy "master ve o proprio registro" on public.masters for select to authenticated using (user_id = auth.uid());

drop policy if exists "aluno ou master leem matriculas" on public.matriculas;
drop policy if exists "aluno se matricula" on public.matriculas;
create policy "aluno ou master leem matriculas" on public.matriculas for select to authenticated using (aluno_id = auth.uid() or public.is_master());
create policy "aluno se matricula" on public.matriculas for insert to authenticated with check (aluno_id = auth.uid());

drop policy if exists "aluno ou master leem progresso" on public.progresso;
drop policy if exists "aluno registra progresso" on public.progresso;
drop policy if exists "aluno reinicia progresso" on public.progresso;
create policy "aluno ou master leem progresso" on public.progresso for select to authenticated using (aluno_id = auth.uid() or public.is_master());
create policy "aluno registra progresso" on public.progresso for insert to authenticated with check (aluno_id = auth.uid());
create policy "aluno reinicia progresso" on public.progresso for delete to authenticated using (aluno_id = auth.uid());

-- Depois de criar seu usuário em Authentication > Users (e-mail e senha), torne-o master:
-- insert into public.masters (user_id) select id from auth.users where email = 'SEU-EMAIL@exemplo.com';
