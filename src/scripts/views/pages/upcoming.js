import TheMovieDbSource from '../../data/themoviedb-source';

const Upcoming = {
  async render() {
    return `
      <h2>Upcoming page</h2>
    `;
  },

  async afterRender() {
    const movies = await TheMovieDbSource.upcomingMovies();
    console.log({ Upcoming: movies });

    // TODO: tampilkan movies di dalam DOM
  },
};

export default Upcoming;
