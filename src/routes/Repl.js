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
import trackAnalytics from '../lib/analytics';
import { getUrlParams } from '../lib/query';
import { compress, decompress } from '../lib/compress';

const examples = {
  text: import('raw-loader!../examples/text.txt'),
  knobs: import('raw-loader!../examples/knobs.txt'),
  styles: import('raw-loader!../examples/styles.txt'),
  resume: import('raw-loader!../examples/resume.txt'),
  images: import('raw-loader!../examples/images.txt'),
  fractals: import('raw-loader!../examples/fractals.txt'),
  'page-wrap': import('raw-loader!../examples/page-wrap.txt'),
  'mixed-styles': import('raw-loader!../examples/mixed-styles.txt'),
  'inline-styles': import('raw-loader!../examples/inline-styles.txt'),
  'media-queries': import('raw-loader!../examples/media-queries.txt'),
  'styled-components': import('raw-loader!../examples/styled-components.txt'),
};

const LoadableComponent = Loadable({
  loader: () => import('../components/ReplPage'),
  loading: Loading,
});

const onBackClick = () => () => {
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
  const { code, example } = getUrlParams(this.props.location.search);

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
  trackAnalytics,
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
