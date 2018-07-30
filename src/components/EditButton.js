import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';

const Wrapper = styled.a`
  top: 0;
  right: 0;
  position: absolute;
`;

const EditButton = ({ to }) => (
  <Wrapper href={to} target="_blank">
    <Button terciary>Edit</Button>
  </Wrapper>
);

EditButton.propTypes = {
  to: PropTypes.string.isRequired,
};

export default EditButton;
