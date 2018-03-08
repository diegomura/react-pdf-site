import React from 'react';
import Loadable from 'react-loadable';
import { compose, withState, withHandlers, withProps } from 'recompose';
import { browserHistory } from 'react-router';
import Loading from '../components/Loading';
import withTheme from '../styled/withTheme';
import { compress, decompress } from '../utils/compress';

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

const compressCode = ({ code }) => ({
  compressedCode: compress(code),
});

const setInitialValue = ({ location }) => {
  return {
    initialValue: decompress(location.query.code),
  };
};

export default compose(
  withTheme,
  withState('code', 'setCode', ''),
  withState('documentUrl', 'setDocumentUrl', null),
  withProps(compressCode),
  withProps(setInitialValue),
  withHandlers({
    onBackClick,
    onCodeChange,
    onUrlChange,
  }),
)(LoadableComponent);
