### Webpack config `web only`

React-pdf is built on top of [PDFKit](http://pdfkit.org/), which for browser usage requires a couple of node.js API shims.

#### Webpack 4

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

#### Webpack 5

Webpack 5 doesn't include node shims automatically anymore and we must
opt-in to all shims we want. We can do this we have to add a few
dependencies to our project:

```shell
npm install process browserify-zlib stream-browserify util buffer assert

# using yarn
yarn add process browserify-zlib stream-browserify util buffer assert
```

after the modules are installed, we need to adjust our `webpack.config` file:

```js
const webpack = require("webpack");

module.exports = {
  resolve: {
    fallback: {
      module: "empty",
      dgram: "empty",
      dns: "mock",
      fs: "empty",
      http2: "empty",
      net: "empty",
      tls: "empty",
      child_process: "empty",
      process: require.resolve("process/browser"),
      zlib: require.resolve("browserify-zlib"),
      stream: require.resolve("stream-browserify"),
      util: require.resolve("util"),
      buffer: require.resolve("buffer"),
      asset: require.resolve("assert"),
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
      process: "process/browser",
    }),
  ],
}
```

#### Create React App

If you are using _create-react-app_, those are already included.
