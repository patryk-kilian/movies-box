import React, { useContext, useEffect } from 'react';
import MoviesContext from '../context/movies/moviesContext';

const MovieDetails = ({ id }) => {
  const moviesContext = useContext(MoviesContext);

  const {
    getMovieDetails,
    movie,
    addToWatched,
    addToWatchlist,
  } = moviesContext;

  useEffect(() => {
    getMovieDetails(id);
    //eslint-disable-next-line
  }, [id]);

  // const { original_title } = movie;

  return (
    <div>
      {movie ? <h1>${movie.original_title}</h1> : <h1>ni ma</h1>}
      <button onClick={() => addToWatched(movie)}>add to watched</button>
      <button onClick={() => addToWatchlist(movie)}>add to watchlist</button>
    </div>
  );
};

export default MovieDetails;
