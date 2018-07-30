import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Icon = ({ type, size, className, style, onClick }) => (
  <span
    className={`icon-${type} ${className}`}
    style={{ fontSize: size, ...style }}
    onClick={onClick}
    role="button"
    tabIndex={0}
  />
);

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

Icon.defaultProps = {
  size: 14,
  style: {},
  className: '',
  onClick: null,
};

export default Icon;
