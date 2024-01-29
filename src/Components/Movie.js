import React from "react";

const TRAILER_BASE_SEARCH = `https://www.google.com/search?q=`;
const TRAILER_PARAM = "+trailer";

//Executes trailer redirection on click
const handleOnPosterClick = (value) => () => {
  window.open(TRAILER_BASE_SEARCH + value + TRAILER_PARAM);
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
