import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { compose, withState, withProps, lifecycle } from 'recompose';
import { Link } from 'react-router';
import toLowerCase from '../utils/toLowerCase';
import { getElementHeight } from '../utils/dom';
import { mapHeadingRegistry } from '../lib/headings';

const MenuLink = styled(Link)`
  padding: 6px 10px;
  font-size: 16px;
  line-height: 24px;
  text-decoration: none;
  border-left: ${props => props.active && '2px solid #F01E00'};
  color: ${props => (props.active ? props.theme.black : props.theme.gray1)};
`;

const List = styled.ul`
  flex: 1;
  margin: 0px;
  width: 100%;
  list-style: none;
`;

const Item = styled(
  ({ index, href, onClick, className, children, ...props }) => (
    <li className={className}>
      <MenuLink
        href={href || `#${toLowerCase(children)}`}
        onClick={() => onClick(index)}
        {...props}
      >
        {children}
      </MenuLink>
    </li>
  ),
)`
  padding: 6px 12px;
`;

const Menu = ({ headings, activeItem, setActiveItem }) => (
  <List>
    {headings.map((item, index) => (
      <Item
        key={item.name}
        index={index}
        active={activeItem === index}
        onClick={setActiveItem}
      >
        {item.name}
      </Item>
    ))}
    <Item to="/repl">Playground / REPL</Item>
    <Item href="https://opencollective.com/react-pdf" target="_blank">
      Donate
    </Item>
    <Item href="https://github.com/diegomura/react-pdf/issues" target="_blank">
      Forum
    </Item>
  </List>
);

Menu.propTypes = {
  activeItem: PropTypes.number,
  setActiveItem: PropTypes.func,
};

Item.defaultProps = {
  onClick: () => {},
};

const filterHeadings = props => ({
  headings: props.headings.filter(heading => heading.level === 2),
});

function componentDidUpdate() {
  const scrollMargin = 48;
  const { headings, setActiveItem } = this.props;

  window.onscroll = function() {
    const position = window.scrollY + scrollMargin;

    headings.forEach(({ element }, index) => {
      const top = element.offsetTop;
      const bottom = top + getElementHeight(element);

      if (position >= top && position <= bottom) {
        setActiveItem(index);
      }
    });
  };
}

function componentWillUnmount() {
  window.onscroll = null;
}

export default compose(
  mapHeadingRegistry,
  withProps(filterHeadings),
  withState('activeItem', 'setActiveItem', 0),
  lifecycle({ componentDidUpdate, componentWillUnmount }),
)(Menu);
