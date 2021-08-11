import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, Reserves } from './views';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/reservas" component={Reserves} exact />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
