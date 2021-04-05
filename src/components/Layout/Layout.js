import React, { useState } from 'react';
import styled from '@emotion/styled';

import Menu from './Menu';
import Header from './Header';
import Icon from '../UI/Icon';
import Link from '../UI/Link';
import media from '../../styled/media';
import PageBanner from '../UI/PageBanner';

const Section = styled.section`
  flex: 1;
  width: 100%;
  margin: 0 auto;
  padding: 110px;
  max-width: 1100px;
  overflow-y: ${(props) => props.menuOpened && 'hidden'};

  ${media.tablet} {
    padding: 4em;
  }

  ${media.phone} {
    padding: 1.5em;
    padding-bottom: 3em;
  }
`;

const Main = styled.main`
  display: flex;
  min-height: 100%;
  margin-left: 240px;

  ${media.tablet} {
    margin: 0px;
  }
`;

const Content = styled.div`
  position: relative;
`;

const CornerGraphicsImage = styled.img`
  top: 0;
  right: 0;
  width: 15%;
  position: absolute;
  pointer-events: none;

  ${media.phone} {
    display: none;
  }
`;

const Frame = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <PageBanner>
        New react-pdf 2.0 was relesed.{' '}
        <Link href="/blog/announcing-react-pdf-v2">
          Read about the announcement <Icon type="arrow-right" />
        </Link>
      </PageBanner>

      <Header onMenuClick={() => setMenuOpen(!menuOpen)} />

      <Main>
        <Menu opened={menuOpen} />
        <Section menuOpened={menuOpen} onClick={() => setMenuOpen(false)}>
          <Content>{children}</Content>
        </Section>

        <CornerGraphicsImage src="/images/corner-graphics.png" />
      </Main>
    </>
  );
};

export default Frame;
