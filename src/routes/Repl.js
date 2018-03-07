import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { compose, withState, withHandlers } from 'recompose';
import { browserHistory } from 'react-router';
import Nav from '../components/Nav';
import Icon from '../components/Icon';
import Logo from '../components/Logo';
import Menu from '../components/Menu';
import Repl from '../components/Repl';
import Button from '../components/Button';
import GitHubIcon from '../components/GitHubIcon';
import withTheme from '../styled/withTheme';

const Section = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
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
    <BackButton onClick={onBackClick}>
      <Icon type="arrow-left" size={18} />
    </BackButton>
    <NavBody>
      <SmallLogo size="32px" />
    </NavBody>
    <GitHubIcon />
  </NavWrapper>
);

const BottomBanner = styled.div`
  height: 56px;
  color: white;
  padding: 8px;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.red};
`;

const Title = styled.h2`
  flex: 1;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin-left: 48px;
  font-family: 'Taviraj';
`;

const BannerButton = styled(Button)`
  margin-right: 16px;
`;

const onBackClick = props => () => {
  browserHistory.push('/');
};

export default compose(
  withTheme,
  withHandlers({ onBackClick }),
  withState('documentUrl', 'setDocumentUrl', null),
)(({ documentUrl, setDocumentUrl, children, onBackClick }) => (
  <Main>
    <LeftNav onBackClick={onBackClick} />
    <Section>
      <Repl onUrlChange={setDocumentUrl} />
      <BottomBanner>
        <Title>React-PDF Repl</Title>
        {documentUrl && (
          <BannerButton
            icon="download"
            href={documentUrl}
            target="_blank"
            download="document.pdf"
            secondary
          >
            Download
          </BannerButton>
        )}
        <BannerButton icon="share-alt" secondary>
          Share
        </BannerButton>
        <BannerButton icon="copy" secondary>
          Copy
        </BannerButton>
      </BottomBanner>
    </Section>
  </Main>
));
