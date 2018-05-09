import React from 'react';
import PropTypes from 'prop-types';
import { withProps } from 'recompose';
import styled, { css } from 'styled-components';
import toLowerCase from '../utils/toLowerCase';
import { mapHeadingRegistry } from '../lib/headings';

const BaseHeading = css`
  font-family: 'Taviraj';
  margin-bottom: 16px;
  color: ${({ theme }) => theme.black};
`;

const Heading1 = styled.h1`
  ${BaseHeading};
  font-size: 48px;
  font-weight: 200;
  letter-spacing: 2px;
  line-height: 56px;
`;

const Heading2 = styled.h2`
  ${BaseHeading};
  font-size: 32px;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 40px;
`;

const Heading3 = styled.h3`
  ${BaseHeading};
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 32px;
`;

const Heading4 = styled.h4`
  ${BaseHeading};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
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

class Heading extends React.Component {
  componentDidMount() {
    this.props.registerHeading({
      level: this.props.level,
      name: this.props.children,
      element: this.node,
    });
  }

  render() {
    const { level, children, ...props } = this.props;
    const HeadingComponent = Headings[level - 1];

    return (
      <HeadingComponent
        innerRef={n => (this.node = n)}
        id={toLowerCase(children)}
        {...props}
      >
        {children}
      </HeadingComponent>
    );
  }
}

const EnhacedHeading = mapHeadingRegistry(Heading);

export const H1 = withProps({ level: 1 })(EnhacedHeading);
export const H2 = withProps({ level: 2 })(EnhacedHeading);
export const H3 = withProps({ level: 3 })(EnhacedHeading);
export const H4 = withProps({ level: 4 })(EnhacedHeading);
export const H5 = withProps({ level: 5 })(EnhacedHeading);
export const H6 = withProps({ level: 6 })(EnhacedHeading);

Heading.propTypes = {
  level: PropTypes.number,
  children: PropTypes.node,
};
