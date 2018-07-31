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
  opacity: 0.3;
  margin-bottom: 36px;
  text-decoration: none;
`;

export default GitHubIcon;
