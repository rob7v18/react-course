import "./App.css";
import Counter from "./components/Counter";

import MovieCard from "./components/MovieCard";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <div>
      <Counter />

      <div style={{ overflow: "hidden" }}>
        <MovieCard
          title="Batman"
          type="movie"
          posterUrl="https://static.wikia.nocookie.net/marvel_dc/images/4/4b/Batman_Vol_3_86_Textless.jpg/revision/latest?cb=20200502132734"
        />
        <MovieCard
          title="Superman"
          type="movie"
          posterUrl="https://static.wikia.nocookie.net/marvel_dc/images/4/4b/Batman_Vol_3_86_Textless.jpg/revision/latest?cb=20200502132734"
        />
        <MovieCard
          title="Catwoman"
          type="movie"
          posterUrl="https://static.wikia.nocookie.net/marvel_dc/images/4/4b/Batman_Vol_3_86_Textless.jpg/revision/latest?cb=20200502132734"
        />
      </div>

      <div>
        <MovieDetails
          title={"Happy Land"}
          rated={"PG"}
          runtime={"3 hrs"}
          genre={"action"}
          plot={"ldsfjldskfjdsalkjf lsdakjflkdsj"}
          actors={"John doe, jane smith"}
          rating={"3.2"}
        />
      </div>
    </div>
  );
}

export default App;
