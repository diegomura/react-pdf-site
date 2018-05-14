import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  margin: 32px 0px;
  justify-content: flex-end;
`;

const GoToExample = ({ name }) => (
  <Wrapper>
    <Button>See it in action →</Button>
  </Wrapper>
);

GoToExample.propTypes = {
  name: PropTypes.string.isRequired,
};

export default GoToExample;
