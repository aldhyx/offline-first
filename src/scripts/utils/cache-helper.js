import CONFIG from '../globals/config';

const CacheHelper = {
  async _openCache() {
    return caches.open(CONFIG.CACHE_NAME);
  },
  async cachingAppShell(requests) {
    const cache = await this._openCache();
    cache.addAll(requests);
  },
  async deleteOldCache() {
    const cacheNames = await caches.keys();
    cacheNames.forEach((name) => {
      if (name !== CONFIG.CACHE_NAME) caches.delete(name);
    });
  },
  async revalidateCache(request) {
    const response = await caches.match(request);

    if (response) {
      this._fetchRequest(request);
      return response;
    }

    return this._fetchRequest(request);
  },
  async _fetchRequest(request) {
    const response = await fetch(request);

    if (!response || response.status !== 200) return response;

    await this._addCache(request);
    return response;
  },
  async _addCache(request) {
    const requestUrl = new URL(request.url);

    if (
      requestUrl.origin === location.origin ||
      requestUrl.origin === 'https://api.themoviedb.org' ||
      requestUrl.origin === 'https://fonts.gstatic.com'
    ) {
      const cache = await this._openCache();
      cache.add(request);
    }
  },
};

export default CacheHelper;
