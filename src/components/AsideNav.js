/** @jsx jsx */

import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from '@reach/router';

const NavLink = styled(Link)({
  position: 'relative',
  display: 'block',
  color: '#fff',
  textDecoration: 'none',
  textTransform: 'uppercase',
  width: '100%',
  borderBottom: '1px solid rgba(0,0,0,0.3);',
  borderTop: '1px solid rgba(255,255,255,0.04)',
  padding: '10px 0',
  '&::before': {
    content: `''`,
    position: 'absolute',
    height: '2px',
    width: 0,
    bottom: '0',
    left: '0',
    background: '#fff',
    transition: 'width .2s',
  },
  '&:hover': {
    '&::before': {
      width: '100%',
    },
  },
});

const AsideNav = () => {
  return (
    <div
      css={{
        background: '#4d2d5d',
        position: 'fixed',
        width: '300px',
        height: '100vh',
      }}
    >
      <nav
        css={{
          textAlign: 'center',
          fontSize: '1.25em',
          padding: '30px 0',
        }}
      >
        <ul>
          <li>
            <NavLink to='/'>Search Movies</NavLink>
          </li>
          <li>
            <NavLink to='/watched'>Watched</NavLink>
          </li>
          <li>
            <NavLink to='/watchlist'>Watchlist</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AsideNav;
