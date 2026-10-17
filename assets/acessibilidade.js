/* Botão "Acessibilidade" e painel de preferências (salvas só neste navegador).
   Uso: coloque <span data-a11y></span> onde o botão deve aparecer e carregue este arquivo depois de ouvir.js. */
(function(){
  const PESSOA = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><circle cx="12" cy="4.6" r="2.1" fill="currentColor" stroke="none"/><path d="M4.5 8.6c2.5.8 5 1.2 7.5 1.2s5-.4 7.5-1.2"/><path d="M12 9.8v4.6"/><path d="M12 14.4l-3.2 6.1M12 14.4l3.2 6.1"/></svg>';
  const XIS = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6L6 18"/></svg>';
  const O = window.Ouvir, voz = !!(O && O.prefs);
  const velTexto = v => String(v).replace('.', ',') + 'x';
  let bt = null, fundo = null, painel = null, voltar = null;
  /* Tamanho do texto: aplicado com zoom só no conteúdo marcado com data-a11y-texto (o layout se reorganiza). */
  const CH_TEXTO = 'portal-a11y-texto';
  const TEXTOS = [{ v: .9, r: 'A−', n: 'Texto menor' }, { v: 1, r: 'A', n: 'Texto padrão' }, { v: 1.15, r: 'A+', n: 'Texto maior' }, { v: 1.3, r: 'A++', n: 'Texto muito maior' }];
  const pct = v => Math.round(v * 100) + '%';
  let texto = 1;
  try { const t = parseFloat(localStorage.getItem(CH_TEXTO)); if (TEXTOS.some(x => x.v === t)) texto = t; } catch(e){}
  function aplicar(){
    const h = document.documentElement;
    h.style.setProperty('--a11y-texto', texto);
    h.classList.toggle('a11y-texto', texto !== 1);
    h.classList.toggle('a11y-contraste', contraste);
  }
  const CH_CONTRASTE = 'portal-a11y-contraste';
  let contraste = false;
  try { contraste = localStorage.getItem(CH_CONTRASTE) === '1'; } catch(e){}
  function definirContraste(v){
    contraste = !!v; aplicar();
    try { if (contraste) localStorage.setItem(CH_CONTRASTE, '1'); else localStorage.removeItem(CH_CONTRASTE); } catch(e){}
  }
  function definirTexto(v){
    texto = v; aplicar();
    try { if (v === 1) localStorage.removeItem(CH_TEXTO); else localStorage.setItem(CH_TEXTO, String(v)); } catch(e){}
  }
  aplicar();

  function montarBotao(){
    document.querySelectorAll('[data-a11y]').forEach(host => {
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'a11y-bt';
      b.setAttribute('aria-label', 'Acessibilidade'); b.title = 'Acessibilidade';
      b.setAttribute('aria-haspopup', 'dialog'); b.setAttribute('aria-expanded', 'false'); b.setAttribute('aria-controls', 'a11y-painel');
      b.innerHTML = PESSOA + '<span class="a11y-tt">Acessibilidade</span>';
      b.addEventListener('click', () => abrir(b));
      host.replaceWith(b);
      bt = bt || b;
    });
  }

  function montarPainel(){
    fundo = document.createElement('div');
    fundo.className = 'a11y-fundo'; fundo.hidden = true;
    fundo.innerHTML = `<div class="a11y-painel" id="a11y-painel" role="dialog" aria-modal="true" aria-labelledby="a11y-tit" tabindex="-1">
      <div class="a11y-cab"><h2 id="a11y-tit">${PESSOA}<span>Acessibilidade</span></h2><button type="button" class="a11y-x" data-a11y="fechar" aria-label="Fechar o painel">${XIS}</button></div>
      <p class="a11y-nota">Suas escolhas ficam salvas só neste aparelho.</p>
      <section class="a11y-sec" aria-labelledby="a11y-tx-t">
        <h3 id="a11y-tx-t">Tamanho do texto</h3>
        <div class="a11y-chips" role="group" aria-labelledby="a11y-tx-t" data-a11y-textos></div>
      </section>
      <section class="a11y-sec" aria-label="Cores">
        <button type="button" class="a11y-switch" role="switch" aria-checked="false" data-a11y="contraste"><span>Alto contraste</span><span class="a11y-sw" aria-hidden="true"><i></i></span></button>
        <p class="a11y-nota">Preto e branco, sem brilhos nem degradês, com foco bem marcado.</p>
      </section>
      ${voz ? `<section class="a11y-sec" aria-labelledby="a11y-voz-t">
        <h3 id="a11y-voz-t">Leitura em voz alta</h3>
        <div class="a11y-campo" data-a11y-vozes>
          <label class="a11y-rot" for="a11y-voz">Voz padrão</label>
          <div class="a11y-linha"><select id="a11y-voz" class="a11y-sel"></select><button type="button" class="a11y-b" data-a11y="testar">Testar voz</button></div>
        </div>
        <p class="a11y-nota" data-a11y-semvoz hidden>Nenhuma voz em português foi encontrada neste aparelho.</p>
        <div class="a11y-campo">
          <div class="a11y-rot" id="a11y-vel-t">Velocidade padrão</div>
          <div class="a11y-chips" role="group" aria-labelledby="a11y-vel-t" data-a11y-vels></div>
        </div>
        ${O.definirEconomia ? `<button type="button" class="a11y-switch" role="switch" aria-checked="false" data-a11y="economia"><span>Economizar internet (usar voz do aparelho)</span><span class="a11y-sw" aria-hidden="true"><i></i></span></button>` : ''}
      </section>` : ''}
      <p class="a11y-aviso" role="status" data-a11y-aviso></p>
      <div class="a11y-rodape"><button type="button" class="a11y-b" data-a11y="restaurar">Restaurar padrão</button><button type="button" class="a11y-b prin" data-a11y="fechar">Pronto</button></div>
    </div>`;
    document.body.appendChild(fundo);
    painel = fundo.firstElementChild;
    fundo.addEventListener('click', e => {
      if (e.target === fundo) return fechar();
      const b = e.target.closest('[data-a11y]'); if (!b) return;
      const a = b.dataset.a11y;
      if (a === 'fechar') fechar();
      else if (a === 'testar') O.exemplo();
      else if (a === 'contraste') { definirContraste(!contraste); pintar(); avisar('Alto contraste ' + (contraste ? 'ligado.' : 'desligado.')); }
      else if (a === 'texto') { definirTexto(parseFloat(b.dataset.v)); pintar(); avisar('Tamanho do texto: ' + pct(texto)); }
      else if (a === 'vel') { O.definirVel(parseFloat(b.dataset.v)); pintar(); avisar('Velocidade padrão: ' + velTexto(O.prefs().vel)); }
      else if (a === 'economia') { O.definirEconomia(!O.economia()); pintar(); avisar(O.economia() ? 'Economizar internet ligado: a leitura usa a voz do aparelho.' : 'Economizar internet desligado.'); }
      else if (a === 'restaurar') { restaurar(); }
    });
    fundo.addEventListener('change', e => { if (e.target.id === 'a11y-voz') { O.definirVoz(e.target.value); avisar('Voz padrão alterada.'); } });
    fundo.addEventListener('keydown', e => {
      if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); fechar(); return; }
      if (e.key !== 'Tab') return;
      const f = [...painel.querySelectorAll('button, select, input, [href], [tabindex]:not([tabindex="-1"])')].filter(x => !x.disabled && x.getClientRects().length);
      if (!f.length) return;
      const pri = f[0], ult = f[f.length - 1];
      if (e.shiftKey && (document.activeElement === pri || document.activeElement === painel)) { e.preventDefault(); ult.focus(); }
      else if (!e.shiftKey && document.activeElement === ult) { e.preventDefault(); pri.focus(); }
    });
  }

  function pintar(){
    const foco = document.activeElement, focoSel = foco && foco.dataset && (foco.dataset.a11y === 'vel' || foco.dataset.a11y === 'texto') ? `[data-a11y="${foco.dataset.a11y}"][data-v="${foco.dataset.v}"]` : null;
    painel.querySelector('[data-a11y-textos]').innerHTML = TEXTOS.map(t => `<button type="button" class="a11y-chip a11y-tx" data-a11y="texto" data-v="${t.v}" aria-pressed="${t.v === texto}" title="${t.n} (${pct(t.v)})" style="font-size:${Math.round(13 * t.v)}px">${t.r}<span class="a11y-sr"> ${t.n} (${pct(t.v)})</span></button>`).join('');
    painel.querySelector('[data-a11y="contraste"]').setAttribute('aria-checked', String(contraste));
    if (voz) pintarVoz();
    if (focoSel) { const novo = painel.querySelector(focoSel); if (novo) novo.focus(); }
  }
  function pintarVoz(){
    const p = O.prefs();
    const eco = painel.querySelector('[data-a11y="economia"]');
    if (eco) eco.setAttribute('aria-checked', String(O.economia()));
    const sel = painel.querySelector('#a11y-voz');
    sel.innerHTML = p.vozes.map(v => `<option value="${v.nome.replace(/&/g, '&amp;').replace(/"/g, '&quot;')}"${v.nome === p.voz ? ' selected' : ''}>${v.rotulo.replace(/&/g, '&amp;').replace(/</g, '&lt;')}</option>`).join('');
    painel.querySelector('[data-a11y-vozes]').hidden = !p.vozes.length;
    painel.querySelector('[data-a11y-semvoz]').hidden = !!p.vozes.length;
    painel.querySelector('[data-a11y-vels]').innerHTML = p.vels.map(v => `<button type="button" class="a11y-chip" data-a11y="vel" data-v="${v}" aria-pressed="${v === p.vel}">${velTexto(v)}</button>`).join('');
  }
  function avisar(t){ const a = painel.querySelector('[data-a11y-aviso]'); a.textContent = ''; setTimeout(() => { a.textContent = t; }, 30); }
  function restaurar(){
    if (voz) O.restaurar();
    definirTexto(1); definirContraste(false);
    pintar(); avisar('Preferências restauradas para o padrão.');
  }

  async function abrir(origem){
    voltar = origem || document.activeElement;
    fundo.hidden = false;
    document.documentElement.classList.add('a11y-aberto');
    document.querySelectorAll('.a11y-bt').forEach(b => b.setAttribute('aria-expanded', 'true'));
    painel.querySelector('[data-a11y-aviso]').textContent = '';
    pintar();
    painel.focus();
    if (voz && O.suportado && !O.prefs().vozes.length) { await O.vozesProntas(); if (!fundo.hidden) pintar(); }
  }
  function fechar(){
    if (!fundo || fundo.hidden) return;
    fundo.hidden = true;
    document.documentElement.classList.remove('a11y-aberto');
    document.querySelectorAll('.a11y-bt').forEach(b => b.setAttribute('aria-expanded', 'false'));
    if (voltar && document.contains(voltar)) voltar.focus();
  }

  const css = document.createElement('style');
  css.textContent = `.a11y-bt{flex:none; display:inline-flex; align-items:center; justify-content:center; gap:8px; min-width:44px; min-height:44px; padding:0 14px 0 11px; border:1px solid rgba(34,211,238,.45); border-radius:14px; background:radial-gradient(circle at 30% 20%,rgba(34,211,238,.18),rgba(192,132,252,.08) 70%),#06060b; color:#22d3ee; font:700 14px 'Sora',system-ui,sans-serif; cursor:pointer; box-shadow:0 10px 30px -14px #22d3ee; transition:transform .2s, border-color .2s, box-shadow .2s;}
.a11y-bt:hover{transform:translateY(-2px); border-color:#c084fc; box-shadow:0 12px 30px -10px #c084fc;}
.a11y-bt:focus-visible,.a11y-painel button:focus-visible,.a11y-sel:focus-visible{outline:3px solid #fff; outline-offset:2px;}
.a11y-tt{color:#f5f5fa;}
@media (max-width:760px){.a11y-tt{display:none;} .a11y-bt{width:44px; padding:0;}}
@media (max-width:520px){.top-in:has(.a11y-bt){gap:6px;} .top-in:has(.a11y-bt) .pbar{min-width:36px;}}
html.a11y-aberto{overflow:hidden;}
html.a11y-texto [data-a11y-texto]{zoom:var(--a11y-texto,1);}
.a11y-sr{position:absolute; width:1px; height:1px; margin:-1px; padding:0; overflow:hidden; clip:rect(0 0 0 0); white-space:nowrap; border:0;}
.a11y-switch{display:flex; align-items:center; justify-content:space-between; gap:12px; width:100%; min-height:48px; padding:8px 14px; border:1px solid rgba(255,255,255,.16); border-radius:14px; background:rgba(255,255,255,.04); color:#f5f5fa; font:700 15px 'Sora',system-ui,sans-serif; cursor:pointer; text-align:left;}
.a11y-campo + .a11y-switch{margin-top:14px;}
.a11y-switch:hover{border-color:#22d3ee;}
.a11y-sw{flex:none; position:relative; width:46px; height:26px; border-radius:99px; background:#2a2a38; border:1px solid rgba(255,255,255,.25);}
.a11y-sw i{position:absolute; top:3px; left:3px; width:18px; height:18px; border-radius:50%; background:#d6d6e4; transition:transform .2s;}
.a11y-switch[aria-checked="true"] .a11y-sw{background:linear-gradient(135deg,#22d3ee,#c084fc); border-color:transparent;}
.a11y-switch[aria-checked="true"] .a11y-sw i{transform:translateX(20px); background:#04040a;}
html.a11y-contraste{color-scheme:dark; background:#000 !important;}
html.a11y-contraste :where(body, body *:not(img, svg, svg *, video, canvas)){background-color:#000 !important; background-image:none !important; color:#fff !important; -webkit-text-fill-color:#fff !important; border-color:#fff !important; box-shadow:none !important; text-shadow:none !important; filter:none !important; -webkit-backdrop-filter:none !important; backdrop-filter:none !important; animation:none !important;}
html.a11y-contraste :where(body *:empty:not(input, select, textarea, button)),html.a11y-contraste .mc-abrir{background-color:transparent !important;}
html.a11y-contraste :where(body *)::before,html.a11y-contraste :where(body *)::after{background-image:none !important; background-color:transparent !important; color:#fff !important; -webkit-text-fill-color:#fff !important; border-color:#fff !important; box-shadow:none !important; text-shadow:none !important; animation:none !important;}
html.a11y-contraste a{color:#ffe34d !important; -webkit-text-fill-color:#ffe34d !important; text-decoration:underline !important;}
html.a11y-contraste button,html.a11y-contraste select,html.a11y-contraste input,html.a11y-contraste textarea,html.a11y-contraste [role="button"]{border:2px solid #fff !important;}
html.a11y-contraste .logo{border-color:transparent !important;}
html.a11y-contraste .os::before{background-color:#000 !important; border:2px solid #fff !important;}
html.a11y-contraste :focus-visible{outline:4px solid #ffe34d !important; outline-offset:3px !important;}
html.a11y-contraste [aria-pressed="true"],html.a11y-contraste [aria-pressed="true"] *,html.a11y-contraste .ouvir-tr.falando,html.a11y-contraste .ouvir-tr.falando *{background-color:#ffe34d !important; color:#000 !important; -webkit-text-fill-color:#000 !important;}
html.a11y-contraste [aria-pressed="true"],html.a11y-contraste .ouvir-tr.falando{border-color:#ffe34d !important;}
html.a11y-contraste .a11y-switch[aria-checked="true"] .a11y-sw{background-color:#ffe34d !important;}
html.a11y-contraste .a11y-sw i{background-color:#fff !important;}
html.a11y-contraste .a11y-switch[aria-checked="true"] .a11y-sw i{background-color:#000 !important;}
html.a11y-contraste .ouvir-lendo{outline:3px solid #ffe34d !important; outline-offset:2px;}
html.a11y-contraste .opt.right,html.a11y-contraste .fb.ok{border:3px solid #4ade80 !important;}
html.a11y-contraste .opt.wrong,html.a11y-contraste .fb.no{border:3px dashed #ff8a8a !important;}
html.a11y-contraste .opt.dim,html.a11y-contraste .mc.lock,html.a11y-contraste .mc.breve,html.a11y-contraste [disabled]{opacity:1 !important;}
html.a11y-contraste .mc.lock,html.a11y-contraste .mc.breve{border-style:dashed !important;}
html.a11y-contraste .pbar{border:1px solid #fff !important;}
html.a11y-contraste .pbar > i,html.a11y-contraste .dots i.on,html.a11y-contraste .dots i.now{background-color:#ffe34d !important;}
html.a11y-contraste .dots i{border:1px solid #fff !important;}
html.a11y-contraste .ring{background-image:conic-gradient(#ffe34d calc(var(--p,0)*1%), #6b6b78 0) !important;}
html.a11y-contraste .bigring{background-image:conic-gradient(#ffe34d calc(var(--p,0)*1%), #6b6b78 0) !important;}
html.a11y-contraste .ring::before,html.a11y-contraste .bigring::before{background-color:#000 !important;}
html.a11y-contraste .a11y-fundo{background-color:rgba(0,0,0,.92) !important;}
.a11y-chip.a11y-tx{position:relative; font-family:'Sora',system-ui,sans-serif; font-weight:800;}
.a11y-fundo{position:fixed; inset:0; z-index:1000; display:flex; align-items:flex-start; justify-content:flex-end; padding:72px 16px 16px; background:rgba(2,2,6,.66); backdrop-filter:blur(4px); -webkit-backdrop-filter:blur(4px);}
.a11y-fundo[hidden]{display:none;}
.a11y-painel{width:min(420px,100%); max-height:calc(100vh - 92px); overflow:auto; padding:18px 18px 16px; border-radius:22px; border:1px solid rgba(34,211,238,.4); background:radial-gradient(120% 90% at 0% 0%,rgba(34,211,238,.12),transparent 60%),#07070d; color:#f5f5fa; font-family:'Sora',system-ui,sans-serif; box-shadow:0 30px 70px -30px #22d3ee, 0 0 0 1px rgba(255,255,255,.04) inset;}
.a11y-painel:focus{outline:none;}
.a11y-cab{display:flex; align-items:center; justify-content:space-between; gap:10px;}
.a11y-cab h2{display:flex; align-items:center; gap:10px; margin:0; font-size:20px; font-weight:800;}
.a11y-cab h2 svg{color:#22d3ee; width:26px; height:26px;}
.a11y-x{flex:none; display:grid; place-items:center; width:44px; height:44px; border-radius:12px; border:1px solid rgba(255,255,255,.14); background:rgba(255,255,255,.04); color:#f5f5fa; cursor:pointer;}
.a11y-nota{margin:6px 0 4px; font-size:13px; color:#b4b4c8;}
.a11y-sec{margin-top:14px; padding-top:14px; border-top:1px solid rgba(255,255,255,.08);}
.a11y-sec h3{margin:0 0 10px; font-size:15px; color:#22d3ee; font-weight:700;}
.a11y-campo{margin:0 0 12px;}
.a11y-rot{display:block; margin:0 0 6px; font-size:13.5px; font-weight:600; color:#d6d6e4;}
.a11y-linha{display:flex; flex-wrap:wrap; gap:8px;}
.a11y-sel{flex:1 1 180px; min-height:44px; border:1px solid rgba(255,255,255,.16); border-radius:12px; padding:8px 10px; font:600 14px 'Sora',system-ui,sans-serif; color:#f5f5fa; background:#0b0b14;}
.a11y-b{min-height:44px; padding:8px 16px; border:1px solid rgba(255,255,255,.16); border-radius:12px; background:rgba(255,255,255,.05); color:#f5f5fa; font:700 14px 'Sora',system-ui,sans-serif; cursor:pointer;}
.a11y-b:hover,.a11y-x:hover,.a11y-chip:hover{border-color:#22d3ee;}
.a11y-b.prin{border-color:transparent; color:#04040a; background:linear-gradient(135deg,#22d3ee,#c084fc);}
.a11y-chips{display:flex; flex-wrap:wrap; gap:6px;}
.a11y-chip{flex:1 0 56px; min-height:44px; padding:8px 6px; border:1px solid rgba(255,255,255,.16); border-radius:999px; background:rgba(255,255,255,.04); color:#d6d6e4; font:700 13px 'JetBrains Mono',monospace; cursor:pointer;}
.a11y-chip[aria-pressed="true"]{border-color:transparent; color:#04040a; background:linear-gradient(135deg,#22d3ee,#c084fc);}
.a11y-aviso{min-height:18px; margin:4px 0 8px; font-size:13px; color:#86efac;}
.a11y-rodape{display:flex; justify-content:space-between; gap:10px; padding-top:12px; border-top:1px solid rgba(255,255,255,.08);}
@media (max-width:520px){.a11y-fundo{padding:12px; align-items:flex-end;} .a11y-painel{max-height:calc(100vh - 24px);}}
@media (prefers-reduced-motion: reduce){.a11y-bt{transition:none;}}`;
  document.head.appendChild(css);

  montarBotao();
  montarPainel();
  window.Acessibilidade = { abrir, fechar, texto: () => texto };
})();
