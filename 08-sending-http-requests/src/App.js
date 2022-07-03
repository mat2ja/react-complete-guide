import React from 'react';
import { useEffect, useState } from 'react';

import './App.css';
import MoviesList from './components/MoviesList';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const hasMovies = movies?.length > 0;

  const fetchMoviesHandler = async () => {
    const url = 'https://swapi.dev/api/films/';
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();

      const transformedMovies = data.results.map((movie) => ({
        id: movie.episode_id,
        title: movie.title,
        releaseDate: movie.release_date,
        openingText: movie.opening_crawl,
      }));
      setMovies(transformedMovies);
    } catch (err) {
      const error = err?.message || 'Something went wrong';
      setError(error);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMoviesHandler();
  }, []);

  let content = <p>No movies found 🤷‍♂️</p>;

  if (hasMovies) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p style={{ color: '#f44336' }}>{error} 👿</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </>
  );
}

export default App;
