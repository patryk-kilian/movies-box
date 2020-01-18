/** @jsx jsx */
import { jsx } from '@emotion/core';

import { useContext } from 'react';
import MoviesContext from '../context/movies/moviesContext';

import { FaStar } from 'react-icons/fa';

const Star = ({ selected, onClick, hoovered }) => (
  <button
    className={`siema`}
    onClick={onClick}
    css={{
      color: selected ? 'red' : 'grey',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      ':hover ~ button': {
        color: 'grey',
      },
    }}
  >
    <FaStar css={{ height: '30px', width: '30px', transition: 'color .3s' }} />
    {console.log(hoovered)}
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
      }}
    >
      <div
        css={{
          display: 'flex',
          ':hover button': {
            color: 'red',
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
      <p>
        {myMovie.rating
          ? `${myMovie.rating} of ${totalStars} stars`
          : `no rating`}
      </p>
    </div>
  ) : null;
};

export default Rating;
