import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import {ROUTES} from '../../helpers/constants';

const Nav = () => {
  const location = useLocation();

  return (location.pathname && (
      location.pathname !== '/sign-in' &&
      location.pathname !== '/sign-up')
  )
    ? (
      <ul>
        {
          ROUTES.filter(route => !route.isAuth).map(route => (
            <li key={route.id}>
              <Link to={route.path}>
                {route.name}
              </Link>
            </li>
          ))
        }
      </ul>
    )
    : null;
};

export default Nav;