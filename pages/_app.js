import React from 'react';
import { compose } from 'recompose';
import App, { Container } from 'next/app'
import Frame from '../src/components/Frame';
import withTheme from '../src/styled/withTheme';
import trackAnalytics from '../src/lib/analytics';

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
      </Container>
    );
  }
}

export default compose(
  withTheme, trackAnalytics
)(MyApp);
