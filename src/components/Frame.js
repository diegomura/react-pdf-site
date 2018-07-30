import React, { Fragment } from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';
import Logo from '../components/Logo';
import Menu from '../components/Menu';
import Header from '../components/Header';
import GitHubIcon from '../components/GitHubIcon';
import SearchInput from '../components/SearchInput';
import media from '../styled/media';

const Section = styled.section`
  flex: 1;
  margin: 0 auto;
  padding: 110px;
  max-width: 1000px;
  ${media.phone`
    padding: 1.5em;
    padding-bottom: 3em;
  `}
`;

const Main = styled.main`
  display: flex;
  min-height: 100%;
`;

const Content = styled.div`
  position: relative;
`;

const Fixed = styled.div`
  width: inherit;
  height: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CornerGraphicsImage = styled.img`
  top: 0;
  right: 0;
  width: 15%;
  position: absolute;
  pointer-events: none;
  ${media.phone`
    display: none;
  `}
`;

const Frame = ({ children }) => (
  <Fragment>
    <Header />
    <Main>
      {/* <Nav>
        <Fixed>
          <SearchInput />
          <Logo />
          <Menu />
          <GitHubIcon />
        </Fixed>
      </Nav> */}

      <Section>
        <Content>
          {children}
        </Content>
      </Section>

      <CornerGraphicsImage src="/static/images/corner-graphics.png" />
    </Main>
  </Fragment>
);

export default Frame;
