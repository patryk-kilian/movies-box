/** @jsx jsx */

import { jsx } from '@emotion/core';

import { useContext, useEffect } from 'react';
import MoviesContext from '../context/movies/moviesContext';
import Search from '../components/Search';
import Watched from '../components/Watched';
import Watchlist from '../components/Watchlist';
import Details from '../components/MovieDetails';
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
        background: '#f3f2f3',
        marginLeft: '300px',
        width: '900px',
      }}
    >
      <Router>
        <Search path='/' />
        <Watched path='/watched' />
        <Watchlist path='/watchlist' />
        <Details path='/movie/:id' />
      </Router>
    </div>
  );
};

export default Movies;
