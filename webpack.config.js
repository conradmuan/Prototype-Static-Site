var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'client.js'),
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'client.bundle.js',
  },
  module: {
    rules: [
        {
            test: /\.js$|\.jsx$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react']
                }
            }
        }
    ]
  },
  stats: {
      colors: true
  },
  devtool: 'source-map',
  resolve: {
      extensions: ['.js', '.jsx']
  },
  mode: 'development',
};
