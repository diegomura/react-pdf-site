import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import dynamic from 'next/dynamic';

import media from '../src/styled/media';
import Logo from '../src/components/UI/Logo';
import Layout from '../src/components/Layout';
import Title from '../src/components/UI/Title';
import Button from '../src/components/UI/Button';
import EditButton from '../src/components/Docs/EditButton';

const Content = dynamic(() => import('../docs/quick-start.md'), { ssr: false });

const DocumentGraphicImage = styled.img`
  margin: 50px;
  width: 210px;

  ${media.phone} {
    width: 130px;
    margin: 50px 30px;
  }
`;

const HeroWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Hero = () => (
  <HeroWrapper>
    <DocumentGraphicImage src="/images/document-graphic.png" />
    <Link href="/repl" legacyBehavior>
      <Button primary="true">Try it out!</Button>
    </Link>
  </HeroWrapper>
);

const LogoBanner = styled(Logo)`
  display: none;
  padding: 0 0 3em 0;

  ${media.phone} {
    display: flex;
  }
`;

const Home = () => (
  <Layout>
    <EditButton to="https://github.com/react-pdf/site/blob/master/docs/quick-start.md" />
    <LogoBanner size="37px" rotate withText />
    <Title />
    <Hero />
    <Content />
  </Layout>
);

export default Home;
