import React from 'react';
import styled from 'styled-components';
import { H1 } from '../components/Heading';

const Section = styled.section`
  flex: 1;
  padding: 80px;
  margin: 0 auto;
  max-width: 1000px;
`;

const Title = styled(H1)`
  padding: 0px 32px;
  position: relative;
  border-left: ${({ theme }) => `2px solid ${theme.red}`};

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

const NotFound = () => (
  <Section>
    <Title level={1}>404: Oops! This page does not exist</Title>
  </Section>
);

export default NotFound;
