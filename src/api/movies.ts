const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

// The function takes two optional parameters:
//page The page number of the results to fetch, defaulting to 1.
//query A search query string, which is used to search for movies by title.
export const fetchMovies = async (page: number = 1, query: string = "") => {
  const url = query
    ? //if query is provided  it builds a URL to search for movies matching that query
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
    : //if query is an empty string, it builds a URL to fetch the most popular movies.
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch movies");
  }
  return res.json();
};
