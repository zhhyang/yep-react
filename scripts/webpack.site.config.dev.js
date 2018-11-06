const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const path = require('path');
const address = require('address');
const ip = address.ip();
const config = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: [require.resolve('react-dev-utils/webpackHotDevClient'), path.join(process.cwd(), 'site/doc/index')],
  output: {
    pathinfo: true,
    path: path.join(process.cwd(), 'dist/site'),
    publicPath: '/',
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@jdcfe/yep-react': path.resolve(__dirname, '../src'),
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
      template: 'site/doc/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    new OpenBrowserPlugin({url: `http://${ip}:8080/`}),
  ],
};

module.exports = config;
