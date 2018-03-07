import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import createRoutes from './router';

// styles
import 'font-awesome/css/font-awesome.css';
import './static/styles/index.css';

const MOUNT_NODE = document.getElementById('root');

const App = () => <Router history={browserHistory}>{createRoutes()}</Router>;

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, MOUNT_NODE);
});
