import React, { Fragment } from 'react';
import styled from 'styled-components';
import Logo from '../src/components/Logo';
import Title from '../src/components/Title';
import Button from '../src/components/Button';
import media from '../src/styled/media';
import { injectComponents } from '../src/lib/markdown';
import Content from '../docs/installation.md';

const EnhancedContent = injectComponents(Content);

const DocumentGraphicImage = styled.img.attrs({
  src: '/static/images/document-graphic.png',
})`
  margin: 50px;
  width: 210px;
  ${media.phone`
    width: 130px;
    margin: 50px 30px;
  `}
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

const LogoBanner = styled(Logo)`
  padding: 0 0 3em 0;
  display: none;
  ${media.phone`display: flex;`}
`;

const Home = () => (
  <Fragment>
    <LogoBanner size="37px" withText/>
    <Title />
    <Hero />
    <EnhancedContent />
  </Fragment>
);

export default Home;
