const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackRootPlugin = require('html-webpack-root-plugin')
const webpack = require('webpack')


const config = (env, argv) => {

  const backend_url = argv.mode === 'production'
    ? 'http://localhost:3003/api/blogs'
    : 'http://localhost:3003/api/blogs'

  return {
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'main.js'
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'build'),
      compress: true,
      port: 3000,
      proxy: {
        '/api': {
          target: 'http://localhost:3003',
          secure: false
        }
      }
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          query: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          },
        },
        {
          test: /\.css$/,
          loaders: ['style-loader', 'css-loader']
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin(),
      new HtmlWebpackRootPlugin(),
      new webpack.DefinePlugin({
        BACKEND_URL: JSON.stringify(backend_url)
      }),
    ]
  }
}
module.exports = config