import React from 'react';
import Loadable from 'react-loadable';
import Loading from '../components/Loading';

const LoadableComponent = Loadable({
  loader: () => import('../components/Home'),
  loading: Loading,
});

export default LoadableComponent;
