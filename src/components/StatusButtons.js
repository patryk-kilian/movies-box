import React from 'react';
import styled from '@emotion/styled';
import { useContext } from 'react';
import MoviesContext from '../context/movies/moviesContext';

const StatusButtons = ({ movie }) => {
  const moviesContext = useContext(MoviesContext);

  const { addMovie, deleteMovie, toggleWatched, myMovies } = moviesContext;

  const myMovie = myMovies.find(el => el.id === movie.id);

  const Button = styled.button(props => ({
    display: 'block',
    textDecoration: 'none',
    width: '100%',
    maxWidth: '150px',
    padding: '8px 5px',
    background: props.active ? 'green' : '#4d2d5d',
    border: 'none',
    color: '#f3f2f3',
    textTransform: 'uppercase',
    fontSize: '.8em',
    fontWeight: '700',
    textAlign: 'center',
    marginRight: '5px',
    cursor: 'pointer',
    transition: 'background .3s',
    ':hover': props.active
      ? {
          background: 'blue',
        }
      : {
          background: 'pink',
        },
  }));

  if (!myMovie) return <Button onClick={() => addMovie(movie)}>add</Button>;
  else
    return (
      <>
        <Button onClick={() => deleteMovie(myMovie)}>delete</Button>
        {myMovie.watched ? (
          <Button onClick={() => toggleWatched(myMovie)}>unwatch</Button>
        ) : (
          <Button onClick={() => toggleWatched(myMovie)}>watch</Button>
        )}
      </>
    );
};

export default StatusButtons;
