/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import styled from '@emotion/styled';

const CardButton = props => {
  const { list, active } = props;

  const [text, setText] = useState('Add to');

  const handleClick = () => {
    props.add(props.movie);
    // active ? setText('Add to') : setText('Remove from');
    // active ? props.remove(props.movie) : props.add(props.movie);
  };

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
  console.log(active);
  return (
    <Button active={active} onClick={handleClick}>
      {`${text} ${list}`}
    </Button>
  );
};

export default CardButton;
