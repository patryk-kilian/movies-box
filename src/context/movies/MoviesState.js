import React, { useReducer } from 'react';
import axios from 'axios';
import MoviesContext from './moviesContext';
import MoviesReducer from './moviesReducer';
import { SEARCH_MOVIES } from '../types';

const MoviesState = props => {
  const initialState = {
    movies: ['elo', 'siema'],
  };

  const [state, dispatch] = useReducer(MoviesReducer, initialState);

  const searchMovies = async query => {
    const res = await axios.get(
      `http://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}&page=1`
    );
    dispatch({
      type: SEARCH_MOVIES,
      payload: res.data.results,
    });
  };

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        searchMovies,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesState;
