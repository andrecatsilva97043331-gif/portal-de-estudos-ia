-- Portal de Estudos IA: certificados de conclusão (por curso e por trilha).
-- Rode depois do schema.sql (SQL Editor > New query > colar > Run). Pode rodar de novo sem problema.
-- Depois de rodar, abra o Painel do Master uma vez: ele envia a lista de cursos e lições que valem certificado.

-- Cursos que emitem certificado (o painel do master mantém esta tabela igual ao catálogo publicado).
create table if not exists public.certificados_cursos (
  curso_id text primary key check (char_length(curso_id) between 1 and 80),
  titulo text not null check (char_length(titulo) between 1 and 120),
  subtitulo text check (char_length(subtitulo) <= 120),
  icone text check (char_length(icone) <= 16),
  cores text[] not null default '{}',
  trilha text check (trilha in ('ia','renda')),
  projeto_final boolean not null default false,
  carga_horaria int not null check (carga_horaria between 1 and 40),
  licoes text[] not null check (cardinality(licoes) between 1 and 300),
  habilidades text[] not null default '{}',
  atualizado_em timestamptz not null default now()
);
alter table public.certificados_cursos enable row level security;
drop policy if exists "todos leem cursos com certificado" on public.certificados_cursos;
drop policy if exists "master grava cursos com certificado" on public.certificados_cursos;
create policy "todos leem cursos com certificado" on public.certificados_cursos for select to anon, authenticated using (true);
create policy "master grava cursos com certificado" on public.certificados_cursos for all to authenticated
  using (public.is_master()) with check (public.is_master());

-- Certificados emitidos. Os dados ficam congelados na emissão (nome, curso, carga), para o certificado não mudar depois.
create table if not exists public.certificados (
  codigo text primary key check (codigo ~ '^CIA-[0-9]{4}-[A-Z0-9]{8}$'),
  aluno_id uuid not null references public.alunos on delete cascade,
  tipo text not null check (tipo in ('curso','trilha')),
  ref_id text not null check (char_length(ref_id) between 1 and 80),
  nome text not null,
  titulo text not null,
  subtitulo text,
  icone text,
  cores text[] not null default '{}',
  carga_horaria int not null,
  detalhe text,
  habilidades text[] not null default '{}',
  emitido_em timestamptz not null default now(),
  revogado boolean not null default false,
  unique (aluno_id, tipo, ref_id)
);
alter table public.certificados enable row level security;
revoke insert, update, delete on public.certificados from anon, authenticated;
grant update (revogado) on public.certificados to authenticated;
drop policy if exists "aluno ou master leem certificados" on public.certificados;
drop policy if exists "master revoga certificados" on public.certificados;
create policy "aluno ou master leem certificados" on public.certificados for select to authenticated using (aluno_id = auth.uid() or public.is_master());
create policy "master revoga certificados" on public.certificados for update to authenticated using (public.is_master()) with check (public.is_master());

-- ID da credencial: CIA-AAAA-XXXXXXXX (sem I, O, 0 e 1, que se confundem).
create or replace function public.novo_codigo_certificado()
returns text language plpgsql volatile set search_path = public as $$
declare
  alfa constant text := 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  b bytea; s text; i int;
begin
  loop
    b := decode(md5(gen_random_uuid()::text || clock_timestamp()::text), 'hex');
    s := '';
    for i in 0..7 loop s := s || substr(alfa, (get_byte(b, i) % 32) + 1, 1); end loop;
    s := 'CIA-' || to_char(now() at time zone 'America/Sao_Paulo', 'YYYY') || '-' || s;
    exit when not exists (select 1 from public.certificados where codigo = s);
  end loop;
  return s;
end $$;
revoke all on function public.novo_codigo_certificado() from public, anon, authenticated;

-- O aluno concluiu todas as lições e projetos do curso?
create or replace function public.curso_completo(p_aluno uuid, p_curso text)
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.certificados_cursos where curso_id = p_curso)
    and not exists (
      select 1 from public.certificados_cursos c, unnest(c.licoes) as l(id)
      where c.curso_id = p_curso
        and not exists (select 1 from public.progresso p where p.aluno_id = p_aluno and p.curso_id = p_curso and p.licao_id = l.id)
    );
$$;
revoke all on function public.curso_completo(uuid, text) from public, anon, authenticated;

-- Emite (ou devolve, se já existir) o certificado do aluno logado. tipo 'curso' + id do curso, ou 'trilha' + 'ia' / 'renda'.
create or replace function public.emitir_certificado(p_tipo text, p_ref text)
returns public.certificados language plpgsql security definer set search_path = public as $$
declare
  eu uuid := auth.uid();
  cert public.certificados;
  c public.certificados_cursos;
  pf public.certificados_cursos;
  v_nome text; v_carga int; v_n int;
begin
  if eu is null or not public.aluno_verificado() then raise exception 'Confirme seu cadastro para emitir o certificado.'; end if;
  select * into cert from public.certificados where aluno_id = eu and tipo = p_tipo and ref_id = p_ref;
  if found then return cert; end if;
  select nome into v_nome from public.alunos where id = eu;

  if p_tipo = 'curso' then
    select * into c from public.certificados_cursos where curso_id = p_ref and not projeto_final;
    if not found then raise exception 'Este curso ainda não emite certificado.'; end if;
    if not public.curso_completo(eu, p_ref) then raise exception 'Conclua todas as lições e projetos do curso para emitir o certificado.'; end if;
    insert into public.certificados (codigo, aluno_id, tipo, ref_id, nome, titulo, subtitulo, icone, cores, carga_horaria, detalhe, habilidades)
    values (public.novo_codigo_certificado(), eu, 'curso', p_ref, v_nome, c.titulo, c.subtitulo, c.icone, c.cores, c.carga_horaria,
            cardinality(c.licoes) || ' lições', c.habilidades)
    returning * into cert;

  elsif p_tipo = 'trilha' and p_ref in ('ia','renda') then
    select * into pf from public.certificados_cursos where trilha = p_ref and projeto_final;
    if not found then raise exception 'O projeto final desta trilha ainda não está disponível.'; end if;
    if exists (select 1 from public.certificados_cursos where trilha = p_ref and not public.curso_completo(eu, curso_id)) then
      raise exception 'Conclua todos os cursos e o projeto final da trilha para emitir o certificado.';
    end if;
    select sum(carga_horaria), count(*) filter (where not projeto_final) into v_carga, v_n
      from public.certificados_cursos where trilha = p_ref;
    insert into public.certificados (codigo, aluno_id, tipo, ref_id, nome, titulo, subtitulo, icone, cores, carga_horaria, detalhe, habilidades)
    values (public.novo_codigo_certificado(), eu, 'trilha', p_ref, v_nome,
            case p_ref when 'ia' then 'Trilha de IA' else 'Trilha Renda com IA' end,
            v_n || ' cursos + projeto final', pf.icone, pf.cores, v_carga, v_n || ' cursos', pf.habilidades)
    returning * into cert;

  else
    raise exception 'Tipo de certificado inválido.';
  end if;
  return cert;
end $$;
revoke all on function public.emitir_certificado(text, text) from public, anon;
grant execute on function public.emitir_certificado(text, text) to authenticated;

-- Validação pública (página validar.html): só pelo código exato, sem listagem.
create or replace function public.validar_certificado(p_codigo text)
returns table (codigo text, tipo text, ref_id text, nome text, titulo text, subtitulo text, icone text, cores text[],
               carga_horaria int, detalhe text, habilidades text[], emitido_em timestamptz, revogado boolean)
language sql stable security definer set search_path = public as $$
  select c.codigo, c.tipo, c.ref_id, c.nome, c.titulo, c.subtitulo, c.icone, c.cores,
         c.carga_horaria, c.detalhe, c.habilidades, c.emitido_em, c.revogado
  from public.certificados c
  where c.codigo = upper(btrim(p_codigo));
$$;
revoke all on function public.validar_certificado(text) from public;
grant execute on function public.validar_certificado(text) to anon, authenticated;
