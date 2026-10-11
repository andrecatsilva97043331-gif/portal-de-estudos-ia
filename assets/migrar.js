/* Endereço antigo (github.io): apaga o service worker e a cópia local dessa origem e leva para o domínio oficial,
   na mesma rota. O GitHub Pages já redireciona (301) quando há internet; isto cobre a cópia antiga aberta do cache. */
(function(){
  var OFICIAL = 'portaldeestudosia.com.br';
  if (!/github\.io$/i.test(location.hostname)) return;
  var u = new URL(location.href);
  u.searchParams.set('migrado', '1');
  var destino = 'https://' + OFICIAL + u.pathname.replace(/^\/portal-de-estudos-ia(\/|$)/i, '/') + u.search + u.hash;
  var foi = false, ir = function(){ if (!foi) { foi = true; location.replace(destino); } };
  var tarefas = [];
  if ('serviceWorker' in navigator) tarefas.push(navigator.serviceWorker.getRegistrations().then(function(rs){ return Promise.all(rs.map(function(r){ return r.unregister(); })); }));
  if (window.caches) tarefas.push(caches.keys().then(function(ks){ return Promise.all(ks.map(function(k){ return caches.delete(k); })); }));
  Promise.all(tarefas).catch(function(){}).then(ir);
  setTimeout(ir, 1500);
})();
