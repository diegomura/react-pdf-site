import React from 'react';
import PropTypes from 'prop-types';
import { injectComponents } from '../lib/markdown';

const DocsPage = ({ content }) => {
  const EnhancedContent = injectComponents(content);

  return <EnhancedContent />;
};

DocsPage.propTypes = {
  content: PropTypes.func.isRequired,
};

export default DocsPage;
