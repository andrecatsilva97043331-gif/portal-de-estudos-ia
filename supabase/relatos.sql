-- Portal de Estudos IA: relato da experiência no curso como condição para emitir o certificado.
-- Rode depois de certificados.sql e divulgacao.sql. Pode rodar de novo sem problema.
-- O relato é o mesmo registro da tabela public.depoimentos (um por aluno e curso).
-- Certificados já emitidos continuam válidos: emitir_certificado devolve o existente antes de qualquer checagem.
-- certificados.sql e divulgacao.sql já trazem estas mesmas versões das funções, então rodá-los de novo não desfaz nada.

-- O aluno envia (ou reescreve) o relato de um curso que concluiu 100%. Reescrever volta para "pendente".
create or replace function public.enviar_depoimento(p_curso text, p_texto text, p_autoriza boolean)
returns void language plpgsql security definer set search_path = public as $$
declare eu uuid := auth.uid();
begin
  if eu is null then raise exception 'Entre no portal para enviar seu relato.'; end if;
  if not public.curso_completo(eu, p_curso) then raise exception 'Conclua todas as lições e projetos do curso para contar como foi sua experiência.'; end if;
  if char_length(trim(coalesce(p_texto, ''))) < 300 then raise exception 'Conte como foi sua experiência no curso com pelo menos 300 caracteres.'; end if;
  insert into public.depoimentos (aluno_id, curso_id, texto, autoriza_publicar)
  values (eu, p_curso, trim(p_texto), coalesce(p_autoriza, false))
  on conflict (aluno_id, curso_id) do update
    set texto = excluded.texto, autoriza_publicar = excluded.autoriza_publicar,
        status = 'pendente', criado_em = now(), moderado_em = null;
end $$;
revoke all on function public.enviar_depoimento(text, text, boolean) from public, anon;
grant execute on function public.enviar_depoimento(text, text, boolean) to authenticated;

-- Emite (ou devolve, se já existir) o certificado do aluno logado. tipo 'curso' + id do curso, ou 'trilha' + 'ia' / 'renda'.
-- Para emitir pela primeira vez, o aluno precisa ter o relato (>= 300 caracteres) do curso ou do projeto final da trilha.
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
    if not exists (select 1 from public.depoimentos where aluno_id = eu and curso_id = p_ref and char_length(texto) >= 300) then
      raise exception 'Para liberar seu certificado, conte como foi sua experiência no curso.';
    end if;
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
    if not exists (select 1 from public.depoimentos where aluno_id = eu and curso_id = pf.curso_id and char_length(texto) >= 300) then
      raise exception 'Para liberar seu certificado, conte como foi sua experiência no curso.';
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
