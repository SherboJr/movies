import React from "react";
import "./css/MovieCard.css";
interface MovieCardProps {
  posterPath: string;
  title: string;
  releaseDate: string;
}

const MovieCard: React.FC<MovieCardProps> = ({
  posterPath,
  title,
  releaseDate
}) => {
  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt={title}
        className="movie-card__image"
      />
      <div className="movie-card__content">
        <h3 className="movie-card__title">{title}</h3>
        <p className="movie-card__date">{releaseDate}</p>
      </div>
    </div>
  );
};

export default MovieCard;
