import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0px 32px;
  position: relative;
  border-left: 2px solid #F22300;

  &::after {
    top: calc(50% - 8px);
    left: -8px;
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-right:8px solid #F22300;
  }
`;

const Heading = styled.h1`
  margin: 0px;
`;

const SubHeading = styled.p`
  margin: 0px;
`;

const Title = () =>
  <Wrapper>
    <Heading>
      React-pdf
    </Heading>
    <SubHeading>
      React renderer for creating PDF files on the browser, mobile and server.
    </SubHeading>
  </Wrapper>;

export default Title;
