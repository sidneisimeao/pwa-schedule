const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/assets/js/app.js',
  },
  // source maps
  //devtool: 'inline-source-map',
  // webpack-dev-server
  devServer: {
    contentBase: path.join(__dirname, './src/dist'),
    compress: true,
    port: 9000,
    index: 'index.html',
  },
  plugins: [
    new CleanWebpackPlugin({}),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
    ],
  },
};
