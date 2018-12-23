const withCSS = require('@zeit/next-css');
const withTypescript = require("@zeit/next-typescript");
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([
  withCSS({
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:5]",
    }
  }),
  withTypescript
]);