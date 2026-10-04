(function(){
'use strict';

const cfg = window.PORTAL_CONFIG || {};
const USA_SUPABASE = !!(cfg.supabaseUrl && cfg.supabaseAnonKey);
const CDN = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
const agora = () => new Date().toISOString();
const CAMPOS = ['nome','idade','telefone','pais','estado','cep','profissao','ocupacao','trabalhando','estudante','objetivo','objetivo_detalhe','aceita_contato'];

function carregarScript(src){
  return new Promise((res, rej) => { const s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = rej; document.head.appendChild(s); });
}
function soCampos(d){ const o = {}; CAMPOS.forEach(k => { if (d[k] !== undefined) o[k] = d[k]; }); return o; }
const verificado = a => !!(a && a.email_verificado && a.whatsapp_verificado);

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
      ok(await sb.auth.signInWithOtp({ email, options:{ shouldCreateUser:true } }));
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
      return { alunos, matriculas, progresso, avisos };
    },
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
    async iniciar(){},
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
    async painel(){ const d = ler(); return { alunos:d.alunos.slice().reverse(), matriculas:d.matriculas, progresso:d.progresso, avisos:(d.avisos || []).slice().reverse() }; },
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
})();
