import React from 'react';
import styled from '@emotion/styled';
import ReactPDF from '@react-pdf/renderer';

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

  ${media.phone} {
    height: 45px;
    padding: 0px;
    justify-content: flex-end;
  }
`;

const Title = styled.h2`
  margin-left: 25px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  display: inline-block;
  font-family: 'Taviraj';

  ${media.phone} {
    display: none;
  }
`;

const Version = styled.p`
  flex: 1;
  margin-left: 25px;
  font-size: 12px;
  font-weight: 500;
  display: inline-block;

  ${media.phone} {
    display: none;
  }
`;

const BannerButton = styled(Button)`
  margin-right: 16px;
`;

const ReplFooter = ({ documentUrl, shareUrl, code }) => (
  <Wrapper>
    <Title>React-PDF Repl</Title>
    <Version>{ReactPDF.version}</Version>
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

ReplFooter.defaultProps = {
  code: null,
  documentUrl: null,
};

export default ReplFooter;
