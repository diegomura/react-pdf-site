import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  z-index: 10000;
  position: fixed;
  font-size: 16px;
  padding: 0 18px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.lightRed};

  a {
    margin-left: 5px;
  }
`;

const PageBanner = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default PageBanner;
