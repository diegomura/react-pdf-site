import React from 'react';
import styled from '@emotion/styled';

import { H1, H4 } from './Heading';
import media from '../styled/media';

const Wrapper = styled.div`
  padding-left: 32px;
  position: relative;
  border-left: ${({ theme }) => `2px solid ${theme.red}`};

  ${media.phone} {
    padding-left: 25px;
  }

  &::after {
    top: calc(50% - 8px);
    left: -8px;
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-right: ${({ theme }) => `8px solid ${theme.red}`};
  }
`;

const Title = styled(H1)`
  margin: 0;

  ${media.phone} {
    display: none;
  }
`;

const SubHeading = styled(H4)`
  margin: 0px !important;
  font-family: Source Sans Pro !important;
`;

export default () => (
  <Wrapper>
    <Title>React-pdf</Title>
    <SubHeading>
      React renderer for creating PDF files on the browser, mobile and server.
    </SubHeading>
  </Wrapper>
);
