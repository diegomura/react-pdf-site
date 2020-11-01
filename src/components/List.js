import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import media from '../styled/media';

const OL = styled.ol`
  margin-left: 12px;
  margin-bottom: 32px;
  list-style-position: inside;

  ${props => props.collapse && css`
    column-count: 3;
    column-gap: 20px;

    ${media.desktop} {
      column-count: 2;
    }

    ${media.phone} {
      column-count: 1;
      column-gap: 0px;
    }
  `}
`;

const UL = styled.ul`
  margin-left: 12px;
  margin-bottom: 32px;
  list-style-position: inside;

  ${props => props.collapse && css`
    column-count: 3;
    column-gap: 20px;

    ${media.desktop}{
      column-count: 2;
    }

    ${media.phone} {
      column-count: 1;
      column-gap: 0px;
    }
  `}
`;

const List = ({ ordered, children, ...props }) => {
  const Component = ordered ? OL : UL;
  const amountOfItems = children.filter(i => typeof i !== 'string').length

  return <Component collapse={amountOfItems > 3} {...props}>{children}</Component>;
};

export default List;
