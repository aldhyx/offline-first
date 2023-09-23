import CONFIG from '../globals/config';

const CacheHelper = {
  /** @param {string} name */
  async _openCache(name) {
    return caches.open(name);
  },
  /** @param {string[]} requests */
  async cachingAppShell(requests) {
    const cache = await this._openCache(CONFIG.CACHE_GENERAL);
    return cache.addAll(requests);
  },
  async deleteOldCache() {
    const cacheNames = await caches.keys();

    cacheNames.forEach((name) => {
      if (name !== CONFIG.CACHE_GENERAL || name !== CONFIG.CACHE_IMAGE) {
        caches.delete(name);
      }
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
    await this._addCache(request, response.clone());
    return response;
  },
  async _addCache(request, response) {
    const requestUrl = new URL(request.url);

    if (
      requestUrl.origin === location.origin ||
      requestUrl.origin === CONFIG.BASE_URL_ORIGIN ||
      requestUrl.origin === CONFIG.FONT_URL_ORIGIN
    ) {
      const cache = await this._openCache(CONFIG.CACHE_GENERAL);
      cache.add(request);
    }

    if (requestUrl.origin === CONFIG.BASE_IMAGE_URL_ORIGIN) {
      const cache = await this._openCache(CONFIG.CACHE_IMAGE);
      cache.put(request, response);
    }
  },
};

export default CacheHelper;
