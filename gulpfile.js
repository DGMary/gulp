var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('html', function(){
  return gulp.src('client/templates/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('build/html'))
});

gulp.task('css', function(){
  return gulp.src('style.scss')
   // .pipe(minifyCSS())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build/css'));
});
// gulp.task('sass:watch', function () {
//     gulp.watch('./sass/**/*.scss', ['sass']);
// });

gulp.task('js', function(){
  return gulp.src('js/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/js'))
});

gulp.task('default', [ 'html', 'css', 'js' ]);