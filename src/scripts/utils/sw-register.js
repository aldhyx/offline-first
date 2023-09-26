import { Workbox } from 'workbox-window';

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service worker is not supported in this browser');
    return;
  }

  const wb = new Workbox('./sw.bundle-wb.js');

  try {
    await wb.register();
    console.log('Succeed to register service worker');
  } catch (error) {
    console.log('Failed to register service worker', error);
  }
};

export default swRegister;
