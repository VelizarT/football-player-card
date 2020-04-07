const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const cssnano = require('cssnano');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const nodemon = require('gulp-nodemon');
const eslint = require('gulp-eslint');
const jest = require('gulp-jest').default;
const webpack = require('webpack-stream');
const webpackConfig = require('./webpack.config');

const sassPathAll = './src/sass/**/*.scss';
const sassMain = './src/sass/main.scss';
const jsEntryPath = './src/js/main.js';
const jsPath = './src/js/**/*.js';
const imagePath = './src/img/**/*.+(png|jpg|gif|svg)';
const htmlPath = './dist/index.html';
const testEntryPath = './src/tests/';
const testPath = './src/tests/**/*test.js';

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
  .src(jsEntryPath)
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

// Gulp task nodemon

gulp.task('nodemon', (done) => {
  nodemon({
    script: './src/server.js',
    ext: 'js html css',
    env: { NODE_ENV: 'development' },
    done,
  });
});

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
        testPath,
      ],
      gulp.parallel(['lint', 'sass', 'javascript', 'imagemin']),
    );
});

// Clear Cache

gulp.task('clear-cache', (done) => cache.clearAll(done));

// Serve task

gulp.task('compile', gulp.parallel(['sass', 'javascript', 'imagemin']));

// ESLint

gulp.task('lint', () => gulp
  .src(jsPath).pipe(eslint({}))
  .pipe(eslint.format()));

// Jest

gulp.task('jest', () => {
  process.env.NODE_ENV = 'test';

  return gulp
    .src(testEntryPath)
    .pipe(jest({ automock: false }))
    .on('error', (e) => {});
});

// E2E

gulp.task('test', gulp.parallel(['nodemon', 'jest']));

// Default task

gulp.task('default', gulp.series(['lint', 'compile', 'watch']));
