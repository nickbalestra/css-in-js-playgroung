const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const loaders = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'babel-loader'
  },
  {
    test: /\.css$/,
    exclude: /emotion\.css$/,
    use: ['style-loader', { loader: 'css-loader', options: { modules: true } }]
  },
  {
    test: /emotion\.css$/,
    use: ['style-loader', { loader: 'css-loader' }]
  }
];

module.exports = {
  entry: path.resolve('src', 'main.js'),
  output: {
    path: path.resolve('build'),
    filename: 'main.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('src', 'index.tpl.html'),
      filename: 'index.html',
      inject: false
    })
  ],
  module: {
    loaders
  }
};
