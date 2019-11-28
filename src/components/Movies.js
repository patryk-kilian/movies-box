/** @jsx jsx */

import { jsx } from '@emotion/core';

import { useContext, useEffect } from 'react';
import MoviesContext from '../context/movies/moviesContext';
import Search from '../components/Search';
import Favorites from '../components/Favorites';
import Watchlist from '../components/Watchlist';
import { Router } from '@reach/router';

const Movies = () => {
  const moviesContext = useContext(MoviesContext);
  const { searchMovies, movies } = moviesContext;

  useEffect(() => {
    searchMovies();
    //eslint-disable-next-line
  }, []);

  return (
    <div
      css={{
        background: 'green',
      }}
    >
      <Router>
        <Search path='/' />
        <Favorites path='/favorites' />
        <Watchlist path='/watchlist' />
      </Router>
      {movies.map(movie => (
        <h2>{movie.title}</h2>
      ))}
    </div>
  );
};

export default Movies;
