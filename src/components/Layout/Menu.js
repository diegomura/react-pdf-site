import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { withRouter } from 'next/router';

import Logo from '../UI/Logo';
import GitHubIcon from './GitHubIcon';
import media from '../../styled/media';
import VersionPicker from './VersionPicker';

const Nav = styled.nav`
  left: 0;
  top: 0px;
  z-index: 500;
  height: 100%;
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

const Bar = styled.div`
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
  } ;
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

const Item = withRouter(({ router, to, title, children, ...props }) => {
  const isAbsoluteUrl = /https?/.test(to);
  const active = router && router.pathname === to;

  return (
    <ItemWrapper>
      {isAbsoluteUrl && (
        <MenuLink href={to} target="_blank" {...props} active={active}>{title}</MenuLink>
      )}

      {!isAbsoluteUrl && (
        <Link href={to} {...props}>
          <MenuLink href={to} active={active}>{title}</MenuLink>
        </Link>
      )}
      {children && <SubItems active={active}>{children}</SubItems>}
    </ItemWrapper>
  );
});

const MenuLogo = styled(Logo)`
  ${media.phone} {
    display: none;
  }
`;

const Menu = ({ opened }) => (
  <Nav opened={opened}>
    <Bar />
    <MenuLogo rotate />
    <VersionPicker />
    <List>
      <Item to="/" title="Quick start guide" />

      <Item to="/rendering-process" title="Rendering process" />

      <Item to="/components" title="Components">
        <Item to="/components#document" title="Document" />
        <Item to="/components#page" title="Page" />
        <Item to="/components#view" title="View" />
        <Item to="/components#image" title="Image" />
        <Item to="/components#text" title="Text" />
        <Item to="/components#link" title="Link" />
        <Item to="/components#note" title="Note" />
        <Item to="/components#canvas" title="Canvas" />
        <Item to="/components#pdfviewer" title="PDFViewer" />
        <Item to="/components#pdfdownloadlink" title="PDFDownloadLink" />
        <Item to="/components#blobprovider" title="BlobProvider" />
      </Item>

      <Item to="/svg" title="SVG Images">
        <Item to="/svg#svg" title="Svg" />
        <Item to="/svg#line" title="Line" />
        <Item to="/svg#polyline" title="Polyline" />
        <Item to="/svg#polygon" title="Polygon" />
        <Item to="/svg#path" title="Path" />
        <Item to="/svg#rect" title="Rect" />
        <Item to="/svg#circle" title="Circle" />
        <Item to="/svg#ellipse" title="Ellipse" />
        <Item to="/svg#text" title="Text" />
        <Item to="/svg#tspan" title="Tspan" />
        <Item to="/svg#g" title="G" />
        <Item to="/svg#stop" title="Stop" />
        <Item to="/svg#defs" title="Defs" />
        <Item to="/svg#clippath" title="ClipPath" />
        <Item to="/svg#lineargradient" title="LinearGradient" />
        <Item to="/svg#radialgradient" title="RadialGradient" />
      </Item>

      <Item to="/hooks" title="Hooks" />

      <Item to="/styling" title="Styling">
        <Item to="/styling#stylesheet-api" title="StyleSheet API" />
        <Item to="/styling#media-queries" title="Media queries" />
        <Item to="/styling#valid-units" title="Valid units" />
        <Item to="/styling#valid-css-properties" title="Valid CSS properties" />
      </Item>

      <Item to="/fonts" title="Fonts">
        <Item to="/fonts#register" title="register" />
        <Item
          to="/fonts#registerhyphenationcallback"
          title="registerHyphenationCallback"
        />
        <Item to="/fonts#registeremojisource" title="registerEmojiSource" />
      </Item>

      <Item to="/node" title="Node API">
      <Item to="/node#rendertofile" title="renderToFile" />
      <Item to="/node#rendertostring" title="renderToString" />
      <Item to="/node#rendertostream" title="renderToStream" />
      </Item>

      <Item to="/advanced" title="Advanced">
        <Item to="/advanced#page-wrapping" title="Page wrapping" />
        <Item
          to="/advanced#on-the-fly-rendering"
          title="On the fly rendering"
        />
        <Item
          to="/advanced#orphan-&-widow-protection"
          title="Orphan and widow protection"
        />
        <Item to="/advanced#dynamic-content" title="Dynamic content" />
        <Item to="/advanced#debugging" title="Debugging" />
        <Item to="/advanced#hyphenation" title="Hyphenation" />
        <Item to="/advanced#usage-with-express.js" title="Usage with Express.js" />
        <Item to="/advanced#webpack-config" title="Webpack config" />
      </Item>

      <Item to="/repl" title="Playground / REPL" />

      <Item to="https://opencollective.com/react-pdf" title="Donate" />
    </List>

    <GitHubIcon />
  </Nav>
);

export default Menu;
