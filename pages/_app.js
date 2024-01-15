import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from 'emotion-theming';
import Head from 'next/head';

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
      <>
        <Head>
          <title>React-pdf</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <MDXProvider components={components}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </MDXProvider>
      </>
    );
  }
}

export default trackAnalytics(MyApp);
