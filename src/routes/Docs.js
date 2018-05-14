import React from 'react';
import styled from 'styled-components';
import { Route, Switch, NavLink } from 'react-router-dom';
import Home from '../routes/Home';
import Guide from '../routes/Guide';
import Components from '../routes/Components';
import Styling from '../routes/Styling';
import Advanced from '../routes/Advanced';
import NotFound from '../components/NotFound';
import SearchInput from '../components/SearchInput';
import Nav from '../components/Nav';
import Logo from '../components/Logo';
import Menu from '../components/Menu';
import GitHubIcon from '../components/GitHubIcon';

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

const Fixed = styled.div`
  width: inherit;
  height: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Docs = () => (
  <div>
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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/quick-start-guide" component={Guide} />
          <Route path="/components" component={Components} />
          <Route path="/styling" component={Styling} />
          <Route path="/advanced" component={Advanced} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Section>
    </Main>
  </div>
);

export default Docs;
