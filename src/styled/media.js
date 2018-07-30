import { css } from 'styled-components';

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576
}

export const queries = {
  desktop: `(max-width: ${sizes.desktop}px)`,
  tablet: `(max-width: ${sizes.tablet}px)`,
  phone: `(max-width: ${sizes.phone}px)`
}

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `

  return acc
}, {})

export default media;
