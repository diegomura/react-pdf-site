import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from './Icon';

const Wrapper = styled.pre`
  position: relative;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.black};
  margin-bottom: 40px;
`;

const Handlers = styled.div`
  top: 10px;
  right: 10px;
  position: absolute;
`;

const Handler = styled(Icon)`
  color: white;
  opacity: 0.5;
  font-size: 16px;
  margin-right: 15px;
`;

const Code = styled.code`
  display: block;
  color: ${({ theme }) => theme.gray1};
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
      {props.isPlayable && <Handler type="eye" />}
      <Handler type="files-o" />
    </Handlers>
    <Code>{props.children}</Code>
  </Wrapper>
);

CodeBlock.propTypes = {
  children: PropTypes.string.isRequired,
};

export default CodeBlock;
