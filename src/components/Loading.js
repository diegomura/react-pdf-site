import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Loading = () => (
  <Wrapper>
    <Logo size="100px" />
  </Wrapper>
);

export default Loading;
