import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SearchInput from '../components/SearchInput';
import Main from '../components/Main';
import Nav from '../components/Nav';
import Section from '../components/Section';
import Logo from '../components/Logo';
import Icon from '../components/Icon';
import Menu from '../components/Menu';

const Fixed = styled.div`
  width: inherit;
  height: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GitHubIcon = styled(({ className }) =>
  <a
    target="_blank"
    rel="noopener noreferrer"
    href="http://www.github.com/diegomura/react-pdf"
    className={className}
  >
    <Icon type="github" size={30} />
  </a>,
)`
  color: black;
  margin-bottom: 36px;
  opacity: 0.3;
`;

const App = ({ children }) =>
  <Main>
    <Nav>
      <Fixed>
        <SearchInput />
        <Logo />
        <Menu />
        <GitHubIcon />
      </Fixed>
    </Nav>

    <Section>
      {children}
    </Section>
  </Main>;

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
