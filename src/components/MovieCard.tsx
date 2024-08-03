import React from "react";
import "./css/MovieCard.css";

//here we  define or specify the types of props the MovieCard component expects to receive.
interface MovieCardProps {
  posterPath: string;
  title: string;
  releaseDate: string;
}
// and here we declare our movie card component which to be honest we do not really need it
// then why did i create it you may ask to facilitate styling the movie containers in the home screen
// i tried removing this component at first and styling from the moviesList component itself but it did not feel right code wise
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
