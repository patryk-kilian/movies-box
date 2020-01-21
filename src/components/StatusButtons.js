import React from 'react';
import styled from '@emotion/styled';
import { useContext } from 'react';
import MoviesContext from '../context/movies/moviesContext';
import { FaPlus, FaMinus } from 'react-icons/fa';

const StatusButtons = ({ movie }) => {
  const moviesContext = useContext(MoviesContext);

  const { addMovie, deleteMovie, toggleWatched, myMovies } = moviesContext;

  const myMovie = myMovies.find(el => el.id === movie.id);

  const IconButton = styled.button(props => ({
    position: 'relative',
    height: '40px',
    width: '40px',
    border: 'none',
    marginLeft: '20px',
    background: props.add ? '	hsl(120, 100%, 73%)' : 'hsl(0, 100%, 70%)',
    color: props.add ? 'hsl(120, 100%, 20%)' : '	hsl(0, 100%, 17%)',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.4rem',
    cursor: 'pointer',
    transition: 'background .3s',
    '& svg': {
      transition: 'transform .3s',
    },
    '&:hover': {
      background: props.add ? 'hsl(120, 100%, 60%)' : 'hsl(0, 100%, 60%)',
      '.plus-icon': {
        transform: 'rotate(90deg)',
      },
    },
  }));

  const Button = styled.button(props => ({
    display: 'block',
    textDecoration: 'none',
    width: '100%',
    maxWidth: '150px',
    marginLeft: '20px',
    padding: '8px 5px',
    background: 'hsl(280,35%,60%)',
    borderRadius: '5px',
    boxShadow: '0 1px 3px hsla(0,0%,0%,.2)',
    border: 'none',
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: '.8em',
    fontWeight: '700',
    textAlign: 'center',
    marginRight: '5px',
    cursor: 'pointer',
    transition: 'background .3s',
    ':hover': { background: 'hsl(280,35%,40%)' },
  }));

  if (!myMovie)
    return (
      <IconButton add='true' onClick={() => addMovie(movie)}>
        <FaPlus className='plus-icon' />
      </IconButton>
    );
  else
    return (
      <>
        <IconButton onClick={() => deleteMovie(myMovie)}>
          <FaMinus />
        </IconButton>
        {myMovie.watched ? (
          <Button onClick={() => toggleWatched(myMovie)}>unwatch</Button>
        ) : (
          <Button onClick={() => toggleWatched(myMovie)}>watch</Button>
        )}
      </>
    );
};

export default StatusButtons;
