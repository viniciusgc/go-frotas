import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Login, Home, Reserves } from './views';
import { isAuthenticated } from './auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.loaction } }} />
      )
    }
  />
);

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Login} exact />
      <PrivateRoute path="/inicio" component={Home} exact />
      <PrivateRoute path="/reservas" component={Reserves} exact />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
