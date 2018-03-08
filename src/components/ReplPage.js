import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Nav from './Nav';
import Icon from './Icon';
import Logo from './Logo';
import Menu from './Menu';
import Repl from './Repl';
import Button from './Button';
import Clipboard from './Clipboard';
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

export default ({
  initialValue,
  code,
  compressedCode,
  documentUrl,
  children,
  onCodeChange,
  onUrlChange,
  onBackClick,
}) => (
  <Main>
    <LeftNav onBackClick={onBackClick} />
    <Section>
      <Repl
        initialValue={initialValue}
        onCodeChange={onCodeChange}
        onUrlChange={onUrlChange}
      />
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
        <Clipboard text={compressedCode} tooltip="URL copied to clipboard!">
          <BannerButton icon="share-alt" secondary>
            Share
          </BannerButton>
        </Clipboard>
        <Clipboard text={code}>
          <BannerButton icon="copy" secondary>
            Copy
          </BannerButton>
        </Clipboard>
      </BottomBanner>
    </Section>
  </Main>
);
