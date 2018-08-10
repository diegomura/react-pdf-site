import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Icon from './Icon';

const Wrapper = styled.a`
  border: 0px;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  padding: 4px 16px;
  line-height: 24px;
  white-space: nowrap;
  text-decoration: none;
  font-family: 'Source Sans Pro';
  transition: color 0.2s, background 0.2s;

  &:hover {
    outline-width: 2px;
  }

  ${props =>
    props.primary &&
    css`
      color: ${props.theme.red};
      background: white;
      outline: 1px solid ${props.theme.red};

      &:active {
        color: white;
        background: ${props.theme.red};
      }
    `}

  ${props =>
    props.secondary &&
    css`
      color: white;
      background: ${props.theme.red};
      outline: 1px solid white;

      &:active {
        color: ${props.theme.red};
        background: white;
      }
    `}

  ${props =>
    props.terciary &&
    css`
      color: ${props.theme.gray1};
      background: white;
      outline: 1px solid ${props.theme.gray1};

      &:active {
        color: white;
        background: ${props.theme.gray1};
      }
    `}
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
