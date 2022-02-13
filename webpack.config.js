const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')

const currentTask = process.env.npm_lifecycle_event

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[hash].js'
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  devServer: {
    port: 8080,
    static: path.join(__dirname, 'dist'),
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'usage',
                  corejs: 3,
                  targets: 'defaults'
                }
              ],
              '@babel/preset-react'
            ]
          }
        }
      }
    ]
  }
}

if (currentTask === 'build') {
  config.mode = 'production'
  config.module.rules[0].use[0] = MiniCssExtractPlugin.loader
  config.plugins.push(
    new MiniCssExtractPlugin({
      filename: 'main.[hash].css'
    }),
    new CleanWebpackPlugin(),
    new WebpackManifestPlugin()
  )
}

module.exports = config
