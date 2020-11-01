import React from 'react';
import styled from '@emotion/styled';

import Icon from './Icon';
import media from '../styled/media';

const List = styled.ol`
  height: 4px;
  display: flex;
  position: relative;
  margin: 184px 0px;
  list-style: none;
  background: ${({ theme }) => theme.black};

  &:before {
    content: '';
    right: -4px;
    border: 10px solid transparent;
    border-radius: 3px;
    border-right: 0;
    border-left: ${({ theme }) => `20px solid ${theme.black}`};
    position: absolute;
    top: -8px;
    width: 0;
    height: 0;
    display: block;
  }

  ${media.tablet} {
    padding: 0px 20px;
  }
`;

const ItemWrapper = styled.li`
  flex: 1;
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:before {
    width: 0px;
    content: '';
    height: 60px;
    display: block;
    position: absolute;
    border: ${({ theme }) => `1px dashed ${theme.black}`};
    top: ${(props) => (props.position === 'bottom' ? '20px' : null)};
    bottom: ${(props) => (props.position === 'top' ? '20px' : null)};

    ${media.phone}{
      height: 50px;
    }
  }
`;

const ItemIcon = styled.div`
  width: 45px;
  height: 45px;
  color: white;
  z-index: 100;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.red};

  ${media.phone} {
    width: 32px;
    height: 32px;
  }
`;

const ItemDescription = styled.p`
  width: 125%;
  padding: 8px;
  position: absolute;
  text-align: center;
  border-radius: 6px;
  color: white;
  background: ${({ theme }) => theme.black};
  top: ${(props) => (props.position === 'bottom' ? '60px' : null)};
  bottom: ${(props) => (props.position === 'top' ? '60px' : null)};

  ${media.tablet} {
    width: 150%;
    font-size: 15px;
  }

  ${media.phone} {
    width: 175%;
    font-size: 12px;
    top: ${(props) => (props.position === 'bottom' ? '50px' : null)};
    bottom: ${(props) => (props.position === 'top' ? '50px' : null)};
  }
`;

const TimelineItem = ({ icon, iconLabel, position, children }) => (
  <ItemWrapper position={position}>
    <ItemDescription position={position}>{children}</ItemDescription>
    <ItemIcon>
      <Icon type={icon} label={iconLabel} />
    </ItemIcon>
  </ItemWrapper>
);

const OverviewTimeline = () => (
  <List>
    <TimelineItem position="top" icon="cogs" iconLabel="">
      Internal structures creation
    </TimelineItem>
    <TimelineItem position="bottom" icon="file" iconLabel="">
      PDF document creation & metadata
    </TimelineItem>
    <TimelineItem position="top" icon="download" iconLabel="">
      Fetching assets
    </TimelineItem>
    <TimelineItem position="bottom" icon="copy" iconLabel="">
      Wrapping pages
    </TimelineItem>
    <TimelineItem position="top" icon="paint-brush" iconLabel="">
      Rendering
    </TimelineItem>
    <TimelineItem position="bottom" icon="save" iconLabel="">
      Finish document
    </TimelineItem>
  </List>
);

export default OverviewTimeline;
