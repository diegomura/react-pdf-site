import React from 'react';
import styled from 'styled-components';
import { injectComponents } from '../lib/markdown';

// assets
import CornerGraphics from '../static/images/corner-graphics.png';
import Content from '../../docs/styling.md';

const EnhancedContent = injectComponents(Content);

const CornerGraphicsImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`;

const Home = () => (
  <div>
    <EnhancedContent />
    <CornerGraphicsImage src={CornerGraphics} />
  </div>
);

export default Home;
