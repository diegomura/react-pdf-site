import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { branch, renderNothing } from 'recompose';
import Icon from './Icon';

const Wrapper = styled.div`
  color: white;
  display: flex;
  padding: 15px 30px;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
  background: ${({ theme }) => theme.red};
`;

const Message = styled.p`
  margin: 0;
`;

const Close = styled(Icon).attrs({
  type: 'times',
})`
  cursor: pointer;
`;

const ErrorMessage = ({ className, children, onClose }) => (
  <Wrapper className={className}>
    <Message>{`Error: ${children}`}</Message>
    <Close onClick={onClose} />
  </Wrapper>
);

ErrorMessage.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

ErrorMessage.defaultProps = {
  className: null,
};

export default branch(
  props => !props.children || !props.children.length === 0,
  renderNothing,
)(ErrorMessage);
