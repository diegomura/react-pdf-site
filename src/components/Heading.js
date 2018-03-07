import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import toLowerCase from '../utils/toLowerCase';
import { mapHeadingRegistry } from '../lib/headings';

const BaseHeading = css`
  font-family: 'Taviraj';
  margin-bottom: 16px;
  color: ${({ theme }) => theme.black};
`;

const H1 = styled.h1`
  ${BaseHeading} font-size: 48px;
  font-weight: 200;
  letter-spacing: 2px;
  line-height: 56px;
`;

const H2 = styled.h2`
  ${BaseHeading} font-size: 32px;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 40px;
`;

const H3 = styled.h3`
  ${BaseHeading} font-size: 24px;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 32px;
`;

const H4 = styled.h4`
  ${BaseHeading} font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

const H5 = styled.h5`
  ${BaseHeading} font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: ${({ theme }) => theme.darkRed};
`;

const H6 = styled.h6`
  ${BaseHeading}
  color: ${({ theme }) => theme.gray1};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

const Headings = [H1, H2, H3, H4, H5, H6];

class Heading extends React.Component {
  componentDidMount() {
    this.props.registerHeading({
      level: this.props.level,
      name: this.props.children[0],
      element: this.node,
    });
  }

  render() {
    const { level, children, ...props } = this.props;
    const HeadingComponent = Headings[level - 1];

    return (
      <HeadingComponent
        innerRef={n => (this.node = n)}
        id={toLowerCase(children[0])}
        {...props}
      >
        {children}
      </HeadingComponent>
    );
  }
}

Heading.propTypes = {
  level: PropTypes.number,
  children: PropTypes.node,
};

export default mapHeadingRegistry(Heading);
