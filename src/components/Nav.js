import styled from 'styled-components';

const Nav = styled.nav`
  position: relative;
  width: ${props => props.width || '240px'};
  min-width: ${props => props.width || '240px'};
  background-color: ${({ theme }) => theme.gray3};
`;

export default Nav;
