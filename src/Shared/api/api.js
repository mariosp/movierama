import authHeader from "./auth-header";

export const imageUrl = "https://image.tmdb.org/t/p/w220_and_h330_face"

export const getNowPlaying = (page) => fetch(`https://api.themoviedb.org/3/movie/now_playing?page=${page}`, authHeader ).then(res=> res.json());

export const getGenres = () => fetch(`https://api.themoviedb.org/3/genre/movie/list`, authHeader ).then(res=> res.json());

export const searchMovie = (searchKey, page) => fetch(`https://api.themoviedb.org/3/search/movie?query=${searchKey}&page=${page}`, authHeader ).then(res=> res.json());
