import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { compose, withState, componentFromProp, defaultProps } from 'recompose';

const activeClassName = 'nav-item-active';

const MenuLink = styled.div`
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

const enhance = defaultProps({ component: 'li' })

const ItemWrapper = styled(enhance(componentFromProp('component')))`
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

const Item = ({ to, title, children, ...props }) => (
  <ItemWrapper>
    <MenuLink
      to={to}
      scroll={scroll}
      activeClassName={activeClassName}
      {...props}
    >
      {title}
    </MenuLink>
    { children && <SubItems active={false}>{children}</SubItems> }
  </ItemWrapper>
);

const Menu = () => (
  <List>
  
  </List>
);

Item.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default compose(withState('activeItem', 'setActiveItem', 0))(Menu);
