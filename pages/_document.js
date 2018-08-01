import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import 'react-tippy/dist/tippy.css';
import '../static/styles/index.css';
import '../static/styles/icons.css';
import '../static/styles/fonts.css';
import '../static/styles/prism.css';
import '../static/styles/tooltips.css';
import '../static/styles/codemirror.css';

class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html>
        <Head>
          {this.props.styleTags}
          <title>React-pdf</title>
          <link rel="stylesheet" href="https://unpkg.com/codemirror@5.39.2/lib/codemirror.css" />
          <link rel="stylesheet" href="/_next/static/style.css" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument;
