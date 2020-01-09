/** @jsx jsx */

import { jsx } from '@emotion/core';

import Search from '../components/Search';
import Watched from '../components/Watched';
import Watchlist from '../components/Watchlist';
import Details from '../components/MovieDetails';
import { Router } from '@reach/router';

const Movies = () => {
  return (
    <div
      css={{
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
