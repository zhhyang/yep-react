/* eslint-disable import/no-extraneous-dependencies */
const del = require('del');
const rollup = require('rollup');
const replace = require('rollup-plugin-replace');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');

let promise = Promise.resolve();

promise = promise.then(() => del(['dist/*']));

const type2name = {
  cjs: 'dist.js',
  umd: 'dist.umd.js',
  es: 'dist.es.js',
};

['es', 'cjs', 'umd'].forEach((format) => {
  promise = promise.then(() => rollup.rollup({
    input: 'src/index.js',
    plugins: [
      replace({
        'process.env.NODE_ENV': JSON.stringify(format === 'umd' ? 'development' : 'production'),
      }),
      babel({
        exclude: 'node_modules/**',
        plugins: ['external-helpers'],
      }),
      nodeResolve({
        jsnext: true,
        main: true,
        extensions: ['.js', '.jsx'],
      }),
      commonjs({
        include: [
          'node_modules/**',
        ],
      }),
    ],
    external: format !== 'umd' ? ['react'] : undefined,
  }).then(bundle => bundle.write({
    file: `dist/${type2name[format]}`,
    format,
    sourcemap: true,
    name: format === 'umd' ? 'Yep-React' : undefined,
  })));
});

promise.catch(err => console.error(err.stack)); // eslint-disable-line no-console
