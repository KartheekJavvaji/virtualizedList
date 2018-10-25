const webpack = require('webpack')
const baseWebpackConfig = require('./webpack.base.config')

module.exports = {
  ...baseWebpackConfig,
  devtool: '#inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
}
