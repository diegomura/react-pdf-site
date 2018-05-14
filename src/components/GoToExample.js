import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';

const Wrapper = styled(NavLink)`
  flex: 1;
  display: flex;
  margin: 32px 0px;
  text-decoration: none;
  justify-content: flex-end;
`;

const GoToExample = ({ name }) => (
  <Wrapper to={`/repl?example=${name}`} target="_blank">
    <Button primary>See it in action →</Button>
  </Wrapper>
);

GoToExample.propTypes = {
  name: PropTypes.string.isRequired,
};

export default GoToExample;
