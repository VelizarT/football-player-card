const gulp = require( 'gulp' );
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const cssnano = require('gulp-cssnano');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const babel = require('gulp-babel');

const sassPath = './src/sass/main.scss';
const jsPath = './src/js/**/*.js';
const imagePath = './src/img/**/*.+(png|jpg|gif|svg)';
const htmlPath = './dist/index.html';

// SASS task to compile and create a sourcemap

gulp.task('sass', (done) => {
   return gulp
      .src(sassPath)
      .pipe(sourcemaps.init())
      .pipe(autoprefixer())
      .pipe(sass())
      .pipe(cssnano())
      .pipe(sourcemaps.write('.'))
      .pipe(rename((path) => {
         if(!path.extname.endsWith('.map')) {  
            path.basename += '.min'
         }
      }))
      .pipe(gulp.dest('./dist/css'));
   done();
});

// JavaScript Task

gulp.task('javascript', (done) => {
   return gulp
      .src(jsPath)
      .pipe(babel({
         presets: ["@babel/env"]
      }))
      .pipe(concat('main.js'))
      .pipe(uglify())
      .pipe(rename({
         suffix: '.min'
      }))
      .pipe(gulp.dest('./dist/js'))
   done();
});

//Image optimisation

gulp.task('imagemin', (done) => {
   return gulp
      .src(imagePath)
      .pipe(cache(imagemin()))
      .pipe(gulp.dest('./dist/img/'))
   done();
});

// Watch task with browser sync

gulp.task('watch', () => {
   browserSync.init({
      server: {
         baseDir: './dist',
      },
      browser: 'firefox'
   });
   gulp
      .watch(
      [
         htmlPath, 
         sassPath, 
         jsPath,
         imagePath
      ],
      gulp.parallel(['sass', 'javascript', 'imagemin'])
      )
      .on('change', browserSync.reload);
});

//Clear Cache 

gulp.task('clear-cache', (done) => {
   return cache.clearAll(done);
});

//Serve task

gulp.task('serve', gulp.parallel(['sass', 'javascript', 'imagemin']));

// Default task

gulp.task('default', gulp.series(['serve', 'watch']));

