import React, { useReducer } from 'react';
import axios from 'axios';
import MoviesContext from './moviesContext';
import MoviesReducer from './moviesReducer';
import {
  SEARCH_MOVIES,
  GET_DETAILS,
  ADD_MOVIE,
  TOGGLE_WATCHED,
  ADD_TO_WATCHED,
  ADD_TO_WATCHLIST,
  REMOVE_FROM_WATCHLIST,
  REMOVE_FROM_WATCHED,
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
    const filteredMovies = removeMovieFromArray(state.myMovies, movie);

    dispatch({
      type: ADD_MOVIE,
      payload: [...filteredMovies, { ...movie, watched: false }],
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

  // const removeFromWatchlist = movie => {
  //   const filteredWatchlist = removeMovieFromArray(state.watchlist, movie);

  //   dispatch({
  //     type: REMOVE_FROM_WATCHLIST,
  //     payload: filteredWatchlist,
  //   });
  // };

  // const removeFromWatched = movie => {
  //   const filteredWatched = removeMovieFromArray(state.watched, movie);

  //   dispatch({
  //     type: REMOVE_FROM_WATCHED,
  //     payload: filteredWatched,
  //   });
  // };

  // const addToWatched = movie => {
  //   const filteredWatched = removeMovieFromArray(state.watched, movie);

  //   dispatch({
  //     type: ADD_TO_WATCHED,
  //     payload: [...filteredWatched, { ...movie, onWatched: true }],
  //   });

  //   removeFromWatchlist(movie);
  // };

  // const addToWatchlist = movie => {
  //   const filteredWatchlist = removeMovieFromArray(state.watchlist, movie);

  //   dispatch({
  //     type: ADD_TO_WATCHLIST,
  //     payload: [...filteredWatchlist, { ...movie, onWatchlist: true }],
  //   });

  //   removeFromWatched(movie);
  // };

  return (
    <MoviesContext.Provider
      value={{
        fetchedMovies: state.fetchedMovies,
        movie: state.movie,
        myMovies: state.myMovies,
        searchMovies,
        getMovieDetails,
        toggleWatched,
        // addToWatched,
        // addToWatchlist,
        // removeFromWatchlist,
        // removeFromWatched,
        addMovie,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesState;
