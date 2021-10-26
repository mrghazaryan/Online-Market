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
            <ul className={"nav"}>
                {
                    ROUTES.filter(route => !route.isAuth).map(route => (
                        <li className="menu" key={route.id}>
                            <Link to={route.path} className="link">
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