/** @jsx jsx */
import { jsx } from '@emotion/core';

import { useContext } from 'react';
import MoviesContext from '../context/movies/moviesContext';
import MovieCard from './MovieCard';

const Watchlist = () => {
  const moviesContext = useContext(MoviesContext);

  const { myMovies } = moviesContext;

  const watchlist = myMovies.filter(el => !el.watched);

  return (
    <div>
      <div
        css={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3,1fr)',
          gridGap: '10px',
          padding: '10px',
        }}
      >
        {watchlist &&
          watchlist.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Watchlist;
