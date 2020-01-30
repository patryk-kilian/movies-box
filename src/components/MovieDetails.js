/** @jsx jsx */
import { jsx } from '@emotion/core';

import React, { useContext, useEffect, Fragment } from 'react';
import MoviesContext from '../context/movies/moviesContext';
import StatusButtons from './StatusButtons';
import Rating from './Rating';

const MovieDetails = ({ id }) => {
  const moviesContext = useContext(MoviesContext);

  const { getMovieDetails, clearMovie, movie } = moviesContext;

  useEffect(() => {
    getMovieDetails(id);

    return () => clearMovie();

    //eslint-disable-next-line
  }, [id]);

  return (
    <Fragment>
      {movie ? (
        <div
          css={{
            display: 'grid',
            gridTemplateColumns: '2fr 3fr',
            padding: '30px 0 0 40px',
          }}
        >
          <div>
            <img
              src={`http://image.tmdb.org/t/p/w342/${movie.poster_path}`}
              alt={movie.original_title}
            />
          </div>
          <div css={{ paddingLeft: '40px' }}>
            <h1 css={{ color: 'hsl(280, 70%, 20%)' }}>
              {movie.original_title}
            </h1>
            <ul
              css={{
                color: 'hsl(213, 61%, 17%)',
                fontSize: '18px',
                '& span': { fontWeight: '600' },
              }}
            >
              <li>
                Generes:{' '}
                <span>{movie.genres.map(genre => genre.name).join(', ')}</span>
              </li>
              <li>
                Release date: <span>{movie.release_date}</span>
              </li>
              <li>
                Runtime: <span>{movie.runtime} min</span>
              </li>
              <li>
                Budget: <span>{movie.budget}</span>
              </li>
            </ul>
            <p css={{ marginTop: '10px', fontSize: '18px' }}>
              {movie.overview}
            </p>
          </div>
          <div
            css={{
              display: 'flex',
              alignItems: 'center',
              height: '60px',
              gridColumn: 'span 2',
              marginTop: '30px',
            }}
          >
            <StatusButtons movie={movie} />
            <Rating
              css={{
                marginLeft: '40px',
              }}
              totalStars={6}
              movie={movie}
            />
          </div>
        </div>
      ) : (
        <h1>ni ma</h1>
      )}
    </Fragment>
  );
};

export default MovieDetails;
