import React from 'react';
import { compose } from 'recompose';
import App, { Container } from 'next/app'
import withNProgress from "next-nprogress";
import NProgressStyles from "next-nprogress/styles";
import Frame from '../src/components/Frame';
import withTheme from '../src/styled/withTheme';
import trackAnalytics from '../src/lib/analytics';

// Global styles
require('react-tippy/dist/tippy.css');
require('../static/styles/index.css');
require('../static/styles/icons.css');
require('../static/styles/fonts.css');
require('../static/styles/prism.css');
require('../static/styles/tooltips.css');
require('../static/styles/codemirror.css');


class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps, router }
  }

  render () {
    const { Component, pageProps, router } = this.props;
    const AppFrame = router.pathname === '/repl' ? 'div' : Frame;

    return (
      <Container>
        <AppFrame>
          <Component {...pageProps} />
        </AppFrame>
        <NProgressStyles color="#F22300" spinner={false} />
      </Container>
    );
  }
}

export default compose(
  withNProgress(300), withTheme, trackAnalytics
)(MyApp);
