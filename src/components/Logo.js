import React from 'react';
import styled, { keyframes } from 'styled-components';
import { H1 } from './Heading';

const rotate360 = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Wrapper = styled.div`
  padding: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoImage = styled.img.attrs({ src: '/static/images/logo.png' })`
  width: ${props => props.size || '54px'};
  animation: ${rotate360} 4s linear infinite;
`;

const Title = styled(H1)`
  margin: 0;
  font-size: 22px;
  margin-left: 15px;
`;

export default ({ withText, className, ...props }) => (
  <Wrapper className={className}>
    <LogoImage {...props} />
    {withText && <Title>React-pdf</Title>}
  </Wrapper>
);
