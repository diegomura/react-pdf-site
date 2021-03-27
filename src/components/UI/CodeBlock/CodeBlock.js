import React from 'react';
import Prism from 'prismjs';
import styled from '@emotion/styled';
import { PrismCode } from 'react-prism';

import media from '../../../styled/media';

const Wrapper = styled.div`
  position: relative;
  border-radius: 8px;
  margin-bottom: 40px;
  padding: 24px 20px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.black};

  ${media.phone} {
    padding: 18px 14px;
    margin-bottom: 30px;
  }
`;

const Code = styled(PrismCode)`
  color: #e7e7e7;
  font-size: 16px;
  line-height: 24px;

  ${media.phone} {
    font-size: 15px;
    line-height: 20px;
  }
`;

const CodeBlock = ({ language, children }) => (
  <Wrapper>
    <pre>
      <Code className={`language-${language}`}>{children}</Code>
    </pre>
  </Wrapper>
);

CodeBlock.defaultProps = {
  language: 'jsx',
  isPlayable: false,
};

export default CodeBlock;
