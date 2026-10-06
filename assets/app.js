(function(){
'use strict';

const $ = id => document.getElementById(id);
const UFS = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'];
const OBJETIVOS = ['Conseguir um emprego','Crescer na carreira atual','Mudar de área','Empreender ou melhorar meu negócio','Aplicar no meu trabalho atual','Complementar os estudos','Conhecimento pessoal','Outro'];
const NIVEIS_PADRAO = [[1500,'Mestre'],[900,'Avançado'],[300,'Intermediário'],[0,'Iniciante']];

let CURSOS = [];
let ALUNO = null;
let MASTER = false;
const checarMaster = async () => { try { MASTER = await DB.ehMaster(); } catch(e){ MASTER = false; } await ajustarPrevia(); };
/* No site publicado, cursos em_breve com curso.js só carregam para o master. */
async function ajustarPrevia(){
  if (PORTAL.previaMaster === MASTER) return;
  PORTAL.previaMaster = MASTER;
  try { CURSOS = await PORTAL.carregarCursos(false); } catch(e){ console.error(e); }
}
const seloPrevia = () => PORTAL.modoPrevia ? 'PRÉVIA · EM BREVE' : 'PRÉVIA · SÓ MASTER';
let MATR = [];
let PROG = {};
let CERTS = [];
let S = { view:'cursos', cur:null, modDone:null, escolhido:null };
let SESSION = {};
let TB = { open:false, mod:1 };
let C = null;
let EMAIL_SESSAO = null;
let VER = {};
const VIEWS_PORTAL = ['cursos','cadastro','verificar','entrar','confirmar-whats','esqueci','nova-senha'];
const RE_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const WA_PORTAL = String((window.PORTAL_CONFIG || {}).whatsappPortal || '').replace(/\D/g, '');
const MODO_SENHA = () => !DB.codigoEmail;
const pedeConfirmacao = () => DB.codigoEmail || DB.exigirWhatsapp;
function textoObrigatorio(){
  const itens = [DB.codigoEmail && 'do e-mail', DB.exigirWhatsapp && 'do WhatsApp'].filter(Boolean);
  if (!itens.length) return 'O cadastro com e-mail e senha é <b>obrigatório</b> para se inscrever no portal, acessar o curso e se inscrever nos demais cursos no futuro.';
  return 'A confirmação ' + itens.join(' e ') + ' é <b>obrigatória</b> para concluir a inscrição no portal, acessar o curso e se inscrever nos demais cursos no futuro.';
}

/* ============ UTILITÁRIOS ============ */
function esc(s){ return String(s == null ? '' : s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }
const reduced = () => window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
const cursoPorId = id => CURSOS.find(c => c.id === id);
const pctCurso = c => { const d = PROG[c.id] || {}; return c.total ? Math.round(c.licoes.filter(l => d[l.id]).length / c.total * 100) : 0; };
const ccor = c => '--c:' + c.cores[0] + ';--c2:' + c.cores[1];
const completo = c => c.licoes.every(l => (PROG[c.id] || {})[l.id]);
const certDe = (tipo, ref) => CERTS.find(c => c.tipo === tipo && c.ref_id === ref);
const cursosDaTrilha = t => CURSOS.filter(c => !c.projeto_final && PORTAL.trilhaDe(c) === t);
const projetoFinal = t => CURSOS.find(c => c.projeto_final === t);
const trilhaLiberada = t => { const l = cursosDaTrilha(t); return (l.length > 0 && l.every(completo)) || PORTAL.modoPrevia || MASTER; };

/* ============ CURSO ABERTO ============ */
const D = () => PROG[C.id] || (PROG[C.id] = {});
const FLAT = () => C.licoes;
const byId = id => C.licoes.find(l => l.id === id);
const modOf = id => C.conteudo.modulos.find(m => m.id === id);
const idxOf = id => C.licoes.findIndex(l => l.id === id);
function unlocked(id){ if (MASTER) return true; const i = idxOf(id), d = D(); for (let k=0;k<i;k++){ if(!d[C.licoes[k].id]) return false; } return true; }
function modDone(m){ return m.lessons.every(l => D()[l.id]); }
function modCount(m){ return m.lessons.filter(l => D()[l.id]).length; }
function modPct(m){ return Math.round(modCount(m) / m.lessons.length * 100); }
function xp(){ return FLAT().filter(l => D()[l.id]).length * 100 + C.conteudo.modulos.filter(modDone).length * 200; }
function level(x){ return ((C.conteudo.niveis || NIVEIS_PADRAO).find(n => x >= n[0]) || [0,''])[1]; }
function tstyle(id){ const t = (C.conteudo.cores || {})[id] || PORTAL.paleta(id - 1); return '--c:' + t[0] + ';--c2:' + t[1]; }
const prompts = () => C.conteudo.prompts || {};
const temToolbox = () => Object.keys(prompts()).length > 0;
const toolLivre = m => MASTER || modDone(m);
/* Master sem cadastro de aluno confirmado: o progresso fica só neste navegador. */
const masterLocal = () => MASTER && !(ALUNO && DB.verificado(ALUNO));
const CHAVE_PROG_MASTER = 'portal-estudos-progresso-master';
const lerProgMaster = () => { try { return JSON.parse(localStorage.getItem(CHAVE_PROG_MASTER)) || {}; } catch(e){ return {}; } };
const gravarProgMaster = () => { try { localStorage.setItem(CHAVE_PROG_MASTER, JSON.stringify(PROG)); } catch(e){} };
function prepararMaster(){ if (masterLocal()) { PROG = lerProgMaster(); MATR = Object.keys(PROG); } }
async function salvarLicao(curso, licao){
  if (masterLocal()) { gravarProgMaster(); return; }
  await DB.concluirLicao(curso, licao);
}
const iconeLicao = L => (C.conteudo.iconesLicao || {})[L.id] || L.icon || modOf(L.mod).icon;

/* ============ RENDER: PORTAL ============ */
function renderCursos(){
  const totalLicoes = CURSOS.reduce((s, c) => s + c.total, 0);
  const totalCursos = CURSOS.filter(c => !c.projeto_final).length;
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
      ${!DB.verificado(ALUNO) ? `<div class="pend"><b>⚠️ Falta confirmar seu ${ALUNO.email_verificado ? 'WhatsApp' : 'e-mail'}</b><span>${textoObrigatorio()}</span><button class="next" data-act="verificar">Confirmar agora ➜</button></div>`
        : seguir ? `<button class="next" data-act="curso" data-id="${esc(seguir.id)}" style="${ccor(seguir)}">Continuar ${esc(seguir.titulo)} ➜</button>` : ''}
      <div class="hbtns">${botaoInstalar()}<button class="link" data-act="sair">Não é ${esc(ALUNO.nome.split(' ')[0])}? Sair</button></div>${dicaIos()}${botaoIndicar()}</div>
      <div class="bigring" id="bigring"><div class="bigin"><b id="bignum">0%</b><span>dos seus cursos</span></div></div>
    </section>`;
  } else if (MASTER) {
    topo = `<section class="hero rise">
      <div><div class="eyebrow">Modo master</div>
      <h1 class="hh">Olá, <span class="grad">Master</span>! 🛡️</h1>
      <p class="hp">Tudo liberado para testar na prática: cursos em prévia, lições fora de ordem, desafios, projetos, Toolbox e projetos finais. O seu progresso de teste fica salvo neste navegador.</p>
      <div class="chips"><span class="chip">🎓 ${totalCursos} ${totalCursos === 1 ? 'curso' : 'cursos'}</span><span class="chip">📘 ${totalLicoes} lições</span><span class="chip">🔓 Sem bloqueios</span></div>
      <div class="hbtns"><a class="next" href="admin.html">🛡️ Painel do Master</a><button class="link" data-act="sair">Sair</button></div>${botaoIndicar()}</div>
      <div class="orb" aria-hidden="true"><span>🛡️</span></div>
    </section>`;
  } else {
    topo = `<section class="hero rise">
      <div><div class="eyebrow">Portal de Estudos IA</div>
      <h1 class="hh">Aprenda na prática com <span class="grad">desafios reais</span></h1>
      <p class="hp">Lições curtas, casos de clientes de verdade e projetos práticos. Faça seu cadastro gratuito e comece agora.</p>
      <div class="chips"><span class="chip">🎓 ${totalCursos} ${totalCursos === 1 ? 'curso' : 'cursos'}</span><span class="chip">📘 ${totalLicoes} lições</span><span class="chip">🆓 Gratuito</span><span class="chip">📱 Funciona no celular</span></div>
      <div class="hbtns"><button class="next" data-act="cadastro">Criar meu cadastro ➜</button><button class="ghost" data-act="entrar">Já tenho cadastro</button>${botaoInstalar()}</div>${dicaIos()}${botaoIndicar()}</div>
      <button class="qr-card so-pc" type="button" data-act="qr" title="Ver o QR maior"><span class="qr-tit">Estude no <span class="grad">celular</span></span><span class="qr-moldura"><span class="qr-in"><img src="assets/qr-app.svg" alt="QR code do Portal de Estudos IA" width="170" height="170"><i class="qr-scan" aria-hidden="true"></i></span></span></button>
      <div class="orb so-cel" aria-hidden="true"><span>📚</span></div>
    </section>
    <div class="steps">
      ${[['📝','Cadastre-se', pedeConfirmacao() ? 'Leva 2 minutos, não pede documentos e é confirmado por ' + [DB.codigoEmail && 'e-mail', DB.exigirWhatsapp && 'WhatsApp'].filter(Boolean).join(' e ') + '.' : 'Leva 2 minutos e não pede documentos.'],['🎯','Escolha o curso','Comece na hora, no seu ritmo, pelo celular ou computador.'],['🏆','Aprenda com desafios','Cada lição termina com um caso real para você resolver.']]
        .map((s, i) => `<div class="step rise" style="--d:${0.1 + i * 0.08}s;${'--c:' + PORTAL.paleta(i)[0] + ';--c2:' + PORTAL.paleta(i)[1]}"><div class="stile">${s[0]}</div><div><b>${i + 1}. ${s[1]}</b><p>${s[2]}</p></div></div>`).join('')}
    </div>`;
  }
  const vitrine = (c, i) => {
    const mods = c.conteudo.modulos;
    return `<div class="mc vit rise" role="button" tabindex="0" data-act="curso" data-id="${esc(c.id)}" style="${ccor(c)};--d:${0.15 + i * 0.08}s">
      <div class="mhead"><div class="mtile">${c.icone}</div><span class="pctpill novo">🆓 Gratuito</span></div>
      <div><div class="mt">${esc(c.titulo)}</div><div class="ms">${esc(c.descricao)}</div></div>
      <div class="vit-ap"><small>Você vai aprender</small>${mods.slice(0, 3).map(m => `<span>${m.icon} ${esc(m.title)}</span>`).join('')}${mods.length > 3 ? `<span class="vit-mais">+ ${mods.length - 3} ${mods.length - 3 === 1 ? 'módulo' : 'módulos'}</span>` : ''}</div>
      <div class="mfoot"><span>${c.total} lições${c.carga_horaria ? ' · ' + c.carga_horaria + 'h' : ''} · 🎓 certificado</span><span class="mst">🔐 Entre para estudar</span></div>
    </div>`;
  };
  const cartao = (c, i) => {
    if (!ALUNO && !MASTER) return vitrine(c, i);
    const matr = MATR.includes(c.id), pct = pctCurso(c), fim = matr && pct === 100, d = PROG[c.id] || {};
    const acao = fim ? '✅ Concluído' : matr ? '▶ Continuar' : '✨ Iniciar curso';
    const dots = c.conteudo.modulos.map(m => `<i class="${m.lessons.every(l => d[l.id]) ? 'on' : ''}" title="Módulo ${m.id}: ${esc(m.title)}"></i>`).join('');
    return `<div class="mc rise ${fim?'fin':''}" role="button" tabindex="0" data-act="curso" data-id="${esc(c.id)}" style="${ccor(c)};--d:${0.15 + i * 0.08}s">
      <div class="mhead"><div class="mtile">${c.icone}</div>${c.status === 'rascunho' ? '<span class="badge">RASCUNHO</span>' : c.status === 'em_breve' ? `<span class="badge">${seloPrevia()}</span>` : matr ? `<span class="pctpill">${pct}%</span>` : '<span class="pctpill novo">Novo</span>'}</div>
      <div><div class="mt">${esc(c.titulo)}</div><div class="ms">${esc(c.descricao)}</div></div>
      <div class="mdots">${dots}</div>
      <div class="mfoot"><span>${c.conteudo.modulos.length} módulos · ${c.total} lições</span><span class="mst">${acao}</span></div>
    </div>`;
  };
  const emBreve = (m, i, num = m.ordem) => `<div class="mc lock breve rise" aria-disabled="true" style="${ccor(Object.assign({ cores:PORTAL.paleta(i) }, m))};--d:${0.15 + i * 0.06}s">
      <div class="mhead"><div class="mtile">${m.icone || '📘'}</div><span class="pctpill novo">🔜 Em breve</span></div>
      <div><div class="mt">${esc(m.titulo)}</div><div class="ms">${esc(m.descricao)}</div></div>
      <div class="mfoot"><span>Curso ${num || ''} da trilha</span></div>
    </div>`;
  const carregado = id => CURSOS.find(c => c.id === id);
  let n = 0;
  const niveis = PORTAL.niveis.map((nv, k) => {
    const itens = PORTAL.catalogo.filter(m => m.nivel === nv.id)
      .map(m => carregado(m.id) ? cartao(carregado(m.id), n++) : m.status === 'em_breve' ? emBreve(m, n++) : '').filter(Boolean);
    if (!itens.length) return '';
    const abertos = PORTAL.catalogo.filter(m => m.nivel === nv.id && carregado(m.id)).length;
    return `<div class="nivel" id="nivel-${nv.id}" style="--c:${nv.cores[0]};--c2:${nv.cores[1]}">
      <div class="nhead"><span class="npill">Nível ${k + 1} · ${nv.titulo}</span><small>${itens.length} ${itens.length === 1 ? 'curso' : 'cursos'} · ${abertos} ${abertos === 1 ? 'disponível' : 'disponíveis'}</small></div>
      <div class="grid">${itens.join('')}</div></div>`;
  }).join('');
  const renda = PORTAL.catalogo.filter(m => m.trilha === 'renda');
  const gruposRenda = PORTAL.gruposRenda.map(g => {
    const itens = renda.filter(m => m.grupo === g.id)
      .map(m => carregado(m.id) ? cartao(carregado(m.id), n++) : m.status === 'em_breve' ? emBreve(m, n++, renda.indexOf(m) + 1) : '').filter(Boolean);
    if (!itens.length) return '';
    const abertos = renda.filter(m => m.grupo === g.id && carregado(m.id)).length;
    return `<div class="nivel" id="nivel-renda-${g.id}" style="--c:${g.cores[0]};--c2:${g.cores[1]}">
      <div class="nhead"><span class="npill">${g.icone} ${g.titulo}</span><small>${itens.length} ${itens.length === 1 ? 'curso' : 'cursos'} · ${abertos} ${abertos === 1 ? 'disponível' : 'disponíveis'}</small></div>
      <div class="grid">${itens.join('')}</div></div>`;
  }).join('');
  const cartaoFinal = t => {
    const pf = projetoFinal(t); if (!pf) return '';
    const lista = cursosDaTrilha(t), feitos = lista.filter(completo).length, livre = trilhaLiberada(t), cert = certDe('trilha', t);
    const horas = lista.concat(pf).reduce((s, c) => s + (c.carga_horaria || 0), 0);
    if (!ALUNO && !MASTER) return `<div class="nivel final" style="${ccor(pf)}">
      <div class="nhead"><span class="npill">🏁 Projeto final</span><small>Fecha a ${PORTAL.trilhas[t]}</small></div>
      <div class="grid"><div class="mc pfinal vit rise" role="button" tabindex="0" data-act="cadastro" style="${ccor(pf)}">
        <div class="mhead"><div class="mtile">${pf.icone}</div><span class="pctpill novo">🆓 Gratuito</span></div>
        <div><div class="mt">${esc(pf.titulo)}</div><div class="ms">${esc(pf.descricao)}</div></div>
        <div class="vit-ap"><small>Como funciona</small><span>📚 Conclua os ${lista.length} cursos</span><span>🛠️ Faça o projeto final</span><span>🎓 Certificado da trilha</span></div>
        <div class="mfoot"><span>🎓 Certificado da ${PORTAL.trilhas[t]} · ${horas} horas</span><span class="mst">🔐 Entre para estudar</span></div>
      </div></div></div>`;
    const selo = cert ? '🎓 Certificado emitido' : !livre ? '🔒 Bloqueado' : MATR.includes(pf.id) ? pctCurso(pf) + '%' : '✨ Liberado';
    return `<div class="nivel final" style="${ccor(pf)}">
      <div class="nhead"><span class="npill">🏁 Projeto final</span><small>${feitos} de ${lista.length} cursos concluídos</small></div>
      <div class="grid"><div class="mc pfinal rise ${livre ? '' : 'lock'} ${cert ? 'fin' : ''}" role="button" tabindex="0" data-act="curso" data-id="${esc(pf.id)}" style="${ccor(pf)}">
        <div class="mhead"><div class="mtile">${pf.icone}</div><span class="pctpill">${selo}</span></div>
        <div><div class="mt">${esc(pf.titulo)}</div><div class="ms">${esc(pf.descricao)}</div></div>
        <div class="mfoot"><span>🎓 Certificado da ${PORTAL.trilhas[t]} · ${horas} horas</span><span class="mst">${livre ? '▶ Abrir' : 'Conclua todos os cursos da trilha'}</span></div>
      </div></div></div>`;
  };
  const outros = CURSOS.filter(c => !c.projeto_final && c.trilha !== 'renda' && !PORTAL.niveis.some(nv => nv.id === c.nivel)).map(c => cartao(c, n++)).join('');
  $('main').removeAttribute('style');
  $('main').innerHTML = avisoRenda() + avisoTrilha() + topo + barraAtalhos() + `<section class="trilha" id="trilha">
      <h2 class="sec-t">Trilha de IA</h2>
      <p class="tsub">Do zero ao avançado em 3 níveis. Siga na ordem ou escolha só o curso de que você precisa.</p>
      ${chamadaTeste()}
      ${niveis || '<div class="empty">Nenhum curso publicado ainda.</div>'}
      ${niveis ? cartaoFinal('ia') : ''}
    </section>
    ${gruposRenda ? `<section class="trilha" id="renda">
      <h2 class="sec-t">Renda com IA</h2>
      <p class="tsub">Aprenda a oferecer serviços com IA, do jeito certo. Escolha qualquer curso, na ordem que fizer sentido para você.</p>
      <div class="raviso">⚖️ Estes cursos ensinam a oferecer serviços com qualidade e responsabilidade. Não prometem nem garantem ganhos: os resultados dependem de cada pessoa.</div>
      ${chamadaRenda()}
      ${gruposRenda}
      ${cartaoFinal('renda')}
    </section>` : ''}
    ${outros ? `<h2 class="sec-t">Outros cursos</h2><div class="grid">${outros}</div>` : ''}
    <section class="vitrine-dep" id="vitrine-dep" hidden></section>`;
  preencherVitrine();
  desenharAbasLaterais(); medirTopo(); observarSecoes();
  if (pctGeral !== null) {
    setTimeout(() => { const r = $('bigring'); if (r) r.style.setProperty('--p', pctGeral); }, 60);
    countUp($('bignum'), pctGeral);
  }
}

/* Atalhos da página inicial: abas na lateral (computador) e barra fixa de botões (celular). */
function secoesHome(){
  const tem = f => PORTAL.catalogo.some(m => f(m) && (cursoPorId(m.id) || m.status === 'em_breve'));
  const ia = PORTAL.niveis.filter(nv => tem(m => m.nivel === nv.id)).map(nv => ({ id:nv.id, ic:ICONE_NIVEL[nv.id], t:nv.titulo, cores:nv.cores, dica:'Trilha de IA · ' + nv.titulo }));
  const renda = PORTAL.gruposRenda.filter(g => tem(m => m.trilha === 'renda' && m.grupo === g.id)).map(g => ({ id:'renda-' + g.id, ic:g.icone, t:g.titulo, cores:g.cores, dica:'Renda com IA · ' + g.titulo, renda:true }));
  return ia.concat(renda);
}
function barraAtalhos(){
  const s = secoesHome(); if (!s.length) return '';
  const chip = x => `<button class="atalho" type="button" data-act="ver-nivel" data-nivel="${x.id}" style="--c:${x.cores[0]};--c2:${x.cores[1]}" title="${x.dica}">${x.ic} ${x.t}</button>`;
  const ia = s.filter(x => !x.renda), renda = s.filter(x => x.renda);
  return `<nav class="atalhos" id="atalhos" aria-label="Ir para uma parte da página">
    <button class="atalho" type="button" data-act="teste-nivel" style="--c:#c084fc;--c2:#22d3ee">🎯 Meu nível</button><span class="atalho-sep"></span>
    ${ia.map(chip).join('')}${renda.length ? '<span class="atalho-sep"></span>' + renda.map(x => chip(Object.assign({}, x, { t:'Renda · ' + x.t }))).join('') : ''}
  </nav>`;
}
function desenharAbasLaterais(){
  const aba = (x, act, extra) => `<button class="sbz-t ${extra || ''}" type="button" data-act="${act}" data-nivel="${x.id}" style="--c:${x.cores[0]};--c2:${x.cores[1]}" title="${x.dica}" aria-label="${x.dica}"><span><i>${x.ic}</i><span class="sbz-tx">${x.t}</span></span></button>`;
  const s = secoesHome(), renda = s.filter(x => x.renda);
  $('sbz').innerHTML = `<button class="sbz-t sbz-menu" type="button" data-act="menu" title="Abrir o painel da trilha" aria-label="Abrir o painel da trilha"><span><i>☰</i><span class="sbz-tx">Trilha</span></span></button>`
    + s.filter(x => !x.renda).map(x => aba(x, 'ver-nivel')).join('')
    + (renda.length ? aba({ id:'renda', ic:'💼', t:'Renda com IA', cores:[renda[0].cores[0], renda[renda.length - 1].cores[1]], dica:'Renda com IA' }, 'ver-renda', 'sbz-renda') : '');
}
function medirTopo(){ document.documentElement.style.setProperty('--topo', document.querySelector('.top').offsetHeight + 'px'); }
let OBS_SECOES = null;
function observarSecoes(){
  if (OBS_SECOES) OBS_SECOES.disconnect();
  if (!window.IntersectionObserver) return;
  OBS_SECOES = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) marcarAtalho(e.target.id.slice(6)); }), { rootMargin:'-30% 0px -60% 0px' });
  document.querySelectorAll('#main .nivel[id^="nivel-"]').forEach(s => OBS_SECOES.observe(s));
}
function marcarAtalho(id){
  document.querySelectorAll('.sbz-t[data-nivel], .atalho[data-nivel]').forEach(b => b.classList.toggle('on', b.dataset.nivel === id || (b.dataset.nivel === 'renda' && id.startsWith('renda-'))));
  const bar = $('atalhos'), b = bar && bar.querySelector(`[data-nivel="${id}"]`);
  if (b) bar.scrollTo({ left:b.offsetLeft - (bar.clientWidth - b.offsetWidth) / 2, behavior:reduced() ? 'auto' : 'smooth' });
}
window.addEventListener('resize', medirTopo);

/* ============ INSTALAR COMO APP ============ */
let PEDIDO_INSTALAR = null;
const instalado = () => matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
const ehIos = () => /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
const podeInstalar = () => !instalado() && (!!PEDIDO_INSTALAR || ehIos());
const botaoInstalar = () => `<button class="ghost inst" type="button" data-act="instalar" ${podeInstalar() ? '' : 'hidden'}>📲 Instalar o app</button>`;
const dicaIos = () => `<div class="dica-ios" hidden>📱 No iPhone ou iPad: toque em <b>Compartilhar</b> (o quadrado com a seta ↑) e depois em <b>Adicionar à Tela de Início</b>.</div>`;
function atualizarInstalar(){ document.querySelectorAll('.inst').forEach(b => { b.hidden = !podeInstalar(); }); }
async function instalarApp(){
  if (PEDIDO_INSTALAR) {
    PEDIDO_INSTALAR.prompt();
    try { await PEDIDO_INSTALAR.userChoice; } catch(e){}
    PEDIDO_INSTALAR = null; atualizarInstalar();
  } else if (ehIos()) document.querySelectorAll('.dica-ios').forEach(d => { d.hidden = !d.hidden; });
}
window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); PEDIDO_INSTALAR = e; atualizarInstalar(); });
window.addEventListener('appinstalled', () => { PEDIDO_INSTALAR = null; atualizarInstalar(); toast('App instalado! Procure o ícone "Estudos IA". 🎉'); });

/* Contato com o gestor do portal pelo WhatsApp (número em config.js: whatsappPortal). */
function linkContato(cls){
  const n = String((window.PORTAL_CONFIG || {}).whatsappPortal || '').replace(/\D/g, '');
  if (!n) return '';
  const msg = 'Olá! Vim pelo Portal de Estudos IA' + (ALUNO ? ' (sou ' + ALUNO.nome.split(' ')[0] + ', ' + (EMAIL_SESSAO || ALUNO.email || '') + ')' : '') + ' e preciso de ajuda.';
  return `<a class="${cls}" href="https://wa.me/${n}?text=${encodeURIComponent(msg)}" target="_blank" rel="noopener"><span class="hi">💬</span>Falar com o gestor</a>`;
}

/* Indique um amigo: abre o WhatsApp para o aluno escolher o contato, com link rastreado (origem "indicacao · amigo"). */
function mensagemIndicacao(){
  const base = (document.querySelector('meta[property="og:url"]') || {}).content || (location.origin + location.pathname);
  const u = new URL(base);
  u.searchParams.set('utm_source', 'indicacao');
  u.searchParams.set('utm_campaign', 'amigo');
  const abre = ALUNO ? `Estou estudando Inteligência Artificial no Portal de Estudos IA e lembrei de você!` : `Achei um portal que ensina Inteligência Artificial e lembrei de você!`;
  return `🚀 *Oportunidade: aprenda IA de graça!*\n\n${abre}\n\n`
    + `São ${CURSOS.filter(c => !c.projeto_final).length} cursos, do zero ao avançado, direto no celular:\n`
    + `✅ Lições curtas e práticas\n✅ Desafios com casos reais\n✅ Projetos para o seu portfólio\n✅ Certificado com validação online\n✅ 100% gratuito, sem pegadinha\n\n`
    + `A IA já está mudando o mercado de trabalho, e quem aprende agora sai na frente. 💡\n\n`
    + `Cadastro em 2 minutos. Bora estudar junto? 👇\n${u}`;
}
function indicarAmigo(){ window.open('https://wa.me/?text=' + encodeURIComponent(mensagemIndicacao()), '_blank', 'noopener'); }
const botaoIndicar = () => `<button class="indica" type="button" data-act="indicar"><span class="ind-ic" aria-hidden="true">🎁</span><span class="ind-tx"><b>Indique um amigo</b><small>Envie o convite pelo WhatsApp</small></span><span class="ind-seta" aria-hidden="true">➜</span></button>`;

/* Ícone Cursos do rodapé (celular): lista compacta com os ícones dos cursos. */
function abrirListaCursos(){
  if (fecharListaCursos()) return;
  closeMenu();
  const item = c => {
    const pct = MATR.includes(c.id) ? pctCurso(c) : null;
    const info = pct === 100 ? '✅' : pct !== null ? pct + '%' : PORTAL.disponivel(c) ? '' : 'Prévia';
    return `<button class="cl-it" type="button" data-act="curso" data-id="${esc(c.id)}" style="${ccor(c)}"><span class="cl-ic">${c.icone}</span><span>${esc(c.titulo)}</span>${info ? `<small>${info}</small>` : ''}</button>`;
  };
  const ia = CURSOS.filter(c => !c.projeto_final && PORTAL.trilhaDe(c) === 'ia').sort((a, b) => (a.ordem || 99) - (b.ordem || 99));
  const renda = CURSOS.filter(c => !c.projeto_final && PORTAL.trilhaDe(c) === 'renda');
  const finais = CURSOS.filter(c => c.projeto_final);
  const outros = CURSOS.filter(c => !ia.includes(c) && !renda.includes(c) && !finais.includes(c));
  const sec = (t, l) => l.length ? `<div class="cl-sec">${t}</div>${l.map(item).join('')}` : '';
  document.body.insertAdjacentHTML('beforeend', `<div class="cl-modal" id="cl-modal" data-act="fechar-cl"><div class="cl-box" data-act="cl-box" role="menu" aria-label="Cursos">
    ${sec('Trilha de IA', ia)}${sec('Renda com IA', renda)}${sec('Projetos finais', finais)}${sec('Outros cursos', outros)}
    <button class="cl-it cl-todos" type="button" data-act="cursos">🏠 Ver página inicial</button>
  </div></div>`);
}
function fecharListaCursos(){ const m = $('cl-modal'); if (m) m.remove(); return !!m; }

/* QR code para abrir o portal no celular (imagem fixa em assets/qr-app.svg). */
function abrirQr(){
  if ($('qr-modal')) return;
  closeMenu();
  document.body.insertAdjacentHTML('beforeend', `<div class="qr-modal" id="qr-modal" data-act="fechar-qr" role="dialog" aria-modal="true" aria-labelledby="qr-tit">
    <div class="qr-box">
      <button class="nfechar" type="button" data-act="fechar-qr" aria-label="Fechar">✕</button>
      <div class="eyebrow">Portal de Estudos IA no seu bolso</div>
      <h2 class="qr-tit" id="qr-tit">Estude no <span class="grad">celular</span></h2>
      <div class="qr-moldura"><div class="qr-in"><img src="assets/qr-app.svg" alt="QR code do Portal de Estudos IA" width="220" height="220"><i class="qr-scan" aria-hidden="true"></i></div></div>
      <ol class="qr-passos">
        <li><b>1</b><span>Aponte a câmera do celular para o código.</span></li>
        <li><b>2</b><span>Toque no link que aparecer.</span></li>
        <li><b>3</b><span>No portal, toque em <b>📲 Instalar o app</b> e pronto: o ícone fica na tela inicial.</span></li>
      </ol>
    </div>
  </div>`);
}
function fecharQr(){ const m = $('qr-modal'); if (m) m.remove(); }

/* Teste rápido de nível: 5 perguntas (0 a 2 pontos cada) que sugerem o curso inicial da trilha. */
const CHAVE_NIVEL = 'portal-estudos-nivel-v1';
const PERGUNTAS_NIVEL = [
  { q:'Com que frequência você usa IA, como ChatGPT ou Gemini?',
    o:['Nunca usei', 'Algumas vezes, para curiosidades', 'Todo dia, no trabalho ou nos estudos'] },
  { q:'Quando a resposta da IA não fica boa, o que você faz?',
    o:['Aceito como veio ou desisto', 'Peço de novo com outras palavras', 'Dou contexto, um exemplo e o formato que quero'] },
  { q:'Você já criou alguma automação, como um formulário que envia dados para uma planilha ou para o WhatsApp?',
    o:['Não sei bem o que é isso', 'Já vi, mas nunca montei', 'Sim, já montei uma'] },
  { q:'Já usou IA para criar um site, um app ou um código?',
    o:['Nunca', 'Tentei, seguindo um tutorial', 'Sim, e coloquei no ar'] },
  { q:'Quais destes termos você já entende bem?',
    o:['Nenhum ainda', '"API" e "prompt de sistema"', '"Agente com ferramentas", "RAG" e "embeddings"'] }
];
const SUGESTAO_POR_PONTOS = [1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 9];
let TN = null;

const lerNivel = () => { try { return JSON.parse(localStorage.getItem(CHAVE_NIVEL)) || null; } catch(e){ return null; } };
function resultadoNivel(pts){
  const trilha = PORTAL.catalogo.filter(m => m.ordem && PORTAL.niveis.some(nv => nv.id === m.nivel));
  let alvo = trilha.find(m => m.ordem === SUGESTAO_POR_PONTOS[pts]) || trilha[0];
  while (alvo) {
    const c = cursoPorId(alvo.id);
    if (!(c && MATR.includes(c.id) && pctCurso(c) === 100)) break;
    alvo = trilha.find(m => m.ordem === alvo.ordem + 1) || null;
  }
  if (!alvo) return null;
  const agora = cursoPorId(alvo.id) ? null : trilha.filter(m => cursoPorId(m.id))
    .sort((a, b) => Math.abs(a.ordem - alvo.ordem) - Math.abs(b.ordem - alvo.ordem) || a.ordem - b.ordem)[0] || null;
  return { alvo, agora, nivel: PORTAL.niveis.find(nv => nv.id === alvo.nivel) };
}
function telaTeste(){
  const perguntas = TN.tipo === 'renda' ? PERGUNTAS_RENDA : PERGUNTAS_NIVEL;
  if (TN.i < perguntas.length) {
    const p = perguntas[TN.i];
    return `<div class="tn-prog">${perguntas.map((_, k) => `<i class="${k < TN.i ? 'ok' : k === TN.i ? 'cur' : ''}"></i>`).join('')}</div>
      <div class="eyebrow">Pergunta ${TN.i + 1} de ${perguntas.length}</div>
      <h2 class="tn-q" id="tn-tit">${p.q}</h2>
      <div class="tn-opts">${p.o.map((t, v) => `<button class="tn-op ${TN.resp[TN.i] === v ? 'sel' : ''}" type="button" data-act="tn-resp" data-v="${v}"><b>${'ABC'[v]}</b><span>${esc(t)}</span></button>`).join('')}</div>
      ${TN.i ? '<button class="link tn-volta" type="button" data-act="tn-volta">← Pergunta anterior</button>' : ''}`;
  }
  if (TN.tipo === 'renda') return telaResultadoRenda();
  const pts = TN.resp.reduce((s, v) => s + v, 0), r = resultadoNivel(pts);
  if (!r) return `<h2 class="tn-q" id="tn-tit">Você já concluiu a trilha! 🏆</h2><p class="tn-txt">Revise os cursos quando quiser.</p>`;
  try { localStorage.setItem(CHAVE_NIVEL, JSON.stringify({ nivel:r.nivel.id, curso:r.alvo.id, pts, em:Date.now() })); } catch(e){}
  const pronto = !!cursoPorId(r.alvo.id);
  return `<div class="eyebrow">Seu resultado</div>
    <h2 class="tn-q" id="tn-tit">Seu nível: <span class="tn-niv" style="--c:${r.nivel.cores[0]};--c2:${r.nivel.cores[1]}">${ICONE_NIVEL[r.nivel.id]} ${r.nivel.titulo}</span></h2>
    <p class="tn-txt">Seu ponto de partida na trilha é:</p>
    <div class="tn-curso" style="--c:${(r.alvo.cores || r.nivel.cores)[0]};--c2:${(r.alvo.cores || r.nivel.cores)[1]}">
      <span class="tn-ic">${r.alvo.icone || '📘'}</span>
      <div><b>${r.alvo.ordem}. ${esc(r.alvo.titulo)}</b><small>${esc(r.alvo.descricao)}</small></div>
      ${pronto ? '' : '<span class="pctpill novo">🔜 Em breve</span>'}
    </div>
    ${pronto ? `<button class="next" type="button" data-act="tn-curso" data-id="${esc(r.alvo.id)}">Começar agora ➜</button>`
      : r.agora ? `<p class="tn-txt">Enquanto ele não chega, já dá para estudar:</p>
        <button class="next" type="button" data-act="tn-curso" data-id="${esc(r.agora.id)}">${r.agora.icone || '📘'} Começar ${esc(r.agora.titulo)} ➜</button>` : ''}
    <div class="tn-acoes"><button class="ghost" type="button" data-act="tn-trilha" data-nivel="${r.nivel.id}">Ver na trilha</button><button class="link" type="button" data-act="tn-refazer">Refazer o teste</button></div>`;
}
function chamadaTeste(){
  const salvo = ALUNO && lerNivel(), m = salvo && PORTAL.catalogo.find(x => x.id === salvo.curso), nv = salvo && PORTAL.niveis.find(x => x.id === salvo.nivel);
  if (m && nv) return `<div class="tn-chamada feito" style="--c:${nv.cores[0]};--c2:${nv.cores[1]}"><span class="tn-alvo">🎯</span>
    <div><b>Seu nível: ${nv.titulo}</b><small>Ponto de partida: ${m.ordem}. ${esc(m.titulo)}</small></div>
    <button class="ghost" type="button" data-act="ver-nivel" data-nivel="${nv.id}">Ver</button><button class="link" type="button" data-act="teste-nivel">Refazer</button></div>`;
  return `<button class="tn-chamada" type="button" data-act="teste-nivel"><span class="tn-alvo">🎯</span>
    <div><b>Não sabe por onde começar?</b><small>Responda 5 perguntas rápidas e descubra seu nível e o curso ideal para você.</small></div><span class="tn-ir">Descobrir meu nível ➜</span></button>`;
}
/* Teste "Descubra por onde começar" da trilha Renda com IA: 8 perguntas (0 a 2 pontos cada) que sugerem um grupo e um curso. */
const CHAVE_RENDA = 'portal-estudos-renda-v1';
const PERGUNTAS_RENDA = [
  { q:'Você já usa IA no dia a dia?', o:['Nunca', 'Às vezes', 'Todo dia'] },
  { q:'Você sabe escrever um pedido com papel, tarefa, contexto e formato?', o:['Não', 'Mais ou menos', 'Sim'] },
  { q:'Já prestou algum serviço para um cliente?', o:['Nunca', 'Poucas vezes', 'Regularmente'] },
  { q:'Você sabe o que é a LGPD e por que importa?', o:['Não', 'Já ouvi falar', 'Sei explicar'] },
  { q:'Já fez um combinado por escrito com um cliente?', o:['Nunca', 'De forma informal', 'Sim, com escopo, prazo e preço'] },
  { q:'Já criou algo para mostrar como portfólio?', o:['Não', 'Alguns testes', 'Sim'] },
  { q:'Você sabe quando é preciso emitir nota fiscal?', o:['Não', 'Mais ou menos', 'Sim'] },
  { q:'O que você quer fazer agora?', o:['Entender o básico', 'Aprender um serviço específico', 'Organizar e crescer o meu serviço'] }
];
const lerRenda = () => { try { return JSON.parse(localStorage.getItem(CHAVE_RENDA)) || null; } catch(e){ return null; } };
function resultadoRenda(pts){
  const renda = PORTAL.catalogo.filter(m => m.trilha === 'renda');
  const grupo = PORTAL.gruposRenda[pts <= 5 ? 0 : pts <= 11 ? 1 : 2];
  const concluido = m => { const c = cursoPorId(m.id); return c && MATR.includes(c.id) && pctCurso(c) === 100; };
  const inicio = renda.findIndex(m => m.grupo === grupo.id);
  const alvo = renda.slice(Math.max(0, inicio)).find(m => !concluido(m)) || null;
  if (!alvo) return null;
  const pos = renda.indexOf(alvo);
  const proximoRenda = renda.filter(m => cursoPorId(m.id))
    .sort((a, b) => Math.abs(renda.indexOf(a) - pos) - Math.abs(renda.indexOf(b) - pos) || renda.indexOf(a) - renda.indexOf(b))[0];
  const proximoIA = PORTAL.catalogo.find(m => m.trilha !== 'renda' && m.nivel && cursoPorId(m.id));
  const agora = cursoPorId(alvo.id) ? null : proximoRenda || proximoIA || null;
  return { alvo, agora, num:pos + 1, grupo: PORTAL.gruposRenda.find(g => g.id === alvo.grupo) || grupo };
}
function telaResultadoRenda(){
  const pts = TN.resp.reduce((s, v) => s + v, 0), r = resultadoRenda(pts);
  if (!r) return `<h2 class="tn-q" id="tn-tit">Você já concluiu a trilha! 🏆</h2><p class="tn-txt">Revise os cursos quando quiser.</p>`;
  try { localStorage.setItem(CHAVE_RENDA, JSON.stringify({ grupo:r.grupo.id, curso:r.alvo.id, pts, em:Date.now() })); } catch(e){}
  const pronto = !!cursoPorId(r.alvo.id), cores = r.alvo.cores || r.grupo.cores;
  const zero = pts <= 5 && TN.resp[0] === 0 && PORTAL.catalogo.find(m => m.id === 'ia-do-zero');
  return `<div class="eyebrow">Seu resultado</div>
    <h2 class="tn-q" id="tn-tit">Comece por: ${r.grupo.icone} <span class="tn-niv" style="--c:${r.grupo.cores[0]};--c2:${r.grupo.cores[1]}">${r.grupo.titulo}</span></h2>
    ${zero ? `<p class="tn-txt">Como você ainda não usa IA, vale fazer antes o curso ${zero.icone || '📘'} <b>${esc(zero.titulo)}</b>, da Trilha de IA${cursoPorId(zero.id) ? '' : ' (em breve)'}.</p>
      ${cursoPorId(zero.id) && !(r.agora && r.agora.id === zero.id) ? `<button class="ghost" type="button" data-act="tn-curso" data-id="${esc(zero.id)}">${zero.icone || '📘'} Começar ${esc(zero.titulo)}</button>` : ''}` : ''}
    <p class="tn-txt">Sugestão de curso na trilha Renda com IA:</p>
    <div class="tn-curso" style="--c:${cores[0]};--c2:${cores[1]}">
      <span class="tn-ic">${r.alvo.icone || '📘'}</span>
      <div><b>${r.num}. ${esc(r.alvo.titulo)}</b><small>${esc(r.alvo.descricao)}</small></div>
      ${pronto ? '' : '<span class="pctpill novo">🔜 Em breve</span>'}
    </div>
    ${pronto ? `<button class="next" type="button" data-act="tn-curso" data-id="${esc(r.alvo.id)}">Começar agora ➜</button>`
      : r.agora ? `<p class="tn-txt">Enquanto ele não chega, já dá para estudar:</p>
        <button class="next" type="button" data-act="tn-curso" data-id="${esc(r.agora.id)}">${r.agora.icone || '📘'} Começar ${esc(r.agora.titulo)} ➜</button>` : ''}
    <p class="tn-txt">Você decide: pode escolher qualquer curso disponível.</p>
    <div class="tn-acoes"><button class="ghost" type="button" data-act="tn-trilha" data-nivel="renda-${r.grupo.id}">Ver na trilha</button><button class="link" type="button" data-act="tn-refazer">Refazer o teste</button></div>`;
}
function chamadaRenda(){
  const salvo = ALUNO && lerRenda(), renda = PORTAL.catalogo.filter(x => x.trilha === 'renda');
  const m = salvo && renda.find(x => x.id === salvo.curso), g = salvo && PORTAL.gruposRenda.find(x => x.id === salvo.grupo);
  if (m && g) return `<div class="tn-chamada feito" style="--c:${g.cores[0]};--c2:${g.cores[1]}"><span class="tn-alvo">🧭</span>
    <div><b>Comece por: ${g.titulo}</b><small>Sugestão: ${renda.indexOf(m) + 1}. ${esc(m.titulo)}</small></div>
    <button class="ghost" type="button" data-act="ver-nivel" data-nivel="renda-${g.id}">Ver</button><button class="link" type="button" data-act="teste-renda">Refazer</button></div>`;
  return `<button class="tn-chamada renda" type="button" data-act="teste-renda"><span class="tn-alvo">🧭</span>
    <div><b>Descubra por onde começar</b><small>Responda 8 perguntas rápidas e veja uma sugestão de ponto de partida. Você decide.</small></div><span class="tn-ir">Fazer o teste ➜</span></button>`;
}
function desenharTeste(){ const c = document.querySelector('#tn-modal .tn-corpo'); if (c) c.innerHTML = telaTeste(); }
function abrirTeste(tipo){
  if ($('tn-modal')) return;
  closeMenu();
  TN = { i:0, resp:[], tipo };
  document.body.insertAdjacentHTML('beforeend', `<div class="qr-modal tn-modal" id="tn-modal" data-act="fechar-teste" role="dialog" aria-modal="true" aria-labelledby="tn-tit">
    <div class="qr-box tn-box"><button class="nfechar" type="button" data-act="fechar-teste" aria-label="Fechar">✕</button><div class="tn-corpo"></div></div></div>`);
  desenharTeste();
}
function fecharTeste(){
  const m = $('tn-modal'); if (!m) return;
  m.remove(); TN = null;
  if (S.view === 'cursos') renderMain(true);
}

const CHAVE_AVISO_TRILHA = 'portal-estudos-aviso-trilha-v1';
function avisoTrilha(){
  try { if (localStorage.getItem(CHAVE_AVISO_TRILHA)) return ''; } catch(e){}
  return `<section class="novidade rise" id="aviso-trilha" role="region" aria-label="Novidade">
    <button class="nfechar" type="button" data-act="fechar-aviso" aria-label="Fechar aviso">✕</button>
    <h2 class="ntit">🚀 Novidade: a Trilha de IA do Portal de Estudos IA</h2>
    <p class="nsub">Do zero ao arquiteto, de graça. Escolha seu ponto de partida.</p>
    <p class="ncorpo">Nunca usou IA? Já usa e quer ir mais longe? Agora o portal tem uma trilha completa com 3 níveis e 10 cursos curtos, em português, para estudar no celular, com lições curtas. Siga a trilha na ordem ou escolha só o curso de que você precisa. Cada lição termina com desafios práticos e cada módulo, com um projeto.</p>
    <div class="nchips"><span class="chip">✅ Os 10 cursos já estão disponíveis</span><span class="chip">🛠️ Projetos práticos em cada módulo</span><span class="chip">🆓 100% gratuito</span></div>
    <button class="next" type="button" data-act="ver-trilha">Ver a trilha ➜</button>
  </section>`;
}
const CHAVE_AVISO_RENDA = 'portal-estudos-aviso-renda-v1';
function avisoRenda(){
  if (!PORTAL.catalogo.some(m => m.trilha === 'renda')) return '';
  try { if (localStorage.getItem(CHAVE_AVISO_RENDA)) return ''; } catch(e){}
  return `<section class="novidade rise" id="aviso-renda" role="region" aria-label="Novidade">
    <button class="nfechar" type="button" data-act="fechar-aviso-renda" aria-label="Fechar aviso">✕</button>
    <h2 class="ntit">🚀 Novidade: Trilha Renda com IA</h2>
    <p class="nsub">Aprenda a oferecer serviços com IA, do jeito certo.</p>
    <p class="ncorpo">Conheça a nova trilha do Portal de Estudos IA: 7 cursos curtos, em português e gratuitos, para quem quer transformar o que sabe em um serviço profissional. Aprenda a cuidar de dados, combinar por escrito, montar sua oferta, atender clientes e organizar o básico do seu negócio. Aqui não há promessa de ganho fácil: o foco é fazer o trabalho bem feito e com responsabilidade. Os 7 cursos já estão disponíveis: escolha o de que você precisa.</p>
    <button class="next" type="button" data-act="ver-renda">Ver a trilha ➜</button>
  </section>`;
}

function renderCadastro(){
  $('main').removeAttribute('style');
  $('main').innerHTML = `<form class="form" id="f-cad" novalidate>
    <div class="eyebrow">Cadastro gratuito</div>
    <h1 class="h1" style="margin-bottom:6px">Comece a <span class="grad">estudar agora</span></h1>
    <p class="hp">Preencha seus dados${MODO_SENHA() ? ' e crie sua senha' : ''}${pedeConfirmacao() ? '. Depois é só confirmar ' + [DB.codigoEmail && 'o e-mail', DB.exigirWhatsapp && 'o WhatsApp'].filter(Boolean).join(' e ') : ''}. <button class="link inl" type="button" data-act="entrar">Já tenho cadastro</button></p>
    <div class="obrig">🛡️ <span>${textoObrigatorio()}</span></div>
    <div class="fprog-w"><div class="fprog"><i id="fprog"></i></div><span id="fprog-t">0% preenchido</span></div>
    <div class="card fcard rise" style="--c:#22d3ee;--c2:#3b82f6"><h3 class="fsec"><span class="fico">📇</span>Seus dados</h3><div class="fgrid">
      <label class="fl wide">Nome completo<input name="nome" autocomplete="name" required maxlength="120"></label>
      <label class="fl">Idade<input name="idade" type="number" inputmode="numeric" min="5" max="120" required></label>
      <label class="fl wide">E-mail<input name="email" type="email" autocomplete="email" required maxlength="120" placeholder="voce@exemplo.com" value="${esc(EMAIL_SESSAO || '')}" ${EMAIL_SESSAO ? 'readonly' : ''}><small>${EMAIL_SESSAO ? '✅ Você já está conectado com este e-mail.' : MODO_SENHA() ? 'Você vai usar este e-mail e a senha para entrar de qualquer aparelho.' : 'Vamos enviar um código de confirmação para este e-mail.'}</small></label>
      ${MODO_SENHA() && !EMAIL_SESSAO ? `<label class="fl">Crie uma senha<span class="pw"><input name="senha" type="password" autocomplete="new-password" required minlength="8" maxlength="72" placeholder="Mínimo de 8 caracteres">${PORTAL.olho}</span></label>
      <label class="fl">Repita a senha<span class="pw"><input name="senha2" type="password" autocomplete="new-password" required minlength="8" maxlength="72">${PORTAL.olho}</span></label>` : ''}
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
    <div class="card fcard rise" style="--c:#4ade80;--c2:#a3e635;--d:.16s"><h3 class="fsec"><span class="fico">📜</span>Termo de adesão</h3>
    <input type="hidden" name="curso" value="${esc(S.escolhido || (CURSOS[0] && CURSOS[0].id) || '')}">
    <p class="nota">🔒 Não pedimos CPF, RG nem nenhum documento com foto.</p>
    <label class="check"><input type="checkbox" name="lgpd" required><span>Autorizo o uso destes dados pelo Portal de Estudos IA para acompanhar meu progresso nos cursos e para receber códigos de confirmação e avisos sobre meus estudos por e-mail e WhatsApp.</span></label>
    <div class="err" id="cad-err" role="alert"></div>
    <button class="next" type="submit" id="cad-ok">${textoBotaoCadastro()}</button>
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
    <div class="obrig">🛡️ <span>${textoObrigatorio()}</span></div>
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

function linkConfirmacao(){
  const msg = 'Olá! Quero confirmar meu WhatsApp no Portal de Estudos IA.\nNome: ' + (ALUNO ? ALUNO.nome : '') + '\nCódigo: ' + (ALUNO && ALUNO.codigo_whats || '');
  return 'https://wa.me/' + WA_PORTAL + '?text=' + encodeURIComponent(msg);
}

function renderConfirmarWhats(){
  const enviado = !!ALUNO.whatsapp_solicitado_em;
  $('main').removeAttribute('style');
  $('main').innerHTML = `<div class="form vform">
    <div class="eyebrow">Último passo · 10 segundos</div>
    <h1 class="h1" style="margin-bottom:6px">Confirme seu <span class="grad">WhatsApp</span></h1>
    <p class="hp">Toque no botão: o WhatsApp vai abrir com uma mensagem pronta para a equipe do Portal de Estudos IA. É só enviar. Assim confirmamos que o número <b>${esc(ALUNO.telefone)}</b> é seu e podemos te mandar avisos sobre seus estudos.</p>
    <div class="card fcard rise" style="--c:#25d366;--c2:#128c7e">
      <h3 class="fsec"><span class="fico">📲</span>Seu código de confirmação</h3>
      <div class="codigo-w">${esc(ALUNO.codigo_whats || '')}</div>
      <a class="next wa-btn" href="${linkConfirmacao()}" target="_blank" rel="noopener" data-act="pedir-whats">📲 Enviar confirmação pelo WhatsApp</a>
      ${enviado ? '<p class="nota ok-nota">✅ Pronto! Assim que conferirmos, seu WhatsApp aparece como confirmado. Seu curso já está liberado.</p>' : '<p class="nota">Seu curso já está liberado: você pode confirmar agora ou depois, pela página inicial.</p>'}
    </div>
    <button class="${enviado ? 'next' : 'ghost'}" type="button" data-act="ir-curso">${enviado ? 'Ir para o curso ➜' : 'Fazer depois e ir para o curso'}</button>
  </div>`;
}

async function aposCadastro(curso){
  [MATR, PROG, CERTS] = await Promise.all([DB.matriculas(), DB.progresso(), DB.meusCertificados()]);
  if (curso && cursoPorId(curso) && !MATR.includes(curso)) { await DB.matricular(curso); MATR.push(curso); }
  DB.notificarInscricao();
  if (WA_PORTAL && !ALUNO.whatsapp_verificado) { VER = { curso }; S.view = 'confirmar-whats'; closeMenu(); renderAll(); return; }
  VER = { curso };
  await liberarAcesso();
}

function renderEntrar(){
  $('main').removeAttribute('style');
  $('main').innerHTML = `<form class="form vform" id="f-entrar" novalidate>
    <div class="eyebrow">Já tenho cadastro</div>
    <h1 class="h1" style="margin-bottom:6px">Entrar no <span class="grad">portal</span></h1>
    <p class="hp">${MODO_SENHA() ? 'Use o e-mail e a senha do seu cadastro.' : 'Use o e-mail do seu cadastro. Enviamos um código para confirmar que é você, sem senha.'} Assim você continua seus cursos em qualquer aparelho e se inscreve nos outros.</p>
    <div class="card fcard rise" style="--c:#22d3ee;--c2:#c084fc">
      <h3 class="fsec"><span class="fico">🔑</span>${MODO_SENHA() ? 'Seu acesso' : 'Seu e-mail'}</h3>
      <label class="fl">E-mail<input name="email" type="email" autocomplete="email" required maxlength="120" placeholder="voce@exemplo.com"></label>
      ${MODO_SENHA() ? `<label class="fl" style="margin-top:12px">Senha<span class="pw"><input name="senha" type="password" autocomplete="current-password" required maxlength="72">${PORTAL.olho}</span></label>` : ''}
      <div class="err" id="ent-err" role="alert"></div>
      <button class="next" type="submit" id="ent-ok">${MODO_SENHA() ? 'Entrar ➜' : 'Receber código ➜'}</button>
      ${MODO_SENHA() ? '<button class="link" type="button" data-act="esqueci" style="margin-top:10px">Esqueci minha senha</button>' : ''}
    </div>
    <button class="link" type="button" data-act="cadastro">Ainda não tenho cadastro</button>
  </form>`;
  document.querySelector('#f-entrar input').focus();
}

function renderEsqueci(){
  $('main').removeAttribute('style');
  $('main').innerHTML = `<form class="form vform" id="f-esqueci" novalidate>
    <div class="eyebrow">Esqueci minha senha</div>
    <h1 class="h1" style="margin-bottom:6px">Criar uma <span class="grad">nova senha</span></h1>
    <p class="hp">Informe o e-mail do seu cadastro. Enviamos um link para você criar uma senha nova. Confira também a caixa de spam.</p>
    <div class="card fcard rise" style="--c:#22d3ee;--c2:#c084fc">
      <h3 class="fsec"><span class="fico">📧</span>Seu e-mail</h3>
      <label class="fl">E-mail<input name="email" type="email" autocomplete="email" required maxlength="120" placeholder="voce@exemplo.com"></label>
      <div class="err" id="esq-err" role="alert"></div>
      <div class="ok-msg" id="esq-ok" role="status" hidden></div>
      <button class="next" type="submit" id="esq-btn">Enviar link ➜</button>
      <p class="nota">Não recebeu? ${linkContato('link') || 'Fale com o responsável pelo portal.'}</p>
    </div>
    <button class="link" type="button" data-act="entrar">Lembrei a senha, quero entrar</button>
  </form>`;
  document.querySelector('#f-esqueci input').focus();
}
async function pedirNovaSenha(form){
  const email = form.elements.email.value.trim().toLowerCase(), err = $('esq-err'), btn = $('esq-btn');
  err.textContent = '';
  if (!RE_EMAIL.test(email)) { err.textContent = 'Informe um e-mail válido.'; return; }
  btn.disabled = true; btn.textContent = 'Enviando…';
  try {
    const r = await DB.pedirNovaSenha(email);
    if (r.demo) { toast('Modo demonstração: sem e-mail, crie a nova senha aqui.'); S.view = 'nova-senha'; renderAll(); return; }
    const ok = $('esq-ok'); ok.hidden = false;
    ok.textContent = '✅ Pronto! Se este e-mail tiver cadastro, o link chega em alguns minutos. Abra o e-mail neste aparelho e toque no link.';
    btn.textContent = 'Enviado';
  } catch(e){ console.error(e); err.textContent = e.message; btn.disabled = false; btn.textContent = 'Enviar link ➜'; }
}

function renderNovaSenha(){
  $('main').removeAttribute('style');
  $('main').innerHTML = `<form class="form vform" id="f-nova" novalidate>
    <div class="eyebrow">Nova senha</div>
    <h1 class="h1" style="margin-bottom:6px">Crie sua <span class="grad">nova senha</span></h1>
    <p class="hp">Use pelo menos 8 caracteres. Depois disso você já entra no portal.</p>
    <div class="card fcard rise" style="--c:#22d3ee;--c2:#c084fc">
      <h3 class="fsec"><span class="fico">🔒</span>Nova senha</h3>
      <label class="fl">Nova senha<span class="pw"><input name="senha" type="password" autocomplete="new-password" required minlength="8" maxlength="72">${PORTAL.olho}</span></label>
      <label class="fl" style="margin-top:12px">Repita a nova senha<span class="pw"><input name="senha2" type="password" autocomplete="new-password" required minlength="8" maxlength="72">${PORTAL.olho}</span></label>
      <div class="err" id="nova-err" role="alert"></div>
      <button class="next" type="submit" id="nova-btn">Salvar e entrar ➜</button>
    </div>
  </form>`;
  document.querySelector('#f-nova input').focus();
}
async function salvarNovaSenha(form){
  const s1 = form.elements.senha.value, s2 = form.elements.senha2.value, err = $('nova-err'), btn = $('nova-btn');
  err.textContent = '';
  if (s1.length < 8) { err.textContent = 'A senha precisa ter pelo menos 8 caracteres.'; return; }
  if (s1 !== s2) { err.textContent = 'As duas senhas não são iguais.'; return; }
  btn.disabled = true; btn.textContent = 'Salvando…';
  try {
    await DB.definirNovaSenha(s1);
    if (/[#&](access_token|type)=/.test(location.hash)) history.replaceState(null, '', location.pathname + location.search);
    EMAIL_SESSAO = await DB.emailDaSessao();
    await checarMaster();
    toast('Senha alterada! ✅');
    VER = { etapa:'email', email:EMAIL_SESSAO, modo:'entrar', curso:S.escolhido };
    await continuarAposEmail();
  } catch(e){ console.error(e); err.textContent = e.message; btn.disabled = false; btn.textContent = 'Salvar e entrar ➜'; }
}

const textoBotaoCadastro = () => pedeConfirmacao() ? 'Continuar para a confirmação ➜' : 'Cadastrar e iniciar o curso ➜';
const OBRIGATORIOS = ['nome','email','senha','senha2','idade','telefone','pais','cep','estado','profissao','ocupacao','trabalhando','estudante','objetivo','lgpd'];
function atualizarPreenchimento(){
  const f = $('f-cad'); if (!f) return;
  const campos = OBRIGATORIOS.filter(n => f.elements[n]);
  const feitos = campos.filter(n => { const el = f.elements[n]; return el.type === 'checkbox' ? el.checked : String(el.value || '').trim() !== ''; }).length;
  const pct = Math.round(feitos / campos.length * 100);
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
const ICONE_NIVEL = { iniciante:'🌱', intermediario:'⚙️', avancado:'🚀' };
const SB_NIVEIS_ABERTOS = new Set();
function sidebarPortal(){
  const niveis = PORTAL.niveis.map(nv => {
    const itens = PORTAL.catalogo.filter(m => m.nivel === nv.id && (cursoPorId(m.id) || m.status === 'em_breve'));
    if (!itens.length) return '';
    const abertos = itens.map(m => cursoPorId(m.id)).filter(Boolean);
    const p = abertos.length ? Math.round(abertos.reduce((s, c) => s + (MATR.includes(c.id) ? pctCurso(c) : 0), 0) / abertos.length) : 0;
    const aberto = SB_NIVEIS_ABERTOS.has(nv.id);
    return `<div class="mod sbacc ${aberto ? 'aberto' : ''}" style="--c:${nv.cores[0]};--c2:${nv.cores[1]};--p:${p}">
      <button class="modh sbniv" type="button" data-act="sb-nivel" data-nivel="${nv.id}" aria-expanded="${aberto}"><div class="ring"><span class="modic">${ICONE_NIVEL[nv.id]}</span></div>
        <div class="modt">${nv.titulo}<div class="mods">${abertos.length} de ${itens.length} ${itens.length === 1 ? 'disponível' : 'disponíveis'}</div></div><span class="sbseta" aria-hidden="true">▸</span></button>
      <div class="sbitens"><div class="sbin">${itens.map(m => {
        const c = cursoPorId(m.id);
        if (!c) return `<button class="les" type="button" disabled title="Em breve"><span class="st">🔜</span><span>${m.ordem ? m.ordem + '. ' : ''}${esc(m.titulo)}</span></button>`;
        const pct = MATR.includes(c.id) ? pctCurso(c) : null;
        const st = !ALUNO && !MASTER ? '🔒' : pct === 100 ? '✅' : pct !== null ? '▶️' : '✨';
        return `<button class="les" type="button" data-act="curso" data-id="${esc(c.id)}"><span class="st">${st}</span><span>${m.ordem ? m.ordem + '. ' : ''}${esc(c.titulo)}${pct !== null && pct < 100 ? ` <small class="sbpct">${pct}%</small>` : ''}${PORTAL.disponivel(c) ? '' : ` <small class="sbpct">${seloPrevia()}</small>`}</span></button>`;
      }).join('')}</div></div>
    </div>`;
  }).join('');
  const renda = PORTAL.catalogo.filter(m => m.trilha === 'renda');
  const gruposRenda = PORTAL.gruposRenda.map(g => {
    const itens = renda.filter(m => m.grupo === g.id && (cursoPorId(m.id) || m.status === 'em_breve'));
    if (!itens.length) return '';
    const abertos = itens.map(m => cursoPorId(m.id)).filter(Boolean);
    const p = abertos.length ? Math.round(abertos.reduce((s, c) => s + (MATR.includes(c.id) ? pctCurso(c) : 0), 0) / abertos.length) : 0;
    const id = 'renda-' + g.id, aberto = SB_NIVEIS_ABERTOS.has(id);
    return `<div class="mod sbacc ${aberto ? 'aberto' : ''}" style="--c:${g.cores[0]};--c2:${g.cores[1]};--p:${p}">
      <button class="modh sbniv" type="button" data-act="sb-nivel" data-nivel="${id}" aria-expanded="${aberto}"><div class="ring"><span class="modic">${g.icone}</span></div>
        <div class="modt">${g.titulo}<div class="mods">${abertos.length} de ${itens.length} ${itens.length === 1 ? 'disponível' : 'disponíveis'}</div></div><span class="sbseta" aria-hidden="true">▸</span></button>
      <div class="sbitens"><div class="sbin">${itens.map(m => {
        const c = cursoPorId(m.id), num = renda.indexOf(m) + 1;
        if (!c) return `<button class="les" type="button" disabled title="Em breve"><span class="st">🔜</span><span>${num}. ${esc(m.titulo)}</span></button>`;
        const pct = MATR.includes(c.id) ? pctCurso(c) : null;
        const st = !ALUNO && !MASTER ? '🔒' : pct === 100 ? '✅' : pct !== null ? '▶️' : '✨';
        return `<button class="les" type="button" data-act="curso" data-id="${esc(c.id)}"><span class="st">${st}</span><span>${num}. ${esc(c.titulo)}${pct !== null && pct < 100 ? ` <small class="sbpct">${pct}%</small>` : ''}${PORTAL.disponivel(c) ? '' : ` <small class="sbpct">${seloPrevia()}</small>`}</span></button>`;
      }).join('')}</div></div>
    </div>`;
  }).join('');
  const outros = CURSOS.filter(c => c.trilha !== 'renda' && !PORTAL.niveis.some(nv => nv.id === c.nivel))
    .map(c => `<button class="les" type="button" data-act="curso" data-id="${esc(c.id)}"><span class="st">${c.icone}</span><span>${esc(c.titulo)}</span></button>`).join('');
  return `<button class="homebtn cur" type="button" data-act="topo"><span class="hi">🏠</span>Início</button>
    <button class="homebtn" type="button" data-act="teste-nivel"><span class="hi">🎯</span>Descobrir meu nível</button>
    <div class="sbsec">Trilha de IA</div>${niveis}
    ${gruposRenda ? `<div class="sbsec">Renda com IA</div><button class="homebtn" type="button" data-act="teste-renda"><span class="hi">🧭</span>Descobrir por onde começar</button>${gruposRenda}` : ''}
    ${outros ? `<div class="sbsec">Outros cursos</div>${outros}` : ''}
    <div class="sbsec">App e conta</div>
    <button class="homebtn" type="button" data-act="indicar"><span class="hi">🎁</span>Indicar um amigo</button>
    <button class="homebtn so-pc" type="button" data-act="qr"><span class="hi">📱</span>Levar para o celular</button>
    ${linkContato('homebtn')}
    ${MASTER ? '<a class="homebtn" href="admin.html"><span class="hi">🛡️</span>Painel do Master</a>' : ''}
    <button class="homebtn inst" type="button" data-act="instalar" ${podeInstalar() ? '' : 'hidden'}><span class="hi">📲</span>Instalar o app</button>${dicaIos()}
    ${ALUNO || MASTER ? `<button class="homebtn" type="button" data-act="sair"><span class="hi">👋</span>Sair (${ALUNO ? esc(ALUNO.nome.split(' ')[0]) : 'Master'})</button>`
      : `<button class="homebtn" type="button" data-act="cadastro"><span class="hi">📝</span>Criar meu cadastro</button><button class="homebtn" type="button" data-act="entrar"><span class="hi">🔑</span>Já tenho cadastro</button>`}`;
}

function renderSidebar(){
  if (!C || VIEWS_PORTAL.includes(S.view)) {
    if (S.view !== 'cursos') closeMenu();
    $('sb').innerHTML = S.view === 'cursos' ? sidebarPortal() : ''; return;
  }
  const d = D();
  $('sb').innerHTML = `<button class="homebtn" data-act="cursos"><span class="hi">🎓</span>Todos os cursos</button>
  <button class="homebtn ${S.view==='home'?'cur':''}" data-act="home"><span class="hi">🏠</span>Início do curso</button>` +
  C.conteudo.modulos.map(m => {
    const done = modDone(m), open = unlocked(m.lessons[0].id), livre = toolLivre(m);
    const status = done ? 'Concluído' : (open ? modCount(m) + ' de ' + m.lessons.length + ' lições' : 'Bloqueado');
    const tool = prompts()[m.id] ? `<button class="modtool" data-act="tool" data-mod="${m.id}" ${livre?'':'disabled'} title="${livre?'Abrir prompts do módulo':'Conclua o módulo para liberar'}" aria-label="Toolbox do módulo ${m.id}">${livre?'🧰':'🔒'}</button>` : '';
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
  $('app').classList.toggle('full', !noCurso && S.view !== 'cursos');
  document.body.classList.toggle('sb-flut', !noCurso && S.view === 'cursos');
  $('btn-master').hidden = !MASTER;
  $('btn-sair').hidden = !(ALUNO || MASTER);
  $('titulo').textContent = noCurso ? C.titulo : 'Portal de Estudos IA';
  ['pb-wrap','pl'].forEach(id => $(id).classList.toggle('off', !noCurso));
  $('btn-tool').classList.toggle('off', !tb);
  $('bn-home').classList.toggle('off', !noCurso);
  $('bn-menu').classList.toggle('off', !noCurso && S.view !== 'cursos');
  $('bn-menu').innerHTML = noCurso ? '<span>📚</span>Lições' : '<span>🧭</span>Trilha';
  $('bn-tool').classList.toggle('off', !tb);
  $('bn-sair').classList.toggle('off', !(ALUNO || MASTER));
  $('bn-entrar').classList.toggle('off', !!(ALUNO || MASTER));
  $('bn-indica').classList.toggle('off', noCurso);
  const on = (id, v) => $(id).classList.toggle('on', v);
  on('bn-entrar', S.view === 'entrar');
  on('bn-cursos', !noCurso && S.view !== 'entrar'); on('bn-home', noCurso && S.view !== 'lesson'); on('bn-menu', noCurso && S.view === 'lesson'); on('bn-tool', TB.open);
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
    </section>${blocoCertificado()}${blocoDepoimento()}${avisoRecomendado()}
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

/* Certificado: do curso (100% das lições e projetos) ou, no projeto final, da trilha inteira. */
const refCertificado = () => C.projeto_final ? ['trilha', C.projeto_final] : ['curso', C.id];
function botaoCertificado(){
  const [tipo, ref] = refCertificado();
  return `<button class="next cert-btn" data-act="certificado" data-tipo="${tipo}" data-ref="${esc(ref)}">🎓 ${certDe(tipo, ref) ? 'Ver meu certificado' : 'Emitir meu certificado'} ➜</button>`;
}
function blocoCertificado(){
  if (!ALUNO || !completo(C)) return '';
  const [tipo, ref] = refCertificado(), cert = certDe(tipo, ref);
  return `<div class="cert-cta rise"><div class="cert-ico">🎓</div>
    <div><b>${tipo === 'trilha' ? 'Certificado da ' + PORTAL.trilhas[ref] : 'Certificado do curso'}</b>
    <span>${cert ? 'ID da credencial: <code>' + esc(cert.codigo) + '</code>' : 'Você concluiu 100%. Emita o seu certificado com ID da credencial e QR de validação.'}</span></div>
    ${botaoCertificado()}</div>`;
}
function infoCertificado(tipo, ref){
  if (tipo === 'curso') {
    const d = PORTAL.dadosCertificado(cursoPorId(ref));
    return { curso_id:d.curso_id, licoes:d.licoes, certificado:{ titulo:d.titulo, subtitulo:d.subtitulo, icone:d.icone, cores:d.cores, carga_horaria:d.carga_horaria, detalhe:d.licoes.length + ' lições', habilidades:d.habilidades } };
  }
  const pf = PORTAL.dadosCertificado(projetoFinal(ref)), lista = cursosDaTrilha(ref).map(PORTAL.dadosCertificado).concat(pf), n = lista.length - 1;
  return { cursos:lista, certificado:{ titulo:PORTAL.trilhas[ref], subtitulo:n + ' cursos + projeto final', icone:pf.icone, cores:pf.cores,
    carga_horaria:lista.reduce((s, c) => s + c.carga_horaria, 0), detalhe:n + ' cursos', habilidades:pf.habilidades } };
}
async function abrirCertificado(btn){
  const tipo = btn.dataset.tipo, ref = btn.dataset.ref;
  let cert = certDe(tipo, ref);
  if (!cert) {
    btn.disabled = true; btn.textContent = 'Emitindo…';
    try { cert = await DB.emitirCertificado(tipo, ref, infoCertificado(tipo, ref)); CERTS.push(cert); }
    catch(e){ console.error(e); toast(e.message || 'Não foi possível emitir agora. Tente de novo.'); btn.disabled = false; btn.textContent = '🎓 Emitir meu certificado ➜'; return; }
  }
  location.href = PORTAL.cert.link(cert.codigo) + '&meu=1';
}

/* Vitrine pública: depoimentos aprovados e autorizados (primeiro nome, inicial do sobrenome e estado). */
let VITRINE = null;
/* Só o master vê, para conferir o visual enquanto não há depoimento real aprovado. */
const EXEMPLOS_VITRINE = [
  { nome:'Ana P.', estado:'MG', curso_id:'ia-do-zero', texto:'Exemplo de depoimento: eu achava que IA era coisa de programador. Em poucas semanas já uso no dia a dia para organizar minha rotina e estudar melhor.' },
  { nome:'Carlos M.', estado:'BA', curso_id:'seu-primeiro-servico', texto:'Exemplo de depoimento: montei meu primeiro pacote de serviço com IA, aprendi a precificar e a explicar para o cliente o que entrego.' },
  { nome:'Juliana R.', estado:'SP', curso_id:'prompts-que-funcionam', texto:'Exemplo de depoimento: os desafios com casos reais fizeram toda a diferença. Hoje escrevo prompts claros e economizo horas no trabalho.' }
];
async function preencherVitrine(){
  if (VITRINE === null) { try { VITRINE = await DB.depoimentosPublicos(); } catch(e){ VITRINE = []; } }
  const el = $('vitrine-dep'), exemplo = !VITRINE.length && MASTER, lista = exemplo ? EXEMPLOS_VITRINE : VITRINE;
  if (!el || !lista.length) return;
  el.innerHTML = `<h2 class="sec-t">💬 Quem já concluiu${exemplo ? ' <span class="badge">PRÉVIA · SÓ MASTER</span>' : ''}</h2>
    <p class="tsub">${exemplo ? 'Exemplos para você ver o visual. Alunos e visitantes não veem esta seção até o primeiro depoimento real ser aprovado.' : 'Pessoas reais que começaram do zero e hoje aplicam o que aprenderam. A próxima história pode ser a sua.'}</p>
    <div class="deps">${lista.slice(0, 6).map(d => {
      const c = cursoPorId(d.curso_id);
      return `<figure class="dep rise" style="${c ? ccor(c) : ''}"><blockquote>“${esc(d.texto)}”</blockquote>
        <figcaption><b>${esc(d.nome)}${d.estado ? ' · ' + esc(d.estado) : ''}</b><small>Concluiu ${c ? c.icone + ' ' + esc(c.titulo) : esc(d.curso_id)}</small></figcaption></figure>`;
    }).join('')}</div>`;
  el.hidden = false;
}

/* Depoimento: ao concluir 100% do curso, o aluno conta como foi; o master aprova antes de publicar. */
let DEPS = [], DEPS_DE = null, DEP_EDITAR = false;
async function carregarDepoimentos(){
  if (!ALUNO) return [];
  if (DEPS_DE !== ALUNO.id) { DEPS_DE = ALUNO.id; try { DEPS = await DB.meusDepoimentos(); } catch(e){ DEPS = []; } }
  return DEPS;
}
function blocoDepoimento(){
  if (!ALUNO || !completo(C)) return '';
  DEP_EDITAR = false;
  setTimeout(preencherDepoimento, 0);
  return `<div class="card dep-box rise" id="dep-box"></div>`;
}
async function preencherDepoimento(){
  const curso = C && C.id; if (!curso || !$('dep-box')) return;
  const meu = (await carregarDepoimentos()).find(d => d.curso_id === curso), el = $('dep-box');
  if (!el || !C || C.id !== curso) return;
  if (meu && !DEP_EDITAR) {
    const st = meu.status === 'aprovado' && meu.autoriza_publicar ? '✅ Seu depoimento foi publicado. Obrigado por inspirar outras pessoas!'
      : meu.status === 'pendente' ? '⏳ Recebemos seu depoimento. Ele será revisado antes de ser publicado.' : '✅ Recebemos seu depoimento. Obrigado!';
    el.innerHTML = `<h3>💬 Seu depoimento</h3><p class="dep-txt">“${esc(meu.texto)}”</p><p class="nota">${st}</p>
      <button class="ghost" type="button" data-act="dep-editar">✏️ Editar depoimento</button>`;
    return;
  }
  el.innerHTML = `<h3>💬 Conte como foi este curso</h3>
    <p class="nota">Seu depoimento pode inspirar outras pessoas a começar e a conquistar novas oportunidades. Conte o que você aprendeu e o que mudou para você.</p>
    <form id="f-depoimento">
      <textarea name="texto" class="meu-projeto" rows="4" minlength="40" maxlength="600" required placeholder="Ex.: Eu nunca tinha usado IA e hoje já monto minhas propostas em minutos...">${esc(meu ? meu.texto : '')}</textarea>
      <div class="pconta" id="dep-conta">${meu ? meu.texto.length : 0} de 40 a 600 caracteres</div>
      <label class="pcheck"><input type="checkbox" name="autoriza" ${meu && meu.autoriza_publicar ? 'checked' : ''}><span>Autorizo publicar este depoimento no site e nas redes sociais do Portal de Estudos IA, com meu primeiro nome, a inicial do sobrenome e meu estado.</span></label>
      <button class="next" type="submit">Enviar depoimento ➜</button>
    </form>`;
}
async function enviarDepoimento(f){
  const texto = f.texto.value.trim(), btn = f.querySelector('button[type=submit]');
  if (texto.length < 40) { toast('✍️ Escreva pelo menos 40 caracteres'); return; }
  btn.disabled = true; btn.textContent = 'Enviando…';
  try {
    await DB.enviarDepoimento(C.id, texto, f.autoriza.checked);
    DEPS = DEPS.filter(d => d.curso_id !== C.id).concat({ curso_id:C.id, texto, autoriza_publicar:f.autoriza.checked, status:'pendente' });
    DEP_EDITAR = false; preencherDepoimento(); toast('💬 Depoimento enviado. Obrigado!');
  } catch(e){ console.error(e); toast(e.message || 'Não foi possível enviar agora.'); btn.disabled = false; btn.textContent = 'Enviar depoimento ➜'; }
}

/* "recomendado_antes" no catálogo: só sugestão, nunca bloqueia o curso. */
function avisoRecomendado(){
  const itens = (C.recomendado_antes || []).map(id => {
    const m = PORTAL.catalogo.find(x => x.id === id), c = cursoPorId(id);
    if (!m) return '';
    const feito = c && pctCurso(c) === 100 ? '✅ ' : '';
    return c && (PORTAL.disponivel(c) || PORTAL.modoPrevia || MASTER)
      ? `<button class="link inl" type="button" data-act="curso" data-id="${esc(id)}">${feito}${esc(m.titulo)}</button>`
      : `<span>${feito}${esc(m.titulo)} <small>(Em breve)</small></span>`;
  }).filter(Boolean);
  return itens.length ? `<p class="recom">📌 <b>Recomendado antes:</b> ${itens.join(', ')}. <small>É só uma sugestão: você pode seguir direto.</small></p>` : '';
}

function renderModuloConcluido(){
  const mod = modOf(S.modDone || 1), next = C.conteudo.modulos.find(x => x.id === mod.id + 1);
  const msg = (C.conteudo.conclusaoModulo || {})[mod.id] || '';
  const tem = !!prompts()[mod.id];
  $('main').setAttribute('style', tstyle(mod.id));
  $('main').innerHTML = `<div class="crumb">Módulo ${mod.id}: ${mod.title}</div>
    <div class="done-box"><div class="trophy">🏆</div>
    <h2>${next ? 'Módulo ' + mod.id + ' concluído!' : C.projeto_final ? 'Trilha concluída!' : 'Curso concluído!'}</h2>
    <p>${msg}${tem ? ' As missões de prompt deste módulo foram liberadas no Code Toolbox: agora é a sua vez de escrever.' : ''}</p>
    <div class="row">${tem ? `<button class="next alt" data-act="tool" data-mod="${mod.id}">🧰 Abrir Code Toolbox</button>` : ''}
    ${next ? `<button class="next" data-act="go" data-id="${next.lessons[0].id}" style="${tstyle(next.id)}">Ir para o Módulo ${next.id} ➜</button>`
      : `${ALUNO && completo(C) ? botaoCertificado() : ''}<button class="next${ALUNO && completo(C) ? ' alt' : ''}" data-act="cursos">Ver outros cursos</button>`}</div></div>
    ${next ? '' : blocoDepoimento()}`;
}

function renderLicao(){
  const m = $('main'), L = byId(S.cur), mod = modOf(L.mod), d = D();
  m.setAttribute('style', tstyle(mod.id));
  const lessonDots = mod.lessons.map(l => `<i class="${d[l.id]?'on':(l.id===L.id?'now':'')}"></i>`).join('');
  const head = `<div class="lh"><button class="ltile" data-act="spin" aria-label="Ícone da lição">${iconeLicao(L)}</button>
    <div><div class="crumb">Módulo ${mod.id}: ${mod.title} · Lição ${L.id}${L.min?' · '+L.min+' min':''}</div><h1 class="h1">${L.title}</h1></div></div><div class="dots">${lessonDots}</div>`;
  if (!L.soon && L.projeto) { renderProjeto(L, mod, head); return; }
  if (L.soon || !L.ch) {
    m.innerHTML = head + (L.body || []).join('') + `<div class="card soon"><div style="font-size:46px">🚧</div><h3>Conteúdo em construção</h3><p style="margin:6px auto 0">${L.teaser || ''}</p></div>`;
    return;
  }
  const ss = SESSION[C.id + ':' + L.id] || { tried:[], q:0 };
  const solved = !!d[L.id];
  const lista = perguntas(L), atual = solved ? lista.length : (ss.q || 0), letters = ['A','B','C','D','E'];
  const bloco = (c, k) => {
    const feita = k < atual;
    const opts = c.opts.map((o,i) => {
      const tried = !feita && ss.tried.includes(i);
      let cls = '', dis = '';
      if (feita) { dis = 'disabled'; cls = o.ok ? 'right' : 'dim'; }
      else if (tried) { dis = 'disabled'; cls = 'wrong' + (i === ss.last ? ' shake' : ''); }
      return `<button class="opt ${cls}" data-act="ans" data-i="${i}" ${dis}><span class="l l${letters[i]}">${letters[i]}</span><span>${o.t}</span></button>`;
    }).join('');
    let fb = '';
    if (feita) {
      const ultima = k === lista.length - 1;
      fb = `<div class="fb ok pop"><b>✅ ${ultima ? (C.conteudo.acerto || 'Acertou!') + ' +100 XP' : 'Certo!'}</b><span>${c.opts.find(o => o.ok).why}</span></div>`;
    } else if (ss.tried.length) {
      fb = `<div class="fb no pop"><b>❌ Ainda não.</b><span>${c.opts[ss.tried[ss.tried.length-1]].why} Tente outra alternativa.</span></div>`;
    }
    return `<section class="os" aria-label="Desafio">
      ${lista.length > 1 ? `<div class="pnum">Pergunta ${k + 1} de ${lista.length}</div>` : ''}
      <div class="who">${c.who} diz:</div>
      <div class="says">"${c.says}"</div>
      <div class="q">${c.q}</div>
      ${opts}
      <div ${k === Math.min(atual, lista.length - 1) ? 'id="fb"' : ''}>${fb}</div>
    </section>`;
  };
  m.innerHTML = head + L.body.join('') + lista.slice(0, Math.min(atual + 1, lista.length)).map(bloco).join('') + navConcluida(L, mod, solved);
  rodarGancho();
}

const perguntas = L => Array.isArray(L.ch) ? L.ch : [L.ch];

function navConcluida(L, mod, solved){
  if (!solved) return '';
  const i = idxOf(L.id), isLastOfMod = mod.lessons[mod.lessons.length-1].id === L.id;
  if (isLastOfMod && modDone(mod)) return `<button class="next alt" data-act="finish" data-mod="${mod.id}">🎉 Concluir módulo</button>`;
  if (FLAT()[i+1]) return `<button class="next" data-act="next">Avançar para próxima lição ➜</button>`;
  return '';
}

/* Projeto prático: o aluno escreve a entrega e confere a checklist antes de concluir. */
const chaveProjeto = (L, parte) => ['portal-projeto', ALUNO ? ALUNO.id : (MASTER ? 'master' : ''), C.id, L.id, parte].join(':');
const lerProjeto = (L, parte, padrao) => { try { const v = localStorage.getItem(chaveProjeto(L, parte)); return v === null ? padrao : JSON.parse(v); } catch(e){ return padrao; } };
const gravarProjeto = (L, parte, v) => { try { localStorage.setItem(chaveProjeto(L, parte), JSON.stringify(v)); } catch(e){} };
const minimoProjeto = L => L.projeto.minimo || 200;

function renderProjeto(L, mod, head){
  const p = L.projeto, solved = !!D()[L.id];
  const texto = lerProjeto(L, 'texto', ''), marcados = lerProjeto(L, 'checklist', []);
  $('main').innerHTML = head + (L.body || []).join('') + `<section class="os projeto" aria-label="Projeto prático">
      ${L.min ? `<div class="pnum">⏱️ Cerca de ${L.min} min</div>` : ''}
      <div class="q">${p.entrega}</div>
      <ol class="ppassos">${p.passos.map(x => `<li>${x}</li>`).join('')}</ol>
      <label class="plabel" for="meu-projeto">Sua entrega</label>
      <textarea id="meu-projeto" class="meu-projeto" rows="9" placeholder="Escreva aqui o resultado do seu projeto, com as suas palavras...">${esc(texto)}</textarea>
      <div class="pconta" id="pconta">${texto.trim().length} de pelo menos ${minimoProjeto(L)} caracteres</div>
      <div class="plabel">Antes de concluir, confira:</div>
      ${p.checklist.map((x, k) => `<label class="pcheck"><input type="checkbox" class="proj-check" data-k="${k}" ${marcados.includes(k) ? 'checked' : ''}><span>${x}</span></label>`).join('')}
      <div id="fb">${solved ? `<div class="fb ok pop"><b>✅ Projeto concluído! +100 XP</b><span>Guarde a sua entrega: ela é a prova prática do que você aprendeu.</span></div>` : ''}</div>
      ${solved ? navConcluida(L, mod, true) : `<button class="next" data-act="projeto-ok">✅ Concluir projeto</button>`}
    </section>`;
}

async function concluirProjeto(){
  const L = byId(S.cur), texto = lerProjeto(L, 'texto', '').trim(), marcados = lerProjeto(L, 'checklist', []);
  if (texto.length < minimoProjeto(L)) { toast('✍️ Escreva a sua entrega: pelo menos ' + minimoProjeto(L) + ' caracteres'); return; }
  if (marcados.length < L.projeto.checklist.length) { toast('☑️ Confira todos os itens da lista antes de concluir'); return; }
  D()[L.id] = true; renderAll(true); confetti();
  const mod = modOf(L.mod); if (modDone(mod)) toast('🏆 Módulo ' + mod.id + ' completo!');
  try { await salvarLicao(C.id, L.id); }
  catch(e){ console.error(e); toast('⚠️ Não foi possível salvar o progresso. Verifique a internet.'); }
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
  else if (S.view === 'esqueci') renderEsqueci();
  else if (S.view === 'nova-senha') renderNovaSenha();
  else if (S.view === 'confirmar-whats') renderConfirmarWhats();
  else if (S.view === 'home') renderHome();
  else if (S.view === 'moduleDone') renderModuloConcluido();
  else renderLicao();
  if (S.view !== 'cursos') $('main').insertAdjacentHTML('afterbegin', barraNav());
  if (S.view === 'lesson') $('main').insertAdjacentHTML('beforeend', navLicao());
  if (!keep) window.scrollTo(0,0);
}

/* Barra do topo: Voltar + caminho (Início › Curso › Módulo › Lição). */
const TITULO_VIEW = { cadastro:'Cadastro', entrar:'Entrar', verificar:'Confirmação', 'confirmar-whats':'Confirmar WhatsApp', esqueci:'Esqueci minha senha', 'nova-senha':'Nova senha' };
function barraNav(){
  const p = [`<button class="bc" type="button" data-act="cursos">🏠 Início</button>`];
  let voltar = 'cursos';
  if (C && !VIEWS_PORTAL.includes(S.view)) {
    p.push(S.view === 'home' ? `<span class="bc atual">${esc(C.titulo)}</span>` : `<button class="bc" type="button" data-act="home">${esc(C.titulo)}</button>`);
    if (S.view === 'lesson') { const L = byId(S.cur); p.push(`<span class="bc">Módulo ${L.mod}</span>`, `<span class="bc atual">Lição ${esc(L.id)}</span>`); voltar = 'home'; }
    else if (S.view === 'moduleDone') { p.push(`<span class="bc atual">Módulo ${S.modDone} concluído</span>`); voltar = 'home'; }
  } else if (TITULO_VIEW[S.view]) p.push(`<span class="bc atual">${TITULO_VIEW[S.view]}</span>`);
  return `<nav class="navbar" aria-label="Caminho"><button class="nvolta" type="button" data-act="${voltar}">← Voltar</button>
    <div class="bcs">${p.join('<span class="sep" aria-hidden="true">›</span>')}</div></nav>`;
}

/* Rodapé da lição: anterior, início do curso e próxima (só libera a próxima depois de acertar o desafio). */
function navLicao(){
  const i = idxOf(S.cur), ant = FLAT()[i - 1], prox = FLAT()[i + 1];
  const livre = prox && unlocked(prox.id);
  return `<nav class="lnav" aria-label="Navegação entre lições">
    ${ant ? `<button class="ghost" type="button" data-act="go" data-id="${ant.id}" title="${esc(ant.title)}">← Anterior</button>` : '<span></span>'}
    <button class="ghost" type="button" data-act="home">☰ Início do curso</button>
    ${prox ? `<button class="ghost ${livre ? 'prox' : ''}" type="button" data-act="go" data-id="${prox.id}" ${livre ? '' : 'disabled title="Acerte o desafio para liberar"'}>${livre ? 'Próxima →' : '🔒 Próxima'}</button>` : '<span></span>'}
  </nav>`;
}

const chaveMeuPrompt = (mod, k) => ['portal-meu-prompt', ALUNO ? ALUNO.id : (MASTER ? 'master' : ''), C.id, mod, k].join(':');
const lerMeuPrompt = (mod, k) => { try { return localStorage.getItem(chaveMeuPrompt(mod, k)) || ''; } catch(e){ return ''; } };
const gravarMeuPrompt = (mod, k, txt) => { try { localStorage.setItem(chaveMeuPrompt(mod, k), txt); } catch(e){} };

function renderToolbox(){
  const d = $('drawer');
  if (!C || !temToolbox()) { TB.open = false; d.classList.remove('on'); $('shade').classList.remove('on'); return; }
  const tabs = C.conteudo.modulos.filter(m => prompts()[m.id]).map(m => {
    const ok = toolLivre(m);
    return `<button class="tab ${TB.mod===m.id?'on':''}" style="${tstyle(m.id)}" data-act="tbmod" data-mod="${m.id}" ${ok?'':'disabled'}>${ok?m.icon+' ':'🔒 '}Módulo ${m.id}</button>`;
  }).join('');
  const mod = modOf(TB.mod);
  let body;
  if (!mod || !toolLivre(mod) || !prompts()[mod.id]) {
    body = `<div class="lockmsg"><div style="font-size:40px">🔒</div><p>Conclua todas as lições do módulo para liberar as missões de prompt.</p></div>`;
  } else {
    body = `<div style="${tstyle(mod.id)}"><p style="margin:0 0 14px; color:var(--muted); font-size:14px">Não há prompt pronto: escreva o seu, com as suas palavras e um caso real seu, usando o que aprendeu neste módulo. Depois toque em <b>✨ Testar na IA do Google</b> para ver a resposta, volte aqui e melhore o prompt até ficar bom.</p>` +
      prompts()[mod.id].map((p,k) => `<div class="pr"><div class="prh"><b>🎯 ${p.title}</b><span class="prbt"><button class="cp ia" data-act="testar-ia" data-k="${k}" title="Abre a IA gratuita do Google com o seu prompt">✨ Testar na IA do Google</button><button class="cp" data-act="copy" data-k="${k}">Copiar</button></span></div><div class="prd">${p.desc}</div><textarea class="meu-prompt" data-k="${k}" rows="6" placeholder="Escreva aqui o seu prompt...">${esc(lerMeuPrompt(mod.id, k))}</textarea></div>`).join('') + `</div>`;
  }
  d.innerHTML = `<div class="dh"><h2>🧰 Code Toolbox</h2><button class="x" data-act="toolclose" aria-label="Fechar">✕</button></div>
    <div class="tabs">${tabs}</div><div class="db">${body}</div>`;
  d.classList.toggle('on', TB.open); $('shade').classList.toggle('on', TB.open);
}

function renderAll(keep){ renderSidebar(); renderProgress(); renderMain(keep); renderToolbox(); sincronizarHistorico(); }

/* Botão voltar do navegador, do mouse e do celular: cada tela vira um passo no histórico. */
let NAV_POP = false;
const chaveNav = () => [S.view, C ? C.id : '', S.view === 'lesson' ? S.cur : '', S.view === 'moduleDone' ? S.modDone : ''].join('|');
function sincronizarHistorico(){
  if (NAV_POP) return;
  const k = chaveNav();
  if (history.state && history.state.k === k) return;
  const st = { k, view:S.view, curso:C ? C.id : null, cur:S.cur, modDone:S.modDone };
  if (history.state && history.state.k) history.pushState(st, ''); else history.replaceState(st, '');
}
window.addEventListener('popstate', e => {
  const st = e.state; if (!st || !st.k) return;
  const c = st.curso ? cursoPorId(st.curso) : null;
  let view = st.view;
  if (view === 'verificar' || view === 'confirmar-whats') view = 'cursos';
  if (!VIEWS_PORTAL.includes(view) && (!c || !(MASTER || (ALUNO && MATR.includes(c.id))))) view = 'cursos';
  if (c && !VIEWS_PORTAL.includes(view)) C = c;
  if (view === 'lesson' && !(st.cur && unlocked(st.cur))) view = 'home';
  S.view = view; S.cur = st.cur; S.modDone = st.modDone; TB.open = false; closeMenu();
  NAV_POP = true; renderAll(); NAV_POP = false;
  history.replaceState(Object.assign({}, st, { k:chaveNav(), view:S.view }), '');
});

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
  const c = cursoPorId(id); if (!c || !(PORTAL.disponivel(c) || PORTAL.modoPrevia || MASTER)) return;
  if (c.projeto_final && !trilhaLiberada(c.projeto_final)) { toast('🔒 Conclua todos os cursos da ' + PORTAL.trilhas[c.projeto_final] + ' para liberar o projeto final'); return; }
  if (masterLocal()) { if (!MATR.includes(id)) MATR.push(id); }
  else if (!ALUNO) { S.escolhido = id; S.view = 'cadastro'; closeMenu(); renderAll(); return; }
  else if (!DB.verificado(ALUNO)) { iniciarVerificacao({ curso:id }); return; }
  else if (!MATR.includes(id)) {
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
  else if (f.senha && f.senha.value.length < 8) msg = 'A senha precisa ter pelo menos 8 caracteres.';
  else if (f.senha && f.senha.value !== f.senha2.value) msg = 'As duas senhas não são iguais.';
  err.textContent = msg;
  if (msg) return;
  const btn = $('cad-ok'); btn.disabled = true; btn.textContent = 'Salvando…';
  dados.codigo_whats = (ALUNO && ALUNO.codigo_whats) || String(1000 + Math.floor(Math.random() * 9000));
  if (f.senha && !EMAIL_SESSAO) {
    try { await DB.criarConta(email, f.senha.value); EMAIL_SESSAO = email; }
    catch(e){ console.error(e); err.textContent = e.message; btn.disabled = false; btn.textContent = textoBotaoCadastro(); return; }
  }
  if (EMAIL_SESSAO && EMAIL_SESSAO === email) {
    try {
      ALUNO = await DB.cadastrar(dados);
      VER = { dados, curso, email };
      if (DB.verificado(ALUNO)) await aposCadastro(curso);
      else iniciarVerificacao({ curso, dados });
    } catch(e){
      console.error(e);
      err.textContent = 'Não foi possível salvar o cadastro. Tente novamente em instantes.';
      btn.disabled = false; btn.textContent = textoBotaoCadastro();
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
  await checarMaster();
  if (!ALUNO && !MASTER) { toast('E-mail confirmado ✓ Agora complete seu cadastro.'); S.escolhido = VER.curso || S.escolhido || (CURSOS[0] && CURSOS[0].id); S.view = 'cadastro'; renderAll(); return; }
  if (ALUNO) [MATR, PROG, CERTS] = await Promise.all([DB.matriculas(), DB.progresso(), DB.meusCertificados()]);
  prepararMaster();
  if (!MASTER && !DB.verificado(ALUNO)) { toast('E-mail confirmado ✓'); VER.etapa = 'whats'; VER.cooldownAte = 0; S.view = 'verificar'; renderAll(); enviarCodigo(); return; }
  if (VER.dados) { limparPendente(); await aposCadastro(VER.curso); return; }
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
  const curso = VER.curso, nome = ALUNO ? ALUNO.nome.split(' ')[0] : 'Master';
  VER = {}; limparPendente();
  confetti();
  toast((curso ? (pedeConfirmacao() ? 'Tudo confirmado! Bom estudo, ' : 'Tudo pronto! Bom estudo, ') : 'Bem-vindo de volta, ') + nome + ' 🎉');
  if (curso && cursoPorId(curso)) await abrirCurso(curso);
  else irParaCursos();
}

async function pedirEntrada(form){
  const email = form.elements.email.value.trim().toLowerCase(), err = $('ent-err');
  if (!RE_EMAIL.test(email)) { err.textContent = 'Informe um e-mail válido.'; return; }
  if (MODO_SENHA()) {
    const btn = $('ent-ok'); btn.disabled = true; btn.textContent = 'Entrando…';
    try {
      await DB.entrarComSenha(email, form.elements.senha.value);
      await checarMaster();
      VER = { etapa:'email', email, modo:'entrar', curso:S.escolhido };
      await continuarAposEmail();
    } catch(e){ console.error(e); err.textContent = e.message; btn.disabled = false; btn.textContent = 'Entrar ➜'; }
    return;
  }
  VER = { etapa:'email', email, modo:'entrar', curso:S.escolhido };
  S.view = 'verificar'; renderAll();
  enviarCodigo();
}

async function sair(){
  try { await DB.sair(); if (MASTER) await DB.sairMaster(); } catch(e){ console.error(e); }
  ALUNO = null; EMAIL_SESSAO = null; MATR = []; PROG = {}; CERTS = []; C = null; VER = {}; MASTER = false; limparPendente();
  try { localStorage.removeItem(CHAVE_NIVEL); localStorage.removeItem(CHAVE_RENDA); } catch(e){}
  await ajustarPrevia();
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
  const ss = SESSION[key] = SESSION[key] || { tried:[], q:0 };
  const lista = perguntas(L), q = ss.q || 0;
  if (lista[q].opts[i].ok && q < lista.length - 1) {
    ss.q = q + 1; ss.tried = []; ss.last = null; renderMain(true);
    const novas = document.querySelectorAll('#main section.os'); const nova = novas[novas.length - 1];
    if (nova && nova.scrollIntoView) nova.scrollIntoView({ behavior: reduced() ? 'auto' : 'smooth', block:'start' });
    return;
  }
  if (lista[q].opts[i].ok) {
    ss.q = lista.length;
    D()[L.id] = true; renderAll(true); confetti();
    const mod = modOf(L.mod); if (modDone(mod)) toast('🏆 Módulo ' + mod.id + ' completo!');
    try { await salvarLicao(C.id, L.id); }
    catch(e){ console.error(e); toast('⚠️ Não foi possível salvar o progresso. Verifique a internet.'); }
  } else { if (!ss.tried.includes(i)) ss.tried.push(i); ss.last = i; renderMain(true); }
  const fb = $('fb'); if (fb && fb.scrollIntoView) fb.scrollIntoView({ behavior: reduced() ? 'auto' : 'smooth', block:'center' });
}

document.addEventListener('click', e => {
  const t = e.target.closest('[data-act]'); if (!t) return;
  const a = t.dataset.act;
  if (a !== 'cursos-lista' && a !== 'cl-box') fecharListaCursos();
  if (a === 'cursos-lista') abrirListaCursos();
  else if (a === 'cursos') irParaCursos();
  else if (a === 'cadastro') { S.escolhido = S.escolhido || (CURSOS[0] && CURSOS[0].id); S.view = 'cadastro'; renderAll(); }
  else if (a === 'entrar') { VER = {}; S.view = 'entrar'; renderAll(); }
  else if (a === 'esqueci') { S.view = 'esqueci'; renderAll(); }
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
  else if (a === 'pedir-whats') {
    DB.marcarPedidoWhats().then(q => { ALUNO.whatsapp_solicitado_em = q; setTimeout(() => renderMain(true), 400); })
      .catch(err => console.error(err));
  }
  else if (a === 'ir-curso') liberarAcesso();
  else if (a === 'curso') abrirCurso(t.dataset.id);
  else if (a === 'instalar') instalarApp();
  else if (a === 'qr') abrirQr();
  else if (a === 'indicar') indicarAmigo();
  else if (a === 'fechar-qr') { if (t === e.target || t.classList.contains('nfechar')) fecharQr(); }
  else if (a === 'teste-nivel') abrirTeste();
  else if (a === 'fechar-teste') { if (t === e.target || t.classList.contains('nfechar')) fecharTeste(); }
  else if (a === 'tn-resp' && TN && !TN.espera) {
    TN.resp[TN.i] = +t.dataset.v; TN.espera = true; t.classList.add('sel');
    setTimeout(() => { if (TN) { TN.espera = false; TN.i++; desenharTeste(); } }, 220);
  }
  else if (a === 'tn-volta' && TN) { TN.i = Math.max(0, TN.i - 1); desenharTeste(); }
  else if (a === 'tn-refazer' && TN) { TN = { i:0, resp:[], tipo:TN.tipo }; desenharTeste(); }
  else if (a === 'teste-renda') abrirTeste('renda');
  else if (a === 'tn-curso') { const id = t.dataset.id; fecharTeste(); abrirCurso(id); }
  else if (a === 'tn-trilha') { const nv = t.dataset.nivel; fecharTeste(); setTimeout(() => { const s = $('nivel-' + nv); if (s) s.scrollIntoView({ behavior:'smooth', block:'start' }); }, 80); }
  else if (a === 'topo') { closeMenu(); window.scrollTo({ top:0, behavior:'smooth' }); }
  else if (a === 'sb-nivel') {
    const id = t.dataset.nivel, abrir = !SB_NIVEIS_ABERTOS.has(id);
    if (abrir) SB_NIVEIS_ABERTOS.add(id); else SB_NIVEIS_ABERTOS.delete(id);
    t.parentElement.classList.toggle('aberto', abrir); t.setAttribute('aria-expanded', abrir);
  }
  else if (a === 'ver-nivel') { closeMenu(); const s = $('nivel-' + t.dataset.nivel); if (s) s.scrollIntoView({ behavior:'smooth', block:'start' }); }
  else if (a === 'ver-trilha') { const s = $('trilha'); if (s) s.scrollIntoView({ behavior:'smooth', block:'start' }); }
  else if (a === 'fechar-aviso') { try { localStorage.setItem(CHAVE_AVISO_TRILHA, '1'); } catch(e){} const b = $('aviso-trilha'); if (b) b.remove(); }
  else if (a === 'ver-renda') { closeMenu(); const s = $('renda'); if (s) s.scrollIntoView({ behavior:'smooth', block:'start' }); }
  else if (a === 'fechar-aviso-renda') { try { localStorage.setItem(CHAVE_AVISO_RENDA, '1'); } catch(e){} const b = $('aviso-renda'); if (b) b.remove(); }
  else if (a === 'menu' && t.classList.contains('sbz-menu')) $('sb').classList.add('on');
  else if (a === 'menu') { $('sb').classList.toggle('on'); $('ov').classList.toggle('on'); }
  else if (a === 'certificado') abrirCertificado(t);
  else if (a === 'dep-editar') { DEP_EDITAR = true; preencherDepoimento(); }
  else if (!C) return;
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
  else if (a === 'projeto-ok') concluirProjeto();
  else if (a === 'next') { const i = idxOf(S.cur); if (FLAT()[i+1]) goLesson(FLAT()[i+1].id); }
  else if (a === 'finish') { S.view = 'moduleDone'; S.modDone = parseInt(t.dataset.mod,10); renderAll(); confetti(); }
  else if (a === 'tool') {
    if (!temToolbox()) return;
    const m = t.dataset.mod ? parseInt(t.dataset.mod,10) : null;
    if (m) TB.mod = m;
    else { const last = C.conteudo.modulos.filter(x => toolLivre(x) && prompts()[x.id]).pop(); if (!last) { toast('🔒 Conclua um módulo para liberar o Toolbox'); return; } TB.mod = last.id; }
    TB.open = true; closeMenu(); renderToolbox(); renderProgress();
  }
  else if (a === 'toolclose') { TB.open = false; renderToolbox(); renderProgress(); }
  else if (a === 'tbmod') { TB.mod = parseInt(t.dataset.mod,10); renderToolbox(); }
  else if (a === 'copy') {
    const k = parseInt(t.dataset.k,10), txt = lerMeuPrompt(TB.mod, k).trim();
    if (!txt) { toast('✍️ Escreva o seu prompt antes de copiar'); return; }
    copyText(txt, t);
  }
  else if (a === 'testar-ia') {
    const txt = lerMeuPrompt(TB.mod, parseInt(t.dataset.k,10)).trim();
    if (!txt) { toast('✍️ Escreva o seu prompt antes de testar'); return; }
    if (txt.length <= 1500) window.open('https://www.google.com/search?udm=50&q=' + encodeURIComponent(txt), '_blank', 'noopener');
    else {
      (navigator.clipboard ? navigator.clipboard.writeText(txt) : Promise.reject()).catch(() => {});
      window.open('https://gemini.google.com/app', '_blank', 'noopener');
      toast('📋 Prompt longo copiado: cole no Gemini com Ctrl+V (ou toque e segure → Colar)');
    }
  }
  else if (a === 'reset') {
    if (!confirm('Apagar todo o seu progresso neste curso?')) return;
    (masterLocal() ? Promise.resolve() : DB.reiniciar(C.id)).then(() => { PROG[C.id] = {}; SESSION = {}; if (masterLocal()) gravarProgMaster(); S.view = 'home'; renderAll(); })
      .catch(err => { console.error(err); toast('Não foi possível reiniciar agora.'); });
  }
});
document.addEventListener('submit', e => {
  const id = e.target.id;
  if (id === 'f-cad') { e.preventDefault(); enviarCadastro(e.target); }
  else if (id === 'f-ver') { e.preventDefault(); confirmarCodigo(e.target); }
  else if (id === 'f-entrar') { e.preventDefault(); pedirEntrada(e.target); }
  else if (id === 'f-esqueci') { e.preventDefault(); pedirNovaSenha(e.target); }
  else if (id === 'f-nova') { e.preventDefault(); salvarNovaSenha(e.target); }
  else if (id === 'f-depoimento') { e.preventDefault(); enviarDepoimento(e.target); }
});
document.addEventListener('input', e => {
  if (e.target.name === 'pais' && e.target.form && e.target.form.id === 'f-cad') renderEstado();
  else if (e.target.name === 'cep' && e.target.form && e.target.form.id === 'f-cad') { if (e.target.value.replace(/\D/g, '').length === 8) buscarCep(e.target); }
  else if (e.target.classList.contains('otp')) {
    e.target.value = e.target.value.replace(/\D/g, '').slice(0, 6);
    if (e.target.value.length === 6) e.target.form.requestSubmit ? e.target.form.requestSubmit() : confirmarCodigo(e.target.form);
  }
  else if (e.target.form && e.target.form.id === 'f-depoimento' && e.target.name === 'texto') { const c = $('dep-conta'); if (c) c.textContent = e.target.value.trim().length + ' de 40 a 600 caracteres'; }
  else if (e.target.classList.contains('meu-prompt')) gravarMeuPrompt(TB.mod, parseInt(e.target.dataset.k, 10), e.target.value);
  else if (e.target.id === 'meu-projeto') {
    const L = byId(S.cur); gravarProjeto(L, 'texto', e.target.value);
    const c = $('pconta'); if (c) c.textContent = e.target.value.trim().length + ' de pelo menos ' + minimoProjeto(L) + ' caracteres';
  }
  else if (e.target.classList.contains('proj-check')) {
    const L = byId(S.cur), k = parseInt(e.target.dataset.k, 10), lista = lerProjeto(L, 'checklist', []).filter(x => x !== k);
    if (e.target.checked) lista.push(k);
    gravarProjeto(L, 'checklist', lista);
  }
  else if (S.view === 'lesson' && $('main').contains(e.target)) rodarGancho();
});
['input','change'].forEach(tipo => document.addEventListener(tipo, e => {
  if (e.target.form && e.target.form.id === 'f-cad') setTimeout(atualizarPreenchimento);
}));
document.addEventListener('focusout', e => { if (e.target.name === 'cep' && e.target.form && e.target.form.id === 'f-cad') buscarCep(e.target); });
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { fecharQr(); fecharTeste(); fecharListaCursos(); }
  if (e.key === 'Escape') { TB.open = false; renderToolbox(); renderProgress(); closeMenu(); }
  if ((e.key === 'Enter' || e.key === ' ') && e.target.getAttribute && e.target.getAttribute('role') === 'button') { e.preventDefault(); e.target.click(); }
});

/* ============ INÍCIO ============ */
async function iniciar(){
  try {
    await DB.iniciar();
    CURSOS = await PORTAL.carregarCursos(false);
    [ALUNO, EMAIL_SESSAO] = await Promise.all([DB.alunoAtual(), DB.emailDaSessao()]);
    if (ALUNO) [MATR, PROG, CERTS] = await Promise.all([DB.matriculas(), DB.progresso(), DB.meusCertificados()]);
    await checarMaster();
    prepararMaster();
  } catch(e){
    console.error(e);
    $('main').innerHTML = '<div class="empty">Não foi possível carregar o portal. Verifique a internet e recarregue a página.</div>';
    return;
  }
  if (DB.modo === 'demo') { const b = $('demo-bar'); b.hidden = false; b.textContent = 'Modo demonstração: os dados ficam salvos só neste navegador.'; }
  DB.aoRecuperarSenha(() => { S.view = 'nova-senha'; renderAll(); });
  if (DB.emRecuperacao() && DB.modo !== 'demo') { S.view = 'nova-senha'; renderAll(); return; }
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
/* Painel flutuante (notebook): abre no clique da aba Trilha e fecha ao afastar o mouse. */
let FECHA_SB = null;
const sbFlutuante = () => document.body.classList.contains('sb-flut') && innerWidth > 900 && !$('qr-modal') && !$('tn-modal');
document.addEventListener('mousemove', e => {
  if (!sbFlutuante()) return;
  if (!$('sb').classList.contains('on')) return;
  const sb = $('sb');
  if (e.clientX > sb.getBoundingClientRect().right + 40) {
    if (!FECHA_SB) FECHA_SB = setTimeout(() => { FECHA_SB = null; closeMenu(); }, 250);
  } else { clearTimeout(FECHA_SB); FECHA_SB = null; }
});
document.documentElement.addEventListener('mouseleave', () => { if (sbFlutuante()) closeMenu(); });
if ('serviceWorker' in navigator) window.addEventListener('load', () => { navigator.serviceWorker.register('sw.js').catch(e => console.error(e)); });
iniciar();
})();
