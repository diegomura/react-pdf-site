import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from './Icon';

const Wrapper = styled.pre`
  position: relative;
  border-radius: 8px;
  background-color: #3E3E3E;
  margin-bottom: 40px;
`;

const Handlers = styled.div`
  top: 10px;
  right: 10px;
  position: absolute;
`;

const Handler = styled(Icon)`
  color: white;
  font-size: 16px;
  margin-right: 15px;
`;

const Code = styled.code`
  display: block;
  color: #A6A6A6;
  background-color: initial;
  padding: 24px 20px;
  margin: 0px 4px;
  font-size: 16px;
  line-height: 24px;
  border-radius: 4px;
`;

const CodeBlock = props => (
  <Wrapper>
    <Handlers>
      <Handler type="eye" />
      <Handler type="files-o" />
    </Handlers>
    <Code>
      {props.value}
    </Code>
  </Wrapper>
);

CodeBlock.propTypes = {
  value: PropTypes.string.isRequired,
};

export default CodeBlock;
