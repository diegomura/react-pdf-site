import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Icon = ({ type, size, className, style, onClick }) => (
  <i
    className={classNames(`fa fa-${type}`, className)}
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
  className: null,
  style: {},
  onClick: null,
};

export default Icon;
