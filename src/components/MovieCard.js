/** @jsx jsx */
import { jsx } from '@emotion/core';

import { Link } from '@reach/router';
import StatusButtons from './StatusButtons';
import Rating from './Rating';

const MovieCard = props => {
  const { title, poster_path, id, overview } = props.movie;

  return (
    <div
      css={{
        border: '1px solid #cbb0d9',
        marginBottom: '10px',
        background: '#f3f2f3',
        marginLeft: '10px',
        marginRight: '10px',
        display: 'grid',
        gridTemplateColumns: '1fr 3fr',
        padding: '20px',
      }}
    >
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
      <div>
        <h2
          css={{ fontSize: '1.25em', marginBottom: '10px', fontWeight: '500' }}
        >
          {title}
        </h2>
        <p>{overview}</p>
        <div
          css={{
            display: 'flex',
            alignItems: 'center',
            marginTop: '10px',
          }}
        >
          <Link to={`/movie/${id}`}>Show Details</Link>
          <StatusButtons movie={props.movie} />
          <Rating totalStars={6} movie={props.movie} />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;