import { useState, useEffect } from "react";
import { getMoviesByName, getMovieDetailsById } from "./utils/helpers";
import "./App.css";

import MovieCard from "./components/MovieCard";
import Modal from "./components/Modal";
// import PhotoFrame from './components/PhotoFrame';

import { SpinnerCircular } from "spinners-react";

// function SuccessBox() {
//   return <p>Success!</p>
// }

// function FailBox() {
//   return <p>Fail!</p>
// }

function App() {
  // searchTerm - initialize to some movie title e.g. "batman"
  // isLoading - initialize to false
  // movies - initialize to empty array
  // error - initialize to null

  const [searchTerm, setSearchTerm] = useState("batman");
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({});

  useEffect(() => {
    // Set isLoading to true.
    setIsLoading(true);

    // Fetch the movie data for the current search term using the utility function written in a previous lesson.
    getMoviesByName(searchTerm)
      .then((movies) => {
        console.log(movies);

        setMovies(movies);
        setError(null);
      })
      .catch((err) => {
        // console.error(err)

        setError(err);
        setMovies([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  // Will always execute on first Render
  // it can re-execute if something withing the array changes
  useEffect(
    () => {
      // execute this section as soon as it mounts the component
      // componentDidMount() equivalent

      console.log("useEffect callback function called!");

      const timeoutId = window.setTimeout(() => {
        console.log("time elapsed");
      }, 60000);

      return () => {
        // clean up
        // Class componentWillUnmount() equivalent

        window.clearTimeout(timeoutId);

        console.log("Clean up function called");
      };
    },
    [] /* <-- componentDidUpdate() */
  );

  /*
  Use conditional rendering to

    show a "Loading" message or spinner when isLoading is true
    show an error message if there is an error
    show a success message if data was fetched successfully

]*/

  const handleClick = async (movieId) => {
    console.log(`Clicked on ${movieId} !`);

    setIsModalOpen(true);

    const movie = await getMovieDetailsById(movieId);

    setSelectedMovie(movie);
  };

  return (
    <div>
      {/* <h1>Welcome {String(isLoading)}</h1> */}

      {/* <PhotoFrame text="OUr photo frame">
      <h2>this is nested inside, therefore children</h2>
      <p>Yooooo</p>
    </PhotoFrame> */}

      {isModalOpen && (
        <Modal
          movie={selectedMovie}
          onClose={() => {
            setIsModalOpen(false);
          }}
        />
      )}

      <SpinnerCircular enabled={isLoading} />

      {error && <div>Whoops some error occured!</div>}

      {/* <SpinnerCircular enabled={false} /> */}

      {/* {movies.length > 0 && (<p>Has some movies</p>)} */}

      {movies.map((movie) => {
        return (
          <MovieCard
            key={movie.imdbID}
            id={movie.imdbID}
            onImageClick={handleClick}
            title={movie.Title}
            type={movie.Type}
            posterUrl={movie.Poster}
          />
        );
      })}
    </div>
  );
}

export default App;
