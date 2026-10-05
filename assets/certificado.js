(function(){
'use strict';

window.PORTAL = window.PORTAL || {};
const QR_CDN = 'https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js';
const MESES = ['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez'];
const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const data = iso => { const d = new Date(iso); return String(d.getDate()).padStart(2, '0') + ' ' + MESES[d.getMonth()] + ' ' + d.getFullYear(); };
const horas = n => n + (Number(n) === 1 ? ' hora' : ' horas');

/* Rede neural decorativa nas laterais, sempre igual para o mesmo formato (semente fixa). */
function rede(f){
  const q = f === 'q', w = q ? 1080 : 1123, h = q ? 1080 : 794, lim = q ? 110 : 100, id = 'cert-' + f;
  let seed = q ? 23 : 11; const r = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
  const nos = [];
  if (q) { for (let i = 0; i < 18; i++) nos.push([880 + r() * 180, 170 + r() * 560]); for (let i = 0; i < 18; i++) nos.push([20 + r() * 180, 170 + r() * 560]); }
  else { for (let i = 0; i < 22; i++) nos.push([900 + r() * 210, 130 + r() * 470]); for (let i = 0; i < 18; i++) nos.push([70 + r() * 170, 130 + r() * 470]); }
  let s = `<defs><linearGradient id="${id}-lg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#22d3ee"/><stop offset=".5" stop-color="#22C55E"/><stop offset="1" stop-color="#c084fc"/></linearGradient>
    <filter id="${id}-br" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="${q ? 2.6 : 2.4}" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>`;
  nos.forEach((a, i) => nos.forEach((b, j) => {
    if (j <= i) return;
    const d = Math.hypot(a[0] - b[0], a[1] - b[1]);
    if (d < lim) s += `<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="url(#${id}-lg)" stroke-width="${q ? .9 : .8}" opacity="${(1 - d / lim) * (q ? .42 : .45)}"/>`;
  }));
  nos.forEach(([x, y]) => { const g = r() > .8; s += `<circle cx="${x}" cy="${y}" r="${g ? (q ? 3.4 : 3) : (q ? 1.9 : 1.7)}" fill="${g ? '#22d3ee' : '#9aa0c0'}" opacity="${g ? .9 : .4}" ${g ? `filter="url(#${id}-br)"` : ''}/>`; });
  return `<svg class="rede" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" aria-hidden="true">${s}</svg>`;
}

function qr(url){
  if (!window.qrcode) return '';
  const c = window.qrcode(0, 'M'); c.addData(url); c.make();
  const n = c.getModuleCount(); let p = '';
  for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) if (c.isDark(y, x)) p += `M${x} ${y}h1v1h-1z`;
  return `<svg viewBox="0 0 ${n} ${n}" shape-rendering="crispEdges" role="img" aria-label="QR para validar o certificado"><rect width="${n}" height="${n}" fill="#fff"/><path d="${p}" fill="#05050a"/></svg>`;
}

PORTAL.cert = {
  carregarQr(){
    if (window.qrcode) return Promise.resolve();
    return new Promise(res => { const s = document.createElement('script'); s.src = QR_CDN; s.onload = res; s.onerror = res; document.head.appendChild(s); });
  },
  link: codigo => new URL('validar.html?c=' + encodeURIComponent(codigo), location.href).href,
  /* c: registro de certificados (codigo, tipo, ref_id, nome, titulo, subtitulo, icone, cores, carga_horaria, detalhe, habilidades, emitido_em, revogado).
     f: 'h' (horizontal) ou 'q' (quadrado). */
  html(c, f){
    const trilha = c.tipo === 'trilha', cores = c.cores && c.cores.length >= 2 ? c.cores : ['#22C55E', '#14B8A6'];
    const cmd = f === 'q' ? 'portal certificar <b>--ok</b>'
      : `portal certificar --${trilha ? 'trilha' : 'curso'} <b>${esc(c.ref_id)}</b> --status <b>${trilha ? 'concluída' : 'concluído'}</b>`;
    const verif = f === 'q' ? `<span class="ok">VERIFICADO</span>${qr(PORTAL.cert.link(c.codigo))}`
      : `<div class="txt"><span class="ok">VERIFICADO</span><br>Escaneie para<br>conferir a autenticidade</div>${qr(PORTAL.cert.link(c.codigo))}`;
    return `<div class="cert ${f}${c.revogado ? ' revogado' : ''}" style="--c1:${esc(cores[0])};--c2:${esc(cores[1])}">
      <div class="aurora"></div><div class="grade"></div>${rede(f)}
      <div class="faixa">${f === 'h' ? '<span>PORTAL DE ESTUDOS IA · CREDENCIAL VERIFICADA</span>' : ''}</div>
      <div class="conteudo">
        <div class="topo"><div class="cmd"><i>$</i> ${cmd}</div><img class="logo" src="assets/logo.svg" alt="Portal de Estudos IA"></div>
        <div class="centro">
          <div class="rotulo">Certificado de conclusão</div>
          <p class="apresenta">Certificamos que</p>
          <div class="nome">${esc(c.nome)}</div>
          <div class="assinatura"></div>
          <p class="concluiu">${trilha ? 'concluiu todos os cursos e o projeto final da' : 'concluiu com aproveitamento a formação'}</p>
          <div class="curso"><div class="tile">${esc(c.icone || '🎓')}</div><div><h1>${esc(c.titulo)}</h1><small>${esc(c.subtitulo || '')}</small></div></div>
          <div class="skills">${(c.habilidades || []).slice(0, 5).map(s => `<span><b>✓</b>${esc(s)}</span>`).join('')}</div>
        </div>
        <div class="base">
          <div class="painel">
            <div><small>Concluído em</small><b>${data(c.emitido_em)}</b></div>
            <div><small>Carga horária</small><b>${horas(c.carga_horaria)}${c.detalhe ? ' · ' + esc(c.detalhe) : ''}</b></div>
            <div class="cod"><small>ID da credencial</small><b>${esc(c.codigo)}</b></div>
          </div>
          <div class="verif">${verif}</div>
        </div>
      </div>
    </div>`;
  },
  /* Nomes e títulos longos: diminui a fonte até caber na largura do certificado. */
  ajustar(raiz){
    raiz.querySelectorAll('.cert').forEach(el => {
      const largura = el.querySelector('.centro').clientWidth - 40;
      [['.nome', 40], ['.curso h1', 20]].forEach(([sel, minimo]) => {
        const alvo = el.querySelector(sel), caixa = sel === '.nome' ? alvo : el.querySelector('.curso');
        alvo.style.fontSize = '';
        let px = parseFloat(getComputedStyle(alvo).fontSize);
        while (caixa.scrollWidth > largura && px > minimo) { px -= 2; alvo.style.fontSize = px + 'px'; }
      });
    });
  }
};
})();
