import React, { Fragment } from 'react';
import styled from 'styled-components';
import { withState } from 'recompose';
import Menu from './Menu';
import Header from './Header';
import media from '../styled/media';

const Section = styled.section`
  flex: 1;
  width: 100%;
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
  margin-left: 240px;
  ${media.phone`margin: 0px`}
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
  ${media.phone`
    display: none;
  `}
`;

const Frame = ({ menuOpened, onMenuClick, children }) => (
  <Fragment>
    <Header onMenuClick={() => onMenuClick(!menuOpened)} />
    <Main>
      <Menu opened={menuOpened} />
      <Section onClick={() => onMenuClick(false)}>
        <Content>
          {children}
        </Content>
      </Section>

      <CornerGraphicsImage src="/static/images/corner-graphics.png" />
    </Main>
  </Fragment>
);

export default withState('menuOpened', 'onMenuClick', false)(Frame);
