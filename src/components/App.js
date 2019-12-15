/** @jsx jsx */
import { jsx } from '@emotion/core';

import Movies from './Movies';
import AsideNav from './AsideNav';

import MoviesState from '../context/movies/MoviesState';
import AlertState from '../context/alert/AlertState';

const App = () => {
  return (
    <MoviesState>
      <AlertState>
        <div
          css={{
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          <div
            css={{
              display: 'grid',
              gridTemplateColumns: '1fr 3fr',
              height: '100vh',
            }}
          >
            <AsideNav />
            <Movies />
          </div>
        </div>
      </AlertState>
    </MoviesState>
  );
};

export default App;
