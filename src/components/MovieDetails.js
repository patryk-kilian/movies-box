import React, { useContext, useEffect } from 'react';
import MoviesContext from '../context/movies/moviesContext';
import StatusButtons from './StatusButtons';

const MovieDetails = ({ id }) => {
  const moviesContext = useContext(MoviesContext);

  const { getMovieDetails, movie } = moviesContext;

  useEffect(() => {
    getMovieDetails(id);
    //eslint-disable-next-line
  }, [id]);

  return (
    <div>
      {movie ? (
        <>
          <h1>${movie.original_title}</h1>
          <StatusButtons movie={movie} />{' '}
        </>
      ) : (
        <h1>ni ma</h1>
      )}
    </div>
  );
};

export default MovieDetails;
