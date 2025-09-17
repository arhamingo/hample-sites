const CACHE_NAME = 'hample-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/images/navidrome.webp',
  '/images/jellyfin.webp',
  // add more assets as needed
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
