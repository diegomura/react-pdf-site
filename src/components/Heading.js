import React from 'react';
import { withProps } from 'recompose';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import media from '../styled/media';
import toLowerCase from '../lib/toLowerCase';

const BaseHeading = css`
  font-family: 'Taviraj';
  margin-bottom: 16px;
  color: ${({ theme }) => theme.black};
`;

const Heading1 = styled.h1`
  ${BaseHeading};
  font-size: 48px;
  font-weight: 200;
  line-height: 56px;
  letter-spacing: 2px;

  ${media.tablet} {
    font-size: 30px;
    font-weight: 400;
  }
`;

const Heading2 = styled.h2`
  ${BaseHeading};
  font-size: 32px;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 40px;
  margin-bottom: 24px;

  ${media.phone} {
    font-size: 22px;
    line-height: 28px;
    margin-bottom: 17px;
  }
`;

const Heading3 = styled.h3`
  ${BaseHeading};
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 32px;
  margin-bottom: 24px;

  ${media.phone} {
    font-size: 21px;
    line-height: 28px;
    margin-bottom: 21px;
  }
`;

const Heading4 = styled.h4`
  ${BaseHeading};
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;

  ${media.phone} {
    font-size: 16px;
  }
`;

const Heading5 = styled.h5`
  ${BaseHeading};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: ${({ theme }) => theme.darkRed};
`;

const Heading6 = styled.h6`
  ${BaseHeading};
  color: ${({ theme }) => theme.gray1};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

const Headings = [Heading1, Heading2, Heading3, Heading4, Heading5, Heading6];

const getId = (children) => {
  const child = Array.isArray(children) ? children[0] : children;
  const text = React.isValidElement(child) ? child.props.children : child;
  return toLowerCase(text);
};

const Heading = ({ level, children, ...props }) => {
  const HeadingComponent = Headings[level - 1];

  return (
    <HeadingComponent id={getId(children)} {...props}>
      {children}
    </HeadingComponent>
  );
};

export const H1 = withProps({ level: 1 })(Heading);
export const H2 = withProps({ level: 2 })(Heading);
export const H3 = withProps({ level: 3 })(Heading);
export const H4 = withProps({ level: 4 })(Heading);
export const H5 = withProps({ level: 5 })(Heading);
export const H6 = withProps({ level: 6 })(Heading);
