import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/MoviesList.css";
import MovieCard from "./MovieCard";
// here the movie object is defined
interface Movie {
  id: number;
  poster_path: string;
  title: string;
  release_date: string;
}
// here we define the movie list which is just an array
interface MoviesListProps {
  movies: Movie[];
}
// here we define our MoviesList component which takes movie as its prop
const MoviesList: React.FC<MoviesListProps> = ({ movies }) => {
  // this hook is only here for cosmetics can be removed without breaking the functionality
  const [isTransitioning, setIsTransitioning] = useState(false);
  //  Initializes the navigate function, which is used to  navigate to a different route.
  const navigate = useNavigate();

  const handleMovieClick = (id: number) => {
    //this sets the transition to true which activates the css fade in animation
    setIsTransitioning(true);
    setTimeout(() => {
      //now this delays the navigation to the movie's detail page  allowing time for the transition effect to complete
      //fyi its only for the cosmetics as well it can be removed
      navigate(`/movie/${id}`);
    }, 300);
  };

  return (
    //here we check of the state of isTransitioning to activate our css
    <div className={`movies-list ${isTransitioning ? "fade-out" : ""}`}>
      {movies.map((movie) => (
        // here we just map the movies we got
        //each div acts as a clickable link.
        <div
          key={movie.id}
          className="movie-link"
          //this onClick handler  triggers handleMovieClick with the movie's ID.
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
