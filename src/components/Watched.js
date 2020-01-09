/** @jsx jsx */
import { jsx } from '@emotion/core';

import { useContext } from 'react';
import MoviesContext from '../context/movies/moviesContext';
import MovieCard from './MovieCard';

const Watched = () => {
  const moviesContext = useContext(MoviesContext);

  const { myMovies } = moviesContext;

  const watched = myMovies.filter(movie => movie.watched);

  return (
    <div>
      <div css={{}}>
        {watched &&
          watched.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Watched;
