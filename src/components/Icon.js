import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD

const Icon = ({ type, size, className, style, onClick }) => (
  <i
    className={`fa fa-${type} ${className}`}
=======
import classNames from 'classnames';

const Icon = ({ type, size, className, style, onClick }) => (
  <i
    className={classNames(`fa fa-${type}`, className)}
>>>>>>> a6d5372c5b03aece27da8b03c59637dee69d60d8
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
<<<<<<< HEAD
  style: {},
  className: '',
=======
  className: null,
  style: {},
>>>>>>> a6d5372c5b03aece27da8b03c59637dee69d60d8
  onClick: null,
};

export default Icon;
