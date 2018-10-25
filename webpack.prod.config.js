const path = require('path')
const webpack = require('webpack')
const baseWebpackConfig = require('./webpack.base.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  ...baseWebpackConfig,
  plugins: [
    new HtmlWebpackPlugin({
      template: 'devServer/index.html'
    }),
    new webpack.HashedModuleIdsPlugin() // so that file hashes don't change unexpectedly
  ],
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'docs'),
    filename: '[name].[hash].js'
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name (module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]

            // npm package names are URL-safe, but some servers don't like @ symbols like .Net
            return `npm.${packageName.replace('@', '')}`
          }
        }
      }
    }
  }
}
