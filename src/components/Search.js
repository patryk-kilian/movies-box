/** @jsx jsx */
import { jsx } from '@emotion/core';

import { useContext, useState } from 'react';
import MoviesContext from '../context/movies/moviesContext';
import AlertContext from '../context/alert/alertContext';
import MovieCard from '../components/MovieCard';

const Search = () => {
  const alertContext = useContext(AlertContext);
  const moviesContext = useContext(MoviesContext);

  const { searchMovies, fetchedMovies } = moviesContext;
  const { setAlert } = alertContext;

  const [query, setQuery] = useState('');

  const onChange = e => setQuery(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    if (!query) {
      setAlert('Please enter something');
    } else {
      searchMovies(query);
      setQuery('');
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='search'
          onChange={onChange}
          value={query}
          name='search'
          placeholder='search movies'
        />
        <input type='submit' value='search' />
      </form>
      <div css={{}}>
        {fetchedMovies &&
          fetchedMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  );
};

export default Search;
