import React, { useContext, useEffect } from 'react';
import MoviesContext from './context/movies/moviesContext';

const Movies = () => {
  const moviesContext = useContext(MoviesContext);
  const { searchMovies, movies } = moviesContext;

  useEffect(() => {
    searchMovies();
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      {movies.map(movie => (
        <h2>{movie.title}</h2>
      ))}
    </div>
  );
};

export default Movies;
