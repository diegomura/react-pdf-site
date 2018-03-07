import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SearchInput from '../components/SearchInput';
import Nav from '../components/Nav';
import Logo from '../components/Logo';
import Menu from '../components/Menu';
import GitHubIcon from '../components/GitHubIcon';
import withTheme from '../styled/withTheme';

const Section = styled.section`
  flex: 1;
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

const App = ({ children }) => (
  <Main>
    <Nav>
      <Fixed>
        <SearchInput />
        <Logo />
        <Menu />
        <GitHubIcon />
      </Fixed>
    </Nav>

    <Section>{children}</Section>
  </Main>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withTheme(App);
