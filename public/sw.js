
self.addEventListener('fetch', (event) => {})

self.addEventListener('notificationclick', function(event) {
  console.log('[Service Worker] Notification click Received.');

  event.notification.close();

  event.waitUntil(
    clients.openWindow('https://notification-app-7da05.firebaseapp.com')
  );
})
