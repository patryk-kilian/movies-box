/** @jsx jsx */
import { jsx } from '@emotion/core';

import { useContext } from 'react';
import MoviesContext from '../context/movies/moviesContext';

import { FaStar } from 'react-icons/fa';

const Star = ({ selected, onClick }) => (
  <button
    onClick={onClick}
    css={{
      color: selected ? 'hsl(52, 85%, 51%)' : 'hsl(220, 3%, 50%)',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      ':hover ~ button': {
        color: 'hsl(220, 3%, 50%)',
      },
    }}
  >
    <FaStar css={{ height: '30px', width: '30px', transition: 'color .3s' }} />
  </button>
);

const Rating = ({ totalStars, movie }) => {
  const moviesContext = useContext(MoviesContext);

  const { myMovies, setRating } = moviesContext;

  const myMovie = myMovies.find(el => el.id === movie.id);

  return myMovie ? (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: 'auto',
      }}
    >
      <div
        css={{
          display: 'flex',
          ':hover button': {
            color: 'hsl(52, 85%, 51%)',
          },
        }}
      >
        {[...Array(totalStars)].map((el, i) => (
          <Star
            key={i}
            selected={i < myMovie.rating}
            onClick={() => setRating(i + 1, movie)}
          />
        ))}
      </div>
      <p css={{ color: 'hsl(213,61%,17%)', fontSize: '0.8rem' }}>
        {myMovie.rating
          ? `${myMovie.rating} of ${totalStars} stars`
          : `no rating`}
      </p>
    </div>
  ) : null;
};

export default Rating;
