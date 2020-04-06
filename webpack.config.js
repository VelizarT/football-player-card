const path = require('path');

module.exports = {
  entry: './src/js/main.js',
  mode: 'production',
  output: {
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    ],
  },
  devtool: 'cheap-module-eval-source-map',
};
