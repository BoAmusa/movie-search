import React from "react";
import Movie from "./Movie";

const MovieList = ({ movies }) => {
  return (
    <div className="tc wrapper">
      {movies.map((movie, i) => {
        const imageUrl = movie.primaryImage && movie.primaryImage.url;

        // Only render Movie component if imageUrl is not null
        return (
          imageUrl && (
            <Movie
              key={i}
              id={movie.id}
              image={imageUrl}
              title={movie.originalTitleText.text}
            />
          )
        );
      })}
    </div>
  );
};

export default MovieList;
