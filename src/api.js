import axios from "axios";

export const getMovieList = async () => {
  const movie = await axios.get(`${process.env.REACT_APP_BASEURL}/movie/popular?page=1&api_key=${process.env.REACT_APP_APIKEY}`);
  return movie.data.results;
};

export const searchMovie = async (q) => {
  const search = await axios.get(`${process.env.REACT_APP_BASEURL}/search/movie?page=1&query=${q}&api_key=${process.env.REACT_APP_APIKEY}`);
  return search.data.results;
};

export const getMovieTranding = async () => {
  const movieTranding = await axios.get(`${process.env.REACT_APP_BASEURL}/trending/movie/day?api_key=${process.env.REACT_APP_APIKEY}`);
  return movieTranding.data.results;
};
