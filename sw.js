// Always fetch the page fresh from the network — past the browser cache and the GitHub Pages CDN cache —
// so opening the installed app shows the newest version right away. Offline: fall back to whatever the browser has.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{
  if(e.request.mode==='navigate'){
    const u=new URL(e.request.url);u.searchParams.set('_',Date.now());
    e.respondWith(fetch(u.href,{cache:'no-store'}).catch(()=>fetch(e.request)));
  }
});
