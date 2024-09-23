import React from 'react';
import styled from '@emotion/styled';
import { useToggle } from 'react-use';

import Icon from '../UI/Icon';
import media from '../../styled/media';

const Wrapper = styled.div`
  font-size: 16px;
  margin-left: 18px;
  position: relative;
  margin-bottom: 20px;
  align-self: flex-start;

  ${media.tablet} {
    margin-top: 30px;
    margin-bottom: 0px;
  }
`;

const Button = styled.div`
  cursor: pointer;
  line-height: 24px;
  white-space: nowrap;
  text-decoration: none;
  padding: 4px 10px 4px 16px;
  font-family: 'Source Sans Pro';
  color: ${(props) => props.theme.gray1};
  transition: color 0.2s, background 0.2s;
  outline: 1px solid ${(props) => props.theme.gray1};

  &:hover {
    outline-width: 2px;
  }

  span {
    margin-right: 10px;
  }
`;

const Chevron = styled(Icon)`
  transition: 0.1s linear all;
  transform: ${props => `rotate(${props.open ? 180 : 0}deg)`};
`;

const Popup = styled.div`
  top: 40px;
  left: 0;
  width: 200px;
  z-index: 1000;
  position: absolute;
  background-color: white;
  border: 1px solid ${(props) => props.theme.gray1};
  display: ${props => props.open ? 'visible' : 'none'};

  > div {
    cursor: pointer;
    padding: 10px 16px;
    background-color: white;
    transition: 0.2s linear all;

    &:hover {
      background-color: ${({ theme }) => theme.gray3};
    }
  }
`;

const VersionPicker = ({ selected = 'v4' }) => {
  const [menuOpen, toggleMenu] = useToggle(false);

  const onItemClick = (v) => {
    const hostname = location.hostname.replace(/^(v\d\.)/, '')
    const subdomain = v === 'v4' ? '' : `${v}.` ;
    const url = `${location.protocol}//${subdomain}${hostname}:${location.port}${location.pathname}`;

    window.location.replace(url);
  }

  return (
    <Wrapper>
      <Button onClick={toggleMenu}>
        <span>{selected}</span>
        <Chevron type="chevron-down" open={menuOpen} />
      </Button>

      <Popup open={menuOpen} onMouseLeave={toggleMenu}>
        <div onClick={() => onItemClick('v1')}>v1</div>
        <div onClick={() => onItemClick('v2')}>v2</div>
        <div onClick={() => onItemClick('v3')}>v3</div>
        <div onClick={() => onItemClick('v4')}>v4</div>
      </Popup>
    </Wrapper>
  );
};

export default VersionPicker;
