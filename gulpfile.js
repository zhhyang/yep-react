const gulp = require('gulp');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const scss = require('gulp-sass');
const cleanCSS = require('gulp-clean-css'); // CSS压缩
const concat = require('gulp-concat') ;      // 合并文件
const rename = require('gulp-rename');        // 重命名
const clean = require('gulp-clean');
const header = require('gulp-header');

const pkg = require('./package.json');
const paths = [
  'src/style/index.scss',
  'src/*/style/index.scss'
];

gulp.task('clean', function () {
  return gulp.src('dist', {read: false})
    .pipe(clean({force: true}))
});

gulp.task('dist', function () {
  const banner = [
    '/*!',
    ' * <%= pkg.name %> v<%= pkg.version %> (<%= pkg.homepage %>)',
    ' * Copyright <%= new Date().getFullYear() %> JDCFE, Inc.',
    ' * Licensed under the <%= pkg.license %> license',
    ' */',
    ''].join('\n');
  const processors = [
    autoprefixer({
      browsers: [
        'iOS >= 7',
        'Android >= 4.1',//移动端项目，参考WeUI的配置
      ]
    }),
  ];
  gulp.src(paths)
    .pipe(scss())
    .pipe(postcss(processors))
    .pipe(concat(`${pkg.name}.css`))
    .pipe(header(banner, {pkg: pkg}))
    .pipe(gulp.dest('dist'))
    .pipe(rename({suffix: '.min'}))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist'))
});

gulp.task('default', ['clean'], function () {
  gulp.start('dist')
});
