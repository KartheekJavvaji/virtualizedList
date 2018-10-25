const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, './src'),
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['eslint-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(scss)$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader', // compiles Sass to CSS, using Node Sass by default
          'postcss-loader'
        ]
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'image-webpack-loader',
          options: {
            mozjpeg: {
              enabled: false
              // NOTE: mozjpeg is disabled as it causes errors in some Linux environments
              // Try enabling it in your environment by switching the config to:
              // enabled: true,
              // progressive: true,
            },
            gifsicle: {
              interlaced: false
            },
            optipng: {
              optimizationLevel: 7
            },
            pngquant: {
              quality: '65-90',
              speed: 4
            }
          }
        }
      },
      {
        test: /\.(gif|svg|jpg|png)$/,
        loader: 'file-loader' // https://www.npmjs.com/package/file-loader
      }
    ]
  },
  devtool: '#inline-source-map',
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: [
      'node_modules',
      'src'
    ]
    // alias: {
    //   constants: './src/app.constants'
    // }
  },
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
}
