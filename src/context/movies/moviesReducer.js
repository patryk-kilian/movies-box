import {
  SEARCH_MOVIES,
  GET_DETAILS,
  TOGGLE_WATCHED,
  ADD_TO_WATCHED,
  ADD_TO_WATCHLIST,
  ADD_MOVIE,
  REMOVE_FROM_WATCHLIST,
  REMOVE_FROM_WATCHED,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_MOVIES:
      return {
        ...state,
        fetchedMovies: action.payload,
      };
    case GET_DETAILS:
      return {
        ...state,
        movie: action.payload,
      };
    case TOGGLE_WATCHED:
      return {
        ...state,
        myMovies: action.payload,
      };
    case ADD_MOVIE:
      return {
        ...state,
        myMovies: action.payload,
      };
    case REMOVE_FROM_WATCHLIST:
      return {
        ...state,
        watchlist: action.payload,
      };
    case REMOVE_FROM_WATCHED:
      return {
        ...state,
        watched: action.payload,
      };
    default:
      return state;
  }
};
