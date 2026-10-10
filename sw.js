// Always fetch the page fresh from the network (no browser cache), so a reload shows the newest version.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{
  if(e.request.mode==='navigate'){
    e.respondWith(fetch(e.request.url,{cache:'no-store'}).catch(()=>fetch(e.request)));
  }
});
