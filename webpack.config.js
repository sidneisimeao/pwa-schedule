const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/assets/js/app.js',
  },
  // source maps
  //devtool: 'inline-source-map',
  // webpack-dev-server
  devServer: {
    contentBase: path.join(__dirname, './src'),
    compress: true,
    port: 9000,
    publicPath: './',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './src/dist'),
    publicPath: './src',
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
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
