const gulp = require( 'gulp' );
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

const sassPathAll = './src/sass/**/*.scss';
const sassMain = './src/sass/main.scss';
const jsPath = './src/js/**/*.js';
const imagePath = './src/img/**/*.+(png|jpg|gif|svg)';
const htmlPath = './dist/index.html';

// SASS task to compile and create a sourcemap

gulp.task('sass', (done) => {

   const plugins = [
      autoprefixer(), 
      cssnano()
   ];

   return gulp
      .src(sassMain)
      .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(postcss(plugins))
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
      .pipe(sourcemaps.init())
      .pipe(babel({
         presets: ['@babel/env'],
         sourceType: 'module'
      }))
      .pipe(concat('main.js'))
      .pipe(uglify())
      .pipe(sourcemaps.write('.'))
      .pipe(rename((path) => {
         if(!path.extname.endsWith('.map')) {  
            path.basename += '.min'
         }
      }))
      .pipe(gulp.dest('./dist/js'))
      .on('error', function (error) {
         console.error('' + error);
     });
   done();
});

// Image optimisation

gulp.task('imagemin', (done) => {
   return gulp
      .src(imagePath)
      .pipe(cache(imagemin()))
      .pipe(gulp.dest('./dist/img/'))
   done();
});

// Watch task with nodemon

gulp.task('watch', (done) => {
   nodemon({
      script: './src/server.js'
    , ext: 'js html css'
    , env: { 'NODE_ENV': 'development' }
    , done: done
    });
   gulp
      .watch(
      [
         htmlPath, 
         sassPathAll, 
         jsPath,
         imagePath
      ],
      gulp.parallel(['sass', 'javascript', 'imagemin'])
      )
      .on('change', browserSync.reload);
});

// Clear Cache 

gulp.task('clear-cache', (done) => {
   return cache.clearAll(done);
});

// Serve task

gulp.task('serve', gulp.parallel(['sass', 'javascript', 'imagemin']));

// Default task

gulp.task('default', gulp.series(['serve', 'watch']));
