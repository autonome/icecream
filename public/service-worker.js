"use strict";

var CACHE_NAME = 10;

var URLS = [
  '/',
  '/style.css',
  '/client.js',
  'https://cdn.glitch.com/90129062-6e08-437b-8795-3142e2fc928f%2Fmoz-logo-bw-rgb.png'
];

// Respond with cached resources
// This is called everytime the browser requests resources from the server
self.addEventListener('fetch', e => {
  //console.log('fetch request : ' + e.request.url);
  e.respondWith(
    caches.match(e.request).then(request => {
      if (request) {
        // if cache is available, respond with cache
        //console.log('responding with cache : ' + e.request.url);
        return request;
      } 
      else {
        // if there are no cache, try fetching request
        //console.log('file is not cached, fetching : ' + e.request.url);
        return fetch(e.request);
      }
    })
  );
});

// Cache resources
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      //console.log('installing cache : ' + CACHE_NAME);
      // cache everything listed on URLS list 
      return cache.addAll(URLS);
    })
  );
})

// Delete outdated caches
self.addEventListener('activate', e => {
  console.log('ACTIVATE');
  e.waitUntil(
    caches.keys().then(keyList => {
      // `keyList` contains all cache names under appname.glitch.me domain
      return Promise.all(keyList.map((key, i) => {
        //console.log('cache key', key)
        if (keyList !== CACHE_NAME) {
          //console.log('deleting cache : ' + keyList[i] )
          return caches.delete(keyList[i])
        }
      }))
    })
  )
})

// Register event listener for the 'push' event.
self.addEventListener('push', e => {
  // Keep the service worker alive until the notification is created.
  e.waitUntil(
    // Show a notification with a title and body.
    // Set other parameters such as the notification language, a vibration pattern associated
    // to the notification, an image to show near the body.
    // There are many other possible options, for an exhaustive list see the specs:
    //   https://notifications.spec.whatwg.org/
    self.registration.showNotification('PWA Starter Pack', {
      lang: 'en',
      body: 'Your push  notification worked!',
      icon: 'https://cdn.glitch.com/90129062-6e08-437b-8795-3142e2fc928f%2F72x72.png?1492768665840',
      vibrate: [500, 100, 500],
    })
  );
});