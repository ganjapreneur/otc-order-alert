const CACHE = 'otc-orders-v1';
const ASSETS = ['/index.html', '/manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});

// Handle push notifications from background
self.addEventListener('push', e => {
  const data = e.data?.json() || {};
  e.waitUntil(
    self.registration.showNotification(data.title || '🔔 New OTC Order!', {
      body: data.body || 'A new online order has come in.',
      icon: '/icon-192.png',
      requireInteraction: true,
      tag: 'otc-order'
    })
  );
});
