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

const onCodeChange = props => code => {
  props.setCode(code);
};

const onUrlChange = props => url => {
  props.setDocumentUrl(url);
};

export default compose(
  withTheme,
  withState('code', 'setCode', ''),
  withState('documentUrl', 'setDocumentUrl', null),
  withHandlers({
    onBackClick,
    onCodeChange,
    onUrlChange,
  }),
)(LoadableComponent);
