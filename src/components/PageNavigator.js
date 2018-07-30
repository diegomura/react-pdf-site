import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { branch, renderNothing } from 'recompose';
import Icon from './Icon';

const Wrapper = styled.div`
  display: flex;
  height: 64px;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.black};
`;

const Arrow = styled(Icon).attrs({
  type: props => `chevron-${props.side}`,
})`
  font-size: 17px;
  cursor: pointer;
  transition: opacity 0.3s;
  opacity: ${props => (props.visible ? 1 : 0)};
  pointer-events: ${props => (props.visible ? 'initial' : 'none')};
`;

const PageIndicator = styled.span`
  margin: 0px 12px;
`;

const PageNavigator = ({
  currentPage,
  numPages,
  onPreviousPage,
  onNextPage,
}) => (
  <Wrapper>
    <Arrow side="left" visible={currentPage !== 1} onClick={onPreviousPage} />
    <PageIndicator>{`Page ${currentPage} / ${numPages}`}</PageIndicator>
    <Arrow
      side="right"
      visible={currentPage !== numPages}
      onClick={onNextPage}
    />
  </Wrapper>
);

PageNavigator.propTypes = {
  currentPage: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired,
  onPreviousPage: PropTypes.func.isRequired,
  onNextPage: PropTypes.func.isRequired,
};

export default branch(props => props.numPages <= 1, renderNothing)(
  PageNavigator,
);
