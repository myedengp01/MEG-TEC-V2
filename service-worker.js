// MEG-TEC-V2 service worker — network-passthrough only, no offline caching.
// Its purpose is just to satisfy PWA installability requirements
// (a registered service worker is one of the criteria), not to cache
// content — this app needs a live connection to Supabase to function
// anyway, so offline support wouldn't be meaningfully useful here.
self.addEventListener('install', () => {
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
