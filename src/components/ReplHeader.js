import React from 'react';
import Router from 'next/router';
import styled from '@emotion/styled';

import Icon from './Icon';
import Button from './Button';
import media from '../styled/media';
import BackButton from './BackButton';

const Wrapper = styled.div`
  height: 56px;
  color: white;
  display: none;
  flex-direction: row;
  justify-content: space-between;
  background: ${({ theme }) => theme.red};

  ${media.desktop} {
    display: flex;
  }

  ${media.phone} {
    height: 45px;
  }
`;

const Back = styled(BackButton)`
  border: 0px;
  width: 56px;
  color: white;
  display: flex;
  outline: none;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  justify-content: center;
  background: transparent;
`;

const Tabs = styled.div`
  flex: 1;
  display: flex;
  max-width: 250px;
`;

const Tab = styled.button`
  flex: 1;
  border: 0px;
  color: white;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  text-decoration: none;
  font-family: 'Source Sans Pro';
  transition: color 0.2s, background 0.2s;
  opacity: ${({ active }) => (active ? 0.8 : 1)};
  background: ${({ active, theme }) =>
    active ? theme.darkRed : 'transparent'};
`;

const ReplHeader = ({ activeTab, onTabClick }) => (
  <Wrapper>
    <Back>
      <Icon type="arrow-left" label="Back" size={18} />
    </Back>
    <Tabs>
      <Tab active={activeTab === 'code'} onClick={() => onTabClick('code')}>
        Code
      </Tab>
      <Tab active={activeTab === 'pdf'} onClick={() => onTabClick('pdf')}>
        PDF
      </Tab>
    </Tabs>
  </Wrapper>
);

export default ReplHeader;
