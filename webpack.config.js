const path = require('path');

module.exports = {
  entry: './src/index.js',
  //Change to production
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
      rules: [
          {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env'],
                //   plugins: ['@babel/plugin-proposal-object-rest-spread']
                }
              }
          },
          // {
          //     //both scss and css
          //     test: /\.s?css$/,
          //     exclude: /node_modules/,
          //     use: [
          //         'style-loader',
          //         'css-loader',
          //         'sass-loader'
          //     ] //specify array of loaders
          // }
      ]
  },
  // devtool: "#inline-source-map"
};