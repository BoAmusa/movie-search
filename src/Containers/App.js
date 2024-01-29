import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import MovieList from "../Components/MovieList";
import SearchBox from "../Components/SearchBox";

const API_KEY = process.env.MOVIE_DB_API_KEY;
const FAV_MOVIE = "The Dark Knight";
const SEARCH_QUERY =
  "https://moviesdatabase.p.rapidapi.com/titles/search/title/";
const SEARCH_PARAMS = "?exact=false&titleType=movie";
const OPTIONS = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  },
};

const override = css`
  display: block;
  margin: 0 auto;
`;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isMovieFound, setIsMovieFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMovies(SEARCH_QUERY, FAV_MOVIE, OPTIONS);
  }, []);

  const getMovies = async (BASE_QUERY, MOVIE_NAME, OPTIONS) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        BASE_QUERY + MOVIE_NAME + SEARCH_PARAMS,
        OPTIONS
      );
      const responseJson = await response.json();

      if (
        responseJson.results !== null &&
        responseJson.results !== undefined &&
        responseJson.results.length > 0
      ) {
        setMovies(responseJson.results);
        setIsMovieFound(true);
      } else {
        setIsMovieFound(false);
      }
    } catch (error) {
      setError("Error fetching movies. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      setIsMovieFound(false);
      getMovies(SEARCH_QUERY, searchTerm, OPTIONS);
      setSearchTerm("");
    }
  };

  const handleOnChange = (value) => {
    setSearchTerm(value);
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
          {isLoading ? (
            <ClipLoader
              color="#36D7B7"
              loading={isLoading}
              css={override}
              size={50}
            />
          ) : error ? (
            <p>{error}</p>
          ) : isMovieFound ? (
            <MovieList movies={movies} />
          ) : (
            <h1>Sorry no movies found.</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
