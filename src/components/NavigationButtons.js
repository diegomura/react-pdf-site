import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

import Button from './Button';
import media from '../styled/media';

const Wrapper = styled.div`
  display: flex;
  margin-top: 60px;
  padding: 0px 2px 2px 2px;

  ${media.phone} {
    margin-top: 45px;
  }
`;

const Cell = styled.div`
  flex: 1;
  text-align: ${(props) => props.align};
`;

const NavigationButtons = ({ backSrc, backText, nextSrc, nextText }) => (
  <Wrapper>
    <Cell align="left">
      {backSrc && (
        <Link href={backSrc} prefetch>
          <Button primary>{`← ${backText}`}</Button>
        </Link>
      )}
    </Cell>
    <Cell align="right">
      {nextSrc && (
        <Link href={nextSrc} prefetch>
          <Button primary>{`${nextText} →`}</Button>
        </Link>
      )}
    </Cell>
  </Wrapper>
);

NavigationButtons.defaultProps = {
  backSrc: null,
  backText: null,
  nextSrc: null,
  nextText: null,
};

export default NavigationButtons;
