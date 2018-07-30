import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

const withTheme = WrappedComponent => props => (
  <ThemeProvider theme={theme}>
    <WrappedComponent {...props} />
  </ThemeProvider>
);

export default withTheme;
