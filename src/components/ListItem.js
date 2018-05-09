import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListItem = styled.li`
  color: ${({ theme }) => theme.black};
  font-size: 20px;
  line-height: 36px;
  font-family: 'Source Sans Pro';
`;

export default ListItem;
