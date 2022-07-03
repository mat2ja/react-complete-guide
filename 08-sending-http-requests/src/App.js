import React from 'react';
import { useEffect, useState, useCallback } from 'react';

import './App.css';
import AddMovie from './components/AddMovie';
import MoviesList from './components/MoviesList';

const fbUrl =
  'https://react-getting-started-9a50b-default-rtdb.europe-west1.firebasedatabase.app';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const hasMovies = movies?.length > 0;

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${fbUrl}/movies.json`);
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();
      const movieData = Object.entries(data).map(([id, value]) => ({
        id,
        ...value,
      }));
      setMovies(movieData);
    } catch (err) {
      const error = err?.message || 'Something went wrong';
      setError(error);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  const addMovieHandler = async (movie) => {
    try {
      const response = await fetch(`${fbUrl}/movies.json`, {
        method: 'POST',
        body: JSON.stringify(movie),
      });
      const { name: id } = await response.json();
      setMovies((prev) => [...prev, { ...movie, id }]);
    } catch (err) {
      console.error('Something went wrong while adding a movie');
    }
  };

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
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </>
  );
}

export default App;
