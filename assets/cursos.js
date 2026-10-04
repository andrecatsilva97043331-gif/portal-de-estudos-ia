(function(){
'use strict';

const PALETA = [['#ff5a5f','#ff9a3c'],['#22d3ee','#3b82f6'],['#c084fc','#ec4899'],['#4ade80','#a3e635'],['#fbbf24','#f59e0b']];

window.PORTAL = window.PORTAL || {};
PORTAL.cursos = {};
PORTAL.registrarCurso = c => { PORTAL.cursos[c.id] = c; };
PORTAL.paleta = i => PALETA[((i % PALETA.length) + PALETA.length) % PALETA.length];

/* Rascunhos só aparecem no computador local (localhost) ou com ?previa na URL. */
PORTAL.modoPrevia = /^(localhost|127\.0\.0\.1)$/.test(location.hostname) || new URLSearchParams(location.search).has('previa');

/* Botão de olho dos campos de senha: <span class="pw"><input type="password"> + PORTAL.olho</span> */
PORTAL.olho = '<button type="button" class="olho" aria-label="Mostrar senha" title="Mostrar senha">👁️</button>';
document.addEventListener('click', e => {
  const b = e.target.closest('.olho'); if (!b) return;
  e.preventDefault();
  const i = b.parentElement.querySelector('input'), ver = i.type === 'password';
  i.type = ver ? 'text' : 'password';
  b.textContent = ver ? '🙈' : '👁️';
  b.title = ver ? 'Esconder senha' : 'Mostrar senha';
  b.setAttribute('aria-label', b.title);
  i.focus();
});

function carregarScript(src){
  return new Promise(res => {
    const s = document.createElement('script');
    s.src = src;
    s.onload = res;
    s.onerror = () => { console.error('Falha ao carregar ' + src); res(); };
    document.head.appendChild(s);
  });
}

/* Status: "disponivel" (aberto a todos; "publicado" é o nome antigo), "em_breve" (aparece na trilha sem abrir),
   "rascunho" (só na prévia) e "arquivado" (fora do ar, histórico preservado).
   Na prévia, um curso "em_breve" que já tem curso.js abre normalmente, para testar antes de liberar. */
PORTAL.disponivel = c => c.status === 'disponivel' || c.status === 'publicado';
PORTAL.niveis = [
  { id:'iniciante', titulo:'Iniciante', cores:['#22C55E','#14B8A6'] },
  { id:'intermediario', titulo:'Intermediário', cores:['#F59E0B','#F97316'] },
  { id:'avancado', titulo:'Avançado', cores:['#EF4444','#EC4899'] }
];
/* Trilha "Renda com IA": cursos com "trilha": "renda" no catálogo, agrupados por "grupo" (fora dos níveis e do teste de nível). */
PORTAL.gruposRenda = [
  { id:'fundamentos', titulo:'Fundamentos', icone:'🧱', cores:['#3B82F6','#6366F1'] },
  { id:'servicos', titulo:'Serviços', icone:'🛠️', cores:['#06B6D4','#3B82F6'] },
  { id:'negocio', titulo:'Negócio', icone:'📈', cores:['#10B981','#84CC16'] }
];
PORTAL.catalogo = [];

/* Retorna os cursos do catálogo já com o conteúdo carregado.
   todos=true inclui rascunhos e arquivados (usado no painel do master). */
PORTAL.carregarCursos = async function(todos){
  const lista = await fetch('cursos/catalogo.json', { cache:'no-store' }).then(r => r.json());
  PORTAL.catalogo = lista.slice().sort((a, b) => (a.ordem || 99) - (b.ordem || 99));
  const visiveis = lista.filter(c => PORTAL.disponivel(c) || (c.status === 'em_breve' ? PORTAL.modoPrevia : todos || (PORTAL.modoPrevia && c.status === 'rascunho')));
  await Promise.all(visiveis.map(c => carregarScript('cursos/' + c.id + '/curso.js?v=' + (c.versao || 1))));
  return visiveis.filter(c => PORTAL.cursos[c.id]).map((c, i) => {
    const conteudo = PORTAL.cursos[c.id];
    const licoes = conteudo.modulos.flatMap(m => m.lessons.map(l => Object.assign({}, l, { mod:m.id })));
    return Object.assign({ cores:PORTAL.paleta(i), icone:'📘' }, c, { conteudo, licoes, total:licoes.length });
  });
};
})();
