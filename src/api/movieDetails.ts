// src/api.ts

interface MovieDetail {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  } | null;
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

if (!API_KEY) {
  throw new Error("Missing TMDB API Key in environment variables");
}

export const fetchMovieDetails = async (id: string): Promise<MovieDetail> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch movie details");
  }
  return response.json();
};

export type { MovieDetail };
