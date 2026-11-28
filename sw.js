// 공고 수집기 앱: 늘 새 공고부터(인터넷 먼저), 끊기면 마지막 화면
const C='radar-v1';
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET'||new URL(e.request.url).origin!==location.origin) return;
  e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(C).then(x=>x.put(e.request,c));return r;}).catch(()=>caches.match(e.request)));
});
