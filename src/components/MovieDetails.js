/** @jsx jsx */
import { jsx } from '@emotion/core';

import React, { useContext, useEffect, Fragment } from 'react';
import MoviesContext from '../context/movies/moviesContext';
import StatusButtons from './StatusButtons';
import Rating from './Rating';

const MovieDetails = ({ id }) => {
  const moviesContext = useContext(MoviesContext);

  const { getMovieDetails, movie } = moviesContext;

  useEffect(() => {
    setTimeout(() => {
      getMovieDetails(id);
    }, 1000);

    //eslint-disable-next-line
  }, [id]);

  return (
    <Fragment>
      {movie ? (
        <div
          css={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            padding: '30px 0',
          }}
        >
          <div>
            <img
              css={{
                margin: '0 auto',
              }}
              src={`http://image.tmdb.org/t/p/w342/${movie.poster_path}`}
              alt={movie.original_title}
            />
          </div>
          <div>
            <h1>{movie.original_title}</h1>
            {/* <div
              css={{
                display: 'flex',
                alignItems: 'center',
                height: '60px',
              }}
            >
              <StatusButtons movie={movie} />
              <Rating totalStars={6} movie={movie} />
            </div> */}
          </div>
          <p
            css={{
              gridColumn: 'span 2',
              padding: '20px 60px',
            }}
          >
            {movie.overview}
          </p>
          <div
            css={{
              display: 'flex',
              alignItems: 'center',
              height: '60px',
              paddingLeft: '40px',
              gridColumn: 'span 2',
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
