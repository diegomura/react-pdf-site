import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';
import Icon from './Icon';
import Logo from './Logo';
import Repl from './Repl';
import ReplBanner from './ReplBanner';
import GitHubIcon from './GitHubIcon';

const Section = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: calc(100% - 64px);
`;

const Main = styled.main`
  display: flex;
  height: 100vh;
`;

const NavWrapper = Nav.extend`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const BackButton = styled(NavLink)`
  border: 0px;
  width: 100%;
  height: 64px;
  color: white;
  display: flex;
  outline: none;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  justify-content: center;
  background: ${({ theme }) => theme.red};
`;

const NavBody = styled.div`
  flex: 1;
`;

const SmallLogo = styled(Logo)`
  padding: 0px;
  margin-top: 64px;
`;

const LeftNav = () => (
  <NavWrapper width="64px">
    <BackButton to="/">
      <Icon type="arrow-left" size={18} />
    </BackButton>
    <NavBody>
      <SmallLogo size="32px" />
    </NavBody>
    <GitHubIcon />
  </NavWrapper>
);

const ReplPage = ({
  code,
  shareUrl,
  documentUrl,
  onChange,
  onUrlChange,
  onBackClick,
}) => (
  <Main>
    <LeftNav onBackClick={onBackClick} />
    <Section>
      <Repl value={code} onChange={onChange} onUrlChange={onUrlChange} />
      <ReplBanner code={code} documentUrl={documentUrl} shareUrl={shareUrl} />
    </Section>
  </Main>
);

LeftNav.propTypes = {
  onBackClick: PropTypes.func.isRequired,
};

ReplPage.propTypes = {
  code: PropTypes.string.isRequired,
  shareUrl: PropTypes.string.isRequired,
  documentUrl: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onUrlChange: PropTypes.func.isRequired,
  onBackClick: PropTypes.func.isRequired,
};

export default ReplPage;
