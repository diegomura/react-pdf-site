import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  font-size: 16px;
  line-height: 24px;
  text-decoration: none;
  color: ${({ theme }) => theme.blue};
`;

export default Link;
