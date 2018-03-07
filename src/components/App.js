import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router';
import SearchInput from './SearchInput';
import Nav from './Nav';
import Logo from './Logo';
import Menu from './Menu';
import GitHubIcon from './GitHubIcon';
import withTheme from '../styled/withTheme';
import HeadingRegistry from '../lib/headings';

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
  <HeadingRegistry>
    <Main>
      <Nav>
        <Fixed>
          <SearchInput />
          <Link to="/">
            <Logo />
          </Link>
          <Menu />
          <GitHubIcon />
        </Fixed>
      </Nav>

      <Section>{children}</Section>
    </Main>
  </HeadingRegistry>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withTheme(App);
