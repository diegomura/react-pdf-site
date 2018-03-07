import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

const GitHubIcon = styled(({ size, className }) => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href="http://www.github.com/diegomura/react-pdf"
    className={className}
  >
    <Icon type="github" size={size || 30} />
  </a>
))`
  color: black;
  margin-bottom: 36px;
  opacity: 0.3;
`;

export default GitHubIcon;
