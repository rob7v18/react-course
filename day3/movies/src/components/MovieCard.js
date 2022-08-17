function MovieCard({ title, type, posterUrl }) {
  console.log("RENDER"); // to update UI we must re-run the component function (rendering)

  return (
    <div className="movie-card">
      <img className="movie-card__image" src={posterUrl} alt="" />
      <h2 className="movie-card__title">{title} </h2>
      <span className="movie-card__type">{type}</span>
    </div>
  );
}

export default MovieCard;
