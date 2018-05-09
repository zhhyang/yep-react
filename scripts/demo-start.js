const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const webpackConfig = require('./webpack.demo.config.dev');

process.env.NODE_ENV = 'development';
process.env.BABEL_ENV = 'development';

const defaultPort = 8081;

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
    '/demo/demo.bundle.js': {
      target: `http://127.0.0.1:${defaultPort}`,
      pathRewrite: {
        '^/demo': '',
      },
    },
    '/': {
      target: `http://127.0.0.1:${defaultPort}`,
      pathRewrite: {
        '^/.*$': '/',
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

