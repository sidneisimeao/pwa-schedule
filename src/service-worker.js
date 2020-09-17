/** Current date */
const date = new Date();

/** Cache name
const currentCacheName =
  'pwa-cache-' +
  date.getFullYear() +
  date.getMonth() +
  date.getDay() +
  date.getHours() +
  date.getMinutes();

/** Files to cache
const filesToCache = [
  './',
  './index.html',
  './assets/css/bootstrap.min.css',
  './assets/css/main.css',
  './dist/bundle.js',
];

/** SW Installation
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(currentCacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/** SW Activate
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames
          .filter(cacheName => cacheName.startsWith('pwa-cache-'))
          .filter(cacheName => cacheName !== currentCacheName)
          .map(cacheName => caches.delete(cacheName))
      )
        .then(() => console.log(`Service worker activated`))
        .catch(error => console.log(`Error in executing ${error}`));
    })
  );
});

/** SW Fetch
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
*/
