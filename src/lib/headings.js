import PropTypes from 'prop-types';
import { compose, withStateHandlers, withContext, getContext } from 'recompose';

const contextPropTypes = {
  headings: PropTypes.array,
  registerHeading: PropTypes.func,
};

const registerHeading = ({ headings }) => heading => ({
  headings: [...headings, heading],
});

export const mapHeadingRegistry = getContext(contextPropTypes);

export default compose(
  withStateHandlers({ headings: [] }, { registerHeading }),
  withContext(contextPropTypes, props => ({
    headings: props.headings,
    registerHeading: props.registerHeading,
  })),
)(({ children }) => children);
