const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.site.config.dev');
const ip = require('address').ip();

process.env.NODE_ENV = 'development';
process.env.BABEL_ENV = 'development';

const defaultPort = 8080;

const devServerOptions = {
  disableHostCheck: true,
  overlay: true,
  hot: true,
  host: ip,
  publicPath: '/',
  stats: {
    colors: true,
  },
};

const compiler = webpack(webpackConfig);
const server = new WebpackDevServer(compiler, devServerOptions);

server.listen(defaultPort, devServerOptions.host, () => {
  process.stdout.write(`Server is running at http://${ip}:${defaultPort}\n`);
});

