import styled from '@emotion/styled';

import media from '../styled/media';

const Paragraph = styled.p`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 32px;
  color: ${({ theme }) => theme.black};

  ${media.phone} {
    font-size: 16px;
    margin-bottom: 1.3em;
  }
`;

export default Paragraph;
