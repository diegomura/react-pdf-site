import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';
import media from '../styled/media';

const Wrapper = styled.div`
  display: flex;
  position: initial;
  margin-bottom: 1em;
  text-decoration: none;
  justify-content: flex-end;
  ${media.phone`
    display: none;
  `}
`;

const EditButton = ({ to }) => (
  <Wrapper>
    <Button href={to} target="_blank" terciary>Edit</Button>
  </Wrapper>
);

EditButton.propTypes = {
  to: PropTypes.string.isRequired,
};

export default EditButton;
