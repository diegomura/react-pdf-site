import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

import Button from './Button';

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  margin: 32px 0px;
  text-decoration: none;
  justify-content: flex-end;
`;

const GoToExample = ({ name }) => (
  <Link href={`/repl?example=${name}`}>
    <Wrapper>
      <Button primary>See it in action →</Button>
    </Wrapper>
  </Link>
);

export default GoToExample;
