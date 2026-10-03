(function(){
'use strict';

const cfg = window.PORTAL_CONFIG || {};
const USA_SUPABASE = !!(cfg.supabaseUrl && cfg.supabaseAnonKey);
const CDN = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
const agora = () => new Date().toISOString();
const CAMPOS = ['nome','idade','telefone','pais','estado','cep'];

function carregarScript(src){
  return new Promise((res, rej) => { const s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = rej; document.head.appendChild(s); });
}
function soCampos(d){ const o = {}; CAMPOS.forEach(k => { o[k] = d[k]; }); return o; }

/* ================= Supabase ================= */
function bancoSupabase(){
  let sb = null;
  const ok = r => { if (r.error) throw r.error; return r.data; };
  async function uid(){ const { data } = await sb.auth.getSession(); return data.session ? data.session.user.id : null; }

  return {
    modo: 'supabase',
    async iniciar(){
      await carregarScript(CDN);
      sb = window.supabase.createClient(cfg.supabaseUrl, cfg.supabaseAnonKey, { auth:{ persistSession:true } });
    },
    async alunoAtual(){
      const id = await uid(); if (!id) return null;
      const aluno = ok(await sb.from('alunos').select('*').eq('id', id).maybeSingle());
      if (aluno) sb.from('alunos').update({ ultimo_acesso:agora() }).eq('id', id).then(() => {});
      return aluno;
    },
    async cadastrar(d){
      let id = await uid();
      if (!id) { const r = ok(await sb.auth.signInAnonymously()); id = r.user.id; }
      return ok(await sb.from('alunos').upsert(Object.assign(soCampos(d), { id, ultimo_acesso:agora() })).select().single());
    },
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
      const [alunos, matriculas, progresso] = await Promise.all([
        sb.from('alunos').select('*').order('criado_em', { ascending:false }).then(ok),
        sb.from('matriculas').select('*').then(ok),
        sb.from('progresso').select('*').then(ok)
      ]);
      return { alunos, matriculas, progresso };
    }
  };
}

/* ================= Demonstração (localStorage) ================= */
function bancoDemo(){
  const KEY = 'portal-estudos-demo-v1';
  const vazio = () => ({ alunos:[], matriculas:[], progresso:[], eu:null, master:false });
  const ler = () => { try { return Object.assign(vazio(), JSON.parse(localStorage.getItem(KEY))); } catch(e){ return vazio(); } };
  const gravar = d => localStorage.setItem(KEY, JSON.stringify(d));
  const novoId = () => (crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random().toString(16).slice(2));

  return {
    modo: 'demo',
    async iniciar(){},
    async alunoAtual(){
      const d = ler(), a = d.alunos.find(x => x.id === d.eu);
      if (a) { a.ultimo_acesso = agora(); gravar(d); }
      return a || null;
    },
    async cadastrar(dados){
      const d = ler();
      let a = d.alunos.find(x => x.id === d.eu);
      if (!a) { a = { id:novoId(), criado_em:agora() }; d.alunos.push(a); d.eu = a.id; }
      Object.assign(a, soCampos(dados), { ultimo_acesso:agora() });
      gravar(d); return a;
    },
    async matriculas(){ const d = ler(); return d.matriculas.filter(m => m.aluno_id === d.eu).map(m => m.curso_id); },
    async matricular(curso){
      const d = ler();
      if (!d.matriculas.some(m => m.aluno_id === d.eu && m.curso_id === curso)) d.matriculas.push({ aluno_id:d.eu, curso_id:curso, iniciado_em:agora() });
      gravar(d);
    },
    async progresso(){
      const d = ler(), out = {};
      d.progresso.filter(p => p.aluno_id === d.eu).forEach(p => { (out[p.curso_id] = out[p.curso_id] || {})[p.licao_id] = true; });
      return out;
    },
    async concluirLicao(curso, licao){
      const d = ler();
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
    async painel(){ const d = ler(); return { alunos:d.alunos.slice().reverse(), matriculas:d.matriculas, progresso:d.progresso }; }
  };
}

window.DB = USA_SUPABASE ? bancoSupabase() : bancoDemo();
})();
