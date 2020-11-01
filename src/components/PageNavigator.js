import React from 'react';
import styled from '@emotion/styled';

import Icon from './Icon';

const Wrapper = styled.div`
  display: flex;
  height: 64px;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.black};
`;

const Arrow = styled(Icon)`
  font-size: 17px;
  cursor: pointer;
  transition: opacity 0.3s;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  pointer-events: ${(props) => (props.visible ? 'initial' : 'none')};
`;

const PageIndicator = styled.span`
  margin: 0px 12px;
`;

const PageNavigator = ({
  currentPage,
  numPages,
  onPreviousPage,
  onNextPage,
}) => {
  if (numPages <= 1) return null;

  return (
    <Wrapper>
      <Arrow
        type="chevron-left"
        visible={currentPage !== 1}
        onClick={onPreviousPage}
      />

      <PageIndicator>{`Page ${currentPage} / ${numPages}`}</PageIndicator>

      <Arrow
        type="chevron-right"
        visible={currentPage !== numPages}
        onClick={onNextPage}
      />
    </Wrapper>
  );
};

export default PageNavigator;
