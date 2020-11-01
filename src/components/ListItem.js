import styled from '@emotion/styled';

import media from '../styled/media';

const ListItem = styled.li`
  color: ${({ theme }) => theme.black};
  font-size: 20px;
  line-height: 36px;
  font-family: 'Source Sans Pro';

  ${media.phone} {
    font-size: 16px;
    line-height: 16px;
    margin-bottom: 1.3em;
  }
`;

export default ListItem;
