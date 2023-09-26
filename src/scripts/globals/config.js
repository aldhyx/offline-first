const CONFIG = {
  KEY: process.env.MOVIE_API_KEY,
  BASE_URL: 'https://api.themoviedb.org/3/',
  BASE_URL_ORIGIN: 'https://api.themoviedb.org',
  BASE_IMAGE_URL: 'https://image.tmdb.org/t/p/w500/',
  BASE_IMAGE_URL_ORIGIN: 'https://image.tmdb.org',
  FONT_URL_ORIGIN: 'https://fonts.gstatic.com',
  DEFAULT_LANGUAGE: 'en-us',
  CACHE_GENERAL: 'GENERAL-RESOURCES-V1 ',
  CACHE_IMAGE: 'IMAGE-RESOURCES-V1',

  DATABASE_NAME: 'movie-catalogue-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'movies',

  WEB_SOCKET_SERVER: process.env.WEB_SOCKET_SERVER,
};

export default CONFIG;
