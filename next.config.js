const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  postcssLoaderOptions: {
    parser: true,
    config: {
      ident: 'postcss',
      plugins: () => [
        require('postcss-flexbugs-fixes'),
        require('postcss-preset-env')({
          autoprefixer: {
            flexbox: 'no-2009',
          },
          stage: 3,
        }),
      ],
    }
  }
})