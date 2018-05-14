const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const webpackConfig = require('./webpack.site.config.dev');

process.env.NODE_ENV = 'development';
process.env.BABEL_ENV = 'development';

const defaultPort = 8080;

const devServerOptions = {
  disableHostCheck: true,
  overlay: true,
  hot: true,
  host: '127.0.0.1',
  publicPath: '/',
  contentBase: './src/html',
  stats: {
    colors: true,
  },
  proxy: {
    '/doc/doc.bundle.js': {
      target: `http://127.0.0.1:${defaultPort}`,
      pathRewrite: {
        '^/doc': '',
      },
    },
    '/doc/': {
      target: `http://127.0.0.1:${defaultPort}`,
      pathRewrite: {
        '^/doc/.*$': '/doc',
      },
      changeOrigin: true,
    },
  },
};

const compiler = webpack(webpackConfig);
const server = new WebpackDevServer(compiler, devServerOptions);

server.listen(defaultPort, devServerOptions.host, () => {
  process.stdout.write(`Server is running at http://127.0.0.1:${defaultPort}\n`);
});

