(function(){
'use strict';

const $ = id => document.getElementById(id);
const UFS = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'];
const OBJETIVOS = ['Conseguir um emprego','Crescer na carreira atual','Mudar de área','Empreender ou melhorar meu negócio','Aplicar no meu trabalho atual','Complementar os estudos','Conhecimento pessoal','Outro'];
const NIVEIS_PADRAO = [[1500,'Mestre'],[900,'Avançado'],[300,'Intermediário'],[0,'Iniciante']];

let CURSOS = [];
let ALUNO = null;
let MATR = [];
let PROG = {};
let S = { view:'cursos', cur:null, modDone:null, escolhido:null };
let SESSION = {};
let TB = { open:false, mod:1 };
let C = null;
let EMAIL_SESSAO = null;
let VER = {};
const VIEWS_PORTAL = ['cursos','cadastro','verificar','entrar'];
const RE_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const AVISO_OBRIGATORIO = 'A confirmação do e-mail e do WhatsApp é <b>obrigatória</b> para concluir a inscrição no portal, acessar o curso e se inscrever nos demais cursos no futuro.';

/* ============ UTILITÁRIOS ============ */
function esc(s){ return String(s == null ? '' : s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }
const reduced = () => window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
const cursoPorId = id => CURSOS.find(c => c.id === id);
const pctCurso = c => { const d = PROG[c.id] || {}; return c.total ? Math.round(c.licoes.filter(l => d[l.id]).length / c.total * 100) : 0; };
const ccor = c => '--c:' + c.cores[0] + ';--c2:' + c.cores[1];

/* ============ CURSO ABERTO ============ */
const D = () => PROG[C.id] || (PROG[C.id] = {});
const FLAT = () => C.licoes;
const byId = id => C.licoes.find(l => l.id === id);
const modOf = id => C.conteudo.modulos.find(m => m.id === id);
const idxOf = id => C.licoes.findIndex(l => l.id === id);
function unlocked(id){ const i = idxOf(id), d = D(); for (let k=0;k<i;k++){ if(!d[C.licoes[k].id]) return false; } return true; }
function modDone(m){ return m.lessons.every(l => D()[l.id]); }
function modCount(m){ return m.lessons.filter(l => D()[l.id]).length; }
function modPct(m){ return Math.round(modCount(m) / m.lessons.length * 100); }
function xp(){ return FLAT().filter(l => D()[l.id]).length * 100 + C.conteudo.modulos.filter(modDone).length * 200; }
function level(x){ return ((C.conteudo.niveis || NIVEIS_PADRAO).find(n => x >= n[0]) || [0,''])[1]; }
function tstyle(id){ const t = (C.conteudo.cores || {})[id] || PORTAL.paleta(id - 1); return '--c:' + t[0] + ';--c2:' + t[1]; }
const prompts = () => C.conteudo.prompts || {};
const temToolbox = () => Object.keys(prompts()).length > 0;
const iconeLicao = L => (C.conteudo.iconesLicao || {})[L.id] || L.icon || modOf(L.mod).icon;

/* ============ RENDER: PORTAL ============ */
function renderCursos(){
  const totalLicoes = CURSOS.reduce((s, c) => s + c.total, 0);
  let topo, pctGeral = null;
  if (ALUNO) {
    const meus = CURSOS.filter(c => MATR.includes(c.id));
    const feitas = meus.reduce((s, c) => s + c.licoes.filter(l => (PROG[c.id] || {})[l.id]).length, 0);
    const total = meus.reduce((s, c) => s + c.total, 0);
    const concluidos = meus.filter(c => pctCurso(c) === 100).length;
    const seguir = meus.find(c => pctCurso(c) < 100);
    pctGeral = total ? Math.round(feitas / total * 100) : 0;
    topo = `<section class="hero rise">
      <div><div class="eyebrow">Seu painel de estudos</div>
      <h1 class="hh">Olá, <span class="grad">${esc(ALUNO.nome.split(' ')[0])}</span>! 👋</h1>
      <p class="hp">${seguir ? 'Continue de onde parou ou comece um curso novo.' : 'Escolha um curso para começar.'}</p>
      <div class="chips"><span class="chip">⚡ ${feitas * 100} XP</span><span class="chip">📘 ${feitas} lições concluídas</span><span class="chip">🎓 ${meus.length} ${meus.length === 1 ? 'curso' : 'cursos'}</span>${concluidos ? `<span class="chip">🏆 ${concluidos} concluído${concluidos > 1 ? 's' : ''}</span>` : ''}</div>
      ${!DB.verificado(ALUNO) ? `<div class="pend"><b>⚠️ Falta confirmar seu ${ALUNO.email_verificado ? 'WhatsApp' : 'e-mail'}</b><span>${AVISO_OBRIGATORIO}</span><button class="next" data-act="verificar">Confirmar agora ➜</button></div>`
        : seguir ? `<button class="next" data-act="curso" data-id="${esc(seguir.id)}" style="${ccor(seguir)}">Continuar ${esc(seguir.titulo)} ➜</button>` : ''}
      <button class="link" data-act="sair">Não é ${esc(ALUNO.nome.split(' ')[0])}? Sair</button></div>
      <div class="bigring" id="bigring"><div class="bigin"><b id="bignum">0%</b><span>dos seus cursos</span></div></div>
    </section>`;
  } else {
    topo = `<section class="hero rise">
      <div><div class="eyebrow">Portal de Estudos</div>
      <h1 class="hh">Aprenda na prática com <span class="grad">desafios reais</span></h1>
      <p class="hp">Lições curtas, casos de clientes de verdade e prompts prontos para usar. Faça seu cadastro gratuito e comece agora.</p>
      <div class="chips"><span class="chip">🎓 ${CURSOS.length} ${CURSOS.length === 1 ? 'curso' : 'cursos'}</span><span class="chip">📘 ${totalLicoes} lições</span><span class="chip">🆓 Gratuito</span><span class="chip">📱 Funciona no celular</span></div>
      <div class="hbtns"><button class="next" data-act="cadastro">Criar meu cadastro ➜</button><button class="ghost" data-act="entrar">Já tenho cadastro</button></div></div>
      <div class="orb" aria-hidden="true"><span>📚</span></div>
    </section>
    <div class="steps">
      ${[['📝','Cadastre-se','Leva 2 minutos, não pede documentos e é confirmado por e-mail e WhatsApp.'],['🎯','Escolha o curso','Comece na hora, no seu ritmo, pelo celular ou computador.'],['🏆','Aprenda com desafios','Cada lição termina com um caso real para você resolver.']]
        .map((s, i) => `<div class="step rise" style="--d:${0.1 + i * 0.08}s;${'--c:' + PORTAL.paleta(i)[0] + ';--c2:' + PORTAL.paleta(i)[1]}"><div class="stile">${s[0]}</div><div><b>${i + 1}. ${s[1]}</b><p>${s[2]}</p></div></div>`).join('')}
    </div>`;
  }
  const cards = CURSOS.map((c, i) => {
    const matr = MATR.includes(c.id), pct = pctCurso(c), fim = matr && pct === 100, d = PROG[c.id] || {};
    const acao = fim ? '✅ Concluído' : matr ? '▶ Continuar' : '✨ Iniciar curso';
    const dots = c.conteudo.modulos.map(m => `<i class="${m.lessons.every(l => d[l.id]) ? 'on' : ''}" title="Módulo ${m.id}: ${esc(m.title)}"></i>`).join('');
    return `<div class="mc rise ${fim?'fin':''}" role="button" tabindex="0" data-act="curso" data-id="${esc(c.id)}" style="${ccor(c)};--d:${0.15 + i * 0.08}s">
      <div class="mhead"><div class="mtile">${c.icone}</div>${c.status === 'rascunho' ? '<span class="badge">RASCUNHO</span>' : matr ? `<span class="pctpill">${pct}%</span>` : '<span class="pctpill novo">Novo</span>'}</div>
      <div><div class="mt">${esc(c.titulo)}</div><div class="ms">${esc(c.descricao)}</div></div>
      <div class="mdots">${dots}</div>
      <div class="mfoot"><span>${c.conteudo.modulos.length} módulos · ${c.total} lições</span><span class="mst">${acao}</span></div>
    </div>`;
  }).join('');
  $('main').removeAttribute('style');
  $('main').innerHTML = topo + `<h2 class="sec-t">${ALUNO ? 'Cursos do portal' : 'Cursos disponíveis'}</h2>
    <div class="grid">${cards || '<div class="empty">Nenhum curso publicado ainda.</div>'}</div>`;
  if (pctGeral !== null) {
    setTimeout(() => { const r = $('bigring'); if (r) r.style.setProperty('--p', pctGeral); }, 60);
    countUp($('bignum'), pctGeral);
  }
}

function renderCadastro(){
  const opcoes = CURSOS.map(c => `<option value="${esc(c.id)}" ${S.escolhido===c.id?'selected':''}>${esc(c.titulo)}</option>`).join('');
  $('main').removeAttribute('style');
  $('main').innerHTML = `<form class="form" id="f-cad" novalidate>
    <div class="eyebrow">Cadastro gratuito</div>
    <h1 class="h1" style="margin-bottom:6px">Comece a <span class="grad">estudar agora</span></h1>
    <p class="hp">Preencha seus dados, escolha o curso e confirme seu e-mail e WhatsApp. <button class="link inl" type="button" data-act="entrar">Já tenho cadastro</button></p>
    <div class="obrig">🛡️ <span>${AVISO_OBRIGATORIO}</span></div>
    <div class="fprog-w"><div class="fprog"><i id="fprog"></i></div><span id="fprog-t">0% preenchido</span></div>
    <div class="card fcard rise" style="--c:#22d3ee;--c2:#3b82f6"><h3 class="fsec"><span class="fico">📇</span>Seus dados</h3><div class="fgrid">
      <label class="fl wide">Nome completo<input name="nome" autocomplete="name" required maxlength="120"></label>
      <label class="fl">Idade<input name="idade" type="number" inputmode="numeric" min="5" max="120" required></label>
      <label class="fl wide">E-mail<input name="email" type="email" autocomplete="email" required maxlength="120" placeholder="voce@exemplo.com" value="${esc(EMAIL_SESSAO || '')}" ${EMAIL_SESSAO ? 'readonly' : ''}><small>${EMAIL_SESSAO ? '✅ E-mail já confirmado.' : 'Vamos enviar um código de confirmação para este e-mail.'}</small></label>
      <label class="fl">Telefone / WhatsApp<input name="telefone" type="tel" autocomplete="tel" placeholder="(11) 91234-5678" required maxlength="25"><small>Precisa ser um número com WhatsApp: o código chega por lá.</small></label>
      <label class="fl">País<input name="pais" autocomplete="country-name" value="Brasil" required maxlength="60"></label>
      <label class="fl">CEP<input name="cep" inputmode="numeric" autocomplete="postal-code" placeholder="00000-000" required maxlength="12"><small id="cep-info"></small></label>
      <label class="fl wide" id="estado-wrap"></label>
    </div></div>
    <div class="card fcard rise" style="--c:#c084fc;--c2:#ec4899;--d:.08s"><h3 class="fsec"><span class="fico">🧑‍💼</span>Sobre você</h3>
    <div class="fgrid">
      <label class="fl">Profissão<input name="profissao" required maxlength="80" placeholder="Ex.: Administrador, Técnica de enfermagem"><small>Se ainda não tem, escreva "Nenhuma".</small></label>
      <label class="fl">Ocupação atual<input name="ocupacao" required maxlength="80" placeholder="Ex.: Analista de compras, autônomo, procurando emprego"></label>
      <fieldset class="fl radios"><legend>Está trabalhando?</legend>
        <label><input type="radio" name="trabalhando" value="sim" required> Sim</label><label><input type="radio" name="trabalhando" value="nao"> Não</label></fieldset>
      <fieldset class="fl radios"><legend>É estudante?</legend>
        <label><input type="radio" name="estudante" value="sim" required> Sim</label><label><input type="radio" name="estudante" value="nao"> Não</label></fieldset>
      <label class="fl wide">Principal objetivo com o curso<select name="objetivo" required><option value="">Selecione</option>${OBJETIVOS.map(o => `<option>${o}</option>`).join('')}</select></label>
      <label class="fl wide">Conte um pouco mais (opcional)<textarea name="objetivo_detalhe" maxlength="300" rows="3" placeholder="O que você espera conseguir fazer depois do curso?"></textarea></label>
    </div></div>
    <div class="card fcard rise" style="--c:#4ade80;--c2:#a3e635;--d:.16s"><h3 class="fsec"><span class="fico">🎓</span>Curso</h3>
    <div class="fgrid">
      <label class="fl wide">Escolha o curso<select name="curso" required>${opcoes}</select></label>
    </div>
    <p class="nota">🔒 Não pedimos CPF, RG nem nenhum documento com foto.</p>
    <label class="check"><input type="checkbox" name="lgpd" required><span>Autorizo o uso destes dados pelo Portal de Estudos para acompanhar meu progresso nos cursos e para receber códigos de confirmação e avisos sobre meus estudos por e-mail e WhatsApp.</span></label>
    <div class="err" id="cad-err" role="alert"></div>
    <button class="next" type="submit" id="cad-ok">Continuar para a confirmação ➜</button>
    </div>
    <button class="link" type="button" data-act="cursos">← Voltar aos cursos</button>
  </form>`;
  renderEstado();
  if (VER.dados) preencherCadastro(VER.dados, VER.curso);
  atualizarPreenchimento();
}

function preencherCadastro(d, curso){
  const f = $('f-cad').elements;
  ['nome','idade','telefone','pais','cep','profissao','ocupacao','objetivo','objetivo_detalhe'].forEach(k => { if (d[k] != null) f[k].value = d[k]; });
  if (!EMAIL_SESSAO && VER.email) f.email.value = VER.email;
  ['trabalhando','estudante'].forEach(k => { if (d[k] != null) f[k].value = d[k] ? 'sim' : 'nao'; });
  if (curso) f.curso.value = curso;
  f.lgpd.checked = true;
  renderEstado(d.estado);
}

function mascararEmail(e){ const [u, dom] = String(e).split('@'); return (u.length <= 2 ? u[0] + '•' : u.slice(0, 2) + '•'.repeat(Math.min(6, u.length - 2))) + '@' + dom; }
function mascararFone(t){ const d = String(t).replace(/\D/g, ''); return d.length > 4 ? '•••• ' + d.slice(-4) : t; }

function renderVerificar(){
  const email = VER.etapa === 'email';
  const passo = (n, nome, st) => `<div class="vstep ${st}"><i>${st === 'ok' ? '✓' : n}</i><span>${nome}</span></div>`;
  const destino = email ? `<b>${esc(mascararEmail(VER.email))}</b>` : `<b>${esc(mascararFone(ALUNO ? ALUNO.telefone : ''))}</b> no WhatsApp`;
  const espera = Math.max(0, Math.ceil(((VER.cooldownAte || 0) - Date.now()) / 1000));
  $('main').removeAttribute('style');
  $('main').innerHTML = `<div class="form vform">
    <div class="eyebrow">Etapa obrigatória</div>
    <h1 class="h1" style="margin-bottom:6px">Confirme seu <span class="grad">${email ? 'e-mail' : 'WhatsApp'}</span></h1>
    <div class="obrig">🛡️ <span>${AVISO_OBRIGATORIO}</span></div>
    <div class="vsteps">${passo(1, 'E-mail', email ? 'cur' : 'ok')}${passo(2, 'WhatsApp', email ? '' : 'cur')}${passo(3, 'Acesso liberado', '')}</div>
    <form class="card fcard rise" id="f-ver" novalidate style="--c:${email ? '#22d3ee;--c2:#3b82f6' : '#4ade80;--c2:#22c55e'}">
      <h3 class="fsec"><span class="fico">${email ? '✉️' : '📱'}</span>Digite o código de 6 números</h3>
      <p class="hp" style="margin:0 0 14px">${VER.enviado ? 'Enviamos um código para ' + destino + '. Ele vale por 10 minutos.' : 'Enviando código para ' + destino + '…'}${email ? ' Confira também a caixa de spam. Se chegar um <b>link</b> em vez do código, basta clicar nele neste aparelho.' : ''}</p>
      <input class="otp" name="codigo" inputmode="numeric" autocomplete="one-time-code" maxlength="6" pattern="[0-9]{6}" placeholder="••••••" aria-label="Código de confirmação">
      ${VER.codigoDemo ? `<div class="demo-code">🧪 Modo demonstração: nada é enviado de verdade. Seu código é <b>${VER.codigoDemo}</b></div>` : ''}
      <div class="err" id="ver-err" role="alert">${esc(VER.erro || '')}</div>
      <button class="next" type="submit" id="ver-ok">Confirmar ${email ? 'e-mail' : 'WhatsApp'} ➜</button>
      <div class="vacts">
        <button class="link" type="button" data-act="reenviar" id="ver-reenviar" ${espera ? 'disabled' : ''}>${espera ? 'Reenviar em ' + espera + 's' : 'Reenviar código'}</button>
        ${VER.dados || ALUNO ? `<button class="link" type="button" data-act="corrigir">${email ? 'Corrigir e-mail' : 'Corrigir telefone'}</button>` : ''}
      </div>
    </form>
    <button class="link" type="button" data-act="cursos">← Voltar aos cursos</button>
  </div>`;
  const inp = document.querySelector('#f-ver .otp'); if (inp) inp.focus();
  clearTimeout(VER.timer);
  if (espera) contarReenvio();
}

function contarReenvio(){
  const b = $('ver-reenviar'); if (!b || S.view !== 'verificar') return;
  const s = Math.max(0, Math.ceil(((VER.cooldownAte || 0) - Date.now()) / 1000));
  b.disabled = s > 0; b.textContent = s ? 'Reenviar em ' + s + 's' : 'Reenviar código';
  if (s) VER.timer = setTimeout(contarReenvio, 1000);
}

function renderEntrar(){
  $('main').removeAttribute('style');
  $('main').innerHTML = `<form class="form vform" id="f-entrar" novalidate>
    <div class="eyebrow">Já tenho cadastro</div>
    <h1 class="h1" style="margin-bottom:6px">Entrar no <span class="grad">portal</span></h1>
    <p class="hp">Use o e-mail do seu cadastro. Enviamos um código para confirmar que é você, sem senha. Assim você continua seus cursos em qualquer aparelho e se inscreve nos outros.</p>
    <div class="card fcard rise" style="--c:#22d3ee;--c2:#c084fc">
      <h3 class="fsec"><span class="fico">🔑</span>Seu e-mail</h3>
      <label class="fl">E-mail<input name="email" type="email" autocomplete="email" required maxlength="120" placeholder="voce@exemplo.com"></label>
      <div class="err" id="ent-err" role="alert"></div>
      <button class="next" type="submit" id="ent-ok">Receber código ➜</button>
    </div>
    <button class="link" type="button" data-act="cadastro">Ainda não tenho cadastro</button>
  </form>`;
  document.querySelector('#f-entrar input').focus();
}

const OBRIGATORIOS = ['nome','email','idade','telefone','pais','cep','estado','profissao','ocupacao','trabalhando','estudante','objetivo','curso','lgpd'];
function atualizarPreenchimento(){
  const f = $('f-cad'); if (!f) return;
  const feitos = OBRIGATORIOS.filter(n => { const el = f.elements[n]; if (!el) return false; return el.type === 'checkbox' ? el.checked : String(el.value || '').trim() !== ''; }).length;
  const pct = Math.round(feitos / OBRIGATORIOS.length * 100);
  $('fprog').style.width = pct + '%';
  $('fprog-t').textContent = pct === 100 ? 'Tudo pronto ✓' : pct + '% preenchido';
}

function ehBrasil(){ const p = $('f-cad').elements.pais.value.trim().toLowerCase(); return p === 'brasil' || p === 'brazil' || p === 'br'; }
function renderEstado(valor){
  const w = $('estado-wrap'), atual = valor != null ? valor : (w.querySelector('[name=estado]') || {}).value || '';
  w.innerHTML = ehBrasil()
    ? `Estado<select name="estado" required><option value="">Selecione</option>${UFS.map(u => `<option ${u===atual?'selected':''}>${u}</option>`).join('')}</select>`
    : `Estado / Província<input name="estado" required maxlength="60" value="${esc(atual)}">`;
}

/* ============ RENDER: CURSO ============ */
function renderSidebar(){
  if (!C) { $('sb').innerHTML = ''; return; }
  const d = D();
  $('sb').innerHTML = `<button class="homebtn" data-act="cursos"><span class="hi">🎓</span>Todos os cursos</button>
  <button class="homebtn ${S.view==='home'?'cur':''}" data-act="home"><span class="hi">🏠</span>Início do curso</button>` +
  C.conteudo.modulos.map(m => {
    const done = modDone(m), open = unlocked(m.lessons[0].id);
    const status = done ? 'Concluído' : (open ? modCount(m) + ' de ' + m.lessons.length + ' lições' : 'Bloqueado');
    const tool = prompts()[m.id] ? `<button class="modtool" data-act="tool" data-mod="${m.id}" ${done?'':'disabled'} title="${done?'Abrir prompts do módulo':'Conclua o módulo para liberar'}" aria-label="Toolbox do módulo ${m.id}">${done?'🧰':'🔒'}</button>` : '';
    return `<div class="mod" style="${tstyle(m.id)};--p:${modPct(m)}">
      <div class="modh"><div class="ring"><span class="modic">${m.icon}</span></div>
        <div class="modt">Módulo ${m.id}: ${m.title}<div class="mods">${status}</div></div>${tool}</div>
      ${m.lessons.map(l => {
        const ok = unlocked(l.id), cur = S.cur === l.id && S.view === 'lesson';
        const st = d[l.id] ? '✅' : (ok ? '▶️' : '🔒');
        return `<button class="les ${cur?'cur':''}" data-act="go" data-id="${l.id}" ${ok?'':'disabled'}><span class="st">${st}</span><span>${l.id} ${l.title}</span></button>`;
      }).join('')}
    </div>`;
  }).join('') + `<button class="reset" data-act="reset">Reiniciar meu progresso neste curso</button>`;
}

function renderProgress(){
  const noCurso = !!C && !VIEWS_PORTAL.includes(S.view);
  const tb = noCurso && temToolbox();
  $('app').classList.toggle('full', !noCurso);
  $('titulo').textContent = noCurso ? C.titulo : 'Portal de Estudos';
  ['pb-wrap','pl'].forEach(id => $(id).classList.toggle('off', !noCurso));
  $('btn-tool').classList.toggle('off', !tb);
  $('bn-home').classList.toggle('off', !noCurso);
  $('bn-menu').classList.toggle('off', !noCurso);
  $('bn-tool').classList.toggle('off', !tb);
  const on = (id, v) => $(id).classList.toggle('on', v);
  on('bn-cursos', !noCurso); on('bn-home', noCurso && S.view !== 'lesson'); on('bn-menu', noCurso && S.view === 'lesson'); on('bn-tool', TB.open);
  if (!noCurso) return;
  const n = C.licoes.filter(l => D()[l.id]).length, pct = Math.round(n / C.total * 100);
  $('pb').style.width = pct + '%';
  $('pl').textContent = n + ' de ' + C.total + ' lições';
  $('pb-wrap').setAttribute('aria-valuenow', pct);
}

function countUp(el, to){
  if (reduced()) { el.textContent = to + '%'; return; }
  const t0 = performance.now();
  (function f(t){ const k = Math.min(1,(t-t0)/1100); el.textContent = Math.round(to*(1-Math.pow(1-k,3))) + '%'; if (k<1) requestAnimationFrame(f); })(t0);
}

function renderHome(){
  const total = C.total, n = C.licoes.filter(l => D()[l.id]).length, pct = Math.round(n/total*100), x = xp();
  $('main').removeAttribute('style');
  $('main').innerHTML = `<section class="hero">
      <div><h1 class="hh">${esc(C.titulo)}</h1>
      <p class="hp">${esc(C.descricao)}</p>
      <div class="chips"><span class="chip">⚡ ${x} XP</span><span class="chip">🏅 ${level(x)}</span><span class="chip">📘 ${n} de ${total} lições</span></div>
      <button class="next" data-act="continue">${n===0?'Começar agora':(n===total?'Revisar o curso':'Continuar estudando')} ➜</button></div>
      <div class="bigring" id="bigring"><div class="bigin"><b id="bignum">0%</b><span>concluído</span></div></div>
    </section>
    <div class="grid">${C.conteudo.modulos.map((m,i) => {
      const lock = !unlocked(m.lessons[0].id), fin = modDone(m);
      return `<div class="mc ${lock?'lock':''} ${fin?'fin':''}" role="button" tabindex="0" data-act="openmod" data-mod="${m.id}" style="${tstyle(m.id)};--d:${i*0.5}s">
        <div class="mtile">${m.icon}</div>
        <div><h3>Módulo ${m.id}</h3><div class="mt">${m.title}</div><div class="ms">${m.sub || ''}</div></div>
        <div class="mdots">${m.lessons.map(l => `<i class="${D()[l.id]?'on':''}" title="${esc(l.title)}"></i>`).join('')}</div>
        <div class="mfoot"><span>${modCount(m)} de ${m.lessons.length} lições</span><span class="mst">${fin?'✅ Concluído':lock?'🔒 Bloqueado':'▶ Abrir'}</span></div>
      </div>`; }).join('')}</div>`;
  setTimeout(() => { const r = $('bigring'); if (r) r.style.setProperty('--p', pct); }, 60);
  countUp($('bignum'), pct);
}

function renderModuloConcluido(){
  const mod = modOf(S.modDone || 1), next = C.conteudo.modulos.find(x => x.id === mod.id + 1);
  const msg = (C.conteudo.conclusaoModulo || {})[mod.id] || '';
  const tem = !!prompts()[mod.id];
  $('main').setAttribute('style', tstyle(mod.id));
  $('main').innerHTML = `<div class="crumb">Módulo ${mod.id}: ${mod.title}</div>
    <div class="done-box"><div class="trophy">🏆</div>
    <h2>${next ? 'Módulo ' + mod.id + ' concluído!' : 'Curso concluído!'}</h2>
    <p>${msg}${tem ? ' Os prompts deste módulo foram liberados no Code Toolbox.' : ''}</p>
    <div class="row">${tem ? `<button class="next alt" data-act="tool" data-mod="${mod.id}">🧰 Abrir Code Toolbox</button>` : ''}
    ${next ? `<button class="next" data-act="go" data-id="${next.lessons[0].id}" style="${tstyle(next.id)}">Ir para o Módulo ${next.id} ➜</button>` : `<button class="next" data-act="cursos">Ver outros cursos</button>`}</div></div>`;
}

function renderLicao(){
  const m = $('main'), L = byId(S.cur), mod = modOf(L.mod), d = D();
  m.setAttribute('style', tstyle(mod.id));
  const lessonDots = mod.lessons.map(l => `<i class="${d[l.id]?'on':(l.id===L.id?'now':'')}"></i>`).join('');
  const head = `<div class="lh"><button class="ltile" data-act="spin" aria-label="Ícone da lição">${iconeLicao(L)}</button>
    <div><div class="crumb">Módulo ${mod.id}: ${mod.title} · Lição ${L.id}${L.min?' · '+L.min+' min':''}</div><h1 class="h1">${L.title}</h1></div></div><div class="dots">${lessonDots}</div>`;
  if (L.soon || !L.ch) {
    m.innerHTML = head + (L.body || []).join('') + `<div class="card soon"><div style="font-size:46px">🚧</div><h3>Conteúdo em construção</h3><p style="margin:6px auto 0">${L.teaser || ''}</p></div>`;
    return;
  }
  const ss = SESSION[C.id + ':' + L.id] || { tried:[] };
  const solved = !!d[L.id];
  const c = L.ch, letters = ['A','B','C','D','E'];
  const opts = c.opts.map((o,i) => {
    const tried = ss.tried.includes(i);
    let cls = '', dis = '';
    if (solved) { dis = 'disabled'; cls = o.ok ? 'right' : 'dim'; }
    else if (tried) { dis = 'disabled'; cls = 'wrong' + (i === ss.last ? ' shake' : ''); }
    return `<button class="opt ${cls}" data-act="ans" data-i="${i}" ${dis}><span class="l l${letters[i]}">${letters[i]}</span><span>${o.t}</span></button>`;
  }).join('');
  let fb = '';
  if (solved) {
    const right = c.opts.find(o => o.ok);
    fb = `<div class="fb ok pop"><b>✅ ${C.conteudo.acerto || 'Acertou!'} +100 XP</b><span>${right.why}</span></div>`;
  } else if (ss.tried.length) {
    const last = c.opts[ss.tried[ss.tried.length-1]];
    fb = `<div class="fb no pop"><b>❌ Ainda não.</b><span>${last.why} Tente outra alternativa.</span></div>`;
  }
  const i = idxOf(L.id), isLastOfMod = mod.lessons[mod.lessons.length-1].id === L.id;
  let nav = '';
  if (solved) {
    if (isLastOfMod && modDone(mod)) nav = `<button class="next alt" data-act="finish" data-mod="${mod.id}">🎉 Concluir módulo</button>`;
    else if (FLAT()[i+1]) nav = `<button class="next" data-act="next">Avançar para próxima lição ➜</button>`;
  }
  m.innerHTML = head + L.body.join('') + `<section class="os" aria-label="Desafio">
      <div class="who">${c.who} diz:</div>
      <div class="says">"${c.says}"</div>
      <div class="q">${c.q}</div>
      ${opts}
      <div id="fb">${fb}</div>
      ${nav}
    </section>`;
  rodarGancho();
}

function rodarGancho(){
  if (!C || S.view !== 'lesson') return;
  const g = (C.conteudo.aoAbrirLicao || {})[S.cur];
  if (g) { try { g($('main')); } catch(e){ console.error(e); } }
}

function renderMain(keep){
  if (S.view === 'cursos') renderCursos();
  else if (S.view === 'cadastro') renderCadastro();
  else if (S.view === 'verificar') renderVerificar();
  else if (S.view === 'entrar') renderEntrar();
  else if (S.view === 'home') renderHome();
  else if (S.view === 'moduleDone') renderModuloConcluido();
  else renderLicao();
  if (!keep) window.scrollTo(0,0);
}

function renderToolbox(){
  const d = $('drawer');
  if (!C || !temToolbox()) { TB.open = false; d.classList.remove('on'); $('shade').classList.remove('on'); return; }
  const tabs = C.conteudo.modulos.filter(m => prompts()[m.id]).map(m => {
    const ok = modDone(m);
    return `<button class="tab ${TB.mod===m.id?'on':''}" style="${tstyle(m.id)}" data-act="tbmod" data-mod="${m.id}" ${ok?'':'disabled'}>${ok?m.icon+' ':'🔒 '}Módulo ${m.id}</button>`;
  }).join('');
  const mod = modOf(TB.mod);
  let body;
  if (!mod || !modDone(mod) || !prompts()[mod.id]) {
    body = `<div class="lockmsg"><div style="font-size:40px">🔒</div><p>Conclua todas as lições do módulo para liberar os prompts.</p></div>`;
  } else {
    body = `<div style="${tstyle(mod.id)}"><p style="margin:0 0 14px; color:var(--muted); font-size:14px">Troque o que está entre [COLCHETES] pelos dados do seu caso e cole no Cursor.</p>` +
      prompts()[mod.id].map((p,k) => `<div class="pr"><div class="prh"><b>${p.title}</b><button class="cp" data-act="copy" data-k="${k}">Copiar</button></div><div class="prd">${p.desc}</div><pre>${esc(p.text)}</pre></div>`).join('') + `</div>`;
  }
  d.innerHTML = `<div class="dh"><h2>🧰 Code Toolbox</h2><button class="x" data-act="toolclose" aria-label="Fechar">✕</button></div>
    <div class="tabs">${tabs}</div><div class="db">${body}</div>`;
  d.classList.toggle('on', TB.open); $('shade').classList.toggle('on', TB.open);
}

function renderAll(keep){ renderSidebar(); renderProgress(); renderMain(keep); renderToolbox(); }

/* ============ EFEITOS ============ */
function confetti(){
  if (reduced()) return;
  const cv = document.createElement('canvas'); cv.className = 'confetti'; cv.width = innerWidth; cv.height = innerHeight;
  document.body.appendChild(cv); const g = cv.getContext('2d');
  const cols = ['#ff5a5f','#fbbf24','#4ade80','#22d3ee','#c084fc','#ec4899'];
  const P = Array.from({length:130}, () => ({ x:innerWidth/2 + (Math.random()-.5)*220, y:innerHeight*0.62, vx:(Math.random()-.5)*15, vy:-Math.random()*17-4, s:5+Math.random()*6, c:cols[(Math.random()*cols.length)|0], r:Math.random()*6, vr:(Math.random()-.5)*.4 }));
  let t = 0;
  (function f(){
    g.clearRect(0,0,cv.width,cv.height);
    P.forEach(p => { p.vy += .45; p.x += p.vx; p.y += p.vy; p.r += p.vr; g.save(); g.translate(p.x,p.y); g.rotate(p.r); g.fillStyle = p.c; g.fillRect(-p.s/2,-p.s/2,p.s,p.s*.6); g.restore(); });
    if (++t < 120) requestAnimationFrame(f); else cv.remove();
  })();
}
let toastT;
function toast(msg){ const t = $('toast'); t.textContent = msg; t.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('on'), 2600); }

/* ============ AÇÕES ============ */
function closeMenu(){ $('sb').classList.remove('on'); $('ov').classList.remove('on'); }
function goLesson(id){ S.cur = id; S.view = 'lesson'; closeMenu(); renderAll(); }
function irParaCursos(){ S.view = 'cursos'; TB.open = false; closeMenu(); renderAll(); }

async function abrirCurso(id){
  const c = cursoPorId(id); if (!c) return;
  if (!ALUNO) { S.escolhido = id; S.view = 'cadastro'; renderAll(); return; }
  if (!DB.verificado(ALUNO)) { iniciarVerificacao({ curso:id }); return; }
  if (!MATR.includes(id)) {
    try { await DB.matricular(id); MATR.push(id); }
    catch(e){ console.error(e); toast('Não foi possível iniciar o curso. Verifique a internet.'); return; }
  }
  C = c; S.view = 'home'; TB = { open:false, mod:1 }; SESSION = {};
  closeMenu(); renderAll();
}

async function enviarCadastro(form){
  const f = form.elements, err = $('cad-err');
  const dados = {
    nome: f.nome.value.trim().replace(/\s+/g, ' '),
    idade: parseInt(f.idade.value, 10),
    telefone: f.telefone.value.trim(),
    pais: f.pais.value.trim(),
    estado: f.estado.value.trim(),
    cep: f.cep.value.trim(),
    profissao: f.profissao.value.trim(),
    ocupacao: f.ocupacao.value.trim(),
    trabalhando: f.trabalhando.value ? f.trabalhando.value === 'sim' : null,
    estudante: f.estudante.value ? f.estudante.value === 'sim' : null,
    objetivo: f.objetivo.value,
    objetivo_detalhe: f.objetivo_detalhe.value.trim(),
    aceita_contato: f.lgpd.checked
  };
  const email = f.email.value.trim().toLowerCase();
  const curso = f.curso.value;
  const digitos = dados.telefone.replace(/\D/g, '');
  let msg = '';
  if (dados.nome.split(' ').length < 2) msg = 'Informe nome e sobrenome.';
  else if (!RE_EMAIL.test(email)) msg = 'Informe um e-mail válido.';
  else if (!(dados.idade >= 5 && dados.idade <= 120)) msg = 'Informe uma idade válida.';
  else if (digitos.length < 10 || digitos.length > 15) msg = 'Informe o telefone com DDD.';
  else if (!dados.pais) msg = 'Informe o país.';
  else if (!dados.estado) msg = 'Informe o estado.';
  else if (!dados.cep) msg = 'Informe o CEP / código postal.';
  else if (ehBrasil() && dados.cep.replace(/\D/g, '').length !== 8) msg = 'O CEP deve ter 8 números.';
  else if (!dados.profissao) msg = 'Informe sua profissão (ou "Nenhuma").';
  else if (!dados.ocupacao) msg = 'Informe sua ocupação atual.';
  else if (dados.trabalhando === null) msg = 'Diga se está trabalhando.';
  else if (dados.estudante === null) msg = 'Diga se é estudante.';
  else if (!dados.objetivo) msg = 'Escolha seu principal objetivo com o curso.';
  else if (!curso) msg = 'Escolha um curso.';
  else if (!f.lgpd.checked) msg = 'É preciso autorizar o uso dos dados para continuar.';
  err.textContent = msg;
  if (msg) return;
  const btn = $('cad-ok'); btn.disabled = true; btn.textContent = 'Salvando…';
  if (EMAIL_SESSAO && EMAIL_SESSAO === email) {
    try {
      ALUNO = await DB.cadastrar(dados);
      VER = { dados, curso, email };
      iniciarVerificacao({ curso, dados });
    } catch(e){
      console.error(e);
      err.textContent = 'Não foi possível salvar o cadastro. Tente novamente em instantes.';
      btn.disabled = false; btn.textContent = 'Continuar para a confirmação ➜';
    }
    return;
  }
  VER = { etapa:'email', email, dados, curso, modo:'novo' };
  S.view = 'verificar'; renderAll();
  enviarCodigo();
}

/* ============ CONFIRMAÇÃO DE E-MAIL E WHATSAPP ============ */
function iniciarVerificacao(o){
  const precisaEmail = !ALUNO || !ALUNO.email_verificado;
  VER = Object.assign({ etapa: precisaEmail ? 'email' : 'whats', email: (ALUNO && ALUNO.email) || EMAIL_SESSAO, modo: ALUNO ? 'pendente' : 'novo' }, VER.dados ? { dados:VER.dados } : {}, o);
  S.view = 'verificar'; closeMenu(); renderAll();
  if (VER.etapa === 'email' && !VER.email) { S.view = 'entrar'; renderAll(); return; }
  enviarCodigo();
}

async function enviarCodigo(){
  clearTimeout(VER.timer);
  VER.erro = ''; VER.enviado = false; VER.codigoDemo = null;
  renderVerificar();
  if (VER.etapa === 'email') guardarPendente();
  try {
    const r = VER.etapa === 'email' ? await DB.enviarCodigoEmail(VER.email) : await DB.enviarCodigoWhats();
    VER.enviado = true; VER.codigoDemo = (r && r.codigoDemo) || null;
    VER.cooldownAte = Date.now() + 60e3;
  } catch(e){
    console.error(e);
    VER.erro = /rate|seconds|segundos|aguarde/i.test(e.message || '') ? 'Muitos pedidos seguidos. Aguarde um minuto e peça um novo código.' : (e.message && /[ãçéíóú]/.test(e.message) ? e.message : 'Não foi possível enviar o código agora. Tente novamente.');
  }
  if (S.view === 'verificar') renderVerificar();
}

const CHAVE_PENDENTE = 'portal-estudos-pendente';
function guardarPendente(){ try { localStorage.setItem(CHAVE_PENDENTE, JSON.stringify({ email:VER.email, dados:VER.dados || null, curso:VER.curso || null, modo:VER.modo })); } catch(e){} }
function lerPendente(){ try { return JSON.parse(localStorage.getItem(CHAVE_PENDENTE)); } catch(e){ return null; } }
function limparPendente(){ try { localStorage.removeItem(CHAVE_PENDENTE); } catch(e){} }

async function continuarAposEmail(){
  EMAIL_SESSAO = VER.email;
  if (VER.dados) ALUNO = await DB.cadastrar(VER.dados);
  else ALUNO = await DB.alunoAtual();
  if (!ALUNO) { toast('E-mail confirmado ✓ Agora complete seu cadastro.'); S.escolhido = VER.curso || S.escolhido || (CURSOS[0] && CURSOS[0].id); S.view = 'cadastro'; renderAll(); return; }
  [MATR, PROG] = await Promise.all([DB.matriculas(), DB.progresso()]);
  if (!ALUNO.whatsapp_verificado) { toast('E-mail confirmado ✓'); VER.etapa = 'whats'; VER.cooldownAte = 0; S.view = 'verificar'; renderAll(); enviarCodigo(); return; }
  await liberarAcesso();
}

async function checarLinkEmail(){
  if (S.view !== 'verificar' || VER.etapa !== 'email' || VER.conferindo) return;
  const email = await DB.emailDaSessao();
  if (!email || email !== VER.email) return;
  VER.conferindo = true;
  try { await continuarAposEmail(); } catch(e){ console.error(e); } finally { VER.conferindo = false; }
}

async function confirmarCodigo(form){
  const codigo = form.elements.codigo.value.replace(/\D/g, ''), err = $('ver-err');
  if (codigo.length !== 6) { err.textContent = 'O código tem 6 números.'; return; }
  const btn = $('ver-ok'); if (btn.disabled) return; btn.disabled = true; btn.textContent = 'Conferindo…';
  try {
    if (VER.etapa === 'email') {
      await DB.verificarCodigoEmail(VER.email, codigo);
      await continuarAposEmail();
      return;
    } else {
      await DB.verificarCodigoWhats(codigo);
      ALUNO.whatsapp_verificado = true;
    }
    await liberarAcesso();
  } catch(e){
    console.error(e);
    VER.erro = e.message && /[ãçéíóú]/.test(e.message) ? e.message : 'Não foi possível confirmar. Tente novamente.';
    renderVerificar();
  }
}

async function liberarAcesso(){
  const curso = VER.curso, nome = ALUNO.nome.split(' ')[0];
  VER = {}; limparPendente();
  confetti();
  toast((curso ? 'Tudo confirmado! Bom estudo, ' : 'Bem-vindo de volta, ') + nome + ' 🎉');
  if (curso && cursoPorId(curso)) await abrirCurso(curso);
  else irParaCursos();
}

async function pedirEntrada(form){
  const email = form.elements.email.value.trim().toLowerCase(), err = $('ent-err');
  if (!RE_EMAIL.test(email)) { err.textContent = 'Informe um e-mail válido.'; return; }
  VER = { etapa:'email', email, modo:'entrar', curso:S.escolhido };
  S.view = 'verificar'; renderAll();
  enviarCodigo();
}

async function sair(){
  try { await DB.sair(); } catch(e){ console.error(e); }
  ALUNO = null; EMAIL_SESSAO = null; MATR = []; PROG = {}; C = null; VER = {}; limparPendente();
  irParaCursos(); toast('Você saiu da sua conta.');
}

async function buscarCep(input){
  const cep = input.value.replace(/\D/g, '');
  if (!ehBrasil() || cep.length !== 8 || input.dataset.buscado === cep) return;
  input.dataset.buscado = cep;
  input.value = cep.slice(0,5) + '-' + cep.slice(5);
  const info = $('cep-info'); info.textContent = 'Buscando…';
  try {
    const r = await fetch('https://viacep.com.br/ws/' + cep + '/json/').then(x => x.json());
    if (r.erro) { info.textContent = 'CEP não encontrado. Confira os números.'; return; }
    info.textContent = r.localidade + ' / ' + r.uf;
    renderEstado(r.uf);
    atualizarPreenchimento();
  } catch(e){ info.textContent = ''; }
}

function copyText(txt, btn){
  const ok = () => { btn.textContent = 'Copiado ✓'; btn.classList.add('done'); setTimeout(()=>{ btn.textContent='Copiar'; btn.classList.remove('done'); }, 1800); };
  const fallback = () => { try { const t = document.createElement('textarea'); t.value = txt; t.style.position='fixed'; t.style.opacity='0'; document.body.appendChild(t); t.select(); document.execCommand('copy'); document.body.removeChild(t); ok(); } catch(e){ btn.textContent='Selecione e copie'; } };
  try { navigator.clipboard.writeText(txt).then(ok, fallback); } catch(e){ fallback(); }
}

async function responder(i){
  const L = byId(S.cur), key = C.id + ':' + L.id;
  const ss = SESSION[key] = SESSION[key] || { tried:[] };
  if (L.ch.opts[i].ok) {
    D()[L.id] = true; renderAll(true); confetti();
    const mod = modOf(L.mod); if (modDone(mod)) toast('🏆 Módulo ' + mod.id + ' completo!');
    try { await DB.concluirLicao(C.id, L.id); }
    catch(e){ console.error(e); toast('⚠️ Não foi possível salvar o progresso. Verifique a internet.'); }
  } else { if (!ss.tried.includes(i)) ss.tried.push(i); ss.last = i; renderMain(true); }
  const fb = $('fb'); if (fb && fb.scrollIntoView) fb.scrollIntoView({ behavior: reduced() ? 'auto' : 'smooth', block:'center' });
}

document.addEventListener('click', e => {
  const t = e.target.closest('[data-act]'); if (!t) return;
  const a = t.dataset.act;
  if (a === 'cursos') irParaCursos();
  else if (a === 'cadastro') { S.escolhido = S.escolhido || (CURSOS[0] && CURSOS[0].id); S.view = 'cadastro'; renderAll(); }
  else if (a === 'entrar') { VER = {}; S.view = 'entrar'; renderAll(); }
  else if (a === 'verificar') iniciarVerificacao({});
  else if (a === 'reenviar') enviarCodigo();
  else if (a === 'corrigir') {
    clearTimeout(VER.timer);
    if (VER.modo === 'entrar' && !ALUNO) { S.view = 'entrar'; renderAll(); return; }
    if (!VER.dados && ALUNO) VER.dados = ALUNO;
    VER.curso = VER.curso || S.escolhido;
    S.view = 'cadastro'; renderAll();
  }
  else if (a === 'sair') sair();
  else if (a === 'curso') abrirCurso(t.dataset.id);
  else if (!C) return;
  else if (a === 'menu') { $('sb').classList.toggle('on'); $('ov').classList.toggle('on'); }
  else if (a === 'home') { S.view = 'home'; closeMenu(); renderAll(); }
  else if (a === 'continue') { const nx = FLAT().find(l => !D()[l.id]) || FLAT()[0]; goLesson(nx.id); }
  else if (a === 'openmod') {
    const m = modOf(parseInt(t.dataset.mod,10));
    if (!unlocked(m.lessons[0].id)) { toast('🔒 Conclua o módulo anterior para liberar este'); return; }
    const nx = m.lessons.find(l => !D()[l.id] && unlocked(l.id)) || m.lessons[0];
    goLesson(nx.id);
  }
  else if (a === 'go') { const id = t.dataset.id; if (unlocked(id)) goLesson(id); }
  else if (a === 'spin') { t.classList.remove('spin'); void t.offsetWidth; t.classList.add('spin'); setTimeout(() => t.classList.remove('spin'), 750); }
  else if (a === 'ans') responder(parseInt(t.dataset.i,10));
  else if (a === 'next') { const i = idxOf(S.cur); if (FLAT()[i+1]) goLesson(FLAT()[i+1].id); }
  else if (a === 'finish') { S.view = 'moduleDone'; S.modDone = parseInt(t.dataset.mod,10); renderAll(); confetti(); }
  else if (a === 'tool') {
    if (!temToolbox()) return;
    const m = t.dataset.mod ? parseInt(t.dataset.mod,10) : null;
    if (m) TB.mod = m;
    else { const last = C.conteudo.modulos.filter(x => modDone(x) && prompts()[x.id]).pop(); if (!last) { toast('🔒 Conclua um módulo para liberar o Toolbox'); return; } TB.mod = last.id; }
    TB.open = true; closeMenu(); renderToolbox(); renderProgress();
  }
  else if (a === 'toolclose') { TB.open = false; renderToolbox(); renderProgress(); }
  else if (a === 'tbmod') { TB.mod = parseInt(t.dataset.mod,10); renderToolbox(); }
  else if (a === 'copy') { const k = parseInt(t.dataset.k,10); copyText(prompts()[TB.mod][k].text, t); }
  else if (a === 'reset') {
    if (!confirm('Apagar todo o seu progresso neste curso?')) return;
    DB.reiniciar(C.id).then(() => { PROG[C.id] = {}; SESSION = {}; S.view = 'home'; renderAll(); })
      .catch(err => { console.error(err); toast('Não foi possível reiniciar agora.'); });
  }
});
document.addEventListener('submit', e => {
  const id = e.target.id;
  if (id === 'f-cad') { e.preventDefault(); enviarCadastro(e.target); }
  else if (id === 'f-ver') { e.preventDefault(); confirmarCodigo(e.target); }
  else if (id === 'f-entrar') { e.preventDefault(); pedirEntrada(e.target); }
});
document.addEventListener('input', e => {
  if (e.target.name === 'pais' && e.target.form && e.target.form.id === 'f-cad') renderEstado();
  else if (e.target.name === 'cep' && e.target.form && e.target.form.id === 'f-cad') { if (e.target.value.replace(/\D/g, '').length === 8) buscarCep(e.target); }
  else if (e.target.classList.contains('otp')) {
    e.target.value = e.target.value.replace(/\D/g, '').slice(0, 6);
    if (e.target.value.length === 6) e.target.form.requestSubmit ? e.target.form.requestSubmit() : confirmarCodigo(e.target.form);
  }
  else if (S.view === 'lesson' && $('main').contains(e.target)) rodarGancho();
});
['input','change'].forEach(tipo => document.addEventListener(tipo, e => {
  if (e.target.form && e.target.form.id === 'f-cad') setTimeout(atualizarPreenchimento);
}));
document.addEventListener('focusout', e => { if (e.target.name === 'cep' && e.target.form && e.target.form.id === 'f-cad') buscarCep(e.target); });
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { TB.open = false; renderToolbox(); renderProgress(); closeMenu(); }
  if ((e.key === 'Enter' || e.key === ' ') && e.target.getAttribute && e.target.getAttribute('role') === 'button') { e.preventDefault(); e.target.click(); }
});

/* ============ INÍCIO ============ */
async function iniciar(){
  try {
    await DB.iniciar();
    CURSOS = await PORTAL.carregarCursos(false);
    [ALUNO, EMAIL_SESSAO] = await Promise.all([DB.alunoAtual(), DB.emailDaSessao()]);
    if (ALUNO) [MATR, PROG] = await Promise.all([DB.matriculas(), DB.progresso()]);
  } catch(e){
    console.error(e);
    $('main').innerHTML = '<div class="empty">Não foi possível carregar o portal. Verifique a internet e recarregue a página.</div>';
    return;
  }
  if (DB.modo === 'demo') { const b = $('demo-bar'); b.hidden = false; b.textContent = 'Modo demonstração: os dados ficam salvos só neste navegador.'; }
  renderAll();
  const pend = lerPendente();
  if (pend && EMAIL_SESSAO && pend.email === EMAIL_SESSAO && !DB.verificado(ALUNO)) {
    if (/[#&]access_token=/.test(location.hash)) history.replaceState(null, '', location.pathname + location.search);
    VER = Object.assign({ etapa:'email' }, pend);
    try { await continuarAposEmail(); } catch(e){ console.error(e); toast('Não foi possível continuar o cadastro. Tente de novo.'); }
    return;
  }
  const pedido = new URLSearchParams(location.search).get('curso');
  if (pedido && cursoPorId(pedido)) abrirCurso(pedido);
}
window.addEventListener('focus', () => { checarLinkEmail(); });
document.addEventListener('visibilitychange', () => { if (!document.hidden) checarLinkEmail(); });
iniciar();
})();
