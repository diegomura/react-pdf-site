import React from 'react';
import styled from 'styled-components';
import { Route, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import Guide from './Guide';
import RenderingProcess from './RenderingProcess';
import Components from './Components';
import Styling from './Styling';
import Advanced from './Advanced';
import NotFound from './NotFound';
import SearchInput from '../components/SearchInput';
import Nav from '../components/Nav';
import Logo from '../components/Logo';
import Menu from '../components/Menu';
import GitHubIcon from '../components/GitHubIcon';

// assets
import CornerGraphics from '../static/images/corner-graphics.png';

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
`;

const Docs = () => (
  <Main>
    <Nav>
      <Fixed>
        <SearchInput />
        <NavLink to="/">
          <Logo />
        </NavLink>
        <Menu />
        <GitHubIcon />
      </Fixed>
    </Nav>

    <Section>
      <Content>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/quick-start-guide" component={Guide} />
          <Route path="/rendering-process" component={RenderingProcess} />
          <Route path="/components" component={Components} />
          <Route path="/styling" component={Styling} />
          <Route path="/advanced" component={Advanced} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Content>
    </Section>

    <CornerGraphicsImage src={CornerGraphics} />
  </Main>
);

export default Docs;
