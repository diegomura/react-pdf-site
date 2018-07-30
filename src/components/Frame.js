import React from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';
import Logo from '../components/Logo';
import Menu from '../components/Menu';
import GitHubIcon from '../components/GitHubIcon';
import SearchInput from '../components/SearchInput';
import media from '../styled/media';

const Section = styled.section`
  flex: 1;
  margin: 0 auto;
  max-width: 1000px;
  padding: ${props => props.padding || '110px'};
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
  <Main>


    <Section>
      <Content>
        {children}
      </Content>
    </Section>

    <CornerGraphicsImage src="/static/images/corner-graphics.png" />
  </Main>
);

export default Frame;
