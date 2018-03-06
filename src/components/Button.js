import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

const Wrapper = styled.button`
  border: 0px;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  padding: 4px 16px;
  line-height: 24px;
  font-family: "Source Sans Pro";
  transition: color 0.2s, background 0.2s;
  color: ${props => props.secondary ? 'white' : props.theme.red};
  background: ${props => props.secondary ? props.theme.red : 'white'};
  outline: ${props => `1px solid ${ props.secondary ? 'white' : props.theme.red}`};

  &:hover {
    outline-width: 2px;
  }

  &:active {
    color: ${props => props.secondary ? props.theme.red : 'white'};
    background: ${props => props.secondary ? 'white' : props.theme.red};
  }
`;

const Text = styled.span`
  margin-right: 10px;
`;

const Button = ({ icon, children, ...props }) => (
  <Wrapper {...props}>
    <Text>
      {children}
    </Text>
    <Icon type={icon} />
  </Wrapper>
)

export default Button;
