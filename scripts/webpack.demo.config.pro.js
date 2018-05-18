const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const path = require('path');
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const config = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  entry: {
    demo: path.join(process.cwd(), 'demo/index'),
  },
  output: {
    pathinfo: true,
    path: path.join(process.cwd(), 'build'),
    publicPath: '/',
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
        include: [path.join(process.cwd(), 'site'), path.join(process.cwd(), 'src'),path.join(process.cwd(), 'demo')],
        use: [
          {
            loader: require.resolve('babel-loader'),
          },
        ],
      },
      {
        test: /\.css/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              // Necessary for external CSS imports to work
              // https://github.com/facebookincubator/create-react-app/issues/2677
              ident: 'postcss',
              plugins: () => [
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9', // React doesn't support IE8 anyway
                  ],
                  flexbox: 'no-2009',
                }),
                pxtorem({
                  rootValue: 100,
                  propWhiteList: [],
                }),
              ],
            },
          },
        ]
      },
      {
        test: /\.scss/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              // Necessary for external CSS imports to work
              // https://github.com/facebookincubator/create-react-app/issues/2677
              ident: 'postcss',
              plugins: () => [
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9', // React doesn't support IE8 anyway
                  ],
                  flexbox: 'no-2009',
                }),
                pxtorem({
                  rootValue: 100,
                  propWhiteList: [],
                }),
              ],
            },
          },
          'sass-loader',
        ]
      },
    ],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['build/demo.*', 'build/demo.html',], {
      root: process.cwd(),
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      filename: 'demo.html',
      template: 'demo/index.html',
      inject: true,
    }),
  ],
}

module.exports = config;
