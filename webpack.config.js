const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const autoprefixer = require('autoprefixer');
module.exports = {
    entry: [
        `webpack-dev-server/client?http://localhost:8080`,
        'webpack/hot/only-dev-server',
        './example/index'
    ], // string | object | array
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                include: [
                    path.resolve(__dirname, "example")
                ],
                loader: "babel-loader",
            },
            {
                test: /\.css/,
                use: [
                    'style-loader',
                    'css-loader',
                    {loader: 'postcss-loader',
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
                            ],
                        },
                    }

                ]
            },
        ],
    },

    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, "libs")
        ],
        extensions: [".js", ".json", ".jsx", ".css"],
    },
    devtool: "source-map",

    context: __dirname,
    target: "web", // 枚举
    devServer: {
        contentBase: path.join(__dirname, 'public'), // boolean | string | array, static file location
        compress: true, // enable gzip compression
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
        https: false, // true for self-signed, object for cert authority
        noInfo: true, // only errors & warns on hot reload
    },

    plugins: [
        new webpack.DefinePlugin({
            DEBUG: process.env.NODE_ENV !== 'production'
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'example/index.html')
        }),
        new webpack.HotModuleReplacementPlugin(),// enable HMR globally

        new webpack.NamedModulesPlugin(),// prints more readable module names in the browser console on HMR updates
        new OpenBrowserPlugin({url: `http://localhost:8080`})
    ],
}