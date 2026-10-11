/* Service worker do Portal de Estudos IA: rede primeiro, cópia local só quando estiver sem internet.
   Dados dos alunos (Supabase) e outros domínios nunca passam por aqui. */
const CACHE = 'portal-estudos-ia-v3';
const BASICO = ['./', 'index.html', 'config.js', 'manifest.webmanifest', 'cursos/catalogo.json',
  'assets/base.css', 'assets/portal.css', 'assets/cursos.js', 'assets/dados.js', 'assets/app.js',
  'assets/certificado.css', 'assets/certificado.js', 'assets/migrar.js', 'assets/logo.svg', 'assets/assinatura.png', 'assets/qr-app.svg',
  'assets/icone.svg', 'assets/icone-192.png'];

self.addEventListener('install', e => {
  if (ANTIGO) { self.skipWaiting(); return; }
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(BASICO)).catch(() => {}).then(() => self.skipWaiting()));
});

/* Na origem antiga (github.io) o service worker se desfaz e leva as janelas abertas para o domínio oficial. */
const ANTIGO = /github\.io$/i.test(self.location.hostname);
const paraOficial = url => {
  const u = new URL(url); u.searchParams.set('migrado', '1');
  return 'https://portaldeestudosia.com.br' + u.pathname.replace(/^\/portal-de-estudos-ia(\/|$)/i, '/') + u.search + u.hash;
};

self.addEventListener('activate', e => {
  if (ANTIGO) {
    e.waitUntil(caches.keys().then(ks => Promise.all(ks.map(k => caches.delete(k))))
      .then(() => self.registration.unregister())
      .then(() => self.clients.matchAll({ type:'window' }))
      .then(cs => Promise.all(cs.map(c => c.navigate(paraOficial(c.url)).catch(() => {}))))
      .catch(() => {}));
    return;
  }
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (ANTIGO) return;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  e.respondWith(fetch(req, { cache:'no-cache' }).then(res => {
    if (res.ok) { const copia = res.clone(); caches.open(CACHE).then(c => c.put(req, copia)); }
    return res;
  }).catch(() => caches.match(req, { ignoreSearch: true })
    .then(r => r || (req.mode === 'navigate' ? caches.match('index.html') : Response.error()))));
});
