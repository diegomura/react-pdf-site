import styled from '@emotion/styled';

import media from '../styled/media';

const Wrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  margin-bottom: 48px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  box-shadow: 0 25px 50px 0 rgba(62, 62, 62, 0.15);
`;

const Table = styled.table`
  width: 100%;
  font-size: 16px;
  overflow: hidden;
  line-height: 24px;
`;

export const TableHeading = styled.th`
  text-align: left;
  padding: 5px 11px;
  border-right: 0px;
  font-family: 'Taviraj';
  border: 1px solid rgba(141, 22, 2, 0.2);
  color: ${({ theme }) => theme.darkRed};
  background-color: ${({ theme }) => theme.lightRed};

  &:first-child {
    border-top-left-radius: 6px;
  }

  &:last-child {
    border-top-right-radius: 6px;
    border-right: 1px solid rgba(141, 22, 2, 0.2);
  }

  ${media.phone} {
    font-size: 14px;
    padding: 5px 8px;
  }
`;

export const TableCell = styled.td`
  font-size: 16px;
  line-height: 24px;
  padding: 5px 11px;
  border-right: 0px;
  border-bottom: 0px;
  font-family: 'Source Sans Pro';
  border: 1px solid rgba(166, 166, 166, 0.2);

  &:last-child {
    border-right: 1px solid rgba(166, 166, 166, 0.2);
  }

  code {
    font-size: 10px;
    padding: 2px 4px;
    white-space: nowrap;
  }

  em {
    white-space: nowrap;
  }

  ${media.phone} {
    font-size: 14px;
    padding: 5px 8px;
  }
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: white;
  }

  &:nth-child(odd) {
    background-color: #fbfbfb;
  }
`;

export default ({ children }) => (
  <Wrapper>
    <Table cellSpacing={0}>{children}</Table>
  </Wrapper>
);
