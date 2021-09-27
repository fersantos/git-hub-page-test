const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const DEV_MODE = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: path.join(process.cwd(), 'src', 'index.tsx'),
  output: {
    path:path.join(process.cwd(), 'dist'),
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].bundle.js'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.join(process.cwd(), 'src')
    }
  },
  module:{
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }, 
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(process.cwd(), 'src', 'index.html'),
      inject: 'body',
      filename: 'index.html',
      ...!DEV_MODE && {
        minify: {
          collapseWhitespace: true,
          keepClosingSlash: true,
          minifyCSS: true,
          minifyJS: true,
          minifyURLs: true,
          removeComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true
        }
      }
    })
  ],
  devServer: {
    contentBase: path.join(process.cwd(), 'dist'),
    compress: true,
    historyApiFallback: true,
    hot: true,
    port: 9000
  },
  // optmization: {
  //   usedExports: true
  // }
}