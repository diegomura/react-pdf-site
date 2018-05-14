import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from './Icon';

const Wrapper = styled.a`
  border: 0px;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  padding: 4px 16px;
  line-height: 24px;
  text-decoration: none;
  font-family: 'Source Sans Pro';
  transition: color 0.2s, background 0.2s;
  color: ${props => (props.secondary ? 'white' : props.theme.red)};
  background: ${props => (props.secondary ? props.theme.red : 'white')};
  outline: ${props =>
    `1px solid ${props.secondary ? 'white' : props.theme.red}`};

  &:hover {
    outline-width: 2px;
  }

  &:active {
    color: ${props => (props.secondary ? props.theme.red : 'white')};
    background: ${props => (props.secondary ? 'white' : props.theme.red)};
  }
`;

const ButtonIcon = styled(Icon)`
  margin-left: 10px;
`;

const Button = ({ icon, children, ...props }) => (
  <Wrapper {...props}>
    <span>{children}</span>
    {icon && <ButtonIcon type={icon} />}
  </Wrapper>
);

Button.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.node,
};

Button.defaultProps = {
  icon: null,
  children: '',
};

export default Button;
