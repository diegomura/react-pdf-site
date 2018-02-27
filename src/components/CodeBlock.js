import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

const CodeBlock = props =>
  <pre>
    <div>
      <Icon type="eye" />
      <Icon type="files-o" />
    </div>
    <code>
      {props.literal}
    </code>
  </pre>;

CodeBlock.propTypes = {
  literal: PropTypes.string.isRequired,
};

export default CodeBlock;
