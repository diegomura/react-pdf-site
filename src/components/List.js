import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from '../styled/media';

const OL = styled.ol`
  margin-left: 12px;
  margin-bottom: 32px;
  list-style-position: inside;
  column-count: 3;
  column-gap: 20px;
  ${media.desktop`
    column-count: 2;
  `}
  ${media.phone`
    column-count: 1;
    column-gap: 0px;
  `}
`;

const UL = styled.ul`
  margin-left: 12px;
  margin-bottom: 32px;
  list-style-position: inside;
  column-count: 3;
  column-gap: 20px;
  ${media.desktop`
    column-count: 2;
  `}
  ${media.phone`
    column-count: 1;
    column-gap: 0px;
  `}
`;

const List = ({ ordered, children, ...props }) => {
  const Component = ordered ? OL : UL;

  return <Component {...props}>{children}</Component>;
};

List.propTypes = {
  ordered: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default List;
