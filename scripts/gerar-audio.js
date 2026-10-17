/* Gera a narração em mp3 das lições para o botão "Ouvir" (voz neural Brian falando pt-BR, sem música).

   Uso:
     node scripts/gerar-audio.js --curso ia-do-zero
     opções: --licao 1.1 (só uma lição, para testar) · --base https://audio.exemplo.com/ia-do-zero/ (URL base gravada no manifesto; vazio = mesma pasta do manifesto)
             --paralelo 2 (pedidos simultâneos à voz; mais que isso dá erro 429 com frequência) · --forcar (regrava tudo) · --desktop (lê a página em tela de computador; padrão: celular)
             --so-texto (só mostra o texto que seria narrado, sem gerar áudio)

   O que gera (em assets/audio/<curso>/):
     <licao>-aula-<hash>.mp3      título + conteúdo da lição
     <licao>-p<N>-<hash>.mp3      pergunta N do desafio (número, fala do cliente, pergunta e "Alternativa A: ...")
     <licao>-p<N><letra>-<hash>.mp3  uma alternativa isolada (alto-falante ao lado da alternativa)
     manifesto.json               índice com arquivo, hash, duração e marcas de tempo (contrato em Temp\pt\integracao-audio.md)
   O texto narrado é extraído da própria página (assets/app.js: blocosLicao, blocosDesafio, textoAlternativa e Ouvir.limpar),
   então é exatamente o que a voz do aparelho leria. hash = sha1 dos blocos normalizados unidos por "\n", 8 primeiros caracteres.
   Regrava só o que mudou, retoma de onde parou (o manifesto é salvo a cada arquivo) e apaga mp3 órfãos ao final de uma rodada completa.

   Dependências (ficam fora do site; nada disso vai para o GitHub Pages):
   - msedge-tts e puppeteer-core: procurados no node_modules do projeto e depois em AUDIO_DEPS (padrão: %TEMP%\pt).
     Em outra máquina: numa pasta qualquer, "npm i msedge-tts puppeteer-core ffmpeg-static" e defina AUDIO_DEPS=<pasta>.
   - ffmpeg: variável FFMPEG; senão ffmpeg-static (mesma busca); senão "ffmpeg" do PATH.
   - Chrome: variável CHROME; senão C:\Program Files\Google\Chrome\Application\chrome.exe.
   A página é servida por um servidor local próprio (não precisa do npm run dev) com config.js em modo demonstração. */
const fs = require('fs'), path = require('path'), os = require('os'), http = require('http'), crypto = require('crypto');
const { spawn } = require('child_process');

const RAIZ = path.join(__dirname, '..');
const DEPS = process.env.AUDIO_DEPS || path.join(os.tmpdir(), 'pt');
function req(nome){
  try { return require(nome); } catch (e) {}
  try { return require(path.join(DEPS, 'node_modules', nome)); } catch (e) { return null; }
}
const args = process.argv.slice(2);
const opt = (nome, padrao) => { const i = args.indexOf('--' + nome); return i < 0 ? padrao : (args[i + 1] && !args[i + 1].startsWith('--') ? args[i + 1] : true); };
const CURSO = opt('curso'), LICAO = opt('licao', null), FORCAR = !!opt('forcar', false), DESKTOP = !!opt('desktop', false);
const PARALELO = Math.max(1, parseInt(opt('paralelo', '2'), 10) || 2), PAUSA = 800;
const VOZ = 'en-US-BrianMultilingualNeural', TAXA = '-6%', KBPS = 32;
const CHROME = process.env.CHROME || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const FFMPEG = process.env.FFMPEG || req('ffmpeg-static') || 'ffmpeg';

if (!CURSO || CURSO === true) { console.error('Informe o curso: node scripts/gerar-audio.js --curso <id>'); process.exit(1); }
if (!fs.existsSync(path.join(RAIZ, 'cursos', CURSO, 'curso.js'))) { console.error('Curso não encontrado: ' + CURSO); process.exit(1); }
const tts = req('msedge-tts'), puppeteer = req('puppeteer-core');
if (!tts || !puppeteer) { console.error('Faltam msedge-tts e/ou puppeteer-core (veja o topo do script). Procurado em: ' + DEPS); process.exit(1); }

const SAIDA = path.join(RAIZ, 'assets', 'audio', CURSO), MANIF = path.join(SAIDA, 'manifesto.json');
const espera = ms => new Promise(r => setTimeout(r, ms));
const r2 = n => Math.round(n * 100) / 100;
const hash = t => crypto.createHash('sha1').update(t, 'utf8').digest('hex').slice(0, 8);
const escXml = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/* ---------- 1. Texto narrado, extraído da página real ---------- */
const TIPOS = { '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.woff2': 'font/woff2', '.webmanifest': 'application/manifest+json', '.mp3': 'audio/mpeg' };
function servidor(){
  const srv = http.createServer((rq, rs) => {
    let p = decodeURIComponent(rq.url.split('?')[0]);
    if (p === '/config.js') { rs.writeHead(200, { 'Content-Type': TIPOS['.js'] }); return rs.end("window.PORTAL_CONFIG={supabaseUrl:'',supabaseAnonKey:'',exigirWhatsappDemo:false};"); }
    if (p.endsWith('/')) p += 'index.html';
    const f = path.join(RAIZ, path.normalize(p));
    if (!f.startsWith(RAIZ) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { rs.writeHead(404); return rs.end(); }
    rs.writeHead(200, { 'Content-Type': TIPOS[path.extname(f).toLowerCase()] || 'application/octet-stream' });
    fs.createReadStream(f).pipe(rs);
  });
  return new Promise(ok => srv.listen(0, '127.0.0.1', () => ok(srv)));
}

async function extrairTextos(){
  const srv = await servidor(), url = `http://127.0.0.1:${srv.address().port}/`;
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new' });
  try {
    const page = await browser.newPage(), erros = [];
    page.on('pageerror', e => erros.push(e.message));
    page.on('response', r => { if (r.status() >= 400) erros.push(r.status() + ' ' + r.url()); });
    if (DESKTOP) await page.setViewport({ width: 1366, height: 860 });
    else {
      await page.setUserAgent('Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0 Mobile Safari/537.36');
      await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 2 });
    }
    await page.setBypassServiceWorker(true);
    /* app.js é fechado (IIFE): guardamos as mesmas funções que ele entrega ao player (fonte da aula e dos trechos). */
    await page.evaluateOnNewDocument(() => {
      let real;
      Object.defineProperty(window, 'Ouvir', { configurable: true, get: () => real, set: v => {
        const montar = v.montar, ft = v.fonteTrechos;
        v.montar = function(el, fonte){ window.__fonteAula = fonte; return montar.apply(this, arguments); };
        v.fonteTrechos = f => { window.__fonteTrecho = f; return ft(f); };
        real = v;
      } });
    });
    await page.goto(url, { waitUntil: 'networkidle0' });
    /* Master de demonstração: todas as lições liberadas, sem mudar o conteúdo exibido. */
    await page.evaluate(curso => {
      const a = { id: 'a0', nome: 'Aluno Áudio', email: 'a0@x.com', telefone: '21999990000', estado: 'RJ', cep: '20040002', idade: 30, pais: 'Brasil', criado_em: new Date().toISOString(), email_verificado: true, whatsapp_verificado: true, objetivo: 'Aplicar no meu trabalho atual', trabalhando: true, estudante: false };
      localStorage.clear();
      localStorage.setItem('portal-estudos-demo-v1', JSON.stringify({ alunos: [a], matriculas: [{ aluno_id: 'a0', curso_id: curso, criado_em: a.criado_em }], progresso: [], master: true, eu: 'a0', emailSessao: 'a0@x.com', codigos: {} }));
    }, CURSO);
    await page.reload({ waitUntil: 'networkidle0' });
    await espera(800);
    await page.evaluate(id => document.querySelector(`.mabrir[data-id="${id}"]`).click(), CURSO);
    await espera(1000);
    const licoes = await page.evaluate(async (curso, so) => {
      const esperar = ms => new Promise(r => setTimeout(r, ms));
      const ate = async (f, ms = 4000) => { for (const t0 = Date.now(); Date.now() - t0 < ms; await esperar(40)) if (f()) return true; return false; };
      const norm = blocos => blocos.map(b => { let t = Ouvir.limpar(b.texto); if (t && !/[.!?:;…]["')\]]*$/.test(t)) t += '.'; return t; }).filter(Boolean);
      const clicar = (dados) => { const b = document.createElement('button'); Object.assign(b.dataset, dados); document.body.appendChild(b); b.click(); b.remove(); };
      if (!window.__fonteTrecho) throw new Error('Ouvir.fonteTrechos não foi registrado pelo app.js');
      const out = [], main = document.getElementById('main');
      for (const L of PORTAL.cursos[curso].modulos.flatMap(m => m.lessons)) {
        if (L.soon || L.projeto || !L.ch || (so && L.id !== so)) continue;
        const pergs = Array.isArray(L.ch) ? L.ch : [L.ch], item = { id: L.id, aula: null, perguntas: [] };
        window.__fonteAula = null;
        clicar({ act: 'go', id: L.id });
        if (!await ate(() => window.__fonteAula && main.querySelector('section.os'))) throw new Error('Lição ' + L.id + ' não abriu');
        for (let k = 0; k < pergs.length; k++) {
          if (!await ate(() => main.querySelectorAll('section.os').length === k + 1)) throw new Error(`Lição ${L.id}: pergunta ${k + 1} não apareceu`);
          const s = main.querySelectorAll('section.os')[k], bq = s.querySelector('.ouvir-q [data-ouvir-trecho]');
          if (!bq) throw new Error('Botão "Ouvir pergunta" ausente (Ouvir.suportado falso no navegador?)');
          const desafio = window.__fonteTrecho(bq);
          if (k === 0) { const todos = window.__fonteAula(); item.aula = norm(todos.slice(0, todos.length - desafio.length)); }
          item.perguntas.push({ blocos: norm(desafio), alts: [...s.querySelectorAll('.opt-linha [data-ouvir-trecho]')].map(b => norm(window.__fonteTrecho(b))) });
          if (k < pergs.length - 1) s.querySelector(`.opt[data-i="${pergs[k].opts.findIndex(o => o.ok)}"]`).click();
        }
        out.push(item);
      }
      return out;
    }, CURSO, LICAO);
    if (erros.length) console.warn('Avisos da página:', erros.slice(0, 3));
    return licoes;
  } finally { await browser.close(); srv.close(); }
}

/* ---------- 2. Voz (Edge TTS) + conversão para 32 kbps mono ---------- */
/* Cada trabalhador reaproveita a mesma conexão (abrir uma por pedido provoca mais 429); em erro, ela é descartada. */
function sintetizar(texto, w){
  return new Promise(async (ok, falha) => {
    const sair = (e, v) => {
      clearTimeout(limite);
      if (e) { try { w.t && w.t.close(); } catch (_) {} w.t = null; falha(e); } else ok(v);
    };
    const limite = setTimeout(() => sair(new Error('tempo esgotado na síntese')), 120000 + texto.length * 60);
    try {
      if (!w.t) {
        w.t = new tts.MsEdgeTTS();
        await w.t.setMetadata(VOZ, tts.OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3, { voiceLocale: 'pt-BR', wordBoundaryEnabled: true, sentenceBoundaryEnabled: true });
      }
      const { audioStream, metadataStream } = w.t.toStream(escXml(texto), { rate: TAXA });
      const aud = [], meta = [];
      const fim = s => new Promise((a, b) => { s.on('end', a); s.on('close', a); s.on('error', b); });
      audioStream.on('data', d => aud.push(d));
      if (metadataStream) metadataStream.on('data', d => meta.push(d.toString()));
      await Promise.all([fim(audioStream), metadataStream ? fim(metadataStream) : null]);
      const evs = [];
      meta.forEach(m => { try { const j = JSON.parse(m); (j.Metadata || [j]).forEach(e => evs.push(e)); } catch (_) {} });
      sair(null, { mp3: Buffer.concat(aud), evs });
    } catch (e) { sair(e); }
  });
}

const stats = { gerados: 0, reaproveitados: 0, e429: 0, erros: 0, falhas: [] };
const TENTATIVAS = 8;
async function sintetizarComEspera(texto, nome, w){
  for (let tent = 1; ; tent++) {
    try {
      const r = await sintetizar(texto, w);
      if (!r.mp3.length || r.mp3.length * 8 / 48000 < texto.length / 45) throw new Error(`áudio curto (${r.mp3.length} bytes para ${texto.length} caracteres)`);
      return r;
    } catch (e) {
      const msg = String((e && e.message) || e), lim = /429|too many|throttl/i.test(msg);
      lim ? stats.e429++ : stats.erros++;
      if (tent >= TENTATIVAS) throw e;
      const ms = Math.round(Math.min(300000, (lim ? 20000 : 4000) * 1.8 ** (tent - 1)) * (0.8 + Math.random() * 0.4));
      console.warn(`  ! ${nome}: ${msg.slice(0, 120)} — nova tentativa ${tent + 1}/${TENTATIVAS} em ${Math.round(ms / 1000)} s`);
      await espera(ms);
    }
  }
}

function ffmpeg(entrada, saida){
  return new Promise((ok, falha) => {
    const p = spawn(FFMPEG, ['-y', '-hide_banner', '-loglevel', 'error', '-i', entrada, '-ac', '1', '-ar', '24000', '-c:a', 'libmp3lame', '-b:a', KBPS + 'k', saida]);
    let err = ''; p.stderr.on('data', d => err += d);
    p.on('error', falha);
    p.on('close', c => c === 0 ? ok() : falha(new Error('ffmpeg: ' + err.slice(0, 300))));
  });
}

/* Início de cada bloco (segundos), casando as palavras ditas (WordBoundary) com o texto; frases vêm do SentenceBoundary. */
function marcas(blocos, evs){
  const seg = x => x / 1e7, txt = blocos.join('\n');
  const palavras = evs.filter(e => e.Type === 'WordBoundary').map(e => ({ t: seg(e.Data.Offset), w: e.Data.text.Text }));
  const frases = evs.filter(e => e.Type === 'SentenceBoundary').map(e => [r2(seg(e.Data.Offset)), r2(seg(e.Data.Offset + e.Data.Duration))]);
  const pos = []; let cur = 0;
  const baixo = txt.toLowerCase();
  for (const p of palavras) {
    const i = baixo.indexOf(p.w.toLowerCase(), cur);
    if (i >= 0 && i - cur < 200) { pos.push([i, p.t]); cur = i + p.w.length; }
  }
  let ini = 0, ant = 0;
  const inicioBlocos = blocos.map((b, j) => {
    const e = pos.find(([i]) => i >= ini); ini += b.length + 1;
    const t = j === 0 ? 0 : e ? Math.max(ant, r2(e[1])) : ant;
    ant = t; return t;
  });
  return { blocos: inicioBlocos, frases };
}

/* ---------- 3. Manifesto, fila e limpeza ---------- */
function lerManifesto(){
  try { return JSON.parse(fs.readFileSync(MANIF, 'utf8')); } catch (e) { return null; }
}
function salvar(m){
  const tmp = MANIF + '.tmp';
  fs.writeFileSync(tmp, JSON.stringify(m));
  fs.renameSync(tmp, MANIF);
}

(async () => {
  const t0 = Date.now();
  fs.mkdirSync(SAIDA, { recursive: true });
  console.log(`Extraindo textos de ${CURSO} (${DESKTOP ? 'computador' : 'celular'})…`);
  const licoes = await extrairTextos();
  if (!licoes.length) { console.error('Nenhuma lição narrável encontrada.'); process.exit(1); }
  if (opt('so-texto', false)) { console.log(JSON.stringify(licoes, null, 1)); return; }
  const antigo = lerManifesto();
  const mesmaVoz = antigo && antigo.voz === VOZ && antigo.taxa === TAXA && antigo.kbps === KBPS && !FORCAR;
  const base = opt('base', null);
  const man = { v: 1, curso: CURSO, voz: VOZ, taxa: TAXA, kbps: KBPS, base: typeof base === 'string' ? base : process.env.AUDIO_BASE_URL || (antigo && antigo.base) || '',
    gerado: new Date().toISOString(), licoes: mesmaVoz ? JSON.parse(JSON.stringify(antigo.licoes || {})) : {} };

  /* Tarefas: cada bloco narrado vira um mp3. "onde" diz em que lugar do manifesto a entrada fica. */
  const tarefas = [], finais = {};
  const velho = (id, f) => { try { return f(antigo.licoes[id]); } catch (e) { return null; } };
  for (const L of licoes) {
    const fin = finais[L.id] = { aula: null, perguntas: [], alternativas: [] };
    const add = (blocos, nome, completo, pega, poe) => {
      const texto = blocos.join('\n'), h = hash(texto), arq = `${L.id}-${nome}-${h}.mp3`;
      const v = mesmaVoz && velho(L.id, pega);
      if (v && v.hash === h && v.arq === arq && fs.existsSync(path.join(SAIDA, arq))) { poe(fin, v); stats.reaproveitados++; return; }
      tarefas.push({ id: L.id, blocos, texto, h, arq, completo, poe });
    };
    add(L.aula, 'aula', true, l => l.aula, (f, e) => { f.aula = e; });
    L.perguntas.forEach((p, k) => {
      add(p.blocos, `p${k + 1}`, true, l => l.perguntas[k], (f, e) => { f.perguntas[k] = e; });
      p.alts.forEach((a, j) => add(a, `p${k + 1}${'abcdefgh'[j]}`, false, l => l.alternativas[k][j], (f, e) => { (f.alternativas[k] = f.alternativas[k] || [])[j] = e; }));
    });
  }
  const totChars = tarefas.reduce((s, t) => s + t.texto.length, 0);
  console.log(`${licoes.length} lições · ${tarefas.length} mp3 para gerar (${totChars} caracteres) · ${stats.reaproveitados} reaproveitados · ${PARALELO} em paralelo`);

  let feitos = 0;
  async function gerar(t, w){
    const destino = path.join(SAIDA, t.arq), bruto = destino + '.48k.tmp';
    const r = await sintetizarComEspera(t.texto, t.arq, w);
    fs.writeFileSync(bruto, r.mp3);
    await ffmpeg(bruto, destino + '.tmp.mp3');
    fs.renameSync(destino + '.tmp.mp3', destino); fs.unlinkSync(bruto);
    const dur = r2(fs.statSync(destino).size * 8 / (KBPS * 1000));
    const e = { arq: t.arq, hash: t.h, dur };
    if (t.completo) Object.assign(e, marcas(t.blocos, r.evs));
    t.poe(finais[t.id], e);
    const atual = man.licoes[t.id] = man.licoes[t.id] || { aula: null, perguntas: [], alternativas: [] };
    t.poe(atual, e);
    salvar(man);
    stats.gerados++;
    console.log(`  ${++feitos}/${tarefas.length} ${t.arq} (${dur} s)`);
  }
  const fila = tarefas.slice();
  await Promise.all(Array.from({ length: PARALELO }, async (_, i) => {
    const w = { t: null };
    await espera(i * 1500);
    for (let t; (t = fila.shift());) {
      try { await gerar(t, w); } catch (e) { stats.falhas.push(t.arq + ': ' + String((e && e.message) || e).slice(0, 150)); console.error('  X ' + t.arq + ' falhou de vez'); }
      await espera(PAUSA);
    }
    try { w.t && w.t.close(); } catch (_) {}
  }));

  /* Manifesto final: só o que existe hoje no curso. Rodada parcial (--licao) mantém as outras lições. */
  man.licoes = LICAO ? Object.assign(man.licoes, finais) : finais;
  salvar(man);

  const usados = new Set();
  Object.values(man.licoes).forEach(l => { [l.aula, ...(l.perguntas || []), ...[].concat(...(l.alternativas || []))].forEach(e => e && usados.add(e.arq)); });
  let apagados = 0;
  for (const f of fs.readdirSync(SAIDA)) {
    const orfao = f.endsWith('.tmp') || f.endsWith('.tmp.mp3') || (f.endsWith('.mp3') && !usados.has(f));
    if (orfao && !LICAO && !stats.falhas.length) { fs.unlinkSync(path.join(SAIDA, f)); apagados++; }
  }

  let n = 0, bytes = 0, seg = 0;
  for (const f of usados) { const p = path.join(SAIDA, f); if (fs.existsSync(p)) { n++; const b = fs.statSync(p).size; bytes += b; seg += b * 8 / (KBPS * 1000); } }
  const min = ((Date.now() - t0) / 60000).toFixed(1);
  console.log(`\nPronto em ${min} min. Gerados: ${stats.gerados} · reaproveitados: ${stats.reaproveitados} · órfãos apagados: ${apagados} · 429: ${stats.e429} · outros erros: ${stats.erros}`);
  console.log(`Total no manifesto: ${n} mp3 · ${(bytes / 1048576).toFixed(1)} MB · ${(seg / 60).toFixed(1)} min de áudio`);
  if (stats.falhas.length) { console.error('Falharam (rode de novo para retomar):\n  ' + stats.falhas.join('\n  ')); process.exitCode = 1; }
})().catch(e => { console.error('ERRO', e); process.exit(1); });
