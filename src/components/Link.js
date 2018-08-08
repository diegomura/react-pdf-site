import styled from 'styled-components';

const Link = styled.a`
  font-size: inherit;
  line-height: 24px;
  text-decoration: none;
  color: ${({ theme }) => theme.red};
`;

export default Link;
