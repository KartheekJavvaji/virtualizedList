const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin')

const baseWebpackConfig = require('./webpack.base.config')

module.exports = {
  ...baseWebpackConfig,
  devtool: '#inline-source-map',
  plugins: [
    new CleanPlugin(['dist']),
    new HtmlWebpackPlugin({
      favicon: 'favicon.ico',
      template: 'src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    ...baseWebpackConfig.plugins
  ],
  devServer: {
    contentBase: './dist'
    // hot: true
  }
}
