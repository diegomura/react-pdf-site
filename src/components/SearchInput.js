import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  color: white;
  background-color: ${({ theme }) => theme.black};
  box-sizing: border-box;
  padding: 20px;
  font-size: 16px;
  line-height: 24px;
  border: none;
  outline: none;
`;

const SearchInput = ({ onChange }) => (
<<<<<<< HEAD
  <Input type="text" onChange={onChange} disabled />
=======
  <Input type="text" placeholder="Search" onChange={onChange} />
>>>>>>> a6d5372c5b03aece27da8b03c59637dee69d60d8
);

SearchInput.propTypes = {
  onChange: PropTypes.func,
};

SearchInput.defaultProps = {
  onChange: () => null,
};

export default SearchInput;
