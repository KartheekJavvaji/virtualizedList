const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.config')

module.exports = {
  ...baseWebpackConfig,
  devtool: '#inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'devServer/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './devServer'
    // hot: true
  }
}
