const gulp = require( 'gulp' );
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const cssnano = require('gulp-cssnano');

// SASS task to compile and create a sourcemap

gulp.task('sass', (done) => {
   
   return gulp
      .src('./src/sass/styles.scss')
      .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(cssnano())
      // .pipe(rename('styles.min.css'))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./dist/css'));

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
      .watch(['./src/**/*.scss'], gulp.series(['sass']))
      .on('change', browserSync.reload);
});