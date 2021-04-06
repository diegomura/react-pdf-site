import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from 'emotion-theming';

import theme from '../src/styled/theme';
import components from '../src/lib/markdown';
import trackAnalytics from '../src/lib/analytics';

// Global styles
require('react-tippy/dist/tippy.css');
require('../public/styles/index.css');
require('../public/styles/fonts.css');
require('../public/styles/prism.css');
require('../public/styles/tooltips.css');
require('../public/styles/codemirror.css');

import App from 'next/app';

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <MDXProvider components={components}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </MDXProvider>
    );
  }
}

export default trackAnalytics(MyApp);
