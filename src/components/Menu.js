import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { compose, withState } from 'recompose';

const activeClassName = 'nav-item-active';

const MenuLink = styled(NavLink)`
  font-size: 16px;
  line-height: 24px;
  padding: 6px 12px;
  text-decoration: none;
  color: ${props => props.theme.gray1};

  &.${activeClassName} {
    border-left: 2px solid #f01e00;
    color: ${props => props.theme.black};
  }
`;

const List = styled.ul`
  flex: 1;
  margin: 0px;
  width: 100%;
  list-style: none;
`;

const Item = ({ children, ...props }) => (
  <li style={{ padding: '6px 10px' }}>
    <MenuLink {...props} activeClassName={activeClassName}>
      {children}
    </MenuLink>
  </li>
);

const Menu = () => (
  <List>
    <Item exact to="/">
      Installation
    </Item>
    <Item to="/quick-start-guide">Quick start guide</Item>
    <Item to="/components">Components</Item>
    <Item to="/styling">Styling</Item>
    <Item to="/advanced">Advanced</Item>
    <Item to="/repl">Playground / REPL</Item>
    <Item to="https://opencollective.com/react-pdf" target="_blank">
      Donate
    </Item>
  </List>
);

Item.propTypes = {
  children: PropTypes.node.isRequired,
};

export default compose(withState('activeItem', 'setActiveItem', 0))(Menu);
