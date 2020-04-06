const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const cssnano = require('cssnano');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const concat = require('gulp-concat');
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const babel = require('gulp-babel');
const nodemon = require('gulp-nodemon');
const eslint = require('gulp-eslint');
const jest = require('gulp-jest').default;
const webpack = require('webpack-stream');
const webpackConfig = require('./webpack.config');

const sassPathAll = './src/sass/**/*.scss';
const sassMain = './src/sass/main.scss';
const jsPath = './src/js/**/*.js';
const imagePath = './src/img/**/*.+(png|jpg|gif|svg)';
const htmlPath = './dist/index.html';
const testPath = './src/tests/';

// SASS task to compile and create a sourcemap

gulp.task('sass', () => {
  const plugins = [
    autoprefixer(),
    cssnano(),
  ];

  return gulp
    .src(sassMain)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write('.'))
    .pipe(rename((path) => {
      if (!path.extname.endsWith('.map')) {
        path.basename += '.min';
      }
    }))
    .pipe(gulp.dest('./dist/css'));
});

// JavaScript Task

gulp.task('javascript', () => gulp
  .src([jsPath])
  .pipe(webpack(webpackConfig))
  .pipe(rename((path) => {
    path.basename += '.min';
  }))
  .pipe(gulp.dest('./dist/js'))
  .on('error', (error) => {
    console.error(error);
  }));

// Image optimisation

gulp.task('imagemin', () => gulp
  .src(imagePath)
  .pipe(cache(imagemin()))
  .pipe(gulp.dest('./dist/img/')));

// Watch task with nodemon

gulp.task('watch', (done) => {
  nodemon({
    script: './src/server.js',
    ext: 'js html css',
    env: { NODE_ENV: 'development' },
    done,
  });
  gulp
    .watch(
      [
        htmlPath,
        sassPathAll,
        jsPath,
        imagePath,
      ],
      gulp.parallel(['sass', 'javascript', 'imagemin']),
    )
    .on('change', browserSync.reload);
});

// Clear Cache

gulp.task('clear-cache', (done) => cache.clearAll(done));

// Serve task

gulp.task('serve', gulp.parallel(['sass', 'javascript', 'imagemin']));

// ESLint

gulp.task('lint', () => gulp
  .src(jsPath).pipe(eslint({}))
  .pipe(eslint.format()));

// Jest

gulp.task('jest', () => {
  process.env.NODE_ENV = 'test';

  return gulp.src(testPath).pipe(jest({
    automock: false,
  }));
});

// Default task

gulp.task('default', gulp.series(['lint', 'jest', 'serve', 'watch']));
