// Função "whatsapp" do Portal de Estudos (Supabase Edge Function, Deno).
// Ações: enviar-codigo e verificar-codigo (confirmação obrigatória do WhatsApp do aluno).
// Segredos necessários: WHATSAPP_TOKEN, WHATSAPP_PHONE_ID.
// Opcionais: WHATSAPP_TEMPLATE_CODIGO (padrão "codigo_verificacao"), WHATSAPP_IDIOMA (padrão "pt_BR"),
//            WHATSAPP_CODIGO_BOTAO ("1" se o modelo tiver botão de copiar código, padrão "1").
import { createClient } from 'npm:@supabase/supabase-js@2';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS'
};
const VALIDADE_MIN = 10, ESPERA_SEG = 60, MAX_ENVIOS_HORA = 5, MAX_TENTATIVAS = 5;

const env = (k: string, padrao = '') => Deno.env.get(k) ?? padrao;
const resposta = (corpo: unknown, status = 200) =>
  new Response(JSON.stringify(corpo), { status, headers: { ...CORS, 'Content-Type': 'application/json' } });
const erro = (msg: string, status = 400) => resposta({ erro: msg }, status);

async function hash(texto: string) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(texto));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

function numeroInternacional(telefone: string, pais: string) {
  const d = String(telefone || '').replace(/\D/g, '');
  const brasil = /^(brasil|brazil|br)$/i.test(String(pais || '').trim());
  if (brasil && (d.length === 10 || d.length === 11)) return '55' + d;
  return d;
}

export async function enviarModelo(para: string, modelo: string, parametros: string[], botaoCodigo?: string) {
  const componentes: unknown[] = [{ type: 'body', parameters: parametros.map(text => ({ type: 'text', text })) }];
  if (botaoCodigo) componentes.push({ type: 'button', sub_type: 'url', index: '0', parameters: [{ type: 'text', text: botaoCodigo }] });
  const r = await fetch(`https://graph.facebook.com/v21.0/${env('WHATSAPP_PHONE_ID')}/messages`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${env('WHATSAPP_TOKEN')}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      messaging_product: 'whatsapp', to: para, type: 'template',
      template: { name: modelo, language: { code: env('WHATSAPP_IDIOMA', 'pt_BR') }, components: componentes }
    })
  });
  const j = await r.json().catch(() => ({}));
  if (!r.ok) { console.error('WhatsApp API', r.status, JSON.stringify(j)); throw new Error('falha-whatsapp'); }
  return j;
}

Deno.serve(async req => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS });
  if (req.method !== 'POST') return erro('Método não permitido.', 405);
  if (!env('WHATSAPP_TOKEN') || !env('WHATSAPP_PHONE_ID')) return erro('O envio por WhatsApp ainda não foi configurado no portal.', 503);

  const url = env('SUPABASE_URL');
  const usuario = createClient(url, env('SUPABASE_ANON_KEY'), { global: { headers: { Authorization: req.headers.get('Authorization') ?? '' } } });
  const { data: { user } } = await usuario.auth.getUser();
  if (!user) return erro('Sessão expirada. Entre novamente.', 401);

  const admin = createClient(url, env('SUPABASE_SERVICE_ROLE_KEY'));
  const corpo = await req.json().catch(() => ({}));

  if (corpo.acao === 'enviar-aviso') {
    const { data: master } = await admin.from('masters').select('user_id').eq('user_id', user.id).maybeSingle();
    if (!master) return erro('Apenas o master pode enviar avisos.', 403);
    const TIPOS = ['abandono', 'foco', 'sem-comecar', 'quase', 'incentivo', 'concluiu'];
    if (!TIPOS.includes(corpo.tipo)) return erro('Tipo de aviso inválido.');
    const envios = Array.isArray(corpo.envios) ? corpo.envios.slice(0, 200) : [];
    const ids = envios.map((e: { aluno_id: string }) => e.aluno_id);
    const { data: alunos } = await admin.from('alunos').select('id,telefone,pais,whatsapp_verificado,aceita_contato').in('id', ids);
    const porId = new Map((alunos ?? []).map(a => [a.id, a]));
    const modelo = env('WHATSAPP_PREFIXO_AVISO', 'aviso_') + corpo.tipo.replace(/-/g, '_');
    let enviados = 0, falhas = 0;
    const registros = [];
    for (const e of envios) {
      const a = porId.get(e.aluno_id);
      if (!a || !a.whatsapp_verificado || !a.aceita_contato) { falhas++; continue; }
      const parametros = (Array.isArray(e.parametros) ? e.parametros : []).slice(0, 6).map((p: unknown) => String(p ?? '-').slice(0, 200));
      try {
        await enviarModelo(numeroInternacional(a.telefone, a.pais), modelo, parametros);
        enviados++;
        registros.push({ aluno_id: a.id, tipo: corpo.tipo, canal: 'api', texto: String(e.texto ?? '').slice(0, 2000), enviado_por: user.id });
      } catch { falhas++; }
    }
    if (registros.length) await admin.from('avisos').insert(registros);
    return resposta({ ok: true, enviados, falhas });
  }

  if (!user.email_confirmed_at) return erro('Confirme o e-mail antes do WhatsApp.', 403);

  const { data: aluno } = await admin.from('alunos').select('id,nome,telefone,pais,whatsapp_verificado').eq('id', user.id).maybeSingle();
  if (!aluno) return erro('Cadastro não encontrado. Preencha o formulário de inscrição.', 404);

  if (corpo.acao === 'enviar-codigo') {
    if (aluno.whatsapp_verificado) return resposta({ ok: true, jaVerificado: true });
    const { data: v } = await admin.from('verificacoes').select('*').eq('aluno_id', aluno.id).maybeSingle();
    const agora = Date.now();
    if (v && agora - new Date(v.enviado_em).getTime() < ESPERA_SEG * 1000) return erro('Aguarde 1 minuto para pedir um novo código.', 429);
    const novaJanela = !v || agora - new Date(v.janela_inicio).getTime() > 3600e3;
    if (!novaJanela && v.envios >= MAX_ENVIOS_HORA) return erro('Muitos códigos pedidos. Tente de novo daqui a 1 hora.', 429);

    const codigo = String(crypto.getRandomValues(new Uint32Array(1))[0] % 900000 + 100000);
    try {
      await enviarModelo(numeroInternacional(aluno.telefone, aluno.pais), env('WHATSAPP_TEMPLATE_CODIGO', 'codigo_verificacao'), [codigo],
        env('WHATSAPP_CODIGO_BOTAO', '1') === '1' ? codigo : undefined);
    } catch {
      return erro('Não conseguimos enviar para este número. Confira se o telefone com DDD tem WhatsApp.', 502);
    }
    await admin.from('verificacoes').upsert({
      aluno_id: aluno.id,
      codigo_hash: await hash(aluno.id + ':' + codigo),
      expira_em: new Date(agora + VALIDADE_MIN * 60e3).toISOString(),
      tentativas: 0,
      envios: novaJanela ? 1 : v.envios + 1,
      janela_inicio: novaJanela ? new Date(agora).toISOString() : v.janela_inicio,
      enviado_em: new Date(agora).toISOString()
    });
    return resposta({ ok: true });
  }

  if (corpo.acao === 'verificar-codigo') {
    const codigo = String(corpo.codigo ?? '').replace(/\D/g, '');
    const { data: v } = await admin.from('verificacoes').select('*').eq('aluno_id', aluno.id).maybeSingle();
    if (!v || Date.now() > new Date(v.expira_em).getTime()) return erro('Código expirado. Peça um novo.');
    if (v.tentativas >= MAX_TENTATIVAS) return erro('Muitas tentativas. Peça um novo código.', 429);
    if (await hash(aluno.id + ':' + codigo) !== v.codigo_hash) {
      await admin.from('verificacoes').update({ tentativas: v.tentativas + 1 }).eq('aluno_id', aluno.id);
      return erro('Código inválido. Confira os números.');
    }
    await admin.from('alunos').update({ whatsapp_verificado: true, whatsapp_verificado_em: new Date().toISOString() }).eq('id', aluno.id);
    await admin.from('verificacoes').delete().eq('aluno_id', aluno.id);
    return resposta({ ok: true });
  }

  return erro('Ação desconhecida.');
});
