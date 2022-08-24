import React from "react";

function Modal({ movie, onClose }) {
  console.log("INSIDE Modal", movie);

  const { Title, Genre, Plot, Rated, Runtime, Actors, imdbRating, Poster } =
    movie;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button onClick={onClose}>X Close</button>

        <h1>{Title}</h1>

        <img src={Poster} alt={`${Title} poster`} />

        <ul>
          <li>{imdbRating}</li>
          <li>{Genre}</li>
          <li>{Rated}</li>
          <li>{Runtime}</li>
          <li>{Actors}</li>
        </ul>

        <p>{Plot}</p>
      </div>
    </div>
  );
}

export default Modal;
