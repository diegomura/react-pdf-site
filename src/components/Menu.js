import React, { Fragment } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import styled from 'styled-components';
import Logo from './Logo';
import GitHubIcon from './GitHubIcon';
import media from '../styled/media';

const Nav = styled.nav`
  top: 0;
  left: 0;
  height: 100%;
  z-index: 500;
  display: flex;
  position: fixed;
  align-items: center;
  transition: all 0.5s;
  flex-direction: column;
  width: ${props => props.width || '240px'};
  min-width: ${props => props.width || '240px'};
  background-color: ${({ theme }) => theme.gray3};
  ${media.tablet`
    left: ${props => props.opened ?'0px' : '-240px'};
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  `}
`;

const Input = styled.div`
  width: 100%;
  height: 64px;
  color: white;
  border: none;
  padding: 20px;
  outline: none;
  font-size: 16px;
  line-height: 24px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.black};
`;

const MenuLink = styled.a`
  font-size: 16px;
  cursor: pointer;
  line-height: 24px;
  padding: 4px 10px;
  position: relative;
  text-decoration: none;
  color: ${({ active, theme }) => active ? theme.black : theme.gray1};

  &:before {
    top: 0px;
    left: 0px;
    content: '';
    width: 2px;
    height: 32px;
    position: absolute;
    background: ${props => props.active && '#f01e00'};
  }
`;

const List = styled.ul`
  flex: 1;
  margin: 0px;
  width: 100%;
  list-style: none;
  overflow: scroll;
  ${media.phone`margin: 35px 0px;`}
`;

const SubItems = styled.ul`
  overflow: hidden;
  list-style: none;
  height: ${props => (props.active ? 'inherit' : '0px')};
`;

const ItemWrapper = styled.li`
  display: flex;
  flex-direction: column;
  margin: 4px 0px;
  padding: 0px 18px;
`;

const Item = withRouter(({ router, to, title, children, onClick, ...props }) => {
  const isAbsoluteUrl = /https?/.test(to);
  const active = router && router.pathname === to;
  const LinkComponent = isAbsoluteUrl ? 'div' : Link;

  return (
    <ItemWrapper>
      <Link href={to} {...props}>
        <MenuLink
          href={to}
          active={active}
          onClick={onClick}
          target={isAbsoluteUrl ? '_blank' : null}
        >
          {title}
        </MenuLink>
      </Link>
      { children && <SubItems active={active}>{children}</SubItems> }
    </ItemWrapper>
  );
});

const MenuLogo = styled(Logo)`
  ${media.phone`display: none;`}
`;

const Menu = ({ opened, onItemClick, ...props }) => (
  <Nav opened={opened}>
    <Input />
    <MenuLogo rotate />
    <List>
      <Item to="/" title="Installation" onClick={onItemClick} />
      <Item to="/quick-start-guide" title="Quick start guide" onClick={onItemClick} />
      <Item to="/rendering-process" title="Rendering process" onClick={onItemClick}/>
      <Item to="/components" title="Components">
        <Item to="/components#document" title="Document" onClick={onItemClick} />
        <Item to="/components#page" title="Page" onClick={onItemClick} />
        <Item to="/components#view" title="View" onClick={onItemClick} />
        <Item to="/components#image" title="Image" onClick={onItemClick} />
        <Item to="/components#text" title="Text" onClick={onItemClick} />
        <Item to="/components#link" title="Link" onClick={onItemClick} />
      </Item>
      <Item to="/styling" title="Styling">
        <Item to="/styling#stylesheet-api" title="StyleSheet API" onClick={onItemClick} />
        <Item to="/styling#media-queries" title="Media queries" onClick={onItemClick} />
        <Item to="/styling#styled-components" title="Styled-components" onClick={onItemClick} />
        <Item to="/styling#valid-css-properties" title="Valid CSS properties" onClick={onItemClick} />
      </Item>
      <Item to="/advanced" title="Advanced">
        <Item to="/advanced#page-wrapping" title="Page wrapping" onClick={onItemClick} />
        <Item
          to="/advanced#orphan-&-widow-protection"
          title="Orphan and widow protection"
          onClick={onItemClick}
        />
        <Item to="/advanced#emoji-rendering" title="Emoji rendering" onClick={onItemClick} />
        <Item to="/advanced#dynamic-content" title="Dynamic content" onClick={onItemClick} />
        <Item to="/advanced#debugging" title="Debugging" onClick={onItemClick} />
        <Item to="/advanced#ruler" title="Ruler" onClick={onItemClick} />
        <Item to="/advanced#hyphenation" title="Hyphenation" onClick={onItemClick} />
      </Item>
      <Item to="/repl" title="Playground / REPL" onClick={onItemClick} prefetch />
      <Item
        to="https://opencollective.com/react-pdf"
        title="Donate"
        onClick={onItemClick}
      />
    </List>
    <GitHubIcon />
  </Nav>
);

export default Menu;
