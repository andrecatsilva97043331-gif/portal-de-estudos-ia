-- Certificado conquistado é direito do aluno: remove a permissão de revogar pela API.
revoke update on public.certificados from anon, authenticated;
revoke update (revogado) on public.certificados from anon, authenticated;
drop policy if exists "master revoga certificados" on public.certificados;
