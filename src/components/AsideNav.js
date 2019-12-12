/** @jsx jsx */

import { jsx } from '@emotion/core';

import { Link } from '@reach/router';

const AsideNav = () => {
  return (
    <div
      css={{
        border: '2px solid pink',
      }}
    >
      <nav
        css={{
          textAlign: 'center',
          fontSize: '1.25em',
        }}
      >
        <ul>
          <li>
            <Link to='/'>Search Movies</Link>
          </li>
          <li>
            <Link to='/watched'>Watched</Link>
          </li>
          <li>
            <Link to='/watchlist'>Watchlist</Link>
          </li>
          <li>Watched</li>
        </ul>
      </nav>
    </div>
  );
};

export default AsideNav;
