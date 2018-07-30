import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const LogoImage = styled.img.attrs({ src: '/static/images/logo.png' })`
  padding: 56px;
  width: ${props => props.size || '54px'};
  animation: ${rotate360} 4s linear infinite;
`;

export default LogoImage;
