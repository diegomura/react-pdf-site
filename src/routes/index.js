import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import App from './App';
import Home from './Home';
import NotFound from './NotFound';

const createRoutes = () =>
  <Route path="/" component={App}>
    <IndexRedirect to="home" />
    <Route path="home" component={Home} />
    <Route path="*" component={NotFound} />
  </Route>;

export default createRoutes;
