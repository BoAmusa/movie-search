import React from "react";

const TRAILER_BASE_SEARCH = `https://www.google.com/search?q=`;
const TRAILER_PARAM = '+trailer'

//API to retrieve movie trailer via IMdB
const getMovieTrailer = async (QUERY, TITLE) => {
  window.open(QUERY, TITLE);
  
};

//Executes trailer redirection on click
const handleOnPosterClick = (value) =>  () => {
  console.log("Poster click " + value)
  getMovieTrailer(TRAILER_BASE_SEARCH + value + TRAILER_PARAM, value);
};

const Movie = ({ title, image, id }) => (
  <div className="grow dib">
    <img
      class="card__image"
      src={image}
      alt={title}
      onClick={handleOnPosterClick(title)}
    />
    <div className="card__content">
      <h3>{title}</h3>
    </div>
  </div>
);

export default Movie;
