import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
<<<<<<< HEAD
import { compose, withState, componentFromProp, defaultProps } from 'recompose';

const activeClassName = 'nav-item-active';

const MenuLink = styled.div`
=======
import { withRouter } from 'react-router-dom';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { compose, withState } from 'recompose';

const activeClassName = 'nav-item-active';

const MenuLink = styled(NavLink)`
>>>>>>> a6d5372c5b03aece27da8b03c59637dee69d60d8
  font-size: 16px;
  line-height: 24px;
  padding: 4px 10px;
  position: relative;
  text-decoration: none;
  color: ${props => props.theme.gray1};

  &:before {
    top: 0px;
    left: 0px;
    content: '';
    width: 2px;
    height: 32px;
    position: absolute;
  }

  &.${activeClassName} {
    color: ${props => props.theme.black};

    &:before {
      background: #f01e00;
    }
  }
`;

const List = styled.ul`
  flex: 1;
  margin: 0px;
  width: 100%;
  list-style: none;
`;

const SubItems = styled.div`
  overflow: hidden;
  height: ${props => (props.active ? 'inherit' : '0px')};
`;

<<<<<<< HEAD
const enhance = defaultProps({ component: 'li' })

const ItemWrapper = styled(enhance(componentFromProp('component')))`
=======
const ItemWrapper = styled.li`
>>>>>>> a6d5372c5b03aece27da8b03c59637dee69d60d8
  display: flex;
  flex-direction: column;
  margin: 4px 0px;
  padding: 0px 18px;
`;

const scroll = el => {
  const margin = 20;
  const bodyRect = document.body.getBoundingClientRect();
  const elemRect = el.getBoundingClientRect();
  const offset = elemRect.top - bodyRect.top;

  return window.scrollTo({
    top: offset - margin,
    left: 0,
    behavior: 'smooth',
  });
};

<<<<<<< HEAD
const Item = ({ to, title, children, ...props }) => (
=======
const Item = withRouter(({ to, title, location, children, ...props }) => (
>>>>>>> a6d5372c5b03aece27da8b03c59637dee69d60d8
  <ItemWrapper>
    <MenuLink
      to={to}
      scroll={scroll}
      activeClassName={activeClassName}
      {...props}
    >
      {title}
    </MenuLink>
<<<<<<< HEAD
    { children && <SubItems active={false}>{children}</SubItems> }
  </ItemWrapper>
);

const Menu = () => (
  <List>
  
=======
    <SubItems active={location.pathname === to}>{children}</SubItems>
  </ItemWrapper>
));

const Menu = () => (
  <List>
    <Item exact to="/" title="Installation" />
    <Item to="/quick-start-guide" title="Quick start guide" />
    <Item to="/rendering-process" title="Rendering process" />
    <Item to="/components" title="Components">
      <Item to="/components#document" title="Document" />
      <Item to="/components#page" title="Page" />
      <Item to="/components#view" title="View" />
      <Item to="/components#image" title="Image" />
      <Item to="/components#text" title="Text" />
      <Item to="/components#link" title="Link" />
    </Item>
    <Item to="/styling" title="Styling">
      <Item to="/styling#stylesheet-api" title="StyleSheet API" />
      <Item to="/styling#media-queries" title="Media queries" />
      <Item to="/styling#styled-components" title="Styled-components" />
    </Item>
    <Item to="/advanced" title="Advanced">
      <Item to="/advanced#page-wrapping" title="Page wrapping" />
      <Item
        to="/advanced#orphan-&-widow-protection"
        title="Orphan and widow protection"
      />
      <Item to="/advanced#emoji-rendering" title="Emoji rendering" />
      <Item to="/advanced#dynamic-content" title="Dynamic content" />
      <Item to="/advanced#debugging" title="Debugging" />
      <Item to="/advanced#hyphenation" title="Hyphenation" />
    </Item>
    <Item to="/repl" title="Playground / REPL" />
    <Item
      to="https://opencollective.com/react-pdf"
      target="_blank"
      title="Donate"
    />
>>>>>>> a6d5372c5b03aece27da8b03c59637dee69d60d8
  </List>
);

Item.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default compose(withState('activeItem', 'setActiveItem', 0))(Menu);
