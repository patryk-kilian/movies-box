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
        boxShadow: '0 2px 6px hsla(0, 0%, 0%,.2)',
        // borderRadius: '20px',
        borderTop: '5px solid hsl(280, 35%, 60%)',
        marginTop: '20px',
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
            boxShadow: '0 6px 12px hsla(0,0%,0%,.3)',
          }}
          src={`http://image.tmdb.org/t/p/w154/${poster_path}`}
          alt=''
        />
      ) : (
        <h2>no poster biatch</h2>
      )}
      <div>
        <h2
          css={{
            fontSize: '1.4rem',
            marginBottom: '10px',
            fontWeight: '700',
            color: 'hsl(280, 70%, 20%)',
          }}
        >
          {title}
        </h2>
        <p css={{ color: 'hsl(213, 61%, 17%)' }}>{overview}</p>
        <div
          css={{
            display: 'flex',
            alignItems: 'center',
            marginTop: '10px',
            height: '60px',
          }}
        >
          <Link
            css={{
              position: 'relative',
              color: '#4d2d5d',
              textTransform: 'uppercase',
              fontWeight: '600',
              '&::before': {
                content: `''`,
                position: 'absolute',
                height: '2px',
                width: '0',
                bottom: '0',
                left: '0',
                background: '#4d2d5d',
                transition: 'width .2s',
              },
              '&:hover': {
                '&::before': {
                  width: '100%',
                },
              },
            }}
            to={`/movie/${id}`}
          >
            Show Details
          </Link>
          <StatusButtons movie={props.movie} />
          <Rating totalStars={6} movie={props.movie} />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
