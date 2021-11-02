import React, { useEffect, useState } from "react";
import MovieList from "../Components/MovieList";
import SearchBox from "../Components/SearchBox";

const API_KEY = process.env.REACT_APP_IMDB_API_KEY;
const SEARCH_API = `https://imdb-api.com/en/API/SearchMovie/${API_KEY}/`;
const FAV_MOVIE = "Avengers";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getMovies(SEARCH_API + FAV_MOVIE);
  }, [FAV_MOVIE]);

  //API to retrieves movies via IMdB
  const getMovies = async (API) => {
    setMovies("");
    const response = await fetch(API);
    const responseJson = await response.json();
    setMovies(responseJson.results);
  };

  //Executes search on enter key
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm);
      setSearchTerm("");
    }
  };

  //Builds up search query from search bar
  const handleOnChange = (value) => {
    setSearchTerm(value);
    getMovies(SEARCH_API + value);
  };

  return (
    <div>
      <div>
        <h1 className="mv3 w-50 w-50-m w-25-l mw5 center">Movie Search</h1>
        <SearchBox
          className="mv3 w-50 w-50-m w-25-l mw5 center"
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
