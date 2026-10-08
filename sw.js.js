/* DEK AI – minimal service worker (PWA installability için) */
const CACHE = "dekai-v1";
self.addEventListener("install", (e) => {
  self.skipWaiting();
});
self.addEventListener("activate", (e) => {
  e.waitUntil(self.clients.claim());
});
self.addEventListener("fetch", (e) => {
  // Network-first: çevrimiçiyken her zaman güncel, çevrimdışıyken önbellek
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});