module.exports = {
  swcMinify: false,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.md/,
      use: [options.defaultLoaders.babel, '@mdx-js/loader'],
    });

    config.module.rules.push({
      test: /\.worker\.(min\.)?js$/,
      loader: 'file-loader',
      options: {
        name: '[contenthash].[ext]',
        publicPath: '_next/static/worker',
        outputPath: 'static/worker',
      },
    });

    config.resolve.alias.canvas = false;

    return config;
  },
};
