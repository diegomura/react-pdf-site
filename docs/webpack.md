### Webpack config `web only`

React-pdf is built on top of [PDFKit](http://pdfkit.org/), which for browser usage requires a couple of node.js API shims.

If you use webpack you may need to include the following settings to your config:

```json
{
  ...
  node : {
    module: 'empty',
    dgram: 'empty',
    dns: 'mock',
    fs: 'empty',
    http2: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  }
}
```

If you are using _create-react-app_, those are already included.
