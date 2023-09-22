const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service worker is not supported in this browser');
    return;
  }

  try {
    navigator.serviceWorker.register('/sw.bundle.js');
    console.log('Succeed to register service worker');
  } catch (error) {
    console.log('Failed to register service worker', error);
  }
};

export default swRegister;
