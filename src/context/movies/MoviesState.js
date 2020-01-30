import React, { useReducer } from 'react';
import axios from 'axios';
import MoviesContext from './moviesContext';
import MoviesReducer from './moviesReducer';
import {
  SEARCH_MOVIES,
  GET_DETAILS,
  CLEAR_MOVIE,
  ADD_MOVIE,
  DELETE_MOVIE,
  TOGGLE_WATCHED,
  RATE_MOVIE,
} from '../types';

const MoviesState = props => {
  const initialState = {
    fetchedMovies: [],
    myMovies: [],
    movie: null,
  };

  const [state, dispatch] = useReducer(MoviesReducer, initialState);

  const searchMovies = async query => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}&page=1`
      );

      dispatch({
        type: SEARCH_MOVIES,
        payload: res.data.results,
      });
    } catch (err) {
      console.log(err);
    }
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

  const clearMovie = () => {
    dispatch({
      type: CLEAR_MOVIE,
      payload: null,
    });
  };

  const addMovie = movie => {
    dispatch({
      type: ADD_MOVIE,
      payload: [...state.myMovies, { ...movie, watched: false, rating: null }],
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

  const setRating = (rating, myMovie) => {
    const newMovies = state.myMovies.map(movie => {
      if (myMovie.id === movie.id) {
        return {
          ...movie,
          rating: rating,
        };
      } else {
        return movie;
      }
    });

    dispatch({
      type: RATE_MOVIE,
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
        clearMovie,
        toggleWatched,
        addMovie,
        deleteMovie,
        setRating,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesState;
