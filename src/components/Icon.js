import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ type, label, size, className, style, onClick }) => (
  <span
    className={`icon-${type} ${className}`}
    style={{ fontSize: size, ...style }}
    onClick={onClick}
    role="button"
    aria-label={label}
    tabIndex={0}
  />
);

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
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
