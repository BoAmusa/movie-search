import React, { useEffect, useState } from "react";
import MovieList from "../Components/MovieList";
import SearchBox from "../Components/SearchBox";

const API_KEY = process.env.TMDB_API_KEY;
const FAV_MOVIE = "Avengers";
const SEARCH_QUERY = `https://api.themoviedb.org/3/search/movie/?query=`;
const SEARCH_PARAMS = "&include_adult=false&language=en-US&page=1";
const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + API_KEY,
  },
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getMovies(SEARCH_QUERY, FAV_MOVIE, OPTIONS);
  }, []);

  //API to retrieves movies via IMdB
  const getMovies = async (BASE_QUERY, MOVIE_NAME, OPTIONS) => {
    setMovies("");
    const response = await fetch(
      BASE_QUERY + MOVIE_NAME + SEARCH_PARAMS,
      OPTIONS
    ).catch((err) => console.error("error: " + err));

    const responseJson = await response.json();
    setMovies(responseJson.results);
  };

  //Executes search on enter key
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      getMovies(SEARCH_QUERY, searchTerm, OPTIONS);
      setSearchTerm("");
    }
  };

  //Builds up search query from search bar
  const handleOnChange = (value) => {
    setSearchTerm(value);
    getMovies(SEARCH_QUERY, value, OPTIONS);
  };

  return (
    <div>
      <div className="tc">
        <h1 className="tc mv3 w-50 w-50-m w-50-l mw5 center">Movie Search</h1>
        <SearchBox
          className="tc mv3 w-50 w-50-m w-25-l mw5 center"
          onChange={(value) => handleOnChange(value)}
          onSubmit={(event) => handleOnSubmit(event)}
        />
      </div>
      <div className="wrapper">
        <div>
          {movies !== undefined && movies !== null && movies.length > 0 ? (
            <MovieList movies={movies} />
          ) : (
            <h1 className="mv2 w-20 w-20-m w-25-l mw5 left">LOADING...</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
