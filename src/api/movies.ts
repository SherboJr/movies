const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (page: number = 1, query: string = "") => {
  const url = query
    ? `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        query
      )}&page=${page}`
    : `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch movies");
  }
  return res.json();
};
