import styled, { keyframes } from 'styled-components';
import Logo from '../static/images/logo.png';

const rotate360 = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const LogoImage = styled.img.attrs({ src: Logo })`
  width: 54px;
  padding: 56px;
  animation: ${rotate360} 4s linear infinite;
`;

export default LogoImage;
