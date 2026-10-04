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
    (!q || [r.a.nome, r.a.telefone, r.a.estado, r.a.pais, r.a.cep, r.a.profissao, r.a.ocupacao, r.a.objetivo].some(v => String(v || '').toLowerCase().includes(q))) &&
    (!F.curso || r.cursos.some(c => c.curso === F.curso))
  );
}

/* ============ TELAS ============ */
function renderLogin(msg){
  $('btn-sair').hidden = true;
  const demo = DB.modo === 'demo';
  $('main').innerHTML = `<form class="form" id="f-login" style="max-width:420px; margin-top:40px">
    <div class="orb mini rise" aria-hidden="true"><span>🛡️</span></div>
    <div class="eyebrow">Área restrita</div>
    <h1 class="h1" style="margin-bottom:6px">Entrar como <span class="grad">master</span></h1>
    <p class="hp">${demo ? 'Modo demonstração: use qualquer e-mail e a senha definida em <code>config.js</code> (padrão: <b>master</b>).' : 'Acesso restrito ao administrador do portal.'}</p>
    <div class="card">
      <label class="fl" style="margin-bottom:12px">E-mail<input name="email" type="email" autocomplete="username" required></label>
      <label class="fl">Senha<input name="senha" type="password" autocomplete="current-password" required></label>
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
  return grafico('Novos cadastros', total + ' nos últimos 14 dias',
    `<div class="vbars">${dias.map(d => `<div class="vb" title="${d.txt}: ${d.n}">${d.n ? `<em>${d.n}</em>` : ''}<i style="height:${Math.max(3, d.n / max * 100)}%"></i><span>${d.rot}</span></div>`).join('')}</div>`, 0);
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

function renderPainel(){
  $('btn-sair').hidden = false;
  const agora = Date.now();
  const recente = (iso, dias) => iso && agora - new Date(iso).getTime() < dias * DIA;
  const ativos = DADOS.alunos.filter(a => recente(a.ultimo_acesso, 7)).length;
  const novos = DADOS.alunos.filter(a => recente(a.criado_em, 7)).length;
  const pcts = DADOS.matriculas.map(m => progressoDe(m.aluno_id, m.curso_id).pct);
  const media = pcts.length ? Math.round(pcts.reduce((s, p) => s + p, 0) / pcts.length) : 0;
  const concluidos = pcts.filter(p => p === 100).length;
  const taxa = pcts.length ? Math.round(concluidos / pcts.length * 100) : 0;
  const opCursos = CURSOS.map(c => `<option value="${esc(c.id)}" ${F.curso===c.id?'selected':''}>${esc(c.titulo)}${c.status !== 'publicado' ? ' (' + c.status + ')' : ''}</option>`).join('');
  const stats = [
    ['👥', DADOS.alunos.length, '', 'alunos cadastrados', '+' + novos + ' nos últimos 7 dias'],
    ['⚡', ativos, '', 'ativos nos últimos 7 dias', DADOS.alunos.length ? Math.round(ativos / DADOS.alunos.length * 100) + '% da base' : '-'],
    ['📈', media, '%', 'progresso médio', DADOS.matriculas.length + ' matrículas'],
    ['🏆', concluidos, '', 'cursos concluídos', taxa + '% de conclusão']
  ];
  $('main').innerHTML = `
    <div class="adm-h rise"><div><div class="eyebrow">Painel do master</div><h1 class="h1">Visão geral dos <span class="grad">seus alunos</span></h1></div>
      <span class="live"><i></i>${DB.modo === 'demo' ? 'Demonstração' : 'Dados ao vivo'}</span></div>
    <div class="stats">${stats.map((s, i) => `<div class="stat rise" style="${cor(i + 1)};--d:${i * 0.06}s"><div class="sico">${s[0]}</div><b data-n="${s[1]}" data-suf="${s[2]}">0</b><span>${s[3]}</span><small>${s[4]}</small></div>`).join('')}</div>
    <div class="tools">
      <input class="inp" id="busca" type="search" placeholder="Buscar por nome, telefone, estado, profissão ou objetivo" value="${esc(F.busca)}">
      <select class="inp" id="filtro-curso"><option value="">Todos os cursos</option>${opCursos}</select>
      <button class="sbtn" data-act="convite">🔗 Copiar link de convite</button>
      <button class="sbtn" data-act="csv">⬇️ Exportar planilha</button>
      <button class="sbtn" data-act="atualizar">🔄 Atualizar</button>
    </div>
    <div class="charts" id="graficos"></div>
    <h2 class="sec-t" id="titulo-tabela">Alunos</h2>
    <div class="card tcard" id="tabela"></div>`;
  document.querySelectorAll('.stat b[data-n]').forEach(contar);
  renderTabela();
}

function renderTabela(){
  const rs = linhas();
  $('graficos').innerHTML = grafCadastros(rs) + grafFunil(rs) + grafObjetivos(rs) + grafSituacao(rs);
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
        <td>${wa ? `<a href="${wa}" target="_blank" rel="noopener" data-act="link">${esc(a.telefone)}</a>` : esc(a.telefone)}</td>
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
        <span>WhatsApp</span><b>${wa ? `<a href="${wa}" target="_blank" rel="noopener" style="color:var(--ok)">${esc(a.telefone)}</a>` : esc(a.telefone)}</b>
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
  const cab = ['Nome','Idade','Telefone','País','Estado','CEP','Profissão','Ocupação atual','Trabalhando','Estudante','Objetivo','Objetivo (detalhe)','Cadastro','Último acesso','Curso','Lições concluídas','Total de lições','Progresso (%)','Iniciado em'];
  const out = [cab];
  linhas().forEach(({ a, cursos }) => {
    const base = [a.nome, a.idade, a.telefone, a.pais, a.estado, a.cep, a.profissao, a.ocupacao, simNao(a.trabalhando), simNao(a.estudante), a.objetivo, a.objetivo_detalhe, dataHora(a.criado_em), dataHora(a.ultimo_acesso)];
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
  try { DADOS = await DB.painel(); renderPainel(); }
  catch(e){ console.error(e); $('main').innerHTML = '<div class="empty">Não foi possível carregar os dados. Verifique a internet e clique em atualizar.</div>'; }
}

document.addEventListener('click', e => {
  const t = e.target.closest('[data-act]'); if (!t) return;
  const a = t.dataset.act;
  if (a === 'link') return;
  if (a === 'aluno') abrirAluno(t.dataset.id);
  else if (a === 'fechar') fechar();
  else if (a === 'atualizar') carregarDados().then(() => toast('Dados atualizados'));
  else if (a === 'csv') exportarCsv();
  else if (a === 'convite') {
    const id = F.curso || (CURSOS.find(c => c.status === 'publicado') || CURSOS[0] || {}).id;
    if (!id) { toast('Nenhum curso no catálogo.'); return; }
    copiar(linkConvite(id));
    toast('Link de convite copiado: ' + tituloCurso(id));
  }
  else if (a === 'sair') DB.sairMaster().then(() => renderLogin());
});
document.addEventListener('input', e => {
  if (e.target.id === 'busca') { F.busca = e.target.value; renderTabela(); }
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
