import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Button from './Button';

const Wrapper = styled.div`
  display: flex;
  margin-top: 60px;
  padding: 0px 2px 2px 2px;
`;

const Cell = styled.div`
  flex: 1;
  text-align: ${props => props.align};
`;

const NavigationButtons = ({ backSrc, backText, nextSrc, nextText }) => (
  <Wrapper>
    <Cell align="left">
      {backSrc && (
        <NavLink to={backSrc}>
          <Button primary>{`← ${backText}`}</Button>
        </NavLink>
      )}
    </Cell>
    <Cell align="right">
      {nextSrc && (
        <NavLink to={nextSrc}>
          <Button primary>{`${nextText} →`}</Button>
        </NavLink>
      )}
    </Cell>
  </Wrapper>
);

NavigationButtons.propTypes = {
  backSrc: PropTypes.string,
  backText: PropTypes.string,
  nextSrc: PropTypes.string,
  nextText: PropTypes.string,
};

NavigationButtons.defaultProps = {
  backSrc: null,
  backText: null,
  nextSrc: null,
  nextText: null,
};

export default NavigationButtons;
