export const MovieRequests = {
  fetchTrending: `/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=99`,
};

export const TvRequests = {
  fetchTopRatedTv: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&include_adult=false&language=en-US&page=1&sort_by=vote_average.desc&vote_count.gte=200`,
  fetchPopularTv: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&include_adult=false&language=en-US&page=1&sort_by=popularity.desc`,
  fetchNetflixOriginals: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_networks=213`,
  fetchAiringToday: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&include_adult=false&language=en-US&page=1&sort_by=popularity.desc&air_date.lte={max_date}&air_date.gte={min_date}`,
  fetchOnTheAir: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&include_adult=false&language=en-US&page=1&sort_by=popularity.desc&air_date.lte={max_date}&air_date.gte={min_date}`,
  fetchTrendingTv: `/trending/tv/week?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
  fetchActionTv: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10759`,
  fetchSciFiFantasy: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10765`,
};
