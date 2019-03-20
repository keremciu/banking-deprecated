var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var sass         = require('gulp-sass');
var minifyCss 	 = require('gulp-minify-css');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var bulksass 	 = require('gulp-sass-bulk-import');
var config       = require('../config/sass');
var handleErrors = require('../lib/handleErrors');

gulp.task('sass', function () {
  return gulp.src(config.src)
    // .pipe(sourcemaps.init())
    .pipe(bulksass())
    .pipe(sass(config.settings))
    .on('error', handleErrors)
    .pipe(minifyCss())
    .pipe(autoprefixer(config.autoprefixer))
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});