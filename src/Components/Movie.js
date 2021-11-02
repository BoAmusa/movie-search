import react from "react";

const Movie = ({ title, image }) => (
  <div className="grow dib">
    <img class="card__image" src={image} alt={title} />
    <div className="card__content">
      <h3>{title}</h3>
    </div>
  </div>
);

export default Movie;
