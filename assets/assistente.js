/* Assistente "Perguntar à IA": abre a IA gratuita do Google com a dúvida do aluno e o contexto da tela.
   Sem servidor e sem chave: o aluno usa a própria conta do Google. */
(function(){
'use strict';

const LIMITE_URL = 1500;
const AVISO_LONGO = '📋 Prompt longo copiado: cole no Gemini com Ctrl+V (ou toque e segure → Colar)';
const AVISO_PERGUNTA = '📋 Pergunta copiada: cole (Ctrl+V) no Gemini, ou toque e segure → Colar';
const TELAS = ['cursos', 'home', 'lesson', 'moduleDone'];
const MARCA_PROMPT = 'Meu prompt:';

/* Usada também pelo botão "Testar na IA" do Code Toolbox. */
window.abrirNaIA = function(txt, avisar, opc){
  opc = opc || {};
  if (!opc.gemini && txt.length <= LIMITE_URL) { window.open('https://www.google.com/search?udm=50&q=' + encodeURIComponent(txt), '_blank', 'noopener'); return; }
  (navigator.clipboard ? navigator.clipboard.writeText(txt) : Promise.reject()).catch(() => {});
  window.open('https://gemini.google.com/app', '_blank', 'noopener');
  if (avisar) avisar(opc.aviso || AVISO_LONGO);
};

const $ = id => document.getElementById(id);
const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const corta = (s, n) => { s = String(s || '').replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim(); return s.length > n ? s.slice(0, n - 1) + '…' : s; };
let avisoT;
function avisar(msg){ const t = $('toast'); if (!t) return; t.textContent = msg; t.classList.add('on'); clearTimeout(avisoT); avisoT = setTimeout(() => t.classList.remove('on'), 3200); }

const contexto = () => { try { return (window.contextoAssistente && window.contextoAssistente()) || {}; } catch(e){ return {}; } };

const ATALHOS = {
  explicar: { rotulo: '💡 Explique esta lição de outro jeito', quando: c => c.licao && !c.projeto,
    texto: 'Explique esta lição de outro jeito, com uma analogia do dia a dia e um exemplo prático. No fim, me faça uma pergunta para eu ver se entendi.' },
  projeto: { rotulo: '🛠️ Me ajude no meu projeto', quando: c => !!c.projeto,
    texto: 'Estou fazendo o projeto desta lição. Me ajude a planejar e a revisar a minha entrega com perguntas e dicas, sem escrever o projeto por mim. Onde estou travado: ' },
  prompt: { rotulo: '✍️ Revise meu prompt', quando: () => true,
    texto: 'Revise o prompt abaixo: diga o que está bom, o que falta (contexto, objetivo, formato, exemplos) e me faça perguntas para eu melhorar, sem reescrever tudo por mim.\n\n' + MARCA_PROMPT + '\n' }
};

function preambulo(c){
  const p = [];
  const onde = [c.curso && 'curso "' + corta(c.curso, 80) + '"', c.modulo && corta(c.modulo, 90), c.licao && 'lição "' + corta(c.licao, 90) + '"'].filter(Boolean);
  p.push('Sou aluno do Portal de Estudos IA' + (onde.length ? ' e estou estudando: ' + onde.join(', ') : '') + '.');
  if (c.projeto) {
    p.push('Projeto prático da lição: ' + corta(c.projeto.entrega, 220));
    const passos = (c.projeto.passos || []).slice(0, 6).map((x, i) => (i + 1) + ') ' + corta(x, 120));
    if (passos.length) p.push('Passos do projeto: ' + passos.join(' '));
  }
  p.push('Me oriente passo a passo, em português e com linguagem simples, sem me dar a resposta pronta: quero aprender a fazer sozinho.');
  return p.join('\n');
}

function montarTexto(){
  const duvida = $('ia-txt').value.trim();
  if (!duvida) { avisar('✍️ Escreva a sua dúvida antes de perguntar'); $('ia-txt').focus(); return null; }
  const i = duvida.indexOf(MARCA_PROMPT);
  if (i >= 0 && !duvida.slice(i + MARCA_PROMPT.length).trim()) { avisar('📋 Cole o seu prompt depois de "' + MARCA_PROMPT + '"'); $('ia-txt').focus(); return null; }
  return preambulo(contexto()) + '\n\nMinha dúvida: ' + duvida;
}

function linhaContexto(c){
  const partes = [c.curso, c.modulo, c.licao].filter(Boolean).map(x => esc(corta(x, 60)));
  return partes.length ? '📍 ' + partes.join(' › ') + (c.projeto ? ' · 🛠️ projeto' : '') : '📍 Página inicial do portal';
}

function montar(){
  if ($('ia-fab')) return;
  document.body.insertAdjacentHTML('beforeend',
    `<button class="ia-fab" id="ia-fab" type="button" aria-expanded="false" aria-controls="ia-painel" aria-label="Perguntar à IA" hidden>✨ <span>Perguntar à IA</span></button>
    <section class="ia-painel" id="ia-painel" role="dialog" aria-label="Perguntar à IA" hidden>
      <div class="ia-h"><h2>✨ Perguntar à IA</h2><button class="x" type="button" data-ia="fechar" aria-label="Fechar">✕</button></div>
      <p class="ia-ctx" id="ia-ctx"></p>
      <div class="ia-atalhos" id="ia-atalhos"></div>
      <textarea class="ia-txt" id="ia-txt" rows="5" maxlength="4000" placeholder="Escreva a sua dúvida. Ex.: não entendi a diferença entre…"></textarea>
      <p class="ia-dica" id="ia-dica"></p>
      <div class="ia-bts"><button class="ia-google" type="button" data-ia="google">🔎 Perguntar ao Google IA</button></div>
      <p class="ia-nota">Abre a IA gratuita do Google em outra aba, já com o assunto da sua aula. Ela vai te orientar passo a passo, sem respostas prontas.</p>
    </section>`);
}

function atualizarPainel(){
  const c = contexto();
  $('ia-ctx').innerHTML = linhaContexto(c);
  $('ia-atalhos').innerHTML = Object.keys(ATALHOS).filter(k => ATALHOS[k].quando(c))
    .map(k => `<button class="ia-chip" type="button" data-ia="atalho" data-k="${k}">${esc(ATALHOS[k].rotulo)}</button>`).join('');
  atualizarDica();
}

function atualizarDica(){
  const d = $('ia-dica'); if (!d) return;
  const n = $('ia-txt').value.trim().length;
  const total = n ? preambulo(contexto()).length + n + 16 : 0;
  d.textContent = total > LIMITE_URL ? 'Texto longo: vamos copiar a pergunta e abrir o Gemini para você colar (Ctrl+V).' : '';
}

function abrir(){ $('ia-painel').hidden = false; $('ia-fab').setAttribute('aria-expanded', 'true'); atualizarPainel(); setTimeout(() => $('ia-txt').focus(), 30); }
function fechar(){ const p = $('ia-painel'); if (!p || p.hidden) return; p.hidden = true; $('ia-fab').setAttribute('aria-expanded', 'false'); }

function atualizar(){
  montar();
  const c = contexto();
  const mostra = !!c.logado && TELAS.includes(c.tela);
  $('ia-fab').hidden = !mostra;
  if (!mostra) fechar(); else if (!$('ia-painel').hidden) atualizarPainel();
}

document.addEventListener('click', e => {
  if (e.target.closest('#ia-fab')) { $('ia-painel').hidden ? abrir() : fechar(); return; }
  const b = e.target.closest('[data-ia]'); if (!b) return;
  const a = b.dataset.ia;
  if (a === 'fechar') fechar();
  else if (a === 'atalho') {
    const t = $('ia-txt'); t.value = ATALHOS[b.dataset.k].texto; t.focus(); t.setSelectionRange(t.value.length, t.value.length); atualizarDica();
  }
  else if (a === 'google') {
    const txt = montarTexto(); if (!txt) return;
    window.abrirNaIA(txt, avisar, { aviso: AVISO_PERGUNTA });
  }
});
document.addEventListener('input', e => { if (e.target.id === 'ia-txt') atualizarDica(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') fechar(); });

function iniciar(){
  atualizar();
  const main = $('main');
  if (main) new MutationObserver(atualizar).observe(main, { childList: true });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar); else iniciar();
})();
