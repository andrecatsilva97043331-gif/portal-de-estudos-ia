/* Ouvir: lê o texto da página em voz alta com a voz pt-BR do próprio aparelho (Web Speech API).
   Uso: Ouvir.montar(elementoOndeFicaOBotao, () => [{ texto, el }, ...], { audio: 'arquivo.mp3' }); Ouvir.parar().
   Com { audio }, toca o mp3 pré-gravado e só usa a voz do aparelho se o arquivo falhar. */
(function(){
  const sy = window.speechSynthesis;
  const suportado = !!(sy && window.SpeechSynthesisUtterance);
  const VELS = [0.8, 1, 1.25, 1.5], CHAVE_VEL = 'portal-ouvir-vel', CHAVE_VOZ = 'portal-ouvir-voz', MAX = 240;
  const st = { fila: [], i: 0, estado: 'parado', token: 0, ctrl: null, fonte: null, lendo: null, ultimoTexto: [], u: null, audio: null, src: '', modo: 'fala', pesos: [] };
  let vel = 1, voz = null, vozSalva = '';
  try { const v = parseFloat(localStorage.getItem(CHAVE_VEL)); if (VELS.includes(v)) vel = v; vozSalva = localStorage.getItem(CHAVE_VOZ) || ''; } catch(e){}

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

  function montarFila(blocos){
    const fila = [];
    (blocos || []).forEach(b => { let t = limpar(b.texto); if (t && !/[.!?:;…]["')\]]*$/.test(t)) t += '.'; if (t) partir(t).forEach(p => fila.push({ texto: p, el: b.el || null })); });
    return fila;
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
    if (!item) { parar(); return; }
    marcar(item.el);
    const u = st.u = new SpeechSynthesisUtterance(item.texto);
    u.lang = voz ? voz.lang : 'pt-BR';
    if (voz) u.voice = voz;
    u.rate = vel; u.pitch = 1;
    u.onend = () => { if (tk !== st.token || st.estado !== 'lendo') return; st.i++; falar(); };
    u.onerror = e => { if (tk !== st.token || st.estado !== 'lendo') return; if (e.error === 'interrupted' || e.error === 'canceled') return; st.i++; falar(); };
    sy.speak(u);
  }

  const nomeCurto = v => v.name.replace(/^(Microsoft|Google)\s+/i, m => /google/i.test(m) ? 'Google ' : '')
    .replace(/\s*-\s*Portuguese.*$/i, '').replace(/\s*Online\s*\(Natural\)/i, ' (natural)') + (ehBr(v) ? '' : ' · PT');

  function desenhar(){
    const c = st.ctrl; if (!c) return;
    const e = st.estado, velTx = String(vel).replace('.', ',') + 'x';
    const vozes = st.modo === 'fala' ? vozesPt() : [];
    c.classList.toggle('ativo', e !== 'parado');
    c.innerHTML = (e === 'parado'
      ? `<button type="button" class="ouvir-bt prin" data-ouvir="ouvir" aria-label="Ouvir o texto em voz alta"><span aria-hidden="true">🔊</span> Ouvir</button>`
      : (e === 'lendo' && st.carregando
        ? `<button type="button" class="ouvir-bt prin" data-ouvir="pausar" aria-busy="true"><span aria-hidden="true">⏳</span> Carregando…</button>`
      : e === 'lendo'
        ? `<button type="button" class="ouvir-bt prin" data-ouvir="pausar"><span aria-hidden="true">⏸</span> Pausar</button>`
        : `<button type="button" class="ouvir-bt prin" data-ouvir="continuar"><span aria-hidden="true">▶</span> Continuar</button>`)
        + `<button type="button" class="ouvir-bt" data-ouvir="parar"><span aria-hidden="true">⏹</span> Parar</button>`)
      + `<button type="button" class="ouvir-bt vel" data-ouvir="vel" aria-label="Velocidade da voz: ${velTx}. Toque para mudar" title="Velocidade da voz">${velTx}</button>`
      + (vozes.length > 1 ? `<select class="ouvir-voz" data-ouvir-voz aria-label="Voz da leitura" title="Voz da leitura">${vozes.map(v => `<option value="${v.name.replace(/"/g, '&quot;')}"${voz && v.name === voz.name ? ' selected' : ''}>${nomeCurto(v).replace(/</g, '&lt;')}</option>`).join('')}</select>` : '');
  }

  async function iniciarFala(){
    if (!st.fonte) return;
    sy.cancel();
    st.fila = montarFila(st.fonte());
    st.ultimoTexto = st.fila.map(x => x.texto);
    st.i = 0;
    if (!st.fila.length) return;
    st.estado = 'lendo'; desenhar();
    const tk = st.token;
    if (!sy.getVoices().length) { await vozesProntas(); if (tk !== st.token || st.estado !== 'lendo') return; }
    if (!voz) escolherVoz();
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
  function iniciarAudio(){
    const blocos = (st.fonte ? st.fonte() : []).map(b => ({ el: b.el, n: limpar(b.texto).length })).filter(b => b.n);
    const total = blocos.reduce((s, b) => s + b.n, 0) || 1; let acc = 0;
    st.pesos = blocos.map((b, i) => { const p = { el: b.el, ini: st.marcas ? st.marcas[i] : acc / total }; acc += b.n; return p; });
    if (st.marcas && st.marcas.length !== blocos.length) { st.marcas = null; return iniciarAudio(); }
    if (!st.audio) criarAudio();
    st.audio.preload = 'auto';
    st.audio.playbackRate = vel;
    st.estado = 'lendo'; st.carregando = st.audio.readyState < 3; desenhar();
    const p = st.audio.play();
    if (p && p.catch) p.catch(e => { if (e && e.name === 'NotAllowedError') { st.estado = 'parado'; st.carregando = false; desenhar(); } });
  }
  function criarAudio(){
    const a = st.audio = new Audio();
    a.preload = 'metadata';
    a.src = st.src;
    a.addEventListener('timeupdate', marcarPorTempo);
    a.addEventListener('playing', () => { if (st.audio === a && st.carregando) { st.carregando = false; desenhar(); } });
    a.addEventListener('ended', () => parar());
    a.addEventListener('error', () => {
      if (st.audio !== a) return;
      st.audio = null; st.modo = suportado ? 'fala' : 'audio'; st.carregando = false;
      const tocando = st.estado !== 'parado'; st.estado = 'parado';
      if (tocando && suportado) iniciarFala(); else desenhar();
    });
  }

  const iniciar = () => st.modo === 'audio' ? iniciarAudio() : iniciarFala();
  function pausar(){
    st.estado = 'pausado'; st.carregando = false;
    if (st.modo === 'audio') st.audio && st.audio.pause(); else { st.token++; sy.cancel(); }
    desenhar();
  }
  function continuar(){
    st.estado = 'lendo'; desenhar();
    if (st.modo === 'audio') { const p = st.audio && st.audio.play(); if (p && p.catch) p.catch(() => {}); } else falar();
  }
  function parar(){
    st.token++;
    if (st.audio) { st.audio.pause(); try { st.audio.currentTime = 0; } catch(e){} }
    if (suportado && (st.estado !== 'parado' || sy.speaking || sy.pending)) sy.cancel();
    st.estado = 'parado'; st.i = 0; st.carregando = false; marcar(null); desenhar();
  }
  function trocarVel(){
    vel = VELS[(VELS.indexOf(vel) + 1) % VELS.length];
    try { localStorage.setItem(CHAVE_VEL, String(vel)); } catch(e){}
    if (st.modo === 'audio') { if (st.audio) st.audio.playbackRate = vel; desenhar(); }
    else if (st.estado === 'lendo') { st.token++; sy.cancel(); desenhar(); falar(); } else desenhar();
  }
  function trocarVoz(nome){
    vozSalva = nome;
    try { localStorage.setItem(CHAVE_VOZ, nome); } catch(e){}
    voz = vozesPt().find(v => v.name === nome) || voz;
    if (st.estado === 'lendo') { st.token++; sy.cancel(); desenhar(); falar(); } else desenhar();
  }

  function montar(el, fonte, opcoes = {}){
    if (!el) return;
    if (!suportado && !opcoes.audio) { el.remove(); return; }
    parar();
    if (st.audio) { st.audio.removeAttribute('src'); st.audio = null; }
    st.ctrl = el; st.fonte = fonte; st.src = opcoes.audio || ''; st.marcas = Array.isArray(opcoes.marcas) ? opcoes.marcas : null; st.modo = st.src && window.Audio ? 'audio' : 'fala';
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
    const b = e.target.closest('[data-ouvir]'); if (!b || !st.ctrl || !st.ctrl.contains(b)) return;
    const a = b.dataset.ouvir;
    if (a === 'ouvir') iniciar(); else if (a === 'pausar') pausar(); else if (a === 'continuar') continuar();
    else if (a === 'parar') parar(); else if (a === 'vel') trocarVel();
  });
  document.addEventListener('change', e => { const s = e.target.closest && e.target.closest('[data-ouvir-voz]'); if (s && st.ctrl && st.ctrl.contains(s)) trocarVoz(s.value); });
  addEventListener('pagehide', () => parar());
  const css = document.createElement('style');
  css.textContent = `.ouvir{display:flex; flex-wrap:wrap; align-items:center; gap:8px; margin:0 0 18px;}
.ouvir-bt{display:inline-flex; align-items:center; gap:7px; border:1px solid rgba(255,255,255,.14); border-radius:12px; padding:9px 14px; font-family:inherit; font-size:14px; font-weight:700; line-height:1.2; color:#f5f5fa; background:rgba(255,255,255,.05); cursor:pointer; transition:filter .2s, transform .2s, border-color .2s;}
.ouvir-bt:hover{border-color:var(--c,#22d3ee); transform:translateY(-1px);}
.ouvir-bt:focus-visible,.ouvir-voz:focus-visible{outline:2px solid var(--c,#22d3ee); outline-offset:2px;}
.ouvir-bt.prin{border-color:transparent; color:#04040a; font-weight:800; background:linear-gradient(135deg,var(--c,#22d3ee),var(--c2,#c084fc)); box-shadow:0 8px 22px -10px var(--c,#22d3ee);}
.ouvir-bt.prin:hover{filter:brightness(1.1);}
.ouvir-bt.vel{min-width:58px; justify-content:center; font-family:'JetBrains Mono',monospace; color:var(--c,#22d3ee);}
.ouvir-voz{max-width:190px; border:1px solid rgba(255,255,255,.14); border-radius:12px; padding:9px 10px; font-family:inherit; font-size:13px; font-weight:600; color:#f5f5fa; background:#0b0b14; cursor:pointer;}
.ouvir-voz:hover{border-color:var(--c,#22d3ee);}
.ouvir-lendo{background-color:rgba(34,211,238,.09) !important; box-shadow:0 0 0 2px rgba(34,211,238,.28); border-radius:8px; transition:background-color .25s, box-shadow .25s;}`;
  document.head.appendChild(css);

  window.Ouvir = { suportado, montar, parar, limpar, voz: () => voz || escolherVoz(), vozes: () => vozesPt().map(v => `${v.name} (${v.lang})`), textos: () => st.ultimoTexto.slice(), modo: () => st.modo, audio: () => st.audio };
})();
