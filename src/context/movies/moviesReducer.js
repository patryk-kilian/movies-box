import {
  SEARCH_MOVIES,
  GET_DETAILS,
  ADD_TO_WATCHED,
  ADD_TO_WATCHLIST,
  REMOVE_FROM_WATCHLIST,
  REMOVE_FROM_WATCHED,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case GET_DETAILS:
      return {
        ...state,
        movie: action.payload,
      };
    case ADD_TO_WATCHED:
      return {
        ...state,
        watched: action.payload,
      };
    case ADD_TO_WATCHLIST:
      return {
        ...state,
        watchlist: action.payload,
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
