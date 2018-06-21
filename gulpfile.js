const gulp = require('gulp');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const scss = require('gulp-sass');
const cleanCSS = require('gulp-clean-css'); // CSS压缩
const concat = require('gulp-concat'); // 合并文件
const rename = require('gulp-rename'); // 重命名
const clean = require('gulp-clean');
const header = require('gulp-header');
const replace = require('gulp-replace');

const pkg = require('./package.json');
const paths = 'src/**/style/index.scss';

gulp.task('clean', () => gulp.src('dist', {read: false}).pipe(clean({force: true})));

gulp.task('build-css-js', () => {
  gulp
    .src('src/**/style/index.js')
    .pipe(replace(/\/style\/?'/g, "/style/css'"))
    .pipe(replace(/\.scss/g, '.css'))
    .pipe(
      rename({
        basename: 'css',
        extname: '.js',
      })
    )
    //.pipe(cleanCSS())
    .pipe(gulp.dest('lib/'));
});

gulp.task('dist', () => {
  const banner = [
    '/*!',
    ' * <%= pkg.name %> v<%= pkg.version %> (<%= pkg.homepage %>)',
    ' * Copyright <%= new Date().getFullYear() %> JDCFE, Inc.',
    ' * Licensed under the <%= pkg.license %> license',
    ' */',
    '',
  ].join('\n');
  const processors = [
    autoprefixer({
      browsers: [
        'iOS >= 7',
        'Android >= 4.1', //移动端项目，参考WeUI的配置
      ],
    }),
  ];
  gulp
    .src(paths)
    .pipe(scss())
    .pipe(gulp.dest('lib'))
    .pipe(postcss(processors))
    .pipe(concat(`${pkg.name}.css`))
    .pipe(header(banner, {pkg}))
    .pipe(gulp.dest('dist'))
    .pipe(rename({suffix: '.min'}))
    //.pipe(cleanCSS())
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', () => {
  gulp.watch(paths, ['dist']);
});

gulp.task('default', ['clean'], () => {
  gulp.start(['dist', 'watch']);
});
