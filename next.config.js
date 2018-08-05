const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.md/,
      use: [
        options.defaultLoaders.babel,
        '@mdx-js/loader'
      ]
    });

    config.module.rules.push({
      test: /\.worker\.js$/,
      loader: 'worker-loader',
      // options: { inline: true }, // also works
      options: {
        name: 'static/[hash].worker.js',
        publicPath: '/_next/',
      },
    });

    return config
  }
})
