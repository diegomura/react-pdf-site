import React from 'react';
import PropTypes from 'prop-types';
import toLowerCase from '../utils/toLowerCase';

const Heading = ({ level, children }) =>
  React.createElement(`h${level}`, { id: toLowerCase(children[0]) }, children);

Heading.propTypes = {
  level: PropTypes.number,
  children: PropTypes.node,
};

export default Heading;
