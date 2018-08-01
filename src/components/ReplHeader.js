import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Icon from './Icon';
import Button from './Button';
import media from '../styled/media';

const Wrapper = styled.div`
  height: 56px;
  color: white;
  display: none;
  flex-direction: row;
  justify-content: space-between;
  background: ${({ theme }) => theme.red};
  ${media.desktop`
    display: flex;
  `}
  ${media.phone`
    height: 45px;
  `}
`;

const BackButton = styled.button`
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
  opacity: ${({ active }) => active ? 0.8 : 1};
  background: ${({ active, theme }) => active ? theme.darkRed : 'transparent' };
`;

const ReplHeader = ({ activeTab, onTabClick }) => (
  <Wrapper>
    <Link href="/">
      <BackButton>
        <Icon type="github" size={18} />
      </BackButton>
    </Link>
    <Tabs>
      <Tab active={activeTab === 'code'} onClick={() => onTabClick('code')}>Code</Tab>
      <Tab active={activeTab === 'pdf'} onClick={() => onTabClick('pdf')}>PDF</Tab>
    </Tabs>
  </Wrapper>
);

export default ReplHeader;
