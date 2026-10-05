-- Portal de Estudos IA: divulgação (origem do cadastro e depoimentos dos alunos).
-- Rode depois de schema.sql e certificados.sql (SQL Editor > New query > colar > Run). Pode rodar de novo.

-- ============ Origem do cadastro (links com rastreio: ?utm_source=instagram&utm_campaign=lancamento) ============
alter table public.alunos add column if not exists origem text check (char_length(origem) <= 60);
grant insert (origem), update (origem) on public.alunos to authenticated;

-- A origem é a do primeiro cadastro: depois de gravada, não muda mais.
create or replace function public.alunos_origem_fixa()
returns trigger language plpgsql as $$
begin
  new.origem := coalesce(old.origem, new.origem);
  return new;
end $$;
drop trigger if exists alunos_origem_fixa on public.alunos;
create trigger alunos_origem_fixa before update on public.alunos
  for each row execute function public.alunos_origem_fixa();

-- ============ Depoimentos (o aluno escreve ao concluir um curso; o master aprova antes de publicar) ============
create table if not exists public.depoimentos (
  id bigint generated always as identity primary key,
  aluno_id uuid not null references public.alunos on delete cascade,
  curso_id text not null check (char_length(curso_id) between 1 and 80),
  texto text not null check (char_length(texto) between 40 and 600),
  autoriza_publicar boolean not null default false,
  status text not null default 'pendente' check (status in ('pendente','aprovado','recusado')),
  criado_em timestamptz not null default now(),
  moderado_em timestamptz,
  unique (aluno_id, curso_id)
);
alter table public.depoimentos enable row level security;
revoke insert, update, delete on public.depoimentos from anon, authenticated;

drop policy if exists "aluno ou master leem depoimentos" on public.depoimentos;
create policy "aluno ou master leem depoimentos" on public.depoimentos for select to authenticated
  using (aluno_id = auth.uid() or public.is_master());

-- O aluno envia (ou reescreve) o depoimento de um curso que concluiu 100%. Reescrever volta para "pendente".
create or replace function public.enviar_depoimento(p_curso text, p_texto text, p_autoriza boolean)
returns void language plpgsql security definer set search_path = public as $$
declare eu uuid := auth.uid();
begin
  if eu is null then raise exception 'Entre no portal para enviar o depoimento.'; end if;
  if not public.curso_completo(eu, p_curso) then raise exception 'Conclua todas as lições e projetos do curso para deixar seu depoimento.'; end if;
  insert into public.depoimentos (aluno_id, curso_id, texto, autoriza_publicar)
  values (eu, p_curso, trim(p_texto), coalesce(p_autoriza, false))
  on conflict (aluno_id, curso_id) do update
    set texto = excluded.texto, autoriza_publicar = excluded.autoriza_publicar,
        status = 'pendente', criado_em = now(), moderado_em = null;
end $$;
revoke all on function public.enviar_depoimento(text, text, boolean) from public, anon;
grant execute on function public.enviar_depoimento(text, text, boolean) to authenticated;

-- Só o master aprova ou recusa.
create or replace function public.moderar_depoimento(p_id bigint, p_status text)
returns void language plpgsql security definer set search_path = public as $$
begin
  if not public.is_master() then raise exception 'Apenas o master pode moderar depoimentos.'; end if;
  if p_status not in ('pendente','aprovado','recusado') then raise exception 'Situação inválida.'; end if;
  update public.depoimentos set status = p_status, moderado_em = case when p_status = 'pendente' then null else now() end where id = p_id;
end $$;
revoke all on function public.moderar_depoimento(bigint, text) from public, anon;
grant execute on function public.moderar_depoimento(bigint, text) to authenticated;

-- Vitrine pública: só aprovados e autorizados, com primeiro nome, inicial do sobrenome e estado.
create or replace function public.depoimentos_publicos()
returns table (nome text, estado text, curso_id text, texto text, data timestamptz)
language sql stable security definer set search_path = public as $$
  select split_part(trim(a.nome), ' ', 1)
         || case when position(' ' in trim(a.nome)) > 0
                 then ' ' || upper(left(regexp_replace(trim(a.nome), '^.*\s', ''), 1)) || '.' else '' end,
         a.estado, d.curso_id, d.texto, d.moderado_em
  from public.depoimentos d join public.alunos a on a.id = d.aluno_id
  where d.status = 'aprovado' and d.autoriza_publicar
  order by d.moderado_em desc
  limit 12;
$$;
revoke all on function public.depoimentos_publicos() from public;
grant execute on function public.depoimentos_publicos() to anon, authenticated;
