import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Nav from './components/nav';
import {ROUTES} from './helpers/constants';

const App = () => {
  return (
    <div className={'container'}>
      <Nav/>
      <div className={'content'}>
        <Switch>
          <Redirect exact from='/' to='/sign-in'/>
          {
            ROUTES.map(route => (
              <Route key={route.id} path={route.path}>
                {route.component}
              </Route>
            ))
          }
        </Switch>
      </div>
    </div>
  );
}

export default App;