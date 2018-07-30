import styled, { keyframes } from 'styled-components';
<<<<<<< HEAD
=======
import Logo from '../static/images/logo.png';
>>>>>>> a6d5372c5b03aece27da8b03c59637dee69d60d8

const rotate360 = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

<<<<<<< HEAD
const LogoImage = styled.img.attrs({ src: '/static/images/logo.png' })`
=======
const LogoImage = styled.img.attrs({ src: Logo })`
>>>>>>> a6d5372c5b03aece27da8b03c59637dee69d60d8
  padding: 56px;
  width: ${props => props.size || '54px'};
  animation: ${rotate360} 4s linear infinite;
`;

export default LogoImage;
