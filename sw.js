const CACHE_NAME = 'nawa-static-v4';
const CORE_ASSETS = [
  './',
  './index.html',
  './nawa-brand-kit.html',
  './styles.css',
  './app.js',
  './sw.js',
  './manifest.webmanifest',
  './manus-routes.json',
  './assets/nawa-mark.svg',
  './assets/nawa-hero.svg',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/academy-software.svg',
  './assets/academy-data-ai.svg',
  './assets/academy-systems.svg',
  './assets/academy-modern-tech.svg',
  './assets/academy-languages.svg',
  './assets/academy-craft.svg',
  './assets/developer-avatar.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin || url.pathname.includes('/manus-storage/')) return;

  if (request.mode === 'navigate') {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      const cacheUrl = new URL(request.url);
      cacheUrl.search = '';
      cacheUrl.hash = '';

      try {
        const response = await fetch(request);
        if (response && response.ok) await cache.put(cacheUrl.toString(), response.clone());
        return response;
      } catch {
        const cachedPage = await caches.match(cacheUrl.toString());
        if (cachedPage) return cachedPage;
        if (cacheUrl.pathname.endsWith('/nawa-brand-kit.html')) {
          return (await caches.match('./nawa-brand-kit.html')) || Response.error();
        }
        return (await caches.match('./index.html')) || (await caches.match('./')) || Response.error();
      }
    })());
    return;
  }

  event.respondWith((async () => {
    const cached = await caches.match(request);
    if (cached) return cached;
    try {
      const response = await fetch(request);
      if (response && response.ok && response.type === 'basic') {
        const cache = await caches.open(CACHE_NAME);
        cache.put(request, response.clone());
      }
      return response;
    } catch {
      return (await caches.match(request)) || Response.error();
    }
  })());
});
