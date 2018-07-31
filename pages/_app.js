import React from 'react';
import App, { Container } from 'next/app'
import Frame from '../src/components/Frame';
import withTheme from '../src/styled/withTheme';

class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Frame>
          <Component {...pageProps} />
        </Frame>
      </Container>
    );
  }
}

export default withTheme(MyApp);
