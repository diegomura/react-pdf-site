import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { withRouter } from 'next/router';

import Logo from './Logo';
import media from '../styled/media';
import GitHubIcon from './GitHubIcon';

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
  width: ${(props) => props.width || '285px'};
  min-width: ${(props) => props.width || '285px'};
  background-color: ${({ theme }) => theme.gray3};

  ${media.tablet} {
    left: ${(props) => (props.opened ? '0px' : '-285px')};
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  }
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
  color: ${({ active, theme }) => (active ? theme.black : theme.gray1)};

  &:before {
    top: 0px;
    left: 0px;
    content: '';
    width: 2px;
    height: 32px;
    position: absolute;
    background: ${(props) => props.active && '#f01e00'};
  }
`;

const List = styled.ul`
  flex: 1;
  margin: 0px;
  width: 100%;
  overflow: auto;
  list-style: none;

  ${media.phone} {
    margin: 35px 0px;
  };
`;

const SubItems = styled.ul`
  overflow: hidden;
  list-style: none;
  height: ${(props) => (props.active ? 'inherit' : '0px')};
`;

const ItemWrapper = styled.li`
  display: flex;
  margin: 4px 0px;
  padding: 0px 18px;
  flex-direction: column;

  a {
    text-decoration: none;
  }
`;

const Item = withRouter(
  ({ router, to, title, children, onClick, ...props }) => {
    const isAbsoluteUrl = /https?/.test(to);
    const active = router && router.pathname === to;
    const Wrapper = isAbsoluteUrl ? 'a' : Link;

    return (
      <ItemWrapper>
        <Wrapper href={to} {...props}>
          <MenuLink
            href={to}
            active={active}
            onClick={onClick}
            target={isAbsoluteUrl ? '_blank' : null}
          >
            {title}
          </MenuLink>
        </Wrapper>
        {children && <SubItems active={active}>{children}</SubItems>}
      </ItemWrapper>
    );
  },
);

const MenuLogo = styled(Logo)`
  ${media.phone} {
    display: none;
  }
`;

const Menu = ({ opened, onItemClick, ...props }) => (
  <Nav opened={opened}>
    <Input />
    <MenuLogo rotate />
    <List>
      <Item to="/" title="Quick start guide" onClick={onItemClick} />
      <Item
        to="/rendering-process"
        title="Rendering process"
        onClick={onItemClick}
      />
      <Item to="/components" title="Components">
        <Item
          to="/components#document"
          title="Document"
          onClick={onItemClick}
        />
        <Item to="/components#page" title="Page" onClick={onItemClick} />
        <Item to="/components#view" title="View" onClick={onItemClick} />
        <Item to="/components#image" title="Image" onClick={onItemClick} />
        <Item to="/components#text" title="Text" onClick={onItemClick} />
        <Item to="/components#link" title="Link" onClick={onItemClick} />
        <Item to="/components#note" title="Note" onClick={onItemClick} />
        <Item to="/components#canvas" title="Canvas" onClick={onItemClick} />
        <Item
          to="/components#pdfviewer"
          title="PDFViewer"
          onClick={onItemClick}
        />
        <Item
          to="/components#pdfdownloadlink"
          title="PDFDownloadLink"
          onClick={onItemClick}
        />
        <Item
          to="/components#blobprovider"
          title="BlobProvider"
          onClick={onItemClick}
        />
      </Item>
      <Item to="/styling" title="Styling">
        <Item
          to="/styling#stylesheet-api"
          title="StyleSheet API"
          onClick={onItemClick}
        />
        <Item
          to="/styling#media-queries"
          title="Media queries"
          onClick={onItemClick}
        />
        <Item
          to="/styling#valid-units"
          title="Valid units"
          onClick={onItemClick}
        />
        <Item
          to="/styling#valid-css-properties"
          title="Valid CSS properties"
          onClick={onItemClick}
        />
      </Item>
      <Item to="/fonts" title="Fonts">
        <Item to="/fonts#register" title="register" onClick={onItemClick} />
        <Item
          to="/fonts#registerhyphenationcallback"
          title="registerHyphenationCallback"
          onClick={onItemClick}
        />
        <Item
          to="/fonts#registeremojisource"
          title="registerEmojiSource"
          onClick={onItemClick}
        />
      </Item>
      <Item to="/advanced" title="Advanced">
        <Item
          to="/advanced#page-wrapping"
          title="Page wrapping"
          onClick={onItemClick}
        />
        <Item
          to="/advanced#on-the-fly-rendering"
          title="On the fly rendering"
          onClick={onItemClick}
        />
        <Item
          to="/advanced#orphan-&-widow-protection"
          title="Orphan and widow protection"
          onClick={onItemClick}
        />
        <Item
          to="/advanced#dynamic-content"
          title="Dynamic content"
          onClick={onItemClick}
        />
        <Item
          to="/advanced#debugging"
          title="Debugging"
          onClick={onItemClick}
        />
        <Item
          to="/advanced#hyphenation"
          title="Hyphenation"
          onClick={onItemClick}
        />
        <Item
          to="/advanced#webpack-config"
          title="Webpack config"
          onClick={onItemClick}
        />
      </Item>
      <Item to="/repl" title="Playground / REPL" onClick={onItemClick} />
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
