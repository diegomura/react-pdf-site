import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import Button from './Button';
import { injectComponents } from '../lib/markdown';

// assets
import DocumentGraphic from '../static/images/document-graphic.png';
import Content from '../../docs/installation.md';

const EnhancedContent = injectComponents(Content);

const DocumentGraphicImage = styled.img.attrs({
  src: DocumentGraphic,
})`
  margin: 50px;
  width: 210px;
`;

const HeroWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Hero = () => (
  <HeroWrapper>
    <DocumentGraphicImage />
    <Button primary>Try it out!</Button>
  </HeroWrapper>
);

const Home = () => (
  <div>
    <Title />
    <Hero />
    <EnhancedContent />
  </div>
);

export default Home;
