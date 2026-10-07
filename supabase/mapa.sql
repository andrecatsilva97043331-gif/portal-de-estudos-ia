-- Portal de Estudos IA: mapa dos alunos no Painel do Master.
-- Rode depois de schema.sql (SQL Editor > New query > colar > Run). Pode rodar de novo.

-- Coordenadas do endereço do aluno (geocodificado pelo Nominatim/OpenStreetMap no painel).
-- geo_endereco guarda o endereço que gerou as coordenadas: se o cadastro mudar, o painel geocodifica de novo.
-- geo_lat/geo_lng nulos com geo_endereco preenchido = endereço não localizado (não tenta de novo até mudar).
alter table public.alunos add column if not exists geo_lat double precision check (geo_lat between -90 and 90);
alter table public.alunos add column if not exists geo_lng double precision check (geo_lng between -180 and 180);
alter table public.alunos add column if not exists geo_endereco text check (char_length(geo_endereco) <= 300);
alter table public.alunos add column if not exists geo_em timestamptz;

-- O aluno não grava essas colunas (ficam fora dos grants de insert/update do schema.sql); só o master, por esta função.
create or replace function public.salvar_geo(p_aluno uuid, p_endereco text, p_lat double precision, p_lng double precision)
returns void language plpgsql security definer set search_path = public as $$
begin
  if not public.is_master() then raise exception 'Apenas o master pode salvar a localização.'; end if;
  update public.alunos set geo_endereco = left(p_endereco, 300), geo_lat = p_lat, geo_lng = p_lng, geo_em = now() where id = p_aluno;
end $$;
revoke all on function public.salvar_geo(uuid, text, double precision, double precision) from public, anon;
grant execute on function public.salvar_geo(uuid, text, double precision, double precision) to authenticated;
