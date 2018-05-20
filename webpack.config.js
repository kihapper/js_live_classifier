const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    'index': [
      path.resolve(__dirname, 'src/index.js')
    ]
  },
  output: {
    filename: 'bundle_tiger.js',
    path: path.resolve(__dirname, 'src/'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
      },
    ]
  },
  resolve: {
    extensions: ['.js',],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './')
  },
};
