import React from 'react';
import styled from 'styled-components';
import { H1 } from './Heading';
import CornerGraphics from '../static/images/corner-graphics.png';

const CornerGraphicsImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
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
  <div>
    <CornerGraphicsImage src={CornerGraphics} />
    <Title level={1}>404: Oops! This page does not exist</Title>
  </div>
);

export default NotFound;
