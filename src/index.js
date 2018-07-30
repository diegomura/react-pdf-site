import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// styles
import 'font-awesome/css/font-awesome.css';
import './static/styles/index.css';

const MOUNT_NODE = document.getElementById('root');

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, MOUNT_NODE);
});
