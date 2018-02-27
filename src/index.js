import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import 'font-awesome/css/font-awesome.css';
import createRoutes from './routes';
import './styles/index.css';

const MOUNT_NODE = document.getElementById('root');

const App = () =>
  <Router history={browserHistory}>
    {createRoutes()}
  </Router>;

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, MOUNT_NODE);
});
