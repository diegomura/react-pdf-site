import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { injectComponents } from '../lib/markdown';

// assets
import CornerGraphics from '../static/images/corner-graphics.png';

const CornerGraphicsImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`;

const DocsPage = ({ content }) => {
  const EnhancedContent = injectComponents(content);

  return (
    <div>
      <EnhancedContent />
      <CornerGraphicsImage src={CornerGraphics} />
    </div>
  );
};

DocsPage.propTypes = {
  content: PropTypes.func.isRequired,
};

export default DocsPage;
