import React from 'react';

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

Icon.defaultProps = {
  size: 14,
  style: {},
  className: '',
  onClick: null,
};

export default Icon;
