import React from 'react';
import styled from 'styled-components';
import media from '../styled/media';
import Icon from './Icon';

const Wrapper = styled.header`
  top: 0;
  width: 100%;
  height: 60px;
  z-index: 300;
  display: none;
  padding: 0 1em;
  align-items: center;
  justify-content: space-between;
  ${media.phone`display: flex;`};
`;

const HeaderIcon = styled(Icon)`
  color: ${({ theme }) => theme.gray1};
`;

const Header = () => (
  <Wrapper>
    <HeaderIcon type="menu" size={25} />
    <HeaderIcon type="github" size={25} />
  </Wrapper>
);

export default Header;
