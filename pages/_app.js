import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from 'emotion-theming';
import Head from 'next/head';

import theme from '../src/styled/theme';
import components from '../src/lib/markdown';

// Global styles
require('react-tippy/dist/tippy.css');
require('react-pdf/dist/Page/AnnotationLayer.css');
require('react-pdf/dist/Page/TextLayer.css');

require('../public/styles/index.css');
require('../public/styles/fonts.css');
require('../public/styles/prism.css');
require('../public/styles/tooltips.css');
require('../public/styles/codemirror.css');

import App from 'next/app';
import TalkToUs from '../src/components/TalkToUs/TalkToUs';

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
            <TalkToUs />
          </ThemeProvider>
        </MDXProvider>

        <Analytics />
      </>
    );
  }
}

export default MyApp;
