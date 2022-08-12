import react from "react";

const API_KEY = process.env.REACT_APP_IMDB_API_KEY;
const TRAILER_API = `https://imdb-api.com/API/Trailer/${API_KEY}/`;

//API to retrieve movie trailer via IMdB
const getMovieTrailer = async (API) => {
  const response = await fetch(API);
  const responseJson = await response.json();
  const trailer = responseJson.results;

  if (trailer !== undefined && trailer !== null && trailer.length > 0) {
    window.open(trailer.link, trailer.title);
  }
};

//Executes trailer redirection on click
const handleOnPosterClick = (value) => {
  getMovieTrailer(TRAILER_API + value);
};

const Movie = ({ title, image, id }) => (
  <div className="grow dib">
    <img
      class="card__image"
      src={image}
      alt={title}
      onClick={handleOnPosterClick(id)}
    />
    <div className="card__content">
      <h3>{title}</h3>
    </div>
  </div>
);

export default Movie;
