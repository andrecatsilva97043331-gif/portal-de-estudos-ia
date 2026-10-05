(function(){
'use strict';

const cfg = window.PORTAL_CONFIG || {};
const USA_SUPABASE = !!(cfg.supabaseUrl && cfg.supabaseAnonKey);
const CDN = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
const agora = () => new Date().toISOString();
const CAMPOS = ['nome','idade','telefone','pais','estado','cep','profissao','ocupacao','trabalhando','estudante','objetivo','objetivo_detalhe','aceita_contato','codigo_whats'];

function carregarScript(src){
  return new Promise((res, rej) => { const s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = rej; document.head.appendChild(s); });
}
function soCampos(d){ const o = {}; CAMPOS.forEach(k => { if (d[k] !== undefined) o[k] = d[k]; }); return o; }
let EXIGIR_WHATS = true;
/* Volta do link "redefinir senha" do e-mail (o Supabase limpa o endereço logo depois, por isso é lido aqui). */
let RECUPERANDO = /[#&]type=recovery/.test(location.hash);
let AO_RECUPERAR = null;
const verificado = a => !!(a && a.email_verificado && (a.whatsapp_verificado || !EXIGIR_WHATS));
function erroSenha(e){
  const m = String((e && e.message) || '');
  if (/already registered|already been registered|exists/i.test(m)) return new Error('Este e-mail já tem cadastro. Use "Já tenho cadastro" para entrar.');
  if (/invalid login|credentials/i.test(m)) return new Error('E-mail ou senha incorretos.');
  if (/password/i.test(m)) return new Error('A senha precisa ter pelo menos 8 caracteres.');
  return new Error('Não foi possível continuar agora. Tente novamente.');
}

/* ================= Supabase ================= */
function bancoSupabase(){
  let sb = null;
  const ok = r => { if (r.error) throw r.error; return r.data; };
  async function sessao(){ const { data } = await sb.auth.getSession(); return data.session; }
  async function uid(){ const s = await sessao(); return s ? s.user.id : null; }
  async function funcao(corpo){
    const { data, error } = await sb.functions.invoke('whatsapp', { body:corpo });
    if (error) {
      let msg = 'Não foi possível falar com o servidor. Tente novamente.';
      try { const j = await error.context.json(); if (j && j.erro) msg = j.erro; } catch(e){}
      throw new Error(msg);
    }
    return data;
  }

  return {
    modo: 'supabase',
    async iniciar(){
      await carregarScript(CDN);
      sb = window.supabase.createClient(cfg.supabaseUrl, cfg.supabaseAnonKey, { auth:{ persistSession:true } });
      sb.auth.onAuthStateChange(ev => { if (ev === 'PASSWORD_RECOVERY') { RECUPERANDO = true; if (AO_RECUPERAR) AO_RECUPERAR(); } });
      const r = await sb.from('config_portal').select('exigir_whatsapp').eq('id', 1).maybeSingle();
      if (!r.error && r.data) EXIGIR_WHATS = r.data.exigir_whatsapp !== false;
    },
    async criarConta(email, senha){
      const r = await sb.auth.signUp({ email, password:senha });
      if (r.error) throw erroSenha(r.error);
      if (!r.data.session) throw new Error('Cadastro criado, mas é preciso confirmar o e-mail. Avise o suporte do portal.');
    },
    async entrarComSenha(email, senha){
      const r = await sb.auth.signInWithPassword({ email, password:senha });
      if (r.error) throw erroSenha(r.error);
    },
    async pedirNovaSenha(email){
      const r = await sb.auth.resetPasswordForEmail(email, { redirectTo:location.origin + location.pathname });
      if (r.error) throw new Error(/rate|seconds/i.test(r.error.message) ? 'Muitos pedidos seguidos. Aguarde alguns minutos e tente de novo.' : 'Não foi possível enviar o e-mail agora. Tente novamente.');
      return {};
    },
    async definirNovaSenha(senha){
      const r = await sb.auth.updateUser({ password:senha });
      if (r.error) throw /session|missing/i.test(r.error.message) ? new Error('O link expirou. Peça um novo em "Esqueci minha senha".') : erroSenha(r.error);
      RECUPERANDO = false;
    },
    async emailDaSessao(){ const s = await sessao(); return s && s.user.email_confirmed_at ? s.user.email : null; },
    async alunoAtual(){
      const s = await sessao(); if (!s) return null;
      const aluno = ok(await sb.from('alunos').select('*').eq('id', s.user.id).maybeSingle());
      if (!aluno) return null;
      aluno.email_verificado = !!s.user.email_confirmed_at;
      sb.from('alunos').update({ ultimo_acesso:agora() }).eq('id', aluno.id).then(() => {});
      return aluno;
    },
    async enviarCodigoEmail(email){
      ok(await sb.auth.signInWithOtp({ email, options:{ shouldCreateUser:true, emailRedirectTo:location.origin + location.pathname } }));
      return {};
    },
    async verificarCodigoEmail(email, codigo){
      const r = await sb.auth.verifyOtp({ email, token:codigo, type:'email' });
      if (r.error) throw new Error('Código inválido ou expirado. Confira ou peça um novo.');
    },
    async cadastrar(d){
      const s = await sessao();
      if (!s || !s.user.email_confirmed_at) throw new Error('Confirme o e-mail antes de continuar.');
      const aluno = ok(await sb.from('alunos').upsert(Object.assign(soCampos(d), { id:s.user.id, email:s.user.email, ultimo_acesso:agora() })).select().single());
      aluno.email_verificado = true;
      return aluno;
    },
    async marcarPedidoWhats(){
      const id = await uid(), quando = agora();
      ok(await sb.from('alunos').update({ whatsapp_solicitado_em:quando }).eq('id', id));
      return quando;
    },
    async notificarInscricao(){ try { await funcao({ acao:'notificar-inscricao' }); } catch(e){ console.warn(e); } },
    async confirmarWhatsapp(alunoId, okConf){ ok(await sb.rpc('confirmar_whatsapp', { p_aluno:alunoId, p_ok:okConf !== false })); },
    async enviarCodigoWhats(){ await funcao({ acao:'enviar-codigo' }); return {}; },
    async verificarCodigoWhats(codigo){ await funcao({ acao:'verificar-codigo', codigo }); },
    async sair(){ await sb.auth.signOut(); },
    async matriculas(){
      const id = await uid(); if (!id) return [];
      return ok(await sb.from('matriculas').select('curso_id').eq('aluno_id', id)).map(r => r.curso_id);
    },
    async matricular(curso){
      const id = await uid();
      ok(await sb.from('matriculas').upsert({ aluno_id:id, curso_id:curso }, { onConflict:'aluno_id,curso_id', ignoreDuplicates:true }));
    },
    async progresso(){
      const id = await uid(), out = {}; if (!id) return out;
      ok(await sb.from('progresso').select('curso_id,licao_id').eq('aluno_id', id))
        .forEach(r => { (out[r.curso_id] = out[r.curso_id] || {})[r.licao_id] = true; });
      return out;
    },
    async concluirLicao(curso, licao){
      const id = await uid();
      ok(await sb.from('progresso').upsert({ aluno_id:id, curso_id:curso, licao_id:licao }, { onConflict:'aluno_id,curso_id,licao_id', ignoreDuplicates:true }));
      sb.from('alunos').update({ ultimo_acesso:agora() }).eq('id', id).then(() => {});
    },
    async reiniciar(curso){
      const id = await uid();
      ok(await sb.from('progresso').delete().eq('aluno_id', id).eq('curso_id', curso));
    },
    async entrarMaster(email, senha){
      ok(await sb.auth.signInWithPassword({ email, password:senha }));
      if (!(await this.ehMaster())) { await sb.auth.signOut(); throw new Error('Esta conta não tem acesso de master.'); }
    },
    async ehMaster(){
      if (!(await uid())) return false;
      return ok(await sb.rpc('is_master')) === true;
    },
    async sairMaster(){ await sb.auth.signOut(); },
    async painel(){
      const [alunos, matriculas, progresso, avisos] = await Promise.all([
        sb.from('alunos').select('*').order('criado_em', { ascending:false }).then(ok),
        sb.from('matriculas').select('*').then(ok),
        sb.from('progresso').select('*').then(ok),
        sb.from('avisos').select('*').order('enviado_em', { ascending:false }).limit(2000).then(ok)
      ]);
      alunos.forEach(a => { a.email_verificado = !!a.email; });
      const certificados = await sb.from('certificados').select('*').order('emitido_em', { ascending:false }).then(ok).catch(() => []);
      return { alunos, matriculas, progresso, avisos, certificados };
    },
    async emitirCertificado(tipo, ref){
      const r = await sb.rpc('emitir_certificado', { p_tipo:tipo, p_ref:ref });
      if (r.error) throw new Error(/function|schema cache/i.test(r.error.message) ? 'Os certificados ainda estão sendo preparados. Tente de novo mais tarde.' : r.error.message);
      return Array.isArray(r.data) ? r.data[0] : r.data;
    },
    async meusCertificados(){
      const id = await uid(); if (!id) return [];
      const r = await sb.from('certificados').select('*').eq('aluno_id', id);
      return r.error ? [] : r.data;
    },
    async validarCertificado(codigo){ const r = ok(await sb.rpc('validar_certificado', { p_codigo:codigo })); return (r && r[0]) || null; },
    async sincronizarCertificados(lista){
      ok(await sb.from('certificados_cursos').upsert(lista.map(c => Object.assign({}, c, { atualizado_em:agora() })), { onConflict:'curso_id' }));
      ok(await sb.from('certificados_cursos').delete().not('curso_id', 'in', '(' + lista.map(c => c.curso_id).join(',') + ')'));
    },
    async revogarCertificado(codigo, sim){ ok(await sb.from('certificados').update({ revogado:!!sim }).eq('codigo', codigo)); },
    async registrarAvisos(lista){
      ok(await sb.from('avisos').insert(lista.map(v => ({ aluno_id:v.aluno_id, tipo:v.tipo, canal:v.canal, texto:v.texto }))));
    },
    temApiWhats: true,
    async enviarAvisosApi(tipo, envios){ return funcao({ acao:'enviar-aviso', tipo, envios }); }
  };
}

/* ================= Demonstração (localStorage) ================= */
function bancoDemo(){
  const KEY = 'portal-estudos-demo-v1';
  const vazio = () => ({ alunos:[], matriculas:[], progresso:[], eu:null, master:false, emailSessao:null, codigos:{} });
  const ler = () => { try { return Object.assign(vazio(), JSON.parse(localStorage.getItem(KEY))); } catch(e){ return vazio(); } };
  const gravar = d => localStorage.setItem(KEY, JSON.stringify(d));
  const novoId = () => (crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random().toString(16).slice(2));
  const novoCodigo = () => String(Math.floor(100000 + Math.random() * 900000));
  async function hashDemo(t){ const b = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(t)); return Array.from(new Uint8Array(b)).map(x => x.toString(16).padStart(2, '0')).join(''); }
  function conferir(d, chave, codigo){
    const c = d.codigos[chave];
    if (!c || Date.now() > c.expira) throw new Error('Código expirado. Peça um novo.');
    if (c.codigo !== String(codigo).trim()) throw new Error('Código inválido. Confira os números.');
    delete d.codigos[chave];
  }
  function exigirVerificado(d){
    const a = d.alunos.find(x => x.id === d.eu);
    if (!verificado(a)) throw new Error('Confirme e-mail e WhatsApp para acessar os cursos.');
  }

  return {
    modo: 'demo',
    async iniciar(){ EXIGIR_WHATS = cfg.exigirWhatsappDemo !== false; },
    async criarConta(email, senha){
      const d = ler(); d.contas = d.contas || {};
      if (d.contas[email] || d.alunos.some(a => a.email === email)) throw erroSenha({ message:'already registered' });
      if (String(senha).length < 8) throw erroSenha({ message:'password' });
      d.contas[email] = await hashDemo(email + ':' + senha);
      d.emailSessao = email; d.eu = null;
      gravar(d);
    },
    async entrarComSenha(email, senha){
      const d = ler(); d.contas = d.contas || {};
      if (!d.contas[email] || d.contas[email] !== await hashDemo(email + ':' + senha)) throw erroSenha({ message:'invalid login' });
      const a = d.alunos.find(x => x.email === email);
      d.emailSessao = email; d.eu = a ? a.id : null;
      if (a) a.email_verificado = true;
      gravar(d);
    },
    async pedirNovaSenha(email){
      const d = ler(); d.contas = d.contas || {};
      d.recuperando = email; gravar(d); RECUPERANDO = true;
      return { demo:true };
    },
    async definirNovaSenha(senha){
      const d = ler(); d.contas = d.contas || {};
      if (!d.recuperando) throw new Error('Peça a redefinição em "Esqueci minha senha".');
      if (String(senha).length < 8) throw erroSenha({ message:'password' });
      const email = d.recuperando, a = d.alunos.find(x => x.email === email);
      d.contas[email] = await hashDemo(email + ':' + senha);
      d.emailSessao = email; d.eu = a ? a.id : null; delete d.recuperando;
      gravar(d); RECUPERANDO = false;
    },
    async emailDaSessao(){ return ler().emailSessao; },
    async alunoAtual(){
      const d = ler(), a = d.alunos.find(x => x.id === d.eu);
      if (a) { a.ultimo_acesso = agora(); gravar(d); }
      return a || null;
    },
    async enviarCodigoEmail(email){
      const d = ler(), codigo = novoCodigo();
      d.codigos['email:' + email] = { codigo, expira:Date.now() + 10 * 60e3 };
      gravar(d); return { codigoDemo:codigo };
    },
    async verificarCodigoEmail(email, codigo){
      const d = ler();
      conferir(d, 'email:' + email, codigo);
      d.emailSessao = email;
      const existente = d.alunos.find(a => a.email === email) || d.alunos.find(a => a.id === d.eu && !a.email);
      d.eu = existente ? existente.id : null;
      if (existente) Object.assign(existente, { email, email_verificado:true });
      gravar(d);
    },
    async cadastrar(dados){
      const d = ler();
      if (!d.emailSessao) throw new Error('Confirme o e-mail antes de continuar.');
      let a = d.alunos.find(x => x.email === d.emailSessao) || d.alunos.find(x => x.id === d.eu && !x.email);
      if (!a) { a = { id:novoId(), criado_em:agora(), whatsapp_verificado:false }; d.alunos.push(a); }
      if (a.telefone && a.telefone.replace(/\D/g, '') !== String(dados.telefone || '').replace(/\D/g, '')) a.whatsapp_verificado = false;
      Object.assign(a, soCampos(dados), { email:d.emailSessao, email_verificado:true, ultimo_acesso:agora() });
      d.eu = a.id;
      gravar(d); return a;
    },
    async marcarPedidoWhats(){
      const d = ler(), a = d.alunos.find(x => x.id === d.eu), quando = agora();
      if (a) a.whatsapp_solicitado_em = quando;
      gravar(d); return quando;
    },
    async notificarInscricao(){ const d = ler(), a = d.alunos.find(x => x.id === d.eu); if (a && !a.inscricao_notificada_em) { a.inscricao_notificada_em = agora(); gravar(d); } },
    async confirmarWhatsapp(alunoId, okConf){
      const d = ler(), a = d.alunos.find(x => x.id === alunoId); if (!a) return;
      a.whatsapp_verificado = okConf !== false; a.whatsapp_verificado_em = okConf !== false ? agora() : null;
      gravar(d);
    },
    async enviarCodigoWhats(){
      const d = ler(), codigo = novoCodigo();
      if (!d.eu) throw new Error('Cadastro não encontrado.');
      d.codigos['whats:' + d.eu] = { codigo, expira:Date.now() + 10 * 60e3 };
      gravar(d); return { codigoDemo:codigo };
    },
    async verificarCodigoWhats(codigo){
      const d = ler();
      conferir(d, 'whats:' + d.eu, codigo);
      const a = d.alunos.find(x => x.id === d.eu);
      a.whatsapp_verificado = true; a.whatsapp_verificado_em = agora();
      gravar(d);
    },
    async sair(){ const d = ler(); d.eu = null; d.emailSessao = null; gravar(d); },
    async matriculas(){ const d = ler(); return d.matriculas.filter(m => m.aluno_id === d.eu).map(m => m.curso_id); },
    async matricular(curso){
      const d = ler(); exigirVerificado(d);
      if (!d.matriculas.some(m => m.aluno_id === d.eu && m.curso_id === curso)) d.matriculas.push({ aluno_id:d.eu, curso_id:curso, iniciado_em:agora() });
      gravar(d);
    },
    async progresso(){
      const d = ler(), out = {};
      d.progresso.filter(p => p.aluno_id === d.eu).forEach(p => { (out[p.curso_id] = out[p.curso_id] || {})[p.licao_id] = true; });
      return out;
    },
    async concluirLicao(curso, licao){
      const d = ler(); exigirVerificado(d);
      if (!d.progresso.some(p => p.aluno_id === d.eu && p.curso_id === curso && p.licao_id === licao)) d.progresso.push({ aluno_id:d.eu, curso_id:curso, licao_id:licao, concluida_em:agora() });
      const a = d.alunos.find(x => x.id === d.eu); if (a) a.ultimo_acesso = agora();
      gravar(d);
    },
    async reiniciar(curso){ const d = ler(); d.progresso = d.progresso.filter(p => !(p.aluno_id === d.eu && p.curso_id === curso)); gravar(d); },
    async entrarMaster(email, senha){
      if (senha !== (cfg.senhaMasterDemo || 'master')) throw new Error('Senha incorreta.');
      const d = ler(); d.master = true; gravar(d);
    },
    async ehMaster(){ return ler().master; },
    async sairMaster(){ const d = ler(); d.master = false; gravar(d); },
    async painel(){ const d = ler(); return { alunos:d.alunos.slice().reverse(), matriculas:d.matriculas, progresso:d.progresso, avisos:(d.avisos || []).slice().reverse(), certificados:(d.certificados || []).slice().reverse() }; },
    /* Na demonstração, a lista de lições vem do próprio app (info); no Supabase, o servidor confere com certificados_cursos. */
    async emitirCertificado(tipo, ref, info){
      const d = ler(); exigirVerificado(d); d.certificados = d.certificados || [];
      const existente = d.certificados.find(c => c.aluno_id === d.eu && c.tipo === tipo && c.ref_id === ref);
      if (existente) return existente;
      const feitas = curso => d.progresso.filter(p => p.aluno_id === d.eu && p.curso_id === curso).map(p => p.licao_id);
      const completo = c => c.licoes.every(id => feitas(c.curso_id).includes(id));
      if (!info || !(tipo === 'curso' ? completo(info) : info.cursos.every(completo))) throw new Error('Conclua todas as lições e projetos para emitir o certificado.');
      const alfa = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789', aleatorio = crypto.getRandomValues(new Uint8Array(8));
      const a = d.alunos.find(x => x.id === d.eu);
      const c = Object.assign({ codigo:'CIA-' + new Date().getFullYear() + '-' + Array.from(aleatorio, b => alfa[b % 32]).join(''),
        aluno_id:d.eu, tipo, ref_id:ref, nome:a.nome, emitido_em:agora(), revogado:false }, info.certificado);
      d.certificados.push(c); gravar(d); return c;
    },
    async meusCertificados(){ const d = ler(); return (d.certificados || []).filter(c => c.aluno_id === d.eu); },
    async validarCertificado(codigo){ const k = String(codigo).trim().toUpperCase(); return (ler().certificados || []).find(c => c.codigo === k) || null; },
    async sincronizarCertificados(){},
    async revogarCertificado(codigo, sim){ const d = ler(), c = (d.certificados || []).find(x => x.codigo === codigo); if (c) { c.revogado = !!sim; gravar(d); } },
    async registrarAvisos(lista){
      const d = ler(); d.avisos = d.avisos || [];
      lista.forEach(v => d.avisos.push(Object.assign({ enviado_em:agora() }, v)));
      gravar(d);
    },
    temApiWhats: false,
    async enviarAvisosApi(){ throw new Error('Disponível depois de conectar o Supabase e a API do WhatsApp.'); }
  };
}

window.DB = USA_SUPABASE ? bancoSupabase() : bancoDemo();
DB.verificado = verificado;
DB.codigoEmail = !!cfg.confirmarEmailPorCodigo;
Object.defineProperty(DB, 'exigirWhatsapp', { get: () => EXIGIR_WHATS });
DB.emRecuperacao = () => RECUPERANDO;
DB.aoRecuperarSenha = fn => { AO_RECUPERAR = fn; };
})();
