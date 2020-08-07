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

const LogoImage = styled.img.attrs({ src: '/images/logo.png' })`
  width: ${(props) => props.size || '54px'};
  animation: 4s ${rotate360} linear infinite;
`;

const Title = styled(H1)`
  margin: 0;
  line-height: 22px;
  font-size: ${(props) => props.fontSize || '22px'};
  margin-left: ${(props) => props.separation || '15px'};
`;

const Logo = ({ withText, className, rotate, ...props }) => (
  <Wrapper className={className}>
    <LogoImage rotateImg={rotate} {...props} />
    {withText && <Title {...props}>React-pdf</Title>}
  </Wrapper>
);

export default Logo;
