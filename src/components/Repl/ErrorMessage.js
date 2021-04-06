import React from 'react';
import styled from '@emotion/styled';

import Icon from '../UI/Icon';

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

const Close = styled(Icon)`
  cursor: pointer;
`;

const ErrorMessage = ({ className, children, onClose }) => {
  if (!children || !children.length === 0) return null;

  return (
    <Wrapper className={className}>
      <Message>{`Error: ${children}`}</Message>
      <Close type="times" onClick={onClose} />
    </Wrapper>
  );
};

export default ErrorMessage;
