import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Icon = ({ type, size, className, style = {}, ...props }) =>
  <i
    className={classNames(`fa fa-${type}`, className)}
    style={{ fontSize: size, ...style }}
    {...props}
  />;

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Icon;
