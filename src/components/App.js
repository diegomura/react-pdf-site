import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import withTheme from '../styled/withTheme';
import Docs from '../routes/Docs';
import Repl from '../routes/Repl';
import ScrollToTop from '../lib/scroll';

const App = () => (
  <BrowserRouter>
    <ScrollToTop>
      <Switch>
        <Route exact path="/repl" component={Repl} />
        <Route strict path="/" component={Docs} />
      </Switch>
    </ScrollToTop>
  </BrowserRouter>
);

export default withTheme(App);
