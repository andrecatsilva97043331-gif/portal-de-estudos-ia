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
    <h1 class="h1" style="margin-bottom:6px">Entrar como master</h1>
    <p class="hp">${demo ? 'Modo demonstração: use qualquer e-mail e a senha definida em <code>config.js</code> (padrão: <b>master</b>).' : 'Acesso restrito ao administrador do portal.'}</p>
    <div class="card">
      <label class="fl" style="margin-bottom:12px">E-mail<input name="email" type="email" autocomplete="username" required></label>
      <label class="fl">Senha<input name="senha" type="password" autocomplete="current-password" required></label>
      <div class="err" id="login-err" role="alert">${esc(msg || '')}</div>
      <button class="next" type="submit" id="login-ok">Entrar ➜</button>
    </div>
  </form>`;
}

function renderPainel(){
  $('btn-sair').hidden = false;
  const agora = Date.now();
  const ativos = DADOS.alunos.filter(a => a.ultimo_acesso && agora - new Date(a.ultimo_acesso).getTime() < 7 * DIA).length;
  const concluidos = DADOS.matriculas.filter(m => progressoDe(m.aluno_id, m.curso_id).pct === 100).length;
  const opCursos = CURSOS.map(c => `<option value="${esc(c.id)}" ${F.curso===c.id?'selected':''}>${esc(c.titulo)}${c.status !== 'publicado' ? ' (' + c.status + ')' : ''}</option>`).join('');
  $('main').innerHTML = `
    <div class="stats">
      <div class="stat"><b>${DADOS.alunos.length}</b><span>alunos cadastrados</span></div>
      <div class="stat"><b>${DADOS.matriculas.length}</b><span>matrículas em cursos</span></div>
      <div class="stat"><b>${concluidos}</b><span>cursos concluídos</span></div>
      <div class="stat"><b>${ativos}</b><span>ativos nos últimos 7 dias</span></div>
    </div>
    <div class="tools">
      <input class="inp" id="busca" type="search" placeholder="Buscar por nome, telefone, estado, profissão ou objetivo" value="${esc(F.busca)}">
      <select class="inp" id="filtro-curso"><option value="">Todos os cursos</option>${opCursos}</select>
      <button class="sbtn" data-act="convite">🔗 Copiar link de convite</button>
      <button class="sbtn" data-act="csv">⬇️ Exportar planilha</button>
      <button class="sbtn" data-act="atualizar">🔄 Atualizar</button>
    </div>
    <div class="card" style="padding:0; overflow:auto" id="tabela"></div>`;
  renderTabela();
}

function renderTabela(){
  const rs = linhas();
  if (!rs.length) {
    $('tabela').innerHTML = `<div class="empty">${DADOS.alunos.length ? 'Nenhum aluno encontrado com esse filtro.' : 'Nenhum aluno cadastrado ainda. Envie o link de convite para começar.'}</div>`;
    return;
  }
  $('tabela').innerHTML = `<table class="atbl"><thead><tr>
      <th>Aluno</th><th class="hide-m">Perfil</th><th>Contato</th><th class="hide-m">Local</th><th>Cursos e progresso</th><th class="hide-m">Último acesso</th>
    </tr></thead><tbody>${rs.map(({ a, cursos }) => {
      const wa = linkWhats(a.telefone, a.pais);
      return `<tr data-act="aluno" data-id="${esc(a.id)}">
        <td><b>${esc(a.nome)}</b><br><small>${esc(a.idade)} anos · desde ${data(a.criado_em)}</small></td>
        <td class="hide-m">${esc(a.ocupacao || a.profissao || '-')}<br><small>${esc(situacao(a))}${a.objetivo ? '<br>🎯 ' + esc(a.objetivo) : ''}</small></td>
        <td>${wa ? `<a href="${wa}" target="_blank" rel="noopener" data-act="link">${esc(a.telefone)}</a>` : esc(a.telefone)}</td>
        <td class="hide-m">${esc(a.estado)} · ${esc(a.pais)}<br><small>CEP ${esc(a.cep)}</small></td>
        <td>${cursos.length ? cursos.map(c => {
          const cc = cursoPorId(c.curso), cor = cc ? '--c:' + cc.cores[0] + ';--c2:' + cc.cores[1] : '';
          return `<div class="cprog" style="${cor}"><span>${esc(tituloCurso(c.curso))}</span><em>${c.feitas}/${c.total} · ${c.pct}%</em><div class="cbar" style="grid-column:1/-1"><i style="width:${c.pct}%"></i></div></div>`;
        }).join('') : '<small>Sem matrícula</small>'}</td>
        <td class="hide-m">${dataHora(a.ultimo_acesso)}</td>
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
  $('drawer').innerHTML = `<div class="dh"><h2>${esc(a.nome)}</h2><button class="x" data-act="fechar" aria-label="Fechar">✕</button></div>
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
