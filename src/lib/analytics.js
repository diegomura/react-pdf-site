import ReactGA from 'react-ga';
import { lifecycle } from 'recompose';

function componentDidMount() {
  ReactGA.initialize(GA_TOKEN);
  ReactGA.pageview(window.location.pathname + window.location.search);
}

export default lifecycle({ componentDidMount });
