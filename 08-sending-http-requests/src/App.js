import React from 'react';
import { useEffect, useState } from 'react';

import './App.css';
import MoviesList from './components/MoviesList';

function App() {
  const [movies, setMovies] = useState([]);

  const fetchMoviesHandler = () => {
    fetch('https://swapi.dev/api/films/')
      .then((res) => res.json())
      .then((data) => {
        const transformedMovies = data.results.map((movie) => ({
          id: movie.episode_id,
          title: movie.title,
          releaseDate: movie.release_date,
          openingText: movie.opening_crawl,
        }));
        setMovies(transformedMovies);
      });
  };

  useEffect(() => {
    fetchMoviesHandler();
  }, []);

  return (
    <>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </>
  );
}

export default App;
