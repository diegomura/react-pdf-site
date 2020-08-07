import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <html>
        <Head>
          <title>React-pdf</title>
          <link
            rel="stylesheet"
            href="https://unpkg.com/codemirror@5.39.2/lib/codemirror.css"
          />
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicons/apple-touch-icon.png?v=qABAGbMGwd"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicons/favicon-32x32.png?v=qABAGbMGwd"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicons/favicon-16x16.png?v=qABAGbMGwd"
          />
          <link rel="manifest" href="/favicons/site.webmanifest?v=qABAGbMGwd" />
          <link
            rel="mask-icon"
            href="/favicons/safari-pinned-tab.svg?v=qABAGbMGwd"
            color="#8d1602"
          />
          <link rel="shortcut icon" href="/favicons/favicon.ico?v=qABAGbMGwd" />
          <meta name="msapplication-TileColor" content="#fafafa" />
          <meta
            name="msapplication-config"
            content="/favicons/browserconfig.xml?v=qABAGbMGwd"
          />
          <meta name="theme-color" content="#ffffff" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          {/* OG Tags */}
          <meta property="og:title" content="React-pdf" />
          <meta
            property="og:description"
            content="React renderer for creating PDF files on the browser, mobile and server"
          />
          <meta property="og:image" content="/images/og-banner.png" />
          <meta property="og:image:width" content="950" />
          <meta property="og:image:height" content="650" />
          <meta property="og:url" content="http://react-pdf.js.org" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
