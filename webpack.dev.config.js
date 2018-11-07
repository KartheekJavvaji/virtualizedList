const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.config')

module.exports = {
  ...baseWebpackConfig,
  devtool: '#inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      favicon: 'favicon.ico',
      template: 'src/index.html'
    }),
    ...baseWebpackConfig.plugins
  ],
  devServer: {
    hot: true
  }
}
