import React, { useState, useEffect } from "react";
import { fetchMovies } from "../api/movies";
import MoviesList from "../components/MoviesList";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import "./css/home.css";

interface Movie {
  id: number;
  poster_path: string;
  title: string;
  release_date: string;
}

const Home: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const data = await fetchMovies(currentPage, searchQuery);
        setMovies(data.results);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };
    loadMovies();
  }, [currentPage, searchQuery]);

  return (
    <div className="container">
      <h1 className="text-3xl font-bold text-center my-8">TMDB Movies</h1>
      <SearchBar onSearch={setSearchQuery} />
      <MoviesList movies={movies} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Home;
