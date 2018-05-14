import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';
import Clipboard from './Clipboard';

const Wrapper = styled.div`
  height: 56px;
  color: white;
  padding: 8px;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.red};
`;

const Info = styled.div`
  flex: 1;
  margin-left: 25px;
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  display: inline-block;
  font-family: 'Taviraj';
`;

const Version = styled.span`
  font-size: 14px;
  padding: 4px 8px;
  background: white;
  margin-left: 10px;
  border-radius: 4px;
  font-style: italic;
  color: ${({ theme }) => theme.red};
`;

const BannerButton = styled(Button)`
  margin-right: 16px;
`;

const ReplBanner = ({ documentUrl, shareUrl, code }) => (
  <Wrapper>
    <Info>
      <Title>React-PDF Repl</Title>
      <Version>Beta</Version>
    </Info>
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
    <Clipboard text={shareUrl} tooltip="URL copied to clipboard!">
      <BannerButton icon="share-alt" secondary>
        Share
      </BannerButton>
    </Clipboard>
    <Clipboard text={code}>
      <BannerButton icon="copy" secondary>
        Copy
      </BannerButton>
    </Clipboard>
  </Wrapper>
);

ReplBanner.propTypes = {
  code: PropTypes.string.isRequired,
  shareUrl: PropTypes.string.isRequired,
  documentUrl: PropTypes.string.isRequired,
};

export default ReplBanner;
