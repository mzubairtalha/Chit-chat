self.addEventListener('push', function(event) {
  const data = event.data.json();
  const title = data.title || 'New Message';
  const options = {
    body: data.body || 'You have a new message!',
    icon: 'icons/icon56x56.png',
    badge: 'icons/icon56x56.png'
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/')
  );
});