import React, {Suspense, useEffect, useState} from "react";
import "react-loading-skeleton/dist/skeleton.css";
import "./App.css";
import {getMovieList, searchMovie} from "./api";
import Loader from "./utils/loader";
import TopContent from "./components/TopContent";

const ListMovie = React.lazy(() => import("./components/ListMovie"));

export default function App() {
  const [getMovies, setMovies] = useState([]);

  const searchItems = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setMovies(query);
    } else if (q.length <= 3) {
      relod();
    }
  };

  const relod = async () => {
    const movies = await getMovieList();
    setMovies(movies);
  };

  useEffect(() => {
    relod();
  }, []);

  return (
    <div className="App">
      <TopContent searchItems={searchItems} />
      <div className="container">
        <div className="columns is-multiline p-0 pt-6 last">
          <div className="column is-full">
            <p className="has-text-white is-size-5 is-font-weight-bold">All Movies</p>
          </div>
          {getMovies.length > 0 ? (
            getMovies.map((movie) => (
              <div className="column is-one-quarter" key={movie.id}>
                <Suspense key={movie.id} fallback={<Loader />}>
                  <ListMovie movie={movie} />
                </Suspense>
              </div>
            ))
          ) : (
            <div className="column is-full">
              <p className="has-text-white">No movies found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
