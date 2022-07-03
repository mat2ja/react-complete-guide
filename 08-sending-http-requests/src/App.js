import React from 'react';
import { useEffect, useState } from 'react';

import './App.css';
import MoviesList from './components/MoviesList';

function App() {
  const [movies, setMovies] = useState([]);

  const fetchMoviesHandler = async () => {
    const url = 'https://swapi.dev/api/films/';
    const movies = await fetch(url).then((res) => res.json());
    const transformedMovies = movies.results.map((movie) => ({
      id: movie.episode_id,
      title: movie.title,
      releaseDate: movie.release_date,
      openingText: movie.opening_crawl,
    }));
    setMovies(transformedMovies);
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
