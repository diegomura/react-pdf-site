import styled from '@emotion/styled';

const InlineCode = styled.code`
  font-size: 16px;
  padding: 4px 6px;
  line-height: 24px;
  border-radius: 4px;
  white-space: nowrap;
  color: ${({ theme }) => theme.darkRed};
  background-color: ${({ theme }) => theme.lightRed};
`;

export default InlineCode;
