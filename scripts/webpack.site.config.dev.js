const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const path = require('path');

const config = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: {
    doc: path.join(process.cwd(), 'site/doc/index'),
  },
  output: {
    pathinfo: true,
    path: path.join(process.cwd(), 'dist/site'),
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@jdcfe/lrc-m': path.resolve(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      {
        test: /allDocData\.js$/,
        use: [
          {
            loader: 'val-loader',
          },
        ],
      },
      {
        test: /\.jsx?$/,
        include: [path.join(process.cwd(), 'site'), path.join(process.cwd(), 'src')],
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      __DEV__: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'site/index.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'doc/index.html',
      template: 'site/doc/index.html',
      chunks: ['doc'],
      inject: true,
    }),
    new webpack.HotModuleReplacementPlugin(),// enable HMR globally
    new OpenBrowserPlugin({url: `http://localhost:8080/doc`})
  ],
}

module.exports = config;
