/** @jsx jsx */
import { jsx } from '@emotion/core';

import { useContext, useState } from 'react';
import MoviesContext from '../context/movies/moviesContext';
import AlertContext from '../context/alert/alertContext';
import MovieCard from '../components/MovieCard';
import { FaSearch } from 'react-icons/fa';

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
      <form
        onSubmit={onSubmit}
        css={{
          boxShadow: '0 1px 3px hsla(0,0%,0%,.2)',
          display: 'flex',
          justifyContent: 'center',
          maxWidth: '400px',
          margin: '0 auto',
          marginTop: '30px',
          borderRadius: '10px',
        }}
      >
        <input
          type='search'
          onChange={onChange}
          value={query}
          name='search'
          placeholder='search movies'
          css={{
            border: 'none',
            background: '#fff',
            // border: '1px solid hsl(280,35%,60%)',
            padding: '10px',
            flexGrow: '2',
            borderTopLeftRadius: '10px',
            borderBottomLeftRadius: '10px',
            outline: 'none',
          }}
        />
        <button
          type='submit'
          css={{
            border: '1px solid transparent',
            background: 'hsl(280,35%,60%)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            borderTopRightRadius: '10px',
            borderBottomRightRadius: '10px',
            maxWidth: '40px',
            width: '100%',
            outline: 'none',
            cursor: 'pointer',
            transition: 'background .3s',
            ': hover': {
              background: 'hsl(280,35%,40%)',
            },
          }}
        >
          <FaSearch />
        </button>
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
