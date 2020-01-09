import {
  SEARCH_MOVIES,
  GET_DETAILS,
  TOGGLE_WATCHED,
  ADD_MOVIE,
  DELETE_MOVIE,
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
    case DELETE_MOVIE:
      return {
        ...state,
        myMovies: action.payload,
      };
    default:
      return state;
  }
};
