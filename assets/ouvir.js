/* Ouvir: lê o texto da página em voz alta com a voz pt-BR do próprio aparelho (Web Speech API).
   Uso: Ouvir.montar(elementoOndeFicaOBotao, () => [{ texto, el }, ...], { audio: 'arquivo.mp3' }); Ouvir.parar().
   Com { audio }, toca o mp3 pré-gravado e só usa a voz do aparelho se o arquivo falhar. */
(function(){
  const sy = window.speechSynthesis;
  const suportado = !!(sy && window.SpeechSynthesisUtterance);
  const VELS = [0.75, 1, 1.25, 1.5, 2], CHAVE_VEL = 'portal-ouvir-vel', CHAVE_VOZ = 'portal-ouvir-voz', MAX = 240;
  const st = { fila: [], i: 0, estado: 'parado', token: 0, ctrl: null, fonte: null, lendo: null, ultimoTexto: [], u: null, audio: null, src: '', modo: 'fala', pesos: [] };
  let vel = 1, voz = null, vozSalva = '', economia = false;
  const CHAVE_ECONOMIA = 'portal-ouvir-economia';
  try { economia = localStorage.getItem(CHAVE_ECONOMIA) === '1'; } catch(e){}
  /* Velocidade salva fora da lista (ex.: 0,8x de versões antigas) vira a mais próxima. */
  try { const v = parseFloat(localStorage.getItem(CHAVE_VEL)); if (v > 0) vel = VELS.reduce((m, x) => Math.abs(x - v) < Math.abs(m - v) ? x : m, 1); vozSalva = localStorage.getItem(CHAVE_VOZ) || ''; } catch(e){}

  const ehPt = v => /^pt/i.test(v.lang || '');
  const ehBr = v => /^pt[-_]br$/i.test(v.lang || '');
  const ponto = v => (ehBr(v) ? 1000 : 0) + (/natural|online|neural/i.test(v.name) ? 300 : /google/i.test(v.name) ? 200 : 0) + (v.localService === false ? 10 : 0);
  const vozesPt = () => suportado ? sy.getVoices().filter(ehPt).sort((a, b) => ponto(b) - ponto(a)) : [];

  function escolherVoz(){
    const lista = vozesPt();
    voz = lista.find(v => v.name === vozSalva) || lista[0] || null;
    if (st.ctrl && st.modo === 'fala') desenhar();
    return voz;
  }
  const vozesProntas = () => new Promise(ok => {
    if (sy.getVoices().length) return ok();
    const fim = () => { clearTimeout(t); sy.removeEventListener && sy.removeEventListener('voiceschanged', fim); ok(); };
    const t = setTimeout(fim, 1500);
    if (sy.addEventListener) sy.addEventListener('voiceschanged', fim);
  });
  if (suportado) { escolherVoz(); if (sy.addEventListener) sy.addEventListener('voiceschanged', escolherVoz); else sy.onvoiceschanged = escolherVoz; }

  const limpar = t => String(t || '')
    .replace(/[\p{Extended_Pictographic}\u{1F1E6}-\u{1F1FF}\u{FE0F}\u{200D}\u{20E3}]/gu, ' ')
    .replace(/[\u2190-\u21FF\u2794-\u27BF\u2B00-\u2BFF\u25A0-\u25FF]/g, ' ')
    .replace(/\s+=\s+/g, ': ').replace(/\s*[·•|]\s*/g, ', ')
    .replace(/\s+/g, ' ').trim();

  /* Uma fala por frase (o Chrome corta falas longas); frase muito longa é dividida nas vírgulas. */
  function partir(texto){
    const out = [];
    texto.split(/(?<=[.!?…]["'”)\]]*)\s+(?=\S)/).forEach(f => {
      if (f.length <= MAX) { out.push(f); return; }
      let atual = '';
      f.split(/(?<=[,;:])\s+/).forEach(p => { if (atual && (atual + ' ' + p).length > MAX) { out.push(atual); atual = p; } else atual = atual ? atual + ' ' + p : p; });
      if (atual) out.push(atual);
    });
    return out;
  }

  const normalizar = blocos => (blocos || []).map(b => { let t = limpar(b.texto); if (t && !/[.!?:;…]["')\]]*$/.test(t)) t += '.'; return { t, el: b.el || null }; }).filter(x => x.t);
  function montarFila(blocos){
    const fila = [];
    normalizar(blocos).forEach((x, b) => partir(x.t).forEach(p => fila.push({ texto: p, el: x.el, b })));
    return fila;
  }
  /* Hash do texto narrado (igual ao do gerador de áudio): sha1 dos blocos normalizados, 8 primeiros caracteres. */
  async function hashBlocos(blocos){
    const buf = await crypto.subtle.digest('SHA-1', new TextEncoder().encode(normalizar(blocos).map(x => x.t).join('\n')));
    return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('').slice(0, 8);
  }
  /* Partes [{ blocos, audio: { url, frases, blocos, dur } | null }] viram uma fila de frases; cada frase com mp3 ganha url/ini/fim. */
  function filaDePartes(partes){
    const fila = [];
    (partes || []).forEach(pt => {
      const itens = montarFila(pt && pt.blocos), au = !economia && pt && pt.audio && pt.audio.url ? pt.audio : null;
      if (au) temposDe(itens, au).forEach((t, j) => { if (t) Object.assign(itens[j], { url: au.url, ini: t[0], fim: t[1] }); });
      fila.push(...itens);
    });
    return fila;
  }
  function temposDe(itens, au){
    if (!itens.length) return [];
    if (Array.isArray(au.frases) && au.frases.length === itens.length) return au.frases;
    const nb = itens[itens.length - 1].b + 1, ini = Array.isArray(au.blocos) ? au.blocos : nb === 1 ? [0] : null;
    if (!ini || ini.length !== nb || !au.dur) return [];
    const out = [];
    for (let j = 0; j < itens.length;) {
      const b = itens[j].b; let k = j; while (k < itens.length && itens[k].b === b) k++;
      const grupo = itens.slice(j, k), tot = grupo.reduce((s, x) => s + x.texto.length, 0) || 1;
      let t = ini[b]; const vao = (b + 1 < nb ? ini[b + 1] : au.dur) - ini[b];
      grupo.forEach(x => { const d = vao * x.texto.length / tot; out.push([t, t + d]); t += d; });
      j = k;
    }
    return out;
  }

  function marcar(el, rolar = true){
    if (st.lendo === el) return;
    if (st.lendo) st.lendo.classList.remove('ouvir-lendo');
    st.lendo = el || null;
    if (!el) return;
    el.classList.add('ouvir-lendo');
    const r = el.getBoundingClientRect();
    if (rolar && (r.top < 60 || r.bottom > innerHeight - 60)) {
      const calmo = matchMedia('(prefers-reduced-motion: reduce)').matches;
      el.scrollIntoView({ block: 'center', behavior: calmo ? 'auto' : 'smooth' });
    }
  }

  function falar(){
    const tk = ++st.token;
    if (st.ctrl && !document.contains(st.ctrl)) { parar(); return; }
    const item = st.fila[st.i];
    if (!item) { terminou(); return; }
    marcar(item.el); atualizarPos();
    gravarPos({ modo: 'fala', i: st.i, n: st.fila.length });
    tocarItem(item, tk, () => st.estado === 'lendo', () => { st.i++; falar(); });
  }
  /* Uma frase: trecho do mp3 gravado (se houver e o sinal ajudar) ou voz do aparelho. */
  function tocarItem(item, tk, valendo, seguir){
    if (!item.url || economia || st.semAudioAte > Date.now()) {
      pausarSom();
      if (suportado) dizer(item.texto, tk, valendo, seguir); else if (tk === st.token && valendo()) setTimeout(seguir, 0);
      return;
    }
    const a = som(), novo = a.src !== new URL(item.url, location.href).href, parado = novo || a.paused;
    st.somItem = item; st.somTk = tk; st.somValendo = valendo; st.somSeguirOrig = seguir;
    st.somSeguir = () => { if (tk !== st.token || !valendo()) return; st.somSeguir = null; seguir(); };
    if (novo) { a.src = item.url; st.somComecou = false; }
    const posicionar = () => { if (a.currentTime < item.ini - .3 || a.currentTime >= item.fim - .05) { try { a.currentTime = item.ini; st.somUlt = item.ini; } catch(e){} } };
    if (a.readyState >= 1) posicionar(); else a.addEventListener('loadedmetadata', posicionar, { once: true });
    a.playbackRate = vel;
    if (parado) {
      st.somVivo = Date.now(); if (!novo && a.readyState < 3) st.somComecou = false;
      const p = a.play();
      if (p && p.catch) p.catch(e => { if (e && e.name === 'AbortError') return; if (st.somItem === item) cairParaVoz(); });
      vigiar();
    }
  }
  function som(){
    if (st.som) return st.som;
    const a = st.som = new Audio();
    a.preload = 'auto';
    a.addEventListener('timeupdate', () => {
      if (!st.somItem) return;
      if (!a.paused && a.currentTime > (st.somUlt || 0)) { st.somVivo = Date.now(); st.somComecou = true; }
      st.somUlt = a.currentTime;
      if (a.currentTime >= st.somItem.fim - .04 && st.somSeguir) st.somSeguir();
    });
    a.addEventListener('seeked', () => { st.somUlt = a.currentTime; st.somVivo = Date.now(); });
    a.addEventListener('ended', () => { if (st.somSeguir) st.somSeguir(); });
    a.addEventListener('error', () => { if (st.somItem && a.getAttribute('src')) cairParaVoz(); });
    return a;
  }
  /* Sinal fraco: sem começar em ~4 s, ou parado no meio por ~6 s, segue na voz do aparelho a partir da frase atual. */
  function vigiar(){
    clearInterval(st.vigia);
    st.vigia = setInterval(() => {
      if (!st.somItem || !st.som || st.som.paused && st.somComecou) { clearInterval(st.vigia); return; }
      if (Date.now() - st.somVivo > (st.somComecou ? 6000 : 4000)) cairParaVoz();
    }, 400);
  }
  function pausarSom(){
    clearInterval(st.vigia);
    st.somItem = null; st.somSeguir = null;
    if (st.som && !st.som.paused) st.som.pause();
  }
  function cairParaVoz(){
    const item = st.somItem, tk = st.somTk, valendo = st.somValendo, seguir = st.somSeguirOrig;
    if (!item) return;
    pausarSom();
    st.semAudioAte = Date.now() + 120000;
    if (tk !== st.token || !valendo()) return;
    avisarSinal();
    if (!suportado) { seguir(); return; }
    if (!voz) escolherVoz();
    dizer(item.texto, tk, valendo, seguir);
  }
  function avisarSinal(){
    const n = document.getElementById('ouvir-sinal'); if (!n) return;
    n.textContent = ''; setTimeout(() => { n.textContent = 'Sinal fraco: usando a voz do aparelho'; }, 30);
    n.classList.add('on'); clearTimeout(n._t); n._t = setTimeout(() => { n.classList.remove('on'); n.textContent = ''; }, 6000);
  }
  function dizer(texto, tk, valendo, seguir){
    const u = st.u = new SpeechSynthesisUtterance(texto);
    u.lang = voz ? voz.lang : 'pt-BR';
    if (voz) u.voice = voz;
    u.rate = vel; u.pitch = 1;
    u.onend = () => { if (tk === st.token && valendo()) seguir(); };
    u.onerror = e => { if (tk !== st.token || !valendo() || e.error === 'interrupted' || e.error === 'canceled') return; seguir(); };
    sy.speak(u);
  }

  /* Continuar de onde parou: frase (voz do aparelho) ou segundo (mp3) por chave (aula ou história), só neste navegador. */
  const CHAVE_POS = 'portal-ouvir-pos';
  const lerPos = () => { try { return JSON.parse(localStorage.getItem(CHAVE_POS)) || {}; } catch(e){ return {}; } };
  function gravarPos(p){
    if (!st.chave) return;
    const m = lerPos();
    if (p) { p.em = Date.now(); m[st.chave] = p; } else if (m[st.chave]) delete m[st.chave]; else return;
    Object.keys(m).sort((a, b) => m[b].em - m[a].em).slice(60).forEach(k => delete m[k]);
    try { localStorage.setItem(CHAVE_POS, JSON.stringify(m)); } catch(e){}
  }
  function posSalva(){
    const p = st.chave && lerPos()[st.chave];
    if (!p || p.modo !== st.modo) return null;
    return (p.modo === 'audio' ? p.t >= 5 : p.i >= 1) ? p : null;
  }
  function salvarAgora(){
    if (st.estado === 'parado') return;
    if (st.modo === 'audio') { const a = st.audio; if (a && !a.ended && a.currentTime) gravarPos({ modo: 'audio', t: Math.round(a.currentTime * 10) / 10 }); }
    else if (st.i < st.fila.length) gravarPos({ modo: 'fala', i: st.i, n: st.fila.length });
  }
  /* Fim natural da leitura: apaga a posição e avisa quem montou (ex.: oferecer "Ir para a pergunta?"). */
  function terminou(){ gravarPos(null); parar(); if (st.aoTerminar) { try { st.aoTerminar(); } catch(e){ console.error(e); } } }
  const ondeParou = p => p.modo === 'audio' ? mmss(p.t) : `frase ${Math.min(p.i + 1, p.n)} de ${p.n}`;

  /* Leituras curtas do desafio (pergunta inteira ou uma alternativa): mesmo motor, nunca junto com outra leitura. */
  const tr = { bt: null, fila: [], i: 0 };
  const esc = t => String(t).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
  function botaoTrecho(rotulo, o = {}){
    return `<button type="button" class="ouvir-tr${o.icone ? ' so-icone' : ''}" data-ouvir-trecho data-rotulo="${esc(rotulo)}"${o.deNovo ? ` data-de-novo="${esc(o.deNovo)}"` : ''} aria-label="${esc(rotulo)}" title="${esc(rotulo)}">${FALA}${o.icone ? '' : `<span>${esc(rotulo)}</span>`}</button>`;
  }
  function pintarTrecho(b){
    const lendo = tr.bt === b, rot = lendo ? 'Parar' : (b.dataset.lido && b.dataset.deNovo) || b.dataset.rotulo;
    const aria = lendo ? 'Parar a leitura' : rot;
    b.classList.toggle('falando', lendo);
    b.innerHTML = (lendo ? IC.parar : FALA) + (b.classList.contains('so-icone') ? '' : `<span>${esc(rot)}</span>`);
    b.setAttribute('aria-label', aria); b.title = aria;
  }
  function pararTrecho(lido){
    const b = tr.bt; if (!b) return;
    tr.bt = null; tr.fila = []; st.token++;
    pausarSom();
    if (!lido && suportado) sy.cancel();
    marcar(null);
    if (lido) b.dataset.lido = '1';
    if (document.contains(b)) pintarTrecho(b);
  }
  async function falarTrecho(b){
    const mesmo = tr.bt === b;
    parar();
    if (mesmo) return;
    tr.bt = b; tr.fila = []; pintarTrecho(b);
    const tk = ++st.token;
    let r = st.fonteTrecho ? st.fonteTrecho(b) : [];
    if (r && typeof r.then === 'function') { try { r = await r; } catch(e){ r = []; } if (tk !== st.token || tr.bt !== b) return; }
    const fila = filaDePartes([Array.isArray(r) ? { blocos: r } : r || {}]);
    if (!fila.length || !suportado && !fila.every(x => x.url)) { pararTrecho(); return; }
    tr.fila = fila; tr.i = 0; st.ultimoTexto = fila.map(x => x.texto);
    if (suportado && !fila[0].url && !sy.getVoices().length) { await vozesProntas(); if (tk !== st.token || tr.bt !== b) return; }
    if (suportado && !voz) escolherVoz();
    falarItemTrecho();
  }
  function falarItemTrecho(){
    const tk = ++st.token, b = tr.bt;
    if (!b) return;
    if (!document.contains(b)) { pararTrecho(); return; }
    const item = tr.fila[tr.i];
    if (!item) { pararTrecho(true); return; }
    marcar(item.el);
    tocarItem(item, tk, () => tr.bt === b, () => { tr.i++; falarItemTrecho(); });
  }

  const nomeCurto = v => v.name.replace(/^(Microsoft|Google)\s+/i, m => /google/i.test(m) ? 'Google ' : '')
    .replace(/\s*-\s*Portuguese.*$/i, '').replace(/\s*Online\s*\(Natural\)/i, ' (natural)') + (ehBr(v) ? '' : ' · PT');

  const FONE = '<svg class="ouvir-fone" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M4 15v-3a8 8 0 0 1 16 0v3"/><path d="M4 14h3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2z"/><path d="M20 14h-3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1a2 2 0 0 0 2-2z"/></svg>';
  const svg = (corpo, extra = '') => `<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false" ${extra}>${corpo}</svg>`;
  const FALA = svg('<path fill="currentColor" d="M4 9.5v5a1 1 0 0 0 1 1h3l4.4 3.7a1 1 0 0 0 1.6-.8V5.6a1 1 0 0 0-1.6-.8L8 8.5H5a1 1 0 0 0-1 1z"/><path d="M16.5 9a4.2 4.2 0 0 1 0 6M19 6.5a8 8 0 0 1 0 11" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>');
  const IC = {
    play: svg('<path fill="currentColor" d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z"/>'),
    pausa: svg('<rect fill="currentColor" x="6" y="5" width="4" height="14" rx="1.2"/><rect fill="currentColor" x="14" y="5" width="4" height="14" rx="1.2"/>'),
    parar: svg('<rect fill="currentColor" x="6" y="6" width="12" height="12" rx="2.5"/>'),
    ant: svg('<path d="M6 5v14" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><path fill="currentColor" d="M19 6.2v11.6a1 1 0 0 1-1.5.86L9 13a1.2 1.2 0 0 1 0-2l8.5-5.66A1 1 0 0 1 19 6.2z"/>'),
    prox: svg('<path d="M18 5v14" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><path fill="currentColor" d="M5 6.2v11.6a1 1 0 0 0 1.5.86L15 13a1.2 1.2 0 0 0 0-2L6.5 5.34A1 1 0 0 0 5 6.2z"/>'),
    volta10: svg('<path d="M4.5 12a7.5 7.5 0 1 0 2.3-5.4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M4.5 3.5v4h4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><text x="12.3" y="15.6" text-anchor="middle" font-size="7.6" font-weight="800" fill="currentColor" font-family="Sora,system-ui,sans-serif">10</text>'),
    avanca10: svg('<path d="M19.5 12a7.5 7.5 0 1 1-2.3-5.4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M19.5 3.5v4h-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><text x="11.7" y="15.6" text-anchor="middle" font-size="7.6" font-weight="800" fill="currentColor" font-family="Sora,system-ui,sans-serif">10</text>'),
  };
  const velTexto = v => String(v).replace('.', ',') + 'x';
  const mmss = s => { s = Math.max(0, Math.floor(s || 0)); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); };
  function posTexto(){
    if (st.modo === 'audio') { const a = st.audio; return st.carregando ? 'Carregando…' : a && a.duration ? `${mmss(a.currentTime)} / ${mmss(a.duration)}` : ''; }
    return st.fila.length ? `Frase ${Math.min(st.i + 1, st.fila.length)} de ${st.fila.length}` : '';
  }
  function atualizarPos(){ const p = st.ctrl && st.ctrl.querySelector('.ouvir-pos'); if (p) p.textContent = posTexto(); }

  function desenhar(){
    const c = st.ctrl; if (!c) return;
    const e = st.estado, mp3 = st.modo === 'audio';
    const vozes = st.modo === 'fala' ? vozesPt() : [];
    const ativo = c.contains(document.activeElement) ? document.activeElement : null;
    const focoEra = ativo && (ativo.dataset.ouvir === 'vel' ? `[data-ouvir="vel"][data-v="${ativo.dataset.v}"]` : ['ouvir', 'pausar', 'continuar', 'parar'].includes(ativo.dataset.ouvir) ? '[data-prin]' : ativo.dataset.ouvir ? `[data-ouvir="${ativo.dataset.ouvir}"]` : ativo.matches('[data-ouvir-voz]') ? '[data-ouvir-voz]' : null);
    c.classList.toggle('ativo', e !== 'parado');
    const pulsa = st.pulsar && e === 'parado' ? ' pulsa' : ''; st.pulsar = false;
    if (e === 'parado' && st.oferta) {
      const onde = ondeParou(st.oferta);
      c.innerHTML = `<div class="ouvir-oferta" role="group" aria-label="Você parou em ${onde}">
        <span class="ouvir-oferta-tx">Você parou em ${onde}.</span>
        <button type="button" class="ouvir-bt prin" data-ouvir="retomar" data-prin>${IC.play}<span>Continuar de onde parou</span></button>
        <button type="button" class="ouvir-bt" data-ouvir="recomecar">${IC.ant}<span>Recomeçar do início</span></button>
      </div>`;
    } else if (e === 'parado') {
      c.innerHTML = `<button type="button" class="ouvir-bt prin grande${pulsa}" data-ouvir="ouvir" data-prin aria-label="${st.rotulo} em voz alta">${FONE}<span>${st.rotulo}</span></button>`;
    } else {
      const tocando = e === 'lendo';
      const passo = mp3 ? ['Voltar 10 segundos', 'Avançar 10 segundos'] : ['Frase anterior', 'Próxima frase'];
      c.innerHTML = `<div class="ouvir-player" title="Atalhos: setas ← e → (${passo[0].toLowerCase()} / ${passo[1].toLowerCase()}); K tocar ou pausar com o foco no player">
        <div class="ouvir-linha">
          <button type="button" class="ouvir-bt ic" data-ouvir="ant" aria-label="${passo[0]} (seta para a esquerda)" aria-keyshortcuts="ArrowLeft" title="${passo[0]} (←)">${mp3 ? IC.volta10 : IC.ant}</button>
          <button type="button" class="ouvir-bt ic prin toca" data-ouvir="${tocando ? 'pausar' : 'continuar'}" data-prin aria-label="${tocando ? 'Pausar' : 'Continuar'} (tecla K)" aria-keyshortcuts="K" title="${tocando ? 'Pausar' : 'Continuar'} (K)"${st.carregando ? ' aria-busy="true"' : ''}>${tocando ? IC.pausa : IC.play}</button>
          <button type="button" class="ouvir-bt ic" data-ouvir="prox" aria-label="${passo[1]} (seta para a direita)" aria-keyshortcuts="ArrowRight" title="${passo[1]} (→)">${mp3 ? IC.avanca10 : IC.prox}</button>
          <button type="button" class="ouvir-bt ic" data-ouvir="parar" aria-label="Parar a leitura" title="Parar">${IC.parar}</button>
          <span class="ouvir-pos">${posTexto()}</span>
        </div>
        <div class="ouvir-linha">
          <div class="ouvir-vels" role="group" aria-label="Velocidade da voz">${VELS.map(v => `<button type="button" class="ouvir-bt chip" data-ouvir="vel" data-v="${v}" aria-pressed="${v === vel}" aria-label="Velocidade ${velTexto(v)}">${velTexto(v)}</button>`).join('')}</div>
          ${vozes.length > 1 ? `<select class="ouvir-voz" data-ouvir-voz aria-label="Voz da leitura" title="Voz da leitura">${vozes.map(v => `<option value="${v.name.replace(/"/g, '&quot;')}"${voz && v.name === voz.name ? ' selected' : ''}>${nomeCurto(v).replace(/</g, '&lt;')}</option>`).join('')}</select>` : ''}
        </div>
      </div>`;
    }
    if (focoEra) { const alvo = c.querySelector(focoEra); if (alvo) alvo.focus(); }
  }

  async function iniciarFala(p){
    if (!st.fonte) return;
    if (suportado) sy.cancel();
    let partes = null;
    if (st.partes && !economia) {
      st.estado = 'lendo'; st.carregando = true; st.fila = []; desenhar();
      const tk0 = ++st.token;
      try { partes = await st.partes(); } catch(e){ partes = null; }
      st.carregando = false;
      if (tk0 !== st.token || st.estado !== 'lendo') return;
    }
    st.fila = partes ? filaDePartes(partes) : montarFila(st.fonte());
    st.ultimoTexto = st.fila.map(x => x.texto);
    st.i = p && p.modo === 'fala' ? Math.max(0, Math.min(p.i, st.fila.length - 1)) : 0;
    if (!st.fila.length || !suportado && !st.fila.every(x => x.url)) { st.estado = 'parado'; desenhar(); return; }
    st.estado = 'lendo'; desenhar();
    const tk = st.token;
    if (suportado && !st.fila[st.i].url && !sy.getVoices().length) { await vozesProntas(); if (tk !== st.token || st.estado !== 'lendo') return; }
    if (suportado && !voz) escolherVoz();
    falar();
  }

  /* Modo mp3: destaca o bloco pelos tempos reais (opcoes.marcas, em segundos) ou, sem eles, pela proporção do texto. */
  function marcarPorTempo(){
    const a = st.audio; if (!a || !st.pesos.length) return;
    const pos = st.marcas ? a.currentTime : (a.duration ? a.currentTime / a.duration : 0);
    let k = -1;
    while (k < st.pesos.length - 1 && st.pesos[k + 1].ini <= pos) k++;
    marcar(k >= 0 ? st.pesos[k].el : null, false);
  }
  function iniciarAudio(p){
    const blocos = (st.fonte ? st.fonte() : []).map(b => ({ el: b.el, n: limpar(b.texto).length })).filter(b => b.n);
    const total = blocos.reduce((s, b) => s + b.n, 0) || 1; let acc = 0;
    st.pesos = blocos.map((b, i) => { const p = { el: b.el, ini: st.marcas ? st.marcas[i] : acc / total }; acc += b.n; return p; });
    if (st.marcas && st.marcas.length !== blocos.length) { st.marcas = null; return iniciarAudio(p); }
    if (!st.audio) criarAudio();
    if (p && p.modo === 'audio') {
      const a = st.audio, ir = () => { try { a.currentTime = p.t; } catch(e){} };
      if (a.readyState >= 1) ir(); else a.addEventListener('loadedmetadata', ir, { once: true });
    }
    st.audio.preload = 'auto';
    st.audio.playbackRate = vel;
    st.estado = 'lendo'; st.carregando = st.audio.readyState < 3; desenhar();
    const a = st.audio, tocar = a.play();
    if (tocar && tocar.catch) tocar.catch(e => { if (e && e.name === 'NotAllowedError') { st.estado = 'parado'; st.carregando = false; desenhar(); } });
    clearTimeout(st.vigiaHist);
    if (st.carregando) st.vigiaHist = setTimeout(() => { if (st.audio === a && st.carregando && st.estado === 'lendo') audioFalhou(a, true); }, 6000);
  }
  /* mp3 da página (história) com erro ou sem começar: segue na voz do aparelho. */
  function audioFalhou(a, sinal){
    if (st.audio !== a) return;
    a.pause(); a.removeAttribute('src');
    st.audio = null; st.modo = suportado ? 'fala' : 'audio'; st.carregando = false;
    const tocando = st.estado !== 'parado'; st.estado = 'parado';
    if (tocando && sinal) avisarSinal();
    if (tocando && suportado) iniciarFala(); else desenhar();
  }
  function criarAudio(){
    const a = st.audio = new Audio();
    a.preload = 'metadata';
    a.src = st.src;
    a.addEventListener('timeupdate', () => {
      marcarPorTempo(); atualizarPos();
      if (st.audio === a && st.estado === 'lendo' && Math.abs(a.currentTime - (st.ultPos || 0)) >= 2) { st.ultPos = a.currentTime; salvarAgora(); }
    });
    a.addEventListener('playing', () => { if (st.audio === a && st.carregando) { st.carregando = false; desenhar(); } });
    a.addEventListener('ended', () => { gravarPos(null); parar(); });
    a.addEventListener('error', () => audioFalhou(a, true));
  }

  const iniciar = p => { pararTrecho(); st.oferta = null; return st.modo === 'audio' ? iniciarAudio(p) : iniciarFala(p); };
  function ouvir(){ const p = posSalva(); if (p) { st.oferta = p; desenhar(); } else iniciar(); }
  function pausar(){
    salvarAgora();
    st.estado = 'pausado'; st.carregando = false;
    if (st.modo === 'audio') st.audio && st.audio.pause(); else { st.token++; pausarSom(); if (suportado) sy.cancel(); }
    desenhar();
  }
  function continuar(){
    st.estado = 'lendo'; desenhar();
    if (st.modo === 'audio') { const p = st.audio && st.audio.play(); if (p && p.catch) p.catch(() => {}); } else falar();
  }
  function parar(){
    pararTrecho();
    salvarAgora(); st.oferta = null;
    st.token++;
    pausarSom();
    if (st.audio) { st.audio.pause(); try { st.audio.currentTime = 0; } catch(e){} }
    if (suportado && (st.estado !== 'parado' || sy.speaking || sy.pending)) sy.cancel();
    st.estado = 'parado'; st.i = 0; st.carregando = false; marcar(null); desenhar();
  }
  /* Frase anterior/seguinte (voz do aparelho) ou -/+10 s (mp3). Pausado, só muda o ponto de onde vai continuar. */
  function pular(d){
    if (st.estado === 'parado') return;
    if (st.modo === 'audio') {
      const a = st.audio; if (!a) return;
      const fim = a.duration ? a.duration - .3 : a.currentTime + 10;
      a.currentTime = Math.max(0, Math.min(fim, a.currentTime + d * 10));
      marcarPorTempo(); atualizarPos(); return;
    }
    if (!st.fila.length) return;
    const novo = st.i + d;
    if (novo >= st.fila.length) { st.i = st.fila.length; terminou(); return; }
    st.i = Math.max(0, novo);
    if (st.estado === 'lendo') { st.token++; if (suportado) sy.cancel(); falar(); }
    else { marcar(st.fila[st.i].el); atualizarPos(); }
  }
  const alternar = () => st.estado === 'lendo' ? pausar() : st.estado === 'pausado' ? continuar() : iniciar();
  function trocarVel(novo){
    vel = VELS.includes(novo) ? novo : VELS[(VELS.indexOf(vel) + 1) % VELS.length];
    try { localStorage.setItem(CHAVE_VEL, String(vel)); } catch(e){}
    if (st.modo === 'audio') { if (st.audio) st.audio.playbackRate = vel; desenhar(); }
    else if (st.estado === 'lendo') { st.token++; if (suportado) sy.cancel(); desenhar(); falar(); } else desenhar();
  }
  function trocarVoz(nome){
    vozSalva = nome;
    try { localStorage.setItem(CHAVE_VOZ, nome); } catch(e){}
    voz = vozesPt().find(v => v.name === nome) || voz;
    if (st.estado === 'lendo') { st.token++; if (suportado) sy.cancel(); desenhar(); falar(); } else desenhar();
  }

  function montar(el, fonte, opcoes = {}){
    if (!el) return;
    if (!suportado && !opcoes.audio && !opcoes.partes) { el.remove(); return; }
    parar();
    if (st.audio) { st.audio.removeAttribute('src'); st.audio = null; }
    st.ctrl = el; st.fonte = fonte; st.partes = typeof opcoes.partes === 'function' ? opcoes.partes : null; st.chave = opcoes.chave || ''; st.aoTerminar = typeof opcoes.aoTerminar === 'function' ? opcoes.aoTerminar : null; st.rotulo = opcoes.rotulo || 'Ouvir'; st.pulsar = true; st.src = opcoes.audio || ''; st.marcas = Array.isArray(opcoes.marcas) ? opcoes.marcas : null; st.modo = st.src && window.Audio && (!economia || !suportado) ? 'audio' : 'fala';
    el.classList.add('ouvir');
    el.setAttribute('role', 'group'); el.setAttribute('aria-label', 'Ouvir em voz alta');
    desenhar();
    /* Pré-carrega só o cabeçalho do mp3 depois que a página abrir, para o clique tocar mais rápido. */
    if (st.modo === 'audio') {
      const pre = () => { if (!st.audio && st.modo === 'audio') criarAudio(); };
      if (document.readyState === 'complete') pre(); else addEventListener('load', pre, { once: true });
    }
  }

  document.addEventListener('click', e => {
    const tb = e.target.closest('[data-ouvir-trecho]'); if (tb) { falarTrecho(tb); return; }
    const b = e.target.closest('[data-ouvir]'); if (!b || !st.ctrl || !st.ctrl.contains(b)) return;
    const a = b.dataset.ouvir;
    if (a === 'ouvir') ouvir(); else if (a === 'retomar') iniciar(st.oferta); else if (a === 'recomecar') { gravarPos(null); iniciar(); }
    else if (a === 'pausar') pausar(); else if (a === 'continuar') continuar();
    else if (a === 'parar') parar(); else if (a === 'vel') trocarVel(parseFloat(b.dataset.v));
    else if (a === 'ant') pular(-1); else if (a === 'prox') pular(1);
  });
  /* Atalhos com o player ativo e o foco fora de campos de texto: ←/→ navegam; K toca/pausa com o foco no player. */
  document.addEventListener('keydown', e => {
    if (!st.ctrl || st.estado === 'parado' || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
    const t = e.target;
    if (t.closest && t.closest('input, textarea, select, [contenteditable=""], [contenteditable="true"]')) return;
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') { e.preventDefault(); pular(e.key === 'ArrowLeft' ? -1 : 1); }
    else if ((e.key === 'k' || e.key === 'K') && st.ctrl.contains(t)) { e.preventDefault(); alternar(); }
  });
  document.addEventListener('change', e => { const s = e.target.closest && e.target.closest('[data-ouvir-voz]'); if (s && st.ctrl && st.ctrl.contains(s)) trocarVoz(s.value); });
  addEventListener('pagehide', () => parar());
  const css = document.createElement('style');
  css.textContent = `.ouvir{display:flex; flex-wrap:wrap; align-items:center; gap:8px; margin:0 0 18px;}
.ouvir-sinal{position:fixed; left:50%; bottom:calc(92px + env(safe-area-inset-bottom,0px)); z-index:950; max-width:calc(100vw - 32px); padding:9px 16px; border-radius:999px; border:1px solid rgba(251,191,36,.6); background:#0b0b14; color:#fde68a; font:600 13.5px 'Sora',system-ui,sans-serif; box-shadow:0 12px 30px -12px rgba(0,0,0,.8); transform:translate(-50%,16px); opacity:0; pointer-events:none; transition:opacity .25s, transform .25s;}
.ouvir-sinal.on{opacity:1; transform:translate(-50%,0);}
@media (prefers-reduced-motion: reduce){.ouvir-sinal{transition:none;}}
.ouvir-bt{display:inline-flex; align-items:center; gap:7px; border:1px solid rgba(255,255,255,.14); border-radius:12px; padding:9px 14px; font-family:inherit; font-size:14px; font-weight:700; line-height:1.2; color:#f5f5fa; background:rgba(255,255,255,.05); cursor:pointer; transition:filter .2s, transform .2s, border-color .2s;}
.ouvir-bt:hover{border-color:var(--c,#22d3ee); transform:translateY(-1px);}
.ouvir-bt:focus-visible,.ouvir-voz:focus-visible{outline:3px solid #fff; outline-offset:3px; box-shadow:0 0 0 6px color-mix(in srgb,var(--c,#22d3ee) 55%,transparent);}
.ouvir-bt.prin.grande{gap:10px; min-height:52px; padding:12px 24px 12px 18px; border-radius:16px; font-size:17px; letter-spacing:.2px; box-shadow:0 10px 28px -10px var(--c,#22d3ee), 0 0 0 1px rgba(255,255,255,.18) inset;}
.ouvir-bt.grande .ouvir-fone{flex:none; width:26px; height:26px; padding:5px; box-sizing:content-box; border-radius:50%; background:rgba(4,4,10,.16);}
.ouvir-bt.grande.pulsa{animation:ouvir-pulso 1.8s ease-out .4s 1;}
@keyframes ouvir-pulso{0%{box-shadow:0 0 0 0 color-mix(in srgb,var(--c,#22d3ee) 70%,transparent),0 10px 28px -10px var(--c,#22d3ee);}70%{box-shadow:0 0 0 16px transparent,0 10px 28px -10px var(--c,#22d3ee);}100%{box-shadow:0 0 0 0 transparent,0 10px 28px -10px var(--c,#22d3ee);}}
@media (prefers-reduced-motion: reduce){.ouvir-bt.grande.pulsa{animation:none;} .ouvir-bt{transition:none;}}
.ouvir.ativo .ouvir-bt{min-height:44px;}
.ouvir-bt.prin{border-color:transparent; color:#04040a; font-weight:800; background:linear-gradient(135deg,var(--c,#22d3ee),var(--c2,#c084fc)); box-shadow:0 8px 22px -10px var(--c,#22d3ee);}
.ouvir-bt.prin:hover{filter:brightness(1.1);}
.ouvir-player{display:flex; flex-direction:column; gap:10px; width:100%; max-width:560px; padding:12px 14px; border-radius:18px; border:1px solid color-mix(in srgb,var(--c,#22d3ee) 38%,transparent); background:radial-gradient(120% 140% at 0% 0%,color-mix(in srgb,var(--c,#22d3ee) 12%,transparent),transparent 60%),rgba(255,255,255,.03); box-shadow:0 14px 34px -22px var(--c,#22d3ee);}
.ouvir-linha{display:flex; flex-wrap:wrap; align-items:center; gap:8px;}
.ouvir-bt.ic{width:48px; height:48px; min-height:48px; padding:0; justify-content:center; border-radius:50%; color:var(--c,#22d3ee);}
.ouvir-bt.ic svg{width:24px; height:24px;}
.ouvir-bt.ic.toca{width:60px; height:60px; color:#04040a;}
.ouvir-bt.ic.toca svg{width:28px; height:28px;}
.ouvir-pos{margin-left:auto; font:600 13px 'JetBrains Mono',monospace; color:#9d9db5; white-space:nowrap;}
.ouvir-vels{display:flex; flex-wrap:wrap; gap:6px;}
.ouvir-bt.chip{min-width:56px; min-height:44px; padding:8px 12px; justify-content:center; border-radius:999px; font-family:'JetBrains Mono',monospace; font-size:13px; color:#d6d6e4;}
.ouvir-bt.chip[aria-pressed="true"]{border-color:transparent; color:#04040a; background:linear-gradient(135deg,var(--c,#22d3ee),var(--c2,#c084fc));}
.ouvir-player .ouvir-voz{min-height:44px;}
@media (max-width:520px){.ouvir-pos{flex-basis:100%; margin-left:0; text-align:center;} .ouvir-player .ouvir-linha:first-child{justify-content:center;} .ouvir-vels{flex:1 1 100%; justify-content:space-between;} .ouvir-bt.chip{flex:1; min-width:0; padding:8px 4px;} .ouvir-player .ouvir-voz{flex:1 1 100%; max-width:none;}}
.ouvir-voz{max-width:190px; border:1px solid rgba(255,255,255,.14); border-radius:12px; padding:9px 10px; font-family:inherit; font-size:13px; font-weight:600; color:#f5f5fa; background:#0b0b14; cursor:pointer;}
.ouvir-voz:hover{border-color:var(--c,#22d3ee);}
.ouvir-lendo{background-color:rgba(34,211,238,.09) !important; box-shadow:0 0 0 2px rgba(34,211,238,.28); border-radius:8px; transition:background-color .25s, box-shadow .25s;}
.ouvir-oferta{display:flex; flex-wrap:wrap; align-items:center; gap:8px; width:100%; max-width:560px; padding:12px 14px; border-radius:18px; border:1px solid color-mix(in srgb,var(--c,#22d3ee) 38%,transparent); background:rgba(255,255,255,.03);}
.ouvir-oferta-tx{flex-basis:100%; font-size:14.5px; font-weight:600; color:#d6d6e4;}
.ouvir-oferta .ouvir-bt{min-height:48px;}
.ouvir-oferta .ouvir-bt svg{width:20px; height:20px;}
.ouvir-fim{margin:22px 0 8px; padding:14px 16px; border-radius:18px; border:1px solid color-mix(in srgb,var(--c,#22d3ee) 45%,transparent); background:radial-gradient(120% 140% at 0% 0%,color-mix(in srgb,var(--c,#22d3ee) 14%,transparent),transparent 60%),rgba(255,255,255,.03);}
.ouvir-fim:focus{outline:none;}
.ouvir-fim p{margin:0 0 10px; font-size:16px; font-weight:700;}
.ouvir-fim-bts{display:flex; flex-wrap:wrap; gap:8px;}
.ouvir-fim .ouvir-bt{min-height:44px;}
.ouvir-q{margin:0 0 10px;}
.ouvir-tr{display:inline-flex; align-items:center; justify-content:center; gap:8px; min-width:44px; min-height:44px; padding:8px 16px 8px 12px; border:1px solid color-mix(in srgb,var(--c,#22d3ee) 50%,transparent); border-radius:999px; font-family:inherit; font-size:14px; font-weight:700; line-height:1.2; color:var(--c,#22d3ee); background:rgba(255,255,255,.04); cursor:pointer; transition:border-color .2s, box-shadow .2s, filter .2s;}
.ouvir-tr span{color:#f5f5fa;}
.ouvir-tr svg{flex:none; width:22px; height:22px;}
.ouvir-tr:hover{border-color:var(--c,#22d3ee); box-shadow:0 8px 22px -12px var(--c,#22d3ee);}
.ouvir-tr:focus-visible{outline:3px solid #fff; outline-offset:2px; box-shadow:0 0 0 6px color-mix(in srgb,var(--c,#22d3ee) 55%,transparent);}
.ouvir-tr.falando{border-color:transparent; color:#04040a; background:linear-gradient(135deg,var(--c,#22d3ee),var(--c2,#c084fc));}
.ouvir-tr.falando span{color:#04040a;}
.ouvir-tr.so-icone{flex:none; width:46px; padding:0; border-radius:14px;}
.opt-linha{display:flex; align-items:stretch; gap:8px; margin-bottom:9px;}
.opt-linha .opt{flex:1; min-width:0; margin-bottom:0;}
.opt.ouvir-lendo{border-radius:14px;}
@media (prefers-reduced-motion: reduce){.ouvir-tr{transition:none;}}`;
  document.head.appendChild(css);

  /* Preferências usadas pelo painel de Acessibilidade (voz e velocidade padrão). */
  const prefs = () => ({ vel, vels: VELS.slice(), voz: (voz || escolherVoz() || {}).name || '', vozes: vozesPt().map(v => ({ nome: v.name, rotulo: nomeCurto(v) })) });
  function restaurar(){
    vozSalva = ''; voz = null; escolherVoz(); trocarVel(1); definirEconomia(false);
    try { localStorage.removeItem(CHAVE_VEL); localStorage.removeItem(CHAVE_VOZ); } catch(e){}
  }
  /* Economizar internet: nunca baixa mp3 (aulas gravadas e história); tudo na voz do aparelho. */
  function definirEconomia(v){
    economia = !!v;
    try { if (economia) localStorage.setItem(CHAVE_ECONOMIA, '1'); else localStorage.removeItem(CHAVE_ECONOMIA); } catch(e){}
    if (economia && st.modo === 'audio') { parar(); if (st.audio) { st.audio.removeAttribute('src'); st.audio = null; } if (suportado) st.modo = 'fala'; desenhar(); }
    else if (!economia && st.src && st.modo === 'fala' && window.Audio) { parar(); st.modo = 'audio'; desenhar(); }
    if (economia && st.som) { pausarSom(); st.som.removeAttribute('src'); }
  }
  function anunciar(texto){
    parar(); if (!suportado) return;
    if (!voz) escolherVoz();
    dizer(texto, ++st.token, () => false, () => {});
  }
  const exemplo = () => anunciar('Olá! Esta é a voz que vai ler as aulas para você.');
  const sinal = document.createElement('div');
  sinal.id = 'ouvir-sinal'; sinal.className = 'ouvir-sinal'; sinal.setAttribute('role', 'status');
  document.body.appendChild(sinal);
  window.Ouvir = { suportado, montar, parar, limpar, botaoTrecho, prefs, hash: hashBlocos, economia: () => economia, definirEconomia, som: () => st.som, definirVel: trocarVel, definirVoz: trocarVoz, restaurar, exemplo, anunciar, vozesProntas, fonteTrechos: f => { st.fonteTrecho = f; }, voz: () => voz || escolherVoz(), vozes: () => vozesPt().map(v => `${v.name} (${v.lang})`), textos: () => st.ultimoTexto.slice(), modo: () => st.modo, audio: () => st.audio };
})();
