import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
  margin-bottom: 32px;
  color: ${({ theme }) => theme.black};
  font-size: 20px;
  line-height: 32px;
`;

export default Paragraph;
