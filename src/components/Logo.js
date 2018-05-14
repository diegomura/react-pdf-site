import styled, { keyframes } from 'styled-components';
import Logo from '../static/images/logo.png';

const rotate360 = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const LogoImage = styled.img.attrs({ src: Logo })`
  padding: 56px;
  width: ${props => props.size || '54px'};
  animation: ${rotate360} 4s linear infinite;
`;

export default LogoImage;
