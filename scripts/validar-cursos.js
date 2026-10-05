/* Confere o catálogo e o conteúdo de todos os cursos. Uso: npm run validar */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const raiz = path.join(__dirname, '..');
const STATUS = ['disponivel', 'em_breve', 'rascunho', 'arquivado', 'publicado'];
const NIVEIS = ['iniciante', 'intermediario', 'avancado'];
const TRILHAS = ['renda'];
const GRUPOS_RENDA = ['fundamentos', 'servicos', 'negocio'];
const ordens = new Set();
const erros = [];
const avisos = [];
const erro = (onde, msg) => erros.push(onde + ': ' + msg);

let catalogo;
try { catalogo = JSON.parse(fs.readFileSync(path.join(raiz, 'cursos/catalogo.json'), 'utf8').replace(/^\uFEFF/, '')); }
catch (e) { console.error('cursos/catalogo.json inválido: ' + e.message); process.exit(1); }
if (!Array.isArray(catalogo)) { console.error('cursos/catalogo.json deve ser uma lista'); process.exit(1); }

const ids = new Set();
for (const meta of catalogo) {
  const onde = 'catalogo[' + (meta.id || '?') + ']';
  if (!meta.id || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(meta.id)) { erro(onde, 'id deve usar só letras minúsculas, números e hífens'); continue; }
  if (ids.has(meta.id)) erro(onde, 'id repetido');
  ids.add(meta.id);
  if (!meta.titulo) erro(onde, 'falta "titulo"');
  if (!meta.descricao) erro(onde, 'falta "descricao"');
  if (!STATUS.includes(meta.status)) erro(onde, 'status deve ser ' + STATUS.join(', '));
  if (meta.cores && !(Array.isArray(meta.cores) && meta.cores.length === 2)) erro(onde, '"cores" deve ter 2 cores');
  if (meta.trilha !== undefined && !TRILHAS.includes(meta.trilha)) erro(onde, 'trilha deve ser ' + TRILHAS.join(', ') + ' (sem o campo = Trilha de IA)');
  if (meta.trilha === 'renda') {
    if (meta.nivel !== undefined) erro(onde, 'curso da trilha renda não usa "nivel"');
    if (!GRUPOS_RENDA.includes(meta.grupo)) erro(onde, 'grupo deve ser ' + GRUPOS_RENDA.join(', '));
  } else if (meta.grupo !== undefined) erro(onde, '"grupo" só vale para a trilha renda');
  else if (meta.nivel === undefined) avisos.push(onde + ': sem "nivel", fica fora da Trilha de IA');
  else if (!NIVEIS.includes(meta.nivel)) erro(onde, 'nivel deve ser ' + NIVEIS.join(', '));
  if (meta.ordem !== undefined) {
    if (!Number.isInteger(meta.ordem) || meta.ordem < 1) erro(onde, '"ordem" deve ser um número inteiro a partir de 1');
    else if (ordens.has(meta.ordem)) erro(onde, 'ordem ' + meta.ordem + ' repetida');
    ordens.add(meta.ordem);
  }

  if (meta.carga_horaria !== undefined && !(Number.isInteger(meta.carga_horaria) && meta.carga_horaria >= 1 && meta.carga_horaria <= 40))
    erro(onde, '"carga_horaria" deve ser um número inteiro de horas (1 a 40)');

  if (meta.recomendado_antes !== undefined) {
    const rec = meta.recomendado_antes;
    if (!Array.isArray(rec) || rec.some(r => typeof r !== 'string')) erro(onde, '"recomendado_antes" deve ser uma lista de ids');
    else rec.forEach(r => {
      if (r === meta.id) erro(onde, '"recomendado_antes" não pode citar o próprio curso');
      else if (!catalogo.some(m => m.id === r)) erro(onde, '"recomendado_antes" cita "' + r + '", que não está no catálogo');
    });
  }

  const arq = path.join(raiz, 'cursos', meta.id, 'curso.js');
  if (!fs.existsSync(arq)) {
    if (meta.status === 'em_breve') console.log('… ' + meta.id + ' [em_breve]: aguardando conteúdo');
    else erro(onde, 'arquivo cursos/' + meta.id + '/curso.js não existe');
    continue;
  }

  const registrados = [];
  try {
    vm.runInNewContext(fs.readFileSync(arq, 'utf8'), { PORTAL: { registrarCurso: c => registrados.push(c) } }, { filename: arq });
  } catch (e) { erro('cursos/' + meta.id + '/curso.js', 'erro de JavaScript: ' + e.message); continue; }
  if (registrados.length !== 1) { erro('cursos/' + meta.id + '/curso.js', 'deve chamar PORTAL.registrarCurso exatamente 1 vez'); continue; }
  validarCurso(meta, registrados[0]);
}

function validarCurso(meta, c) {
  const onde = 'cursos/' + meta.id;
  if (c.id !== meta.id) erro(onde, 'id no curso.js ("' + c.id + '") difere do catálogo');
  if (!Array.isArray(c.modulos) || !c.modulos.length) { erro(onde, 'precisa de pelo menos 1 módulo'); return; }
  const licoes = new Set();
  let minutos = 0;
  c.modulos.forEach((m, i) => {
    const om = onde + ' módulo ' + (m.id != null ? m.id : i + 1);
    if (m.id !== i + 1) erro(om, 'ids dos módulos devem ser 1, 2, 3... em ordem');
    if (!m.title) erro(om, 'falta "title"');
    if (!m.icon) erro(om, 'falta "icon"');
    if (!Array.isArray(m.lessons) || !m.lessons.length) { erro(om, 'precisa de pelo menos 1 lição'); return; }
    m.lessons.forEach(l => {
      const ol = onde + ' lição ' + (l.id || '?');
      if (!l.id) { erro(ol, 'falta "id"'); return; }
      if (licoes.has(l.id)) erro(ol, 'id de lição repetido');
      licoes.add(l.id);
      if (!l.title) erro(ol, 'falta "title"');
      if (l.soon) { avisos.push(ol + ': marcada como em construção'); return; }
      if (!Number.isFinite(l.min) || l.min <= 0) erro(ol, 'falta "min" (minutos estimados, contando leitura e prática)');
      else minutos += l.min;
      if (l.projeto) {
        const p = l.projeto;
        if (l.ch) erro(ol, 'lição de projeto não usa "ch"');
        if (l.body !== undefined && (!Array.isArray(l.body) || l.body.some(b => typeof b !== 'string'))) erro(ol, '"body" deve ser uma lista de textos HTML');
        if (!p.entrega) erro(ol, 'projeto sem "entrega" (o que o aluno deve produzir)');
        if (!Array.isArray(p.passos) || p.passos.length < 2) erro(ol, 'projeto precisa de pelo menos 2 "passos"');
        if (!Array.isArray(p.checklist) || p.checklist.length < 2) erro(ol, 'projeto precisa de pelo menos 2 itens na "checklist"');
        if (p.minimo !== undefined && !(Number.isInteger(p.minimo) && p.minimo > 0)) erro(ol, '"minimo" deve ser um número inteiro de caracteres');
        return;
      }
      if (!Array.isArray(l.body) || !l.body.length || l.body.some(b => typeof b !== 'string')) erro(ol, '"body" deve ser uma lista de textos HTML');
      if (!l.ch) { erro(ol, 'falta o desafio "ch"'); return; }
      const lista = Array.isArray(l.ch) ? l.ch : [l.ch];
      if (!lista.length || lista.length > 6) { erro(ol, '"ch" deve ter de 1 a 6 perguntas'); return; }
      lista.forEach((ch, n) => {
        const oq = lista.length > 1 ? ol + ' pergunta ' + (n + 1) : ol;
        ['who', 'says', 'q'].forEach(k => { if (!ch[k]) erro(oq, 'desafio sem "' + k + '"'); });
        if (!Array.isArray(ch.opts) || ch.opts.length < 2 || ch.opts.length > 5) { erro(oq, 'desafio deve ter de 2 a 5 alternativas'); return; }
        const certas = ch.opts.filter(o => o.ok === true).length;
        if (certas !== 1) erro(oq, 'desafio deve ter exatamente 1 alternativa certa (tem ' + certas + ')');
        ch.opts.forEach((o, k) => { if (!o.t || !o.why) erro(oq, 'alternativa ' + (k + 1) + ' precisa de "t" e "why"'); });
      });
    });
  });
  if (meta.carga_horaria !== undefined && minutos < meta.carga_horaria * 60 * 0.9)
    erro(onde, 'carga_horaria de ' + meta.carga_horaria + ' h, mas o conteúdo soma só ' + minutos + ' min (precisa de pelo menos ' + Math.ceil(meta.carga_horaria * 54) + ' min)');
  const mods = new Set(c.modulos.map(m => String(m.id)));
  Object.entries(c.prompts || {}).forEach(([k, lista]) => {
    if (!mods.has(String(k))) erro(onde, 'prompts do módulo ' + k + ', que não existe');
    (lista || []).forEach((p, i) => { if (!p.title || !p.desc) erro(onde, 'missão de prompt ' + (i + 1) + ' do módulo ' + k + ' precisa de title e desc');
      if ('text' in p) erro(onde, 'missão de prompt ' + (i + 1) + ' do módulo ' + k + ' não deve ter "text": o aluno escreve o próprio prompt'); });
  });
  Object.keys(c.aoAbrirLicao || {}).forEach(k => { if (!licoes.has(k)) erro(onde, 'aoAbrirLicao aponta para a lição ' + k + ', que não existe'); });
  Object.keys(c.iconesLicao || {}).forEach(k => { if (!licoes.has(k)) avisos.push(onde + ': iconesLicao tem a lição ' + k + ', que não existe'); });
  console.log('✔ ' + meta.id + ' [' + meta.status + ']: ' + c.modulos.length + ' módulos, ' + licoes.size + ' lições, ' + minutos + ' min' + (meta.carga_horaria ? ' (carga ' + meta.carga_horaria + ' h)' : ''));
}

avisos.forEach(a => console.log('⚠ ' + a));
if (erros.length) {
  erros.forEach(e => console.error('✖ ' + e));
  console.error('\n' + erros.length + ' problema(s) encontrado(s).');
  process.exit(1);
}
console.log('\nTudo certo com ' + catalogo.length + ' curso(s).');
