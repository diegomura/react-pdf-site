import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';
import Clipboard from './Clipboard';
import media from '../styled/media';

const Wrapper = styled.div`
  height: 56px;
  color: white;
  padding: 8px;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.red};
  ${media.phone`
    height: 45px;
    padding: 0px;
    justify-content: flex-end;
  `}
`;

const Title = styled.h2`
  flex: 1;
  margin-left: 25px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  display: inline-block;
  font-family: 'Taviraj';
  ${media.phone`
    display: none;
  `}
`;

const BannerButton = styled(Button)`
  margin-right: 16px;
`;

const ReplFooter = ({ documentUrl, shareUrl, code }) => (
  <Wrapper>
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
    <Clipboard text={shareUrl} tooltip="URL copied to clipboard!">
      <BannerButton icon="share-alt" component="button" secondary>
        Share
      </BannerButton>
    </Clipboard>
    <Clipboard text={code}>
      <BannerButton icon="copy" component="button" secondary>
        Copy
      </BannerButton>
    </Clipboard>
  </Wrapper>
);

ReplFooter.propTypes = {
  code: PropTypes.string,
  documentUrl: PropTypes.string,
  shareUrl: PropTypes.string.isRequired,
};

ReplFooter.defaultProps = {
  code: null,
  documentUrl: null,
};

export default ReplFooter;
