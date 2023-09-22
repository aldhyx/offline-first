self.addEventListener('install', (event) => {
  console.log('install event,', event);
});

self.addEventListener('activate', (event) => {
  console.log('activate event,', event);
});

self.addEventListener('fetch', (event) => {
  console.log('fetch event,', event);
});
