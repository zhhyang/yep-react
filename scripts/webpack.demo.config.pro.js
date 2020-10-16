const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const sassModuleRegex = /\.module\.(scss|sass)$/;

const config = {
  mode: 'production',
  devtool: false,
  entry: {
    demo: path.join(process.cwd(), 'demo-link/index'),
  },
  output: {
    pathinfo: true,
    path: path.join(process.cwd(), 'build'),
    publicPath: '',
    filename: 'demo/[name].[chunkhash:8].js',
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
        test: /\.js$|[j|t]sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader'),
          },
        ],
      },
      {
        test: /\.css/,
        exclude: /demo.css$/,
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
                  overrideBrowserslist: [
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
        ],
      },
      {
        test: /\.css/,
        include: /demo.css$/,
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
                  overrideBrowserslist: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9', // React doesn't support IE8 anyway
                  ],
                  flexbox: 'no-2009',
                }),
              ],
            },
          },
        ],
      },
      {
        test: /\.scss/,
        exclude: sassModuleRegex,
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
                  overrideBrowserslist: [
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
        ],
      },
      {
        test: /\.module\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: require.resolve('css-loader'),
            options: {modules: true},
          },
          {
            loader: 'postcss-loader',
            options: {
              // Necessary for external CSS imports to work
              // https://github.com/facebookincubator/create-react-app/issues/2677
              ident: 'postcss',
              plugins: () => [
                autoprefixer({
                  overrideBrowserslist: [
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
        ],
      },
      {
        // Exclude `js` files to keep "css" loader working as it injects
        // its runtime that would otherwise be processed through "file" loader.
        // Also exclude `html` and `json` extensions so they get processed
        // by webpacks internal loaders.
        exclude: [/\.(js|jsx|mjs|tsx)$/, /\.html$/, /\.json$/, /\.scss$/, /\.css$/],
        loader: require.resolve('file-loader'),
        options: {
          name: 'demo/[name].[hash:8].[ext]',
        },
      },
    ],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // set to true if you want JS source maps
      }),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['build/demo/', 'build/demo.html'], {
      root: process.cwd(),
    }),
    new MiniCssExtractPlugin({
      filename: 'demo/[name].[chunkhash:8].css',
    }),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      filename: 'demo.html',
      template: 'demo/index.html',
      inject: true,
    }),
  ],
};

module.exports = config;
