/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Link } from '@reach/router';

const MovieCard = props => {
  const { title, poster_path, id } = props.movie;

  return (
    <div
      css={{
        border: '2px solid orangered',
      }}
    >
      <h1 css={{ fontSize: '16px' }}>{title}</h1>
      {poster_path ? (
        <img
          css={{
            margin: '0 auto',
          }}
          src={`http://image.tmdb.org/t/p/w154/${poster_path}`}
          alt=''
        />
      ) : (
        <h2>no poster biatch</h2>
      )}
      <Link to={`/movie/${id}`}>Details</Link>
    </div>
  );
};

export default MovieCard;
