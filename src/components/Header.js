import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { withRouter } from 'next/router';
import media from '../styled/media';
import Logo from './Logo';
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
  ${media.tablet`display: flex;`};
`;

const HeaderIcon = styled(Icon)`
  color: ${({ theme }) => theme.gray1};
`;

const HeaderLogo = styled(Logo)`
  padding: 0px;
  display: none;
  ${media.tablet`display: inherit;`};
`;

const Header = ({ router, onMenuClick }) => (
  <Wrapper>
    <HeaderIcon type="menu" size={25} onClick={() => { onMenuClick() }} />
    {router.pathname !== '/' && (
      <Link href="/">
        <HeaderLogo
          withText
          size="28px"
          fontSize="18px"
          separation="10px"
          rotate={false}
        />
      </Link>
    )}
    <HeaderIcon type="github" size={25} />
  </Wrapper>
);

export default withRouter(Header);
