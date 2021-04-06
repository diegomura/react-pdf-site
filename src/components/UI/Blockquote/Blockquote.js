import styled from '@emotion/styled';

const Blockquote = styled.blockquote`
  padding: 8px 30px;
  margin: 32px 0px;
  border-radius: 0 6px 6px 0;
  background-color: ${({ theme }) => theme.gray3};
  border-left: ${({ theme }) => `2px solid ${theme.red}`};

  p {
    margin: 0px;
  }
`;

export default Blockquote;
