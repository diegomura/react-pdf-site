import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
  margin-bottom: 40px;
  color: ${({ theme }) => theme.black};
  font-size: 16px;
  line-height: 24px;
`;

export default Paragraph;
