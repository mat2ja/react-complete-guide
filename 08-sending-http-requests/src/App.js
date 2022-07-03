import React from 'react';
import { useEffect, useState } from 'react';

import './App.css';
import MoviesList from './components/MoviesList';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const hasMovies = movies?.length > 0;

  const fetchMoviesHandler = async () => {
    const url = 'https://swapi.dev/api/films/';
    setIsLoading(true);
    try {
      const movies = await fetch(url).then((res) => res.json());
      const transformedMovies = movies.results.map((movie) => ({
        id: movie.episode_id,
        title: movie.title,
        releaseDate: movie.release_date,
        openingText: movie.opening_crawl,
      }));
      setMovies(transformedMovies);
    } catch (err) {
      console.log('Error loading movies', err?.message);
    } finally {
      setIsLoading(false);
    }
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
        {!isLoading && hasMovies && <MoviesList movies={movies} />}
        {!isLoading && !hasMovies && <p>No movies found</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </>
  );
}

export default App;
