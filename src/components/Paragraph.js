import styled from 'styled-components';

import media from '../styled/media';

const Paragraph = styled.p`
  margin-bottom: 32px;
  color: ${({ theme }) => theme.black};
  font-size: 20px;
  line-height: 32px;
  ${media.phone`
    font-size: 16px;
    margin-bottom: 1.3em;
  `}
`;

export default Paragraph;
