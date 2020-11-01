import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from 'emotion-theming';

import theme from '../src/styled/theme';
import Frame from '../src/components/Frame';
import components from '../src/lib/markdown';
import trackAnalytics from '../src/lib/analytics';

// Global styles
require('react-tippy/dist/tippy.css');
require('../public/styles/index.css');
require('../public/styles/icons.css');
require('../public/styles/fonts.css');
require('../public/styles/prism.css');
require('../public/styles/tooltips.css');
require('../public/styles/codemirror.css');

import App from 'next/app';


class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    const AppFrame = router.pathname === '/repl' ? 'div' : Frame;

    return (
      <MDXProvider components={components}>
        <ThemeProvider theme={theme}>
          <AppFrame>
            <Component {...pageProps} />
          </AppFrame>
        </ThemeProvider>
      </MDXProvider>
    );
  }
}

export default trackAnalytics(MyApp);
