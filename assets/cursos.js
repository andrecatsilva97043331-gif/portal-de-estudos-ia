(function(){
'use strict';

const PALETA = [['#ff5a5f','#ff9a3c'],['#22d3ee','#3b82f6'],['#c084fc','#ec4899'],['#4ade80','#a3e635'],['#fbbf24','#f59e0b']];

window.PORTAL = window.PORTAL || {};
PORTAL.cursos = {};
PORTAL.registrarCurso = c => { PORTAL.cursos[c.id] = c; };
PORTAL.paleta = i => PALETA[((i % PALETA.length) + PALETA.length) % PALETA.length];

/* Rascunhos só aparecem no computador local (localhost) ou com ?previa na URL. */
PORTAL.modoPrevia = /^(localhost|127\.0\.0\.1)$/.test(location.hostname) || new URLSearchParams(location.search).has('previa');

function carregarScript(src){
  return new Promise(res => {
    const s = document.createElement('script');
    s.src = src;
    s.onload = res;
    s.onerror = () => { console.error('Falha ao carregar ' + src); res(); };
    document.head.appendChild(s);
  });
}

/* Retorna os cursos do catálogo já com o conteúdo carregado.
   todos=true inclui rascunhos e arquivados (usado no painel do master). */
PORTAL.carregarCursos = async function(todos){
  const lista = await fetch('cursos/catalogo.json', { cache:'no-store' }).then(r => r.json());
  const visiveis = lista.filter(c => todos || c.status === 'publicado' || (PORTAL.modoPrevia && c.status === 'rascunho'));
  await Promise.all(visiveis.map(c => carregarScript('cursos/' + c.id + '/curso.js?v=' + (c.versao || 1))));
  return visiveis.filter(c => PORTAL.cursos[c.id]).map((c, i) => {
    const conteudo = PORTAL.cursos[c.id];
    const licoes = conteudo.modulos.flatMap(m => m.lessons.map(l => Object.assign({}, l, { mod:m.id })));
    return Object.assign({ cores:PORTAL.paleta(i), icone:'📘' }, c, { conteudo, licoes, total:licoes.length });
  });
};
})();
