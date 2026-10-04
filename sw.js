/* Service worker do Portal de Estudos IA: rede primeiro, cópia local só quando estiver sem internet.
   Dados dos alunos (Supabase) e outros domínios nunca passam por aqui. */
const CACHE = 'portal-estudos-ia-v2';
const BASICO = ['./', 'index.html', 'config.js', 'manifest.webmanifest', 'cursos/catalogo.json',
  'assets/base.css', 'assets/portal.css', 'assets/cursos.js', 'assets/dados.js', 'assets/app.js',
  'assets/icone.svg', 'assets/icone-192.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(BASICO)).catch(() => {}).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  e.respondWith(fetch(req, { cache:'no-cache' }).then(res => {
    if (res.ok) { const copia = res.clone(); caches.open(CACHE).then(c => c.put(req, copia)); }
    return res;
  }).catch(() => caches.match(req, { ignoreSearch: true })
    .then(r => r || (req.mode === 'navigate' ? caches.match('index.html') : Response.error()))));
});
