const API_KEY = process.env.API_KEY;

export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US&sort_by=vote_average.desc`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US&sort_by=vote_average.desc`,
  },
  fetchActionMovies: {
    title: "Action",
    url: `/discover/movie?api_key=${API_KEY}&with_generes=28&sort_by=vote_average.desc`,
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `/discover/movie?api_key=${API_KEY}&with_generes=35&sort_by=vote_average.desc`,
  },
  fetchHorrorMovies: {
    title: "Horror",
    url: `/discover/movie?api_key=${API_KEY}&with_generes=27&sort_by=vote_average.desc`,
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&with_generes=10749&sort_by=vote_average.desc`,
  },
  fetchMystery: {
    title: "Mystery",
    url: `/discover/movie?api_key=${API_KEY}&with_generes=9648&sort_by=vote_average.desc`,
  },
  fetchSciFi: {
    title: "Sci-Fi",
    url: `/discover/movie?api_key=${API_KEY}&with_generes=878&sort_by=vote_average.desc`,
  },
  fetchWestern: {
    title: "Western",
    url: `/discover/movie?api_key=${API_KEY}&with_generes=37&sort_by=vote_average.desc`,
  },
  fetchAnimation: {
    title: "Animation",
    url: `/discover/movie?api_key=${API_KEY}&with_generes=16&sort_by=vote_average.desc`,
  },
  fetchTV: {
    title: "TV Movie",
    url: `/discover/movie?api_key=${API_KEY}&with_generes=10770&sort_by=vote_average.desc`,
  },
};
