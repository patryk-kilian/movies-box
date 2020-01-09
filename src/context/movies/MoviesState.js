import React, { useReducer } from 'react';
import axios from 'axios';
import MoviesContext from './moviesContext';
import MoviesReducer from './moviesReducer';
import {
  SEARCH_MOVIES,
  GET_DETAILS,
  ADD_MOVIE,
  DELETE_MOVIE,
  TOGGLE_WATCHED,
} from '../types';

const MoviesState = props => {
  const initialState = {
    fetchedMovies: [],
    myMovies: [],
    movie: null,
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

  const removeMovieFromArray = (array, movie) => {
    return array.filter(el => el.id !== movie.id);
  };

  const getMovieDetails = async id => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`
    );

    dispatch({
      type: GET_DETAILS,
      payload: res.data,
    });
  };

  const addMovie = movie => {
    dispatch({
      type: ADD_MOVIE,
      payload: [...state.myMovies, { ...movie, watched: false }],
    });
  };

  const deleteMovie = movie => {
    const filteredMovies = removeMovieFromArray(state.myMovies, movie);

    dispatch({
      type: DELETE_MOVIE,
      payload: [...filteredMovies],
    });
  };

  const toggleWatched = myMovie => {
    const newMovies = state.myMovies.map(movie => {
      if (myMovie.id === movie.id) {
        return {
          ...movie,
          watched: !movie.watched,
        };
      } else {
        return movie;
      }
    });
    dispatch({
      type: TOGGLE_WATCHED,
      payload: newMovies,
    });
  };

  return (
    <MoviesContext.Provider
      value={{
        fetchedMovies: state.fetchedMovies,
        movie: state.movie,
        myMovies: state.myMovies,
        searchMovies,
        getMovieDetails,
        toggleWatched,
        addMovie,
        deleteMovie,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesState;
