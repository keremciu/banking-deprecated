var browserSync = require('browser-sync');
var config      = require('../config/script');
var gulp        = require('gulp');
var sourcemaps  = require('gulp-sourcemaps');
var concat 		= require('gulp-concat');
var uglify 		= require('gulp-uglify');

gulp.task('excluded', function() {
  return gulp.src(config.excluded)
  	.pipe(gulp.dest(config.dest))
});

gulp.task('script', ['excluded'], function() {
  return gulp.src(config.src)
  	.pipe(sourcemaps.init())
  	.pipe(concat("all.min.js"))
  	.pipe(sourcemaps.write())
  	.pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});