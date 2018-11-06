/* eslint-disable */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const path = require('path');
const address = require('address');
const ip = address.ip();

// common function to get css loaders
const getStyleLoaders = (cssOptions, preProcessor, preProcessorOptions) => {
  const loaders = [
    require.resolve('style-loader'),
    {
      loader: require.resolve('css-loader'),
      options: cssOptions,
    },
  ];
  if (preProcessor) {
    loaders.push({
      loader: require.resolve(preProcessor),
      options: preProcessorOptions,
    });
  }
  return loaders;
};

// css files regexes
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

const config = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: [require.resolve('react-dev-utils/webpackHotDevClient'), path.join(process.cwd(), 'site/index')],
  output: {
    pathinfo: true,
    path: path.join(process.cwd(), 'dist/site'),
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
      {
        test: cssRegex,
        exclude: cssModuleRegex,
        use: getStyleLoaders({
          importLoaders: 1,
        }),
      },
      // Adds support for CSS Modules (https://github.com/css-modules/css-modules)
      // using the extension .module.css
      {
        test: cssModuleRegex,
        use: getStyleLoaders({
          importLoaders: 1,
          modules: true,
          getLocalIdent: getCSSModuleLocalIdent,
        }),
      },
      // Opt-in support for SASS (using .scss or .sass extensions).
      // Chains the sass-loader with the css-loader and the style-loader
      // to immediately apply all styles to the DOM.
      // By default we support SASS Modules with the
      // extensions .module.scss or .module.sass
      {
        test: sassRegex,
        exclude: sassModuleRegex,
        use: getStyleLoaders({importLoaders: 2}, 'sass-loader', {
          data: '$brand-primary:#2A83E1;', //定制修改品牌首选色
        }),
      },
      // Adds support for CSS Modules, but using SASS
      // using the extension .module.scss or .module.sass
      {
        test: sassModuleRegex,
        use: getStyleLoaders(
          {
            importLoaders: 2,
            modules: true,
            getLocalIdent: getCSSModuleLocalIdent,
          },
          'sass-loader',
          {
            data: '$brand-primary:#2A83E1;', //定制修改品牌首选色
          }
        ),
      },
      {
        // Exclude `js` files to keep "css" loader working as it injects
        // its runtime that would otherwise be processed through "file" loader.
        // Also exclude `html` and `json` extensions so they get processed
        // by webpacks internal loaders.
        exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/, /\.scss$/],
        loader: require.resolve('file-loader'),
        options: {
          name: 'static/media/[name].[hash:8].[ext]',
        },
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
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    new OpenBrowserPlugin({url: `http://${ip}:8080/`}),
  ],
};

module.exports = config;
