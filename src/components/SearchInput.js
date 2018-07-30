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
  <Input type="text" onChange={onChange} disabled />
);

SearchInput.propTypes = {
  onChange: PropTypes.func,
};

SearchInput.defaultProps = {
  onChange: () => null,
};

export default SearchInput;
