const { resolve, join } = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = {
  dist: resolve(__dirname, 'dist'),
  src: resolve(__dirname, 'src'),
}

module.exports = ({ production = false } = {}) => ({
  entry: ['@babel/polyfill', join(path.src, 'index.js')],
  mode: production ? 'production' : 'development',
  devtool: production ? false : 'inline-source-map',
  output: {
    path: path.dist,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(path.dist), 
    new HtmlWebpackPlugin()
  ],
});
