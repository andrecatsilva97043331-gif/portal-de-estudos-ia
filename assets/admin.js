(function(){
'use strict';

const $ = id => document.getElementById(id);
const DIA = 864e5;
let CURSOS = [];
let DADOS = { alunos:[], matriculas:[], progresso:[] };
let F = { busca:'', curso:'' };

function esc(s){ return String(s == null ? '' : s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }
const data = iso => iso ? new Date(iso).toLocaleDateString('pt-BR') : '-';
const dataHora = iso => iso ? new Date(iso).toLocaleString('pt-BR', { dateStyle:'short', timeStyle:'short' }) : '-';
const cursoPorId = id => CURSOS.find(c => c.id === id);
const tituloCurso = id => (cursoPorId(id) || {}).titulo || id;
let toastT;
function toast(msg){ const t = $('toast'); t.textContent = msg; t.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('on'), 2600); }

function linkWhats(tel, pais){
  let d = String(tel || '').replace(/\D/g, '');
  const br = /^(brasil|brazil|br)$/i.test(String(pais || '').trim());
  if (br && (d.length === 10 || d.length === 11)) d = '55' + d;
  return d ? 'https://wa.me/' + d : '';
}

const simNao = v => v === true ? 'Sim' : v === false ? 'Não' : '-';
const selos = a => a.email_verificado && a.whatsapp_verificado
  ? '<span class="act hoje" title="E-mail e WhatsApp confirmados">✓ Confirmado</span>'
  : DB.verificado(a) ? '<span class="act semana" title="Acesso liberado; a confirmação do WhatsApp está dispensada no momento">✓ Liberado</span>'
  : `<span class="act pend-v" title="Falta confirmar ${a.email_verificado ? 'o WhatsApp' : 'o e-mail'}">⏳ ${a.email_verificado ? 'Falta WhatsApp' : a.whatsapp_verificado ? 'Falta e-mail' : 'Não confirmado'}</span>`;
function situacao(a){
  const s = [];
  if (a.trabalhando === true) s.push('Trabalhando');
  if (a.trabalhando === false) s.push('Sem trabalho');
  if (a.estudante === true) s.push('Estudante');
  return s.join(' · ');
}

function linkConvite(id){ return new URL('./?curso=' + encodeURIComponent(id), location.href).href; }

/* ============ CÁLCULOS ============ */
function progressoDe(alunoId, cursoId){
  const c = cursoPorId(cursoId);
  const feitas = DADOS.progresso.filter(p => p.aluno_id === alunoId && p.curso_id === cursoId);
  const validas = c ? feitas.filter(p => c.licoes.some(l => l.id === p.licao_id)) : feitas;
  const total = c ? c.total : 0;
  const ultima = feitas.reduce((m, p) => p.concluida_em > m ? p.concluida_em : m, '');
  return { feitas:validas.length, total, pct: total ? Math.round(validas.length / total * 100) : 0, ultima, lista:feitas };
}

function linhas(){
  const q = F.busca.trim().toLowerCase();
  return DADOS.alunos.map(a => {
    const cursos = DADOS.matriculas.filter(m => m.aluno_id === a.id).map(m => Object.assign({ curso:m.curso_id, iniciado:m.iniciado_em }, progressoDe(a.id, m.curso_id)));
    return { a, cursos };
  }).filter(r =>
    (!q || [r.a.nome, r.a.email, r.a.telefone, r.a.estado, r.a.pais, r.a.cep, r.a.profissao, r.a.ocupacao, r.a.objetivo].some(v => String(v || '').toLowerCase().includes(q))) &&
    (!F.curso || r.cursos.some(c => c.curso === F.curso))
  );
}

/* ============ TELAS ============ */
function renderLogin(msg){
  $('btn-sair').hidden = true; $('btn-aluno').hidden = true;
  const demo = DB.modo === 'demo';
  $('main').innerHTML = `<form class="form" id="f-login" style="max-width:420px; margin-top:40px">
    <div class="orb mini rise" aria-hidden="true"><span>🛡️</span></div>
    <div class="eyebrow">Área restrita</div>
    <h1 class="h1" style="margin-bottom:6px">Entrar como <span class="grad">master</span></h1>
    <p class="hp">${demo ? 'Modo demonstração: use qualquer e-mail e a senha definida em <code>config.js</code> (padrão: <b>master</b>).' : 'Acesso restrito ao administrador do portal.'}</p>
    <div class="card">
      <label class="fl" style="margin-bottom:12px">E-mail<input name="email" type="email" autocomplete="username" required></label>
      <label class="fl">Senha<span class="pw"><input name="senha" type="password" autocomplete="current-password" required>${PORTAL.olho}</span></label>
      <div class="err" id="login-err" role="alert">${esc(msg || '')}</div>
      <button class="next" type="submit" id="login-ok">Entrar ➜</button>
    </div>
  </form>`;
}

/* ============ VISUAL ============ */
const reduced = () => window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
const cor = i => { const p = PORTAL.paleta(i); return '--c:' + p[0] + ';--c2:' + p[1]; };
function corDe(txt){ let h = 0; for (const ch of String(txt)) h = (h * 31 + ch.charCodeAt(0)) | 0; return cor(Math.abs(h)); }
function iniciais(nome){ const p = String(nome || '?').trim().split(/\s+/); return (p[0][0] + (p.length > 1 ? p[p.length - 1][0] : '')).toUpperCase(); }
function atividade(iso){
  if (!iso) return ['off', 'Sem acesso'];
  const d = Math.floor((Date.now() - new Date(iso).getTime()) / DIA);
  if (d < 1) return ['hoje', 'Ativo hoje'];
  if (d < 7) return ['semana', 'Há ' + d + (d === 1 ? ' dia' : ' dias')];
  return ['off', 'Inativo há ' + d + ' dias'];
}
function contar(el){
  const to = parseFloat(el.dataset.n), suf = el.dataset.suf || '';
  if (reduced() || !to) { el.textContent = to + suf; return; }
  const t0 = performance.now();
  (function f(t){ const k = Math.min(1, (t - t0) / 900); el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))) + suf; if (k < 1) requestAnimationFrame(f); })(t0);
}
const grafico = (titulo, sub, corpo, i) => `<div class="chart rise" style="${cor(i)};--d:${0.05 + i * 0.06}s"><div class="ch-h"><b>${titulo}</b><small>${sub}</small></div>${corpo}</div>`;
const vazio = msg => `<div class="ch-vazio">${msg}</div>`;

function grafCadastros(rs){
  const dias = [];
  for (let i = 13; i >= 0; i--) { const d = new Date(Date.now() - i * DIA); dias.push({ chave:d.toDateString(), rot:d.getDate(), txt:d.toLocaleDateString('pt-BR'), n:0 }); }
  rs.forEach(({ a }) => { const d = dias.find(x => x.chave === new Date(a.criado_em).toDateString()); if (d) d.n++; });
  const max = Math.max(1, ...dias.map(d => d.n)), total = dias.reduce((s, d) => s + d.n, 0);
  const W = 320, H = 130, px = 12, topo = 18, base = H - 22;
  const pts = dias.map((d, i) => ({ d, x: px + i * (W - 2 * px) / (dias.length - 1), y: base - d.n / max * (base - topo) }));
  const linha = pts.map((p, i) => (i ? 'L' : 'M') + p.x.toFixed(1) + ' ' + p.y.toFixed(1)).join(' ');
  return grafico('Novos cadastros', total + ' nos últimos 14 dias',
    `<svg class="gline" viewBox="0 0 ${W} ${H}" role="img" aria-label="Novos cadastros por dia nos últimos 14 dias">
      <defs><linearGradient id="gl-area" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--c)" stop-opacity=".45"/><stop offset="1" stop-color="var(--c)" stop-opacity="0"/></linearGradient>
      <linearGradient id="gl-traco" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="var(--c)"/><stop offset="1" stop-color="var(--c2)"/></linearGradient></defs>
      ${[0, .5, 1].map(k => `<line class="gl-grade" x1="${px}" x2="${W - px}" y1="${(base - k * (base - topo)).toFixed(1)}" y2="${(base - k * (base - topo)).toFixed(1)}"/>`).join('')}
      <path d="${linha} L${pts[pts.length - 1].x.toFixed(1)} ${base} L${px} ${base} Z" fill="url(#gl-area)"/>
      <path class="gl-traco" d="${linha}" fill="none" stroke="url(#gl-traco)"/>
      ${pts.map(p => `<g><title>${p.d.txt}: ${p.d.n}</title><circle class="gl-pt" cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="3.2"/>${p.d.n ? `<text class="gl-n" x="${p.x.toFixed(1)}" y="${(p.y - 7).toFixed(1)}">${p.d.n}</text>` : ''}<text class="gl-dia" x="${p.x.toFixed(1)}" y="${H - 6}">${p.d.rot}</text></g>`).join('')}
    </svg>`, 0);
}

function grafFunil(rs){
  const contagem = id => DADOS.matriculas.filter(m => m.curso_id === id).length;
  const c = cursoPorId(F.curso) || CURSOS.slice().sort((x, y) => contagem(y.id) - contagem(x.id))[0];
  if (!c) return grafico('Funil de lições', 'Nenhum curso no catálogo', vazio('Sem dados ainda.'), 1);
  const turma = rs.filter(r => r.cursos.some(x => x.curso === c.id)).map(r => r.a.id);
  if (!turma.length) return grafico('Funil de lições · ' + esc(c.titulo), 'Onde os alunos param', vazio('Nenhum aluno neste curso ainda.'), 1);
  const feitas = {};
  DADOS.progresso.forEach(p => { if (p.curso_id === c.id && turma.includes(p.aluno_id)) feitas[p.licao_id] = (feitas[p.licao_id] || 0) + 1; });
  return grafico('Funil de lições · ' + esc(c.titulo), turma.length + (turma.length === 1 ? ' aluno' : ' alunos') + ' · quantos concluíram cada lição',
    `<div class="hbars funil">${c.licoes.map(l => { const n = feitas[l.id] || 0, p = Math.round(n / turma.length * 100);
      return `<div class="hb" title="${esc(l.id + ' ' + l.title)}: ${n} de ${turma.length}"><span>${esc(l.id)}</span><div class="hbt"><i style="width:${p}%"></i></div><em>${p}%</em></div>`; }).join('')}</div>`, 1);
}

function grafObjetivos(rs){
  const n = {};
  rs.forEach(({ a }) => { if (a.objetivo) n[a.objetivo] = (n[a.objetivo] || 0) + 1; });
  const itens = Object.entries(n).sort((x, y) => y[1] - x[1]);
  if (!itens.length) return grafico('Objetivos dos alunos', 'O que eles querem com o curso', vazio('Nenhum objetivo informado ainda.'), 2);
  const max = itens[0][1];
  return grafico('Objetivos dos alunos', 'O que eles querem com o curso',
    `<div class="hbars">${itens.map(([k, v], i) => `<div class="hb larga" style="${cor(i)}"><span>${esc(k)}</span><div class="hbt"><i style="width:${v / max * 100}%"></i></div><em>${v}</em></div>`).join('')}</div>`, 2);
}

function grafSituacao(rs){
  const cats = [['Trabalha e estuda','#22d3ee'],['Só trabalha','#4ade80'],['Só estuda','#c084fc'],['Nem trabalha nem estuda','#fbbf24'],['Não informado','#3a3a4a']];
  const n = [0, 0, 0, 0, 0];
  rs.forEach(({ a }) => {
    if (a.trabalhando == null || a.estudante == null) n[4]++;
    else n[a.trabalhando ? (a.estudante ? 0 : 1) : (a.estudante ? 2 : 3)]++;
  });
  const total = rs.length;
  if (!total) return grafico('Situação dos alunos', 'Trabalho e estudo', vazio('Sem alunos ainda.'), 3);
  let acc = 0;
  const fatias = cats.map((c, i) => { const ini = acc; acc += n[i] / total * 100; return `${c[1]} ${ini}% ${acc}%`; }).join(',');
  return grafico('Situação dos alunos', 'Trabalho e estudo',
    `<div class="donut-w"><div class="donut" style="background:conic-gradient(${fatias})"><div><b>${total}</b><span>alunos</span></div></div>
    <ul class="leg">${cats.map((c, i) => n[i] ? `<li><i style="background:${c[1]}"></i>${c[0]}<b>${n[i]}</b></li>` : '').join('')}</ul></div>`, 3);
}

/* ============ CENTRAL DE AVISOS (WHATSAPP) ============ */
const SEGMENTOS = [
  { id:'abandono',    ico:'🚨', nome:'Abandono',      desc:'Começou e não volta há 7 dias ou mais', cor:['#ff5a5f','#fb7185'] },
  { id:'foco',        ico:'🎯', nome:'Foco',          desc:'Parado há 3 a 6 dias',                    cor:['#fbbf24','#f59e0b'] },
  { id:'sem-comecar', ico:'🚀', nome:'Não começou',   desc:'Inscrito, mas sem nenhuma lição',         cor:['#22d3ee','#3b82f6'] },
  { id:'quase',       ico:'🏁', nome:'Quase lá',      desc:'75% ou mais do curso',                    cor:['#c084fc','#ec4899'] },
  { id:'incentivo',   ico:'💪', nome:'Incentivo',     desc:'Ativo e avançando',                       cor:['#4ade80','#a3e635'] },
  { id:'concluiu',    ico:'🏆', nome:'Concluiu',      desc:'Terminou o curso: parabéns',              cor:['#fbbf24','#4ade80'] },
  { id:'pendente',    ico:'⏳', nome:'Sem confirmar', desc:'Falta confirmar e-mail ou WhatsApp',      cor:['#a0a0b6','#64748b'] }
];
const MODELOS_PADRAO = {
  abandono:'Oi, {nome}! Aqui é do Portal de Estudos IA. Sentimos sua falta! 💙\nVocê parou em {pct}% do curso {curso}.\nA próxima lição é "{proxima}" e leva poucos minutos.\nLembra do seu objetivo: {objetivo}.\nBora retomar? {link}',
  foco:'Oi, {nome}! Faz {dias} dias desde sua última lição em {curso}.\nReserve 15 minutos hoje para "{proxima}" e mantenha o ritmo. 🎯\n{link}',
  'sem-comecar':'Oi, {nome}! Seu curso {curso} já está liberado. 🚀\nA primeira lição é curta e prática: que tal começar hoje?\n{link}',
  quase:'{nome}, você já fez {pct}% do curso {curso}! 🏁\nFaltam poucas lições para concluir. Próxima: "{proxima}".\n{link}',
  incentivo:'Mandou bem, {nome}! 💪 Você está com {pct}% no curso {curso}.\nContinue assim: a próxima é "{proxima}".\n{link}',
  concluiu:'Parabéns, {nome}! 🎉 Você concluiu o curso {curso}.\nQue tal o próximo desafio? Veja os outros cursos do portal: {link}',
  pendente:'Oi, {nome}! Aqui é do Portal de Estudos IA.\nFalta só confirmar seu e-mail e WhatsApp para liberar o curso {curso}. Leva 1 minuto: {link}'
};
const VARIAVEIS = ['nome','curso','pct','proxima','dias','objetivo','ocupacao','link'];
const CHAVE_MODELOS = 'portal-estudos-modelos-v1';
let AV = { seg:null };

function modelos(){ try { return Object.assign({}, MODELOS_PADRAO, JSON.parse(localStorage.getItem(CHAVE_MODELOS))); } catch(e){ return Object.assign({}, MODELOS_PADRAO); } }
function salvarModelo(seg, txt){ const m = modelos(); m[seg] = txt; localStorage.setItem(CHAVE_MODELOS, JSON.stringify(m)); }
const diasDesde = iso => iso ? Math.floor((Date.now() - new Date(iso).getTime()) / DIA) : 999;

function perfilAviso({ a, cursos }){
  const andamento = cursos.filter(c => c.pct < 100).sort((x, y) => String(y.ultima || y.iniciado).localeCompare(String(x.ultima || x.iniciado)));
  const c = andamento[0] || cursos.find(x => x.pct === 100) || null;
  const dias = diasDesde(a.ultimo_acesso);
  let seg;
  if (!DB.verificado(a)) seg = 'pendente';
  else if (!cursos.length || (andamento.length && andamento.every(x => x.feitas === 0))) seg = 'sem-comecar';
  else if (!andamento.length) seg = 'concluiu';
  else if (dias >= 7) seg = 'abandono';
  else if (dias >= 3) seg = 'foco';
  else if (c.pct >= 75) seg = 'quase';
  else seg = 'incentivo';
  const cc = c && cursoPorId(c.curso);
  const feitas = {}; if (c) DADOS.progresso.forEach(p => { if (p.aluno_id === a.id && p.curso_id === c.curso) feitas[p.licao_id] = true; });
  const prox = cc ? cc.licoes.find(l => !feitas[l.id]) : null;
  const cursoId = c ? c.curso : (CURSOS.find(x => PORTAL.disponivel(x)) || CURSOS[0] || {}).id;
  return {
    seg, a, cursoId,
    vars: {
      nome: String(a.nome || '').split(' ')[0],
      curso: cursoId ? tituloCurso(cursoId) : '',
      pct: c ? String(c.pct) : '0',
      proxima: prox ? prox.id + ' ' + prox.title : '',
      dias: dias >= 999 ? '' : String(dias),
      objetivo: a.objetivo ? a.objetivo.charAt(0).toLowerCase() + a.objetivo.slice(1) : '',
      ocupacao: a.ocupacao || '',
      link: seg === 'concluiu' ? new URL('./', location.href).href : (cursoId ? linkConvite(cursoId) : new URL('./', location.href).href)
    }
  };
}

function montarMensagem(modelo, vars){
  return modelo.split('\n')
    .filter(linha => !VARIAVEIS.some(v => linha.includes('{' + v + '}') && !vars[v]))
    .map(linha => linha.replace(/\{(\w+)\}/g, (m, k) => vars[k] != null ? vars[k] : m))
    .join('\n').trim();
}

function ultimoAviso(alunoId){ return (DADOS.avisos || []).filter(v => v.aluno_id === alunoId).sort((x, y) => String(y.enviado_em).localeCompare(String(x.enviado_em)))[0]; }
const nomeSeg = id => (SEGMENTOS.find(s => s.id === id) || { nome:id }).nome;

function renderAvisos(rs){
  const el = $('avisos'); if (!el) return;
  const perfis = rs.map(perfilAviso);
  const grupos = {}; SEGMENTOS.forEach(s => { grupos[s.id] = []; });
  perfis.forEach(p => grupos[p.seg].push(p));
  if (!AV.seg || !grupos[AV.seg]) AV.seg = (SEGMENTOS.find(s => grupos[s.id].length) || SEGMENTOS[0]).id;
  const seg = SEGMENTOS.find(s => s.id === AV.seg), lista = grupos[AV.seg];
  lista.sort((x, y) => { const ux = ultimoAviso(x.a.id), uy = ultimoAviso(y.a.id); return (ux ? 1 : 0) - (uy ? 1 : 0) || String(ux && ux.enviado_em).localeCompare(String(uy && uy.enviado_em)); });
  const modelo = modelos()[AV.seg];
  const api = lista.filter(p => p.seg !== 'pendente' && p.a.aceita_contato);
  el.innerHTML = `<div class="segs">${SEGMENTOS.map(s => `<button class="seg ${s.id === AV.seg ? 'on' : ''}" data-act="seg" data-seg="${s.id}" style="--c:${s.cor[0]};--c2:${s.cor[1]}" title="${esc(s.desc)}">
      <span class="sgi">${s.ico}</span><span class="sgt"><b>${s.nome}</b><small>${s.desc}</small></span><em>${grupos[s.id].length}</em></button>`).join('')}</div>
    <div class="avbody" style="--c:${seg.cor[0]};--c2:${seg.cor[1]}">
      <div class="avmodelo">
        <div class="ch-h"><b>${seg.ico} Mensagem modelo · ${seg.nome}</b><small>Use as variáveis ${VARIAVEIS.map(v => '<code>{' + v + '}</code>').join(' ')}. Linhas com variável vazia são removidas.</small></div>
        <textarea class="inp" id="modelo" rows="7" spellcheck="true">${esc(modelo)}</textarea>
        <div class="avbtns"><button class="sbtn" data-act="modelo-padrao">↺ Restaurar padrão</button>
          <button class="sbtn ${DB.temApiWhats ? '' : 'off-api'}" data-act="enviar-api" ${api.length ? '' : 'disabled'} title="${DB.temApiWhats ? 'Envia o modelo aprovado no WhatsApp Business para todo o grupo' : 'Disponível depois de conectar o Supabase e a API do WhatsApp'}">⚡ Enviar automático para ${api.length}</button></div>
        <p class="nota">📲 O botão <b>WhatsApp</b> abre a conversa com a mensagem pronta (grátis, você confirma o envio). O envio automático usa a API oficial do WhatsApp e modelos aprovados pela Meta.</p>
      </div>
      <div class="avlista" id="avlista">${lista.length ? lista.map(p => {
        const msg = montarMensagem(modelo, p.vars), wa = linkWhats(p.a.telefone, p.a.pais), u = ultimoAviso(p.a.id);
        const dd = u ? diasDesde(u.enviado_em) : null;
        return `<div class="avi">
          <div class="pessoa"><span class="av" style="${corDe(p.a.id)}">${esc(iniciais(p.a.nome))}</span><div><b>${esc(p.a.nome)}</b><br>
            <small>${esc(p.vars.curso)}${p.seg !== 'pendente' ? ' · ' + p.vars.pct + '%' : ''}${p.vars.dias ? ' · último acesso há ' + p.vars.dias + (p.vars.dias === '1' ? ' dia' : ' dias') : ''}</small></div>
            ${u ? `<span class="act ${dd < 3 ? 'semana' : 'off'}" title="${esc(nomeSeg(u.tipo))} · ${u.canal === 'api' ? 'automático' : 'wa.me'}">✉️ ${dd === 0 ? 'Avisado hoje' : 'Avisado há ' + dd + (dd === 1 ? ' dia' : ' dias')}</span>` : ''}</div>
          <div class="avmsg">${esc(msg)}</div>
          <div class="avbtns">${wa ? `<a class="sbtn wa" href="${wa}?text=${encodeURIComponent(msg)}" target="_blank" rel="noopener" data-act="enviar-wa" data-id="${esc(p.a.id)}">📲 WhatsApp</a>` : '<small>Sem telefone</small>'}
            <button class="sbtn" data-act="copiar-msg" data-id="${esc(p.a.id)}">Copiar</button>${p.a.aceita_contato ? '' : '<small class="semc" title="Cadastro antigo, sem a autorização de contato">sem autorização registrada</small>'}</div>
        </div>`;
      }).join('') : `<div class="empty">Nenhum aluno em “${seg.nome}” ${F.busca || F.curso ? 'com esse filtro' : 'agora'}.</div>`}</div>
    </div>`;
  AV.perfis = perfis;
}

async function registrar(lista){
  try { await DB.registrarAvisos(lista); }
  catch(e){ console.error(e); toast('⚠️ Não foi possível registrar o aviso.'); return; }
  DADOS.avisos = lista.map(v => Object.assign({ enviado_em:new Date().toISOString() }, v)).concat(DADOS.avisos || []);
  renderAvisos(linhas());
}

const PARAMS_API = {
  abandono:['nome','curso','pct','proxima'], foco:['nome','dias','curso','proxima'], 'sem-comecar':['nome','curso'],
  quase:['nome','pct','curso','proxima'], incentivo:['nome','pct','curso','proxima'], concluiu:['nome','curso'], pendente:['nome','curso']
};
async function enviarApi(){
  const lista = (AV.perfis || []).filter(p => p.seg === AV.seg && p.seg !== 'pendente' && p.a.aceita_contato);
  if (!lista.length) return;
  if (!DB.temApiWhats) { toast('Disponível depois de conectar o Supabase e a API do WhatsApp.'); return; }
  if (!confirm('Enviar o aviso "' + nomeSeg(AV.seg) + '" pelo WhatsApp para ' + lista.length + ' aluno(s)?')) return;
  try {
    const r = await DB.enviarAvisosApi(AV.seg, lista.map(p => ({ aluno_id:p.a.id, parametros:PARAMS_API[AV.seg].map(k => p.vars[k] || '-'), texto:montarMensagem(modelos()[AV.seg], p.vars) })));
    toast('Enviados: ' + (r.enviados || 0) + (r.falhas ? ' · falhas: ' + r.falhas : ''));
    await carregarDados();
  } catch(e){ console.error(e); toast(e.message || 'Falha no envio automático.'); }
}

function renderPainel(){
  $('btn-sair').hidden = false; $('btn-aluno').hidden = false;
  const agora = Date.now();
  const recente = (iso, dias) => iso && agora - new Date(iso).getTime() < dias * DIA;
  const ativos = DADOS.alunos.filter(a => recente(a.ultimo_acesso, 7)).length;
  const novos = DADOS.alunos.filter(a => recente(a.criado_em, 7)).length;
  const pcts = DADOS.matriculas.map(m => progressoDe(m.aluno_id, m.curso_id).pct);
  const media = pcts.length ? Math.round(pcts.reduce((s, p) => s + p, 0) / pcts.length) : 0;
  const concluidos = pcts.filter(p => p === 100).length;
  const taxa = pcts.length ? Math.round(concluidos / pcts.length * 100) : 0;
  const opCursos = CURSOS.map(c => `<option value="${esc(c.id)}" ${F.curso===c.id?'selected':''}>${esc(c.titulo)}${!PORTAL.disponivel(c) ? ' (' + c.status + ')' : ''}</option>`).join('');
  const stats = [
    ['👥', DADOS.alunos.length, '', 'alunos cadastrados', '+' + novos + ' em 7 dias · ' + DADOS.alunos.filter(a => DB.verificado(a)).length + ' liberados'],
    ['⚡', ativos, '', 'ativos nos últimos 7 dias', DADOS.alunos.length ? Math.round(ativos / DADOS.alunos.length * 100) + '% da base' : '-'],
    ['📈', media, '%', 'progresso médio', DADOS.matriculas.length + ' matrículas'],
    ['🏆', concluidos, '', 'cursos concluídos', taxa + '% de conclusão']
  ];
  $('main').innerHTML = `
    <div class="adm-h rise"><div><div class="eyebrow">Painel do master</div><h1 class="h1">Visão geral dos <span class="grad">seus alunos</span></h1></div>
      <span class="live"><i></i>${DB.modo === 'demo' ? 'Demonstração' : 'Dados ao vivo'}</span></div>
    <div class="stats">${stats.map((s, i) => `<div class="stat rise" style="${cor(i + 1)};--d:${i * 0.06}s"><div class="sico">${s[0]}</div><b data-n="${s[1]}" data-suf="${s[2]}">0</b><span>${s[3]}</span><small>${s[4]}</small></div>`).join('')}</div>
    <div class="tools">
      <input class="inp" id="busca" type="search" placeholder="Buscar por nome, e-mail, telefone, estado, profissão ou objetivo" value="${esc(F.busca)}">
      <select class="inp" id="filtro-curso"><option value="">Todos os cursos</option>${opCursos}</select>
      <button class="sbtn" data-act="convite">🔗 Copiar link de convite</button>
      <button class="sbtn" data-act="csv">⬇️ Exportar planilha</button>
      <button class="sbtn" data-act="atualizar">🔄 Atualizar</button>
    </div>
    <div id="confirmacoes"></div>
    <div class="charts" id="graficos"></div>
    <h2 class="sec-t">📲 Central de avisos no WhatsApp</h2>
    <div class="card avc rise" id="avisos"></div>
    <h2 class="sec-t" id="titulo-tabela">Alunos</h2>
    <div class="card tcard" id="tabela"></div>
    <h2 class="sec-t" id="titulo-cert">🎓 Certificados emitidos</h2>
    <p class="cert-sync" id="cert-sync">${esc(SYNC)}</p>
    <div class="card tcard" id="certificados"></div>`;
  document.querySelectorAll('.stat b[data-n]').forEach(contar);
  renderConfirmacoes();
  renderTabela();
  renderCertificados();
}

/* Envia ao Supabase os cursos publicados e as lições que valem certificado (o servidor confere a conclusão por esta lista). */
let SYNC = '';
async function sincronizarCertificados(){
  const lista = CURSOS.filter(c => PORTAL.disponivel(c)).map(PORTAL.dadosCertificado);
  try { await DB.sincronizarCertificados(lista); SYNC = '✅ ' + lista.length + ' cursos publicados emitem certificado. A lista é atualizada sozinha sempre que você abre este painel.'; }
  catch(e){ console.error(e); SYNC = '⚠️ Não foi possível atualizar a lista de cursos com certificado. Confira se o arquivo supabase/certificados.sql já foi rodado no Supabase.'; }
  const el = $('cert-sync'); if (el) el.textContent = SYNC;
}

function renderCertificados(){
  const el = $('certificados'); if (!el) return;
  const lista = DADOS.certificados || [];
  $('titulo-cert').textContent = '🎓 Certificados emitidos (' + lista.length + ')';
  if (!lista.length) { el.innerHTML = '<div class="empty">Nenhum certificado emitido ainda. Ele aparece aqui quando um aluno conclui 100% de um curso e clica em "Emitir meu certificado".</div>'; return; }
  el.innerHTML = `<table class="atbl"><thead><tr><th>Aluno</th><th>Certificado</th><th>ID da credencial</th><th>Emitido em</th><th>Situação</th><th></th></tr></thead><tbody>
    ${lista.map(c => `<tr>
      <td>${esc(c.nome)}</td>
      <td>${c.tipo === 'trilha' ? '🏁 ' : ''}${esc(c.titulo)}<br><small>${c.carga_horaria} h${c.detalhe ? ' · ' + esc(c.detalhe) : ''}</small></td>
      <td><a href="validar.html?c=${encodeURIComponent(c.codigo)}" target="_blank" rel="noopener" style="font-family:monospace">${esc(c.codigo)}</a></td>
      <td>${new Date(c.emitido_em).toLocaleDateString('pt-BR')}</td>
      <td>${c.revogado ? '⛔ Revogado' : '✅ Válido'}</td>
      <td><button class="sbtn" data-act="revogar" data-cod="${esc(c.codigo)}" data-rev="${c.revogado ? '0' : '1'}">${c.revogado ? 'Restaurar' : 'Revogar'}</button></td>
    </tr>`).join('')}</tbody></table>`;
}

function renderConfirmacoes(){
  const el = $('confirmacoes'); if (!el) return;
  const pend = DADOS.alunos.filter(a => !a.whatsapp_verificado);
  const pediram = pend.filter(a => a.whatsapp_solicitado_em).sort((x, y) => String(y.whatsapp_solicitado_em).localeCompare(String(x.whatsapp_solicitado_em)));
  const faltam = pend.length - pediram.length;
  if (!pend.length) { el.innerHTML = ''; return; }
  el.innerHTML = `<h2 class="sec-t">✅ Confirmações de WhatsApp <small style="color:var(--muted);font-weight:400">· ${pediram.length} aguardando você</small></h2>
    <div class="card avc rise">
      <p class="nota" style="margin:0 0 12px">Quando o aluno toca em "Enviar confirmação", chega no seu WhatsApp uma mensagem com o código. Confira se o <b>número de quem mandou</b> e o <b>código</b> batem com os daqui e clique em Confirmar.</p>
      <div class="confs">${pediram.map(a => {
        const wa = linkWhats(a.telefone, a.pais);
        const ok = 'Olá, ' + String(a.nome || '').split(' ')[0] + '! Seu WhatsApp foi confirmado no Portal de Estudos IA ✅ Bons estudos!';
        return `<div class="conf pediu">
          <div class="pessoa"><span class="av" style="${corDe(a.id)}">${esc(iniciais(a.nome))}</span><div><b>${esc(a.nome)}</b><br><small>${esc(a.telefone)} · pediu ${dataHora(a.whatsapp_solicitado_em)}</small></div></div>
          <span class="cod" title="Código que o aluno enviou">${esc(a.codigo_whats || '-')}</span>
          <div class="avbtns"><button class="sbtn wa" data-act="confirmar-whats" data-id="${esc(a.id)}">✅ Confirmar</button>
            ${wa ? `<a class="sbtn" href="${wa}?text=${encodeURIComponent(ok)}" target="_blank" rel="noopener" data-act="link">Responder</a>` : ''}</div>
        </div>`;
      }).join('') || '<div class="empty">Nenhum pedido novo. Assim que um aluno enviar a mensagem, ele aparece aqui.</div>'}</div>
      ${faltam ? `<p class="nota">${faltam} aluno${faltam > 1 ? 's' : ''} ainda não enviou a mensagem de confirmação. Na Central de avisos você pode lembrá-los.</p>` : ''}
    </div>`;
}

function renderTabela(){
  const rs = linhas();
  $('graficos').innerHTML = grafCadastros(rs) + grafFunil(rs) + grafObjetivos(rs) + grafSituacao(rs);
  renderAvisos(rs);
  $('titulo-tabela').textContent = 'Alunos (' + rs.length + ')';
  if (!rs.length) {
    $('tabela').innerHTML = `<div class="empty">${DADOS.alunos.length ? 'Nenhum aluno encontrado com esse filtro.' : 'Nenhum aluno cadastrado ainda. Envie o link de convite para começar.'}</div>`;
    return;
  }
  $('tabela').innerHTML = `<table class="atbl"><thead><tr>
      <th>Aluno</th><th class="hide-m">Perfil</th><th>Contato</th><th class="hide-m">Local</th><th>Cursos e progresso</th><th class="hide-m">Atividade</th>
    </tr></thead><tbody>${rs.map(({ a, cursos }) => {
      const wa = linkWhats(a.telefone, a.pais), at = atividade(a.ultimo_acesso);
      return `<tr data-act="aluno" data-id="${esc(a.id)}">
        <td><div class="pessoa"><span class="av" style="${corDe(a.id)}">${esc(iniciais(a.nome))}</span><div><b>${esc(a.nome)}</b><br><small>${esc(a.idade)} anos · desde ${data(a.criado_em)}</small></div></div></td>
        <td class="hide-m">${esc(a.ocupacao || a.profissao || '-')}<br><small>${esc(situacao(a))}${a.objetivo ? '<br>🎯 ' + esc(a.objetivo) : ''}</small></td>
        <td>${wa ? `<a href="${wa}" target="_blank" rel="noopener" data-act="link">${esc(a.telefone)}</a>` : esc(a.telefone)}${a.email ? '<br><small>' + esc(a.email) + '</small>' : ''}<br>${selos(a)}</td>
        <td class="hide-m">${esc(a.estado)} · ${esc(a.pais)}<br><small>CEP ${esc(a.cep)}</small></td>
        <td>${cursos.length ? cursos.map(c => {
          const cc = cursoPorId(c.curso), cor = cc ? '--c:' + cc.cores[0] + ';--c2:' + cc.cores[1] : '';
          return `<div class="cprog" style="${cor}"><span>${esc(tituloCurso(c.curso))}</span><em>${c.feitas}/${c.total} · ${c.pct}%</em><div class="cbar" style="grid-column:1/-1"><i style="width:${c.pct}%"></i></div></div>`;
        }).join('') : '<small>Sem matrícula</small>'}</td>
        <td class="hide-m"><span class="act ${at[0]}">${at[1]}</span><br><small>${dataHora(a.ultimo_acesso)}</small></td>
      </tr>`;
    }).join('')}</tbody></table>`;
}

function abrirAluno(id){
  const a = DADOS.alunos.find(x => x.id === id); if (!a) return;
  const wa = linkWhats(a.telefone, a.pais);
  const mats = DADOS.matriculas.filter(m => m.aluno_id === id);
  const cursos = mats.map(m => {
    const c = cursoPorId(m.curso_id), p = progressoDe(id, m.curso_id);
    const quando = {}; p.lista.forEach(x => { quando[x.licao_id] = x.concluida_em; });
    const itens = c ? c.licoes.map(l => `<li>${quando[l.id] ? '✅' : '⬜'} <span>${esc(l.id)} ${esc(l.title)}</span><small>${quando[l.id] ? dataHora(quando[l.id]) : ''}</small></li>`).join('')
                    : '<li><small>Este curso não está mais no catálogo.</small></li>';
    return `<h3>${esc(tituloCurso(m.curso_id))} · ${p.pct}%</h3>
      <div class="row2" style="margin-bottom:8px"><span>Iniciado em</span><b>${dataHora(m.iniciado_em)}</b><span>Lições</span><b>${p.feitas} de ${p.total}</b></div>
      <ul class="lst">${itens}</ul>`;
  }).join('');
  $('drawer').innerHTML = `<div class="dh"><div class="pessoa"><span class="av" style="${corDe(a.id)}">${esc(iniciais(a.nome))}</span><h2>${esc(a.nome)}</h2></div><button class="x" data-act="fechar" aria-label="Fechar">✕</button></div>
    <div class="db det">
      <div class="row2">
        <span>Idade</span><b>${esc(a.idade)} anos</b>
        <span>WhatsApp</span><b>${wa ? `<a href="${wa}" target="_blank" rel="noopener" style="color:var(--ok)">${esc(a.telefone)}</a>` : esc(a.telefone)} ${a.whatsapp_verificado ? '✅' : '⏳'}</b>
        <span>E-mail</span><b>${a.email ? esc(a.email) + (a.email_verificado ? ' ✅' : ' ⏳') : '-'}</b>
        <span>Confirmação</span><b>${selos(a)}</b>
        <span>País</span><b>${esc(a.pais)}</b>
        <span>Estado</span><b>${esc(a.estado)}</b>
        <span>CEP</span><b>${esc(a.cep)}</b>
        <span>Profissão</span><b>${esc(a.profissao || '-')}</b>
        <span>Ocupação atual</span><b>${esc(a.ocupacao || '-')}</b>
        <span>Trabalhando</span><b>${simNao(a.trabalhando)}</b>
        <span>Estudante</span><b>${simNao(a.estudante)}</b>
        <span>Objetivo</span><b>${esc(a.objetivo || '-')}</b>
        ${a.objetivo_detalhe ? `<span>Em detalhe</span><b style="font-weight:400">${esc(a.objetivo_detalhe)}</b>` : ''}
        <span>Cadastro</span><b>${dataHora(a.criado_em)}</b>
        <span>Último acesso</span><b>${dataHora(a.ultimo_acesso)}</b>
      </div>
      ${cursos || '<p class="empty">Ainda não iniciou nenhum curso.</p>'}
      <h3>Avisos enviados</h3>
      ${(() => { const av = (DADOS.avisos || []).filter(v => v.aluno_id === id).sort((x, y) => String(y.enviado_em).localeCompare(String(x.enviado_em)));
        return av.length ? `<ul class="lst">${av.map(v => `<li>✉️ <span>${esc(nomeSeg(v.tipo))} · ${v.canal === 'api' ? 'automático' : 'wa.me'}</span><small>${dataHora(v.enviado_em)}</small></li>`).join('')}</ul>` : '<p class="nota">Nenhum aviso enviado ainda.</p>'; })()}
    </div>`;
  $('drawer').classList.add('on'); $('shade').classList.add('on');
}
function fechar(){ $('drawer').classList.remove('on'); $('shade').classList.remove('on'); }

/* ============ AÇÕES ============ */
function copiar(txt){
  const fallback = () => { const t = document.createElement('textarea'); t.value = txt; t.style.position = 'fixed'; t.style.opacity = '0'; document.body.appendChild(t); t.select(); document.execCommand('copy'); t.remove(); };
  try { navigator.clipboard.writeText(txt).catch(fallback); } catch(e){ fallback(); }
}

function exportarCsv(){
  const cab = ['Nome','E-mail','E-mail confirmado','WhatsApp confirmado','Idade','Telefone','País','Estado','CEP','Profissão','Ocupação atual','Trabalhando','Estudante','Objetivo','Objetivo (detalhe)','Cadastro','Último acesso','Curso','Lições concluídas','Total de lições','Progresso (%)','Iniciado em'];
  const out = [cab];
  linhas().forEach(({ a, cursos }) => {
    const base = [a.nome, a.email, simNao(!!a.email_verificado), simNao(!!a.whatsapp_verificado), a.idade, a.telefone, a.pais, a.estado, a.cep, a.profissao, a.ocupacao, simNao(a.trabalhando), simNao(a.estudante), a.objetivo, a.objetivo_detalhe, dataHora(a.criado_em), dataHora(a.ultimo_acesso)];
    const lista = F.curso ? cursos.filter(c => c.curso === F.curso) : cursos;
    if (!lista.length) out.push(base.concat(['', '', '', '', '']));
    lista.forEach(c => out.push(base.concat([tituloCurso(c.curso), c.feitas, c.total, c.pct, dataHora(c.iniciado)])));
  });
  const csv = out.map(l => l.map(v => '"' + String(v == null ? '' : v).replace(/"/g, '""') + '"').join(';')).join('\r\n');
  const url = URL.createObjectURL(new Blob(['\ufeff' + csv], { type:'text/csv;charset=utf-8' }));
  const el = document.createElement('a'); el.href = url; el.download = 'alunos-' + new Date().toISOString().slice(0,10) + '.csv';
  document.body.appendChild(el); el.click(); el.remove(); URL.revokeObjectURL(url);
}

async function carregarDados(){
  try { DADOS = await DB.painel(); renderPainel(); sincronizarCertificados(); }
  catch(e){ console.error(e); $('main').innerHTML = '<div class="empty">Não foi possível carregar os dados. Verifique a internet e clique em atualizar.</div>'; }
}

document.addEventListener('click', e => {
  const t = e.target.closest('[data-act]'); if (!t) return;
  const a = t.dataset.act;
  if (a === 'link') return;
  if (a === 'enviar-wa' || a === 'copiar-msg') {
    const p = (AV.perfis || []).find(x => x.a.id === t.dataset.id); if (!p) return;
    const texto = montarMensagem(modelos()[AV.seg], p.vars);
    if (a === 'copiar-msg') { copiar(texto); toast('Mensagem copiada'); return; }
    setTimeout(() => registrar([{ aluno_id:p.a.id, tipo:AV.seg, canal:'wa.me', texto }]), 50);
    return;
  }
  if (a === 'confirmar-whats') {
    t.disabled = true; t.textContent = 'Confirmando…';
    DB.confirmarWhatsapp(t.dataset.id, true).then(() => {
      const al = DADOS.alunos.find(x => x.id === t.dataset.id);
      if (al) { al.whatsapp_verificado = true; al.whatsapp_verificado_em = new Date().toISOString(); }
      renderConfirmacoes(); renderTabela(); toast('WhatsApp confirmado ✅');
    }).catch(err => { console.error(err); t.disabled = false; t.textContent = '✅ Confirmar'; toast('Não foi possível confirmar agora.'); });
    return;
  }
  if (a === 'seg') { AV.seg = t.dataset.seg; renderAvisos(linhas()); }
  else if (a === 'modelo-padrao') { salvarModelo(AV.seg, MODELOS_PADRAO[AV.seg]); renderAvisos(linhas()); toast('Modelo restaurado'); }
  else if (a === 'enviar-api') enviarApi();
  else if (a === 'aluno') abrirAluno(t.dataset.id);
  else if (a === 'fechar') fechar();
  else if (a === 'atualizar') carregarDados().then(() => toast('Dados atualizados'));
  else if (a === 'csv') exportarCsv();
  else if (a === 'convite') {
    const id = F.curso || (CURSOS.find(c => PORTAL.disponivel(c)) || CURSOS[0] || {}).id;
    if (!id) { toast('Nenhum curso no catálogo.'); return; }
    copiar(linkConvite(id));
    toast('Link de convite copiado: ' + tituloCurso(id));
  }
  else if (a === 'revogar') {
    const sim = t.dataset.rev === '1';
    if (sim && !confirm('Revogar o certificado ' + t.dataset.cod + '? Ele passa a aparecer como cancelado na página de validação.')) return;
    DB.revogarCertificado(t.dataset.cod, sim).then(() => {
      const c = (DADOS.certificados || []).find(x => x.codigo === t.dataset.cod); if (c) c.revogado = sim;
      renderCertificados(); toast(sim ? 'Certificado revogado' : 'Certificado restaurado');
    }).catch(err => { console.error(err); toast('Não foi possível alterar agora.'); });
  }
  else if (a === 'sair') DB.sairMaster().then(() => renderLogin());
});
document.addEventListener('input', e => {
  if (e.target.id === 'busca') { F.busca = e.target.value; renderTabela(); }
  else if (e.target.id === 'modelo') {
    salvarModelo(AV.seg, e.target.value);
    (AV.perfis || []).filter(p => p.seg === AV.seg).forEach(p => {
      const msg = montarMensagem(e.target.value, p.vars), card = document.querySelector(`[data-act="copiar-msg"][data-id="${CSS.escape(p.a.id)}"]`);
      if (!card) return;
      const avi = card.closest('.avi'); avi.querySelector('.avmsg').textContent = msg;
      const w = avi.querySelector('a.wa'); if (w) w.href = w.href.split('?')[0] + '?text=' + encodeURIComponent(msg);
    });
  }
});
document.addEventListener('change', e => {
  if (e.target.id === 'filtro-curso') { F.curso = e.target.value; renderTabela(); }
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') fechar(); });
document.addEventListener('submit', async e => {
  if (e.target.id !== 'f-login') return;
  e.preventDefault();
  const f = e.target.elements, btn = $('login-ok');
  btn.disabled = true; btn.textContent = 'Entrando…';
  try { await DB.entrarMaster(f.email.value.trim(), f.senha.value); await carregarDados(); }
  catch(err){
    console.error(err);
    const proprias = ['Senha incorreta.', 'Esta conta não tem acesso de master.'];
    renderLogin(err && proprias.includes(err.message) ? err.message : 'E-mail ou senha incorretos.');
  }
});

async function iniciar(){
  try {
    await DB.iniciar();
    CURSOS = await PORTAL.carregarCursos(true);
  } catch(e){
    console.error(e);
    $('main').innerHTML = '<div class="empty">Não foi possível carregar o painel. Verifique a internet e recarregue a página.</div>';
    return;
  }
  if (DB.modo === 'demo') { const b = $('demo-bar'); b.hidden = false; b.textContent = 'Modo demonstração: mostra apenas os alunos cadastrados neste navegador.'; }
  if (await DB.ehMaster()) await carregarDados(); else renderLogin();
}
iniciar();
})();
