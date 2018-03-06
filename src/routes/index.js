import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import App from './App';
import Home from './Home';
import Repl from './Repl';
import NotFound from './NotFound';

const createRoutes = () => (
  <div>
    <Route path="/repl" component={Repl} />
    <Route path="/" component={App}>
      <IndexRedirect to="home" />
      <Route path="home" component={Home} />
      <Route path="*" component={NotFound} />
    </Route>
  </div>
);

export default createRoutes;
