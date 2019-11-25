import React, { useState, useEffect, useContext } from 'react';
import Movies from './Movies';
import Search from './Search';

import MoviesState from './context/movies/MoviesState';
import AlertState from './context/alert/AlertState';

const App = () => {
  return (
    <MoviesState>
      <AlertState>
        <div className='App'>
          <h1>hello</h1>
          <Search />
          <Movies />
        </div>
      </AlertState>
    </MoviesState>
  );
};

export default App;
