import React from 'react';
import Loadable from 'react-loadable';
import { compose, withState, withHandlers } from 'recompose';
import { browserHistory } from 'react-router';
import Loading from '../components/Loading';
import withTheme from '../styled/withTheme';

const LoadableComponent = Loadable({
  loader: () => import('../components/ReplPage'),
  loading: Loading,
});

const onBackClick = props => () => {
  browserHistory.push('/');
};

export default compose(
  withTheme,
  withHandlers({ onBackClick }),
  withState('documentUrl', 'setDocumentUrl', null),
)(LoadableComponent);
