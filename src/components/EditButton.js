import React from 'react';
import styled from '@emotion/styled';

import Button from './Button';
import media from '../styled/media';

const Wrapper = styled.div`
  display: flex;
  position: initial;
  margin-bottom: 1em;
  text-decoration: none;
  justify-content: flex-end;

  ${media.phone} {
    display: none;
  }
`;

const EditButton = ({ to }) => (
  <Wrapper>
    <Button href={to} target="_blank" terciary>
      Edit
    </Button>
  </Wrapper>
);

export default EditButton;
