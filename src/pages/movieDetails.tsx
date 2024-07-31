import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails, MovieDetail } from "../api/movieDetails";
import "./css/movieDetails.css"; // Import the CSS file

const MovieDetailPage: React.FC = () => {
  const { id } = useParams<string>();
  const [movie, setMovie] = useState<MovieDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchDetails = async () => {
      try {
        const data = await fetchMovieDetails(id);
        setMovie(data);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="bg-background min-h-screen py-8 px-4">
      {movie && (
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 text-black">{movie.title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-1/3 mx-auto mb-4"
          />
          <div className="text-lg mb-2 text-black">
            Release Date: <span className="pill">{movie.release_date}</span>
          </div>
          <div className="movie-overview-container">
            <h2 className="text-2xl font-bold">Overview</h2>
            <p>{movie.overview}</p>
          </div>
          <div className="my-4 text-center">
            {movie.genres.map((genre) => (
              <span key={genre.id} className="pill">
                {genre.name}
              </span>
            ))}
          </div>
          <div className="justify-between flex flex-row my-3">
            <div className="text-lg mb-2 text-black">
              Runtime: <span className="pill">{movie.runtime} minutes</span>
            </div>
            <div className="text-lg mb-2 text-black">
              Status: <span className="pill">{movie.status}</span>
            </div>
          </div>
          <div className="justify-between flex flex-row my-3">
            <div className="text-lg mb-2 text-black">
              Vote Average:{" "}
              <span
                className={`${
                  movie.vote_average < 5
                    ? "text-red-500"
                    : movie.vote_average < 7
                    ? "text-yellow-500"
                    : "text-green-500"
                }`}
              >
                {movie.vote_average}
              </span>
            </div>
            <div className="text-lg mb-2 text-black">
              Vote Count: <span className="pill">{movie.vote_count}</span>
            </div>
          </div>
          <div className="justify-between flex flex-row my-3">
            <div className="text-lg mb-2 text-black">
              Budget:{" "}
              <span className="pill">{`$${movie.budget.toLocaleString()}`}</span>
            </div>
            <div>
              Revenue:{" "}
              <span
                className={`text-lg mb-2 text-black ${
                  movie.revenue < movie.budget
                    ? "text-red-500"
                    : "text-green-500"
                }`}
              >{`$${movie.revenue.toLocaleString()}`}</span>
            </div>
          </div>
          <div className="mb-4 text-black">
            <h2 className="text-2xl font-bold">Production Companies</h2>
            <ul className="companies-container">
              {movie.production_companies.map((company) => (
                <li
                  key={company.id}
                  className="flex items-center justify-center mb-2"
                >
                  {company.logo_path && (
                    <img
                      src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                      alt={company.name}
                      className="inline-block m-3 h-20 w-40"
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetailPage;
