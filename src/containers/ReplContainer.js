import React from 'react';
import Loadable from 'react-loadable';
import {
  compose,
  withState,
  withHandlers,
  withProps,
  lifecycle,
} from 'recompose';
import { browserHistory } from 'react-router';
import Loading from '../components/Loading';
import withTheme from '../styled/withTheme';
import { compress, decompress } from '../utils/compress';

const examples = {
  text: import('raw-loader!../examples/text.txt'),
  knobs: import('raw-loader!../examples/knobs.txt'),
  resume: import('raw-loader!../examples/resume.txt'),
  images: import('raw-loader!../examples/images.txt'),
  fractals: import('raw-loader!../examples/fractals.txt'),
  'page-wrap': import('raw-loader!../examples/page-wrap.txt'),
  'media-queries': import('raw-loader!../examples/media-queries.txt'),
};

const LoadableComponent = Loadable({
  loader: () => import('../components/ReplPage'),
  loading: Loading,
});

const onBackClick = props => () => {
  browserHistory.push('/');
};

const onChange = props => code => {
  props.setCode(code);
};

const onUrlChange = props => url => {
  props.setDocumentUrl(url);
};

const setShareUrl = ({ code }) => ({
  shareUrl: `${window.location.host}/repl?code=${compress(code)}`,
});

const setInitialValueFromCode = code => {
  let initialValue = '';

  try {
    initialValue = decompress(code);
  } catch (e) {
    // noob
  }

  return initialValue;
};

const setInitialValueFromExample = async example => {
  let initialValue = '';

  if (examples[example]) {
    initialValue = await examples[example];
  }

  return initialValue;
};

async function componentDidMount() {
  let initialValue = '';
  const { code, example } = this.props.location.query;

  if (code) {
    initialValue = setInitialValueFromCode(code);
  } else if (example) {
    initialValue = await setInitialValueFromExample(example);
  } else {
    initialValue = await setInitialValueFromExample('page-wrap');
  }

  this.props.setCode(initialValue);
}

export default compose(
  withTheme,
  withState('code', 'setCode', ''),
  withState('documentUrl', 'setDocumentUrl', null),
  lifecycle({ componentDidMount }),
  withProps(setShareUrl),
  withHandlers({
    onBackClick,
    onChange,
    onUrlChange,
  }),
)(LoadableComponent);
