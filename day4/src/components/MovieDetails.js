import React from "react";

import PropTypes from "prop-types";

function MovieDetails({
  posterUrl = "noimage.jpg",
  title,
  rated,
  runtime,
  genre,
  plot,
  actors,
  rating,
}) {
  return (
    <section>
      <div>
        <img src={posterUrl} alt={title} />
      </div>
      <div>
        <h1>{title}</h1>
        <div>{rating}</div>

        <ul>
          <li>{rated}</li>
          <li>{runtime}</li>
          <li>{genre}</li>
        </ul>

        <div>
          <h3>Plot</h3>
          <p>{plot}</p>
        </div>

        <div>
          <h3>Actors</h3>
          <p>{actors}</p>
        </div>
      </div>
    </section>
  );
}

MovieDetails.propTypes = {
  title: PropTypes.string.isRequired,
};

// MovieDetails.defaultProps = {
//     posterUrl: "noimage.jpg"
// }

export default MovieDetails;
