/* eslint-disable */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// common function to get css loaders
const getStyleLoaders = (cssOptions, preProcessor, preProcessorOptions) => {
  const loaders = [
    MiniCssExtractPlugin.loader,
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
  mode: 'production',
  devtool: false,
  entry: {
    site: path.join(process.cwd(), 'site/index'),
  },
  output: {
    pathinfo: true,
    path: path.join(process.cwd(), 'build'),
    publicPath: '',
    filename: 'site/[name].[chunkhash:8].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx'],
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
        test: /\.js$|[j|t]sx?$/,
        exclude: /node_modules/,
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
        exclude: [/\.(js|jsx|mjs|tsx)$/, /\.html$/, /\.json$/, /\.scss$/],
        loader: require.resolve('file-loader'),
        options: {
          name: 'site/[name].[hash:8].[ext]',
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __JD__: process.env.JD,
    }),
    new CleanWebpackPlugin(['build/site/', 'build/index.html'], {
      root: process.cwd(),
    }),
    new MiniCssExtractPlugin({
      filename: 'site/[name].[chunkhash:8].css',
    }),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'site/index.html',
      inject: true,
    }),
  ],
};

module.exports = config;
