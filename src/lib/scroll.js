import { withRouter } from 'react-router-dom';
import { compose, lifecycle } from 'recompose';

const ScrollToTop = ({ children }) => children;

function componentDidUpdate(prevProps) {
  if (this.props.location !== prevProps.location) {
    window.scrollTo(0, 0);
  }
}

export default compose(withRouter, lifecycle({ componentDidUpdate }))(
  ScrollToTop,
);
