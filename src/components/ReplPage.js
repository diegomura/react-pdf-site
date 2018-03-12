import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Nav from './Nav';
import Icon from './Icon';
import Logo from './Logo';
import Menu from './Menu';
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

const BackButton = styled.button`
  border: 0px;
  width: 100%;
  height: 64px;
  color: white;
  display: flex;
  outline: none;
  cursor: pointer;
  align-items: center;
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

const LeftNav = ({ onBackClick }) => (
  <NavWrapper width="64px">
    {process.env.NODE_ENV !== 'production' && (
      <BackButton onClick={onBackClick}>
        <Icon type="arrow-left" size={18} />
      </BackButton>
    )}
    <NavBody>
      <SmallLogo size="32px" />
    </NavBody>
    <GitHubIcon />
  </NavWrapper>
);

export default ({
  code,
  shareUrl,
  documentUrl,
  children,
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
