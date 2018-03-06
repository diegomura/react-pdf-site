import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const OL = styled.ol`
  margin-left: 12px;
  list-style-position: inside;
`;

const UL = styled.ol`
  margin-left: 12px;
  list-style-position: inside;
`;

const List = ({ ordered, children, ...props }) => {
  const Component = ordered ? OL : UL;

  return <Component {...props}>{children}</Component>;
};

List.propTypes = {
  ordered: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

export default List;
