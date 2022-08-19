// Sign up for an OMDb API key at http://www.omdbapi.com.
const OMDB_KEY = "user your api key here";

const apiURL = `http://www.omdbapi.com/?apikey=${OMDB_KEY}&`;

// Write an arrow function called getMoviesByName that takes a string as input and uses fetch and async/await to get an array of movies with a matching title from OMDb API.
const getMoviesByName = async (titleName) => {
  const endpoint = `${apiURL}s=${titleName}`;
  const response = await fetch(endpoint);
  const data = await response.json();

  const { Search: searchResults } = data;

  return searchResults;
};

// Write another arrow function called getMovieDetailsById that takes a valid OMDb movie id as input and uses fetch and async/await to get an object of detailed information about the specified movie.
const getMovieDetailsById = async (id) => {
  const endpoint = `${apiURL}i=${id}`;

  const response = await fetch(endpoint);
  const movie = await response.json();

  return movie;
};

export { getMoviesByName, getMovieDetailsById };
