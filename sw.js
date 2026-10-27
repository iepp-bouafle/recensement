// Service worker minimal : permet à Chrome d'installer l'application avec son icône.
// Il ne met rien en cache : le formulaire est toujours chargé en ligne.
self.addEventListener("install", function () { self.skipWaiting(); });
self.addEventListener("activate", function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", function () { /* passage direct au réseau */ });
