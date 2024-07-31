import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/MoviesList.css";
import MovieCard from "./MovieCard";

interface Movie {
  id: number;
  poster_path: string;
  title: string;
  release_date: string;
}

interface MoviesListProps {
  movies: Movie[];
}

const MoviesList: React.FC<MoviesListProps> = ({ movies }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  const handleMovieClick = (id: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      navigate(`/movie/${id}`);
    }, 300);
  };

  return (
    <div className={`movies-list ${isTransitioning ? "fade-out" : ""}`}>
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="movie-link"
          onClick={() => handleMovieClick(movie.id)}
        >
          <MovieCard
            posterPath={movie.poster_path}
            title={movie.title}
            releaseDate={movie.release_date}
          />
        </div>
      ))}
    </div>
  );
};

export default MoviesList;
