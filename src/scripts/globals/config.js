const CONFIG = {
  KEY: process.env.MOVIE_API_KEY,
  BASE_URL: 'https://api.themoviedb.org/3/',
  BASE_URL_ORIGIN: 'https://api.themoviedb.org',
  BASE_IMAGE_URL: 'https://image.tmdb.org/t/p/w500/',
  BASE_IMAGE_URL_ORIGIN: 'https://image.tmdb.org',
  FONT_URL_ORIGIN: 'https://fonts.gstatic.com',
  DEFAULT_LANGUAGE: 'en-us',

  PUSH_MSG_VAPID_PUBLIC_KEY: process.env.PUSH_MSG_VAPID_PUBLIC_KEY,
  PUSH_MSG_SUBSCRIBE_URL: process.env.PUSH_MSG_SUBSCRIBE_URL,
  PUSH_MSG_UNSUBSCRIBE_URL: process.env.PUSH_MSG_UNSUBSCRIBE_URL,
};

export default CONFIG;
