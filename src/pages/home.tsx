import React, { useState, useEffect } from "react";
import { fetchMovies } from "../api/movies";
import MoviesList from "../components/MoviesList";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";

// types for what a movie object is expected to look like
interface Movie {
  id: number;
  poster_path: string;
  title: string;
  release_date: string;
}

const Home: React.FC = () => {
  //movies state to store the list of movies gotten from the api
  //we use the types we have declared above to declare what an object is expected to like in the list
  const [movies, setMovies] = useState<Movie[]>([]);
  //currentPage state to trsck the current page of the movie list and has 1 by default as we do start on the first page
  const [currentPage, setCurrentPage] = useState(1);
  //totalPages state keeps track of the total number of pages available based on the api i tried to come up with any idea to
  // make it 1 hook with the current pages but i failed
  const [totalPages, setTotalPages] = useState(0);
  // searchQuery state holds the current search query string
  const [searchQuery, setSearchQuery] = useState("");
  // useEffect runs the loadMovies function whenever currentPage or searchQuery changes
  // i decided to not use a useEffect at first but i had to manually trigger the data fetching whenever currentPage or searchQuery changing
  // which resulted in more code and less optimization
  useEffect(() => {
    const loadMovies = async () => {
      try {
        // here we fetch both the currentPage and the searchQuery using the api we created you can check it out in api/movies
        const data = await fetchMovies(currentPage, searchQuery);
        // here we update our hooks with the fetched data upon success and log any error
        setMovies(data.results);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };
    loadMovies();
    // now since you have asked me about this array in particular last time and i did not have an answer ready for you last time i will go in depth
    // explaining this, this is basically an array of dependencies which is
    // The function inside useEffect will be called whenever one of the values in the dependency array changes
    // In this case, if either currentPage or searchQuery changes, useEffect will run the loadMovies function.
  }, [currentPage, searchQuery]);

  return (
    // here we just display the contents of our page
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
