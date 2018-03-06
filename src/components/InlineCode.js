import React from 'react';
import styled from 'styled-components';

const InlineCode = styled.code`
	line-height: 24px;
	font-size: 16px;
	border-radius: 4px;
  padding: 4px 6px;
	color: ${({ theme }) => theme.darkRed};
	background-color: ${({ theme }) => theme.lightRed};
`;

export default InlineCode;
