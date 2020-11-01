import React from 'react';
import styled from '@emotion/styled';

import media from '../styled/media';

const CONTENT_COLOR = '#d1e3f3';
const PADDING_COLOR = '#e2efdd';
const MARGIN_COLOR = '#fce6d0';

const Wrapper = styled.div`
  display: flex;
  margin: 56px 0px;
  align-items: center;
  justify-content: center;

  ${media.phone} {
    flex-direction: column;
  }
`;

const Margin = styled.div`
  position: relative;
  border: 30px solid ${MARGIN_COLOR};

  &:after {
    top: -48px;
    left: -30px;
    content: '460x370';
    position: absolute;
    font-size: 10px;
    display: block;
  }

  ${media.phone} {
    width: 100%;
  }
`;

const Padding = styled.div`
  width: 400px;
  height: 250px;
  background: ${CONTENT_COLOR};
  border-top: 30px solid ${PADDING_COLOR};
  border-bottom: 30px solid ${PADDING_COLOR};

  ${media.phone} {
    width: 100%;
    height: 200px;
  }
`;

const Glossary = styled.div`
  display: flex;
  width: 200px;
  margin-left: 40px;
  flex-direction: column;

  ${media.phone} {
    width: auto;
    margin-top: 40px;
    margin-left: 0px;
    flex-direction: row;
  }
`;

const ColoredBox = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  background: ${(props) => props.color};
`;

const ItemWrapper = styled.div`
  display: flex;
  margin-bottom: 8px;
  align-items: center;

  ${media.phone} {
    margin-left: 8px;
  }
`;

const Item = ({ color, children }) => (
  <ItemWrapper>
    <ColoredBox color={color} />
    <span>{children}</span>
  </ItemWrapper>
);

const DebugSample = () => (
  <Wrapper>
    <Margin>
      <Padding />
    </Margin>
    <Glossary>
      <Item color={CONTENT_COLOR}>Content</Item>
      <Item color={PADDING_COLOR}>Padding</Item>
      <Item color={MARGIN_COLOR}>Margin</Item>
    </Glossary>
  </Wrapper>
);

export default DebugSample;
