
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('radio-fama-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        'https://i.ibb.co/n7mKdWM/00048bf5-7b4c-402f-88a0-90eb60253204.jpg'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
