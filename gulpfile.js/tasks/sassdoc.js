var gulp = require('gulp');
var sass = require('gulp-sass');
var converter = require('sass-convert');
var sassdoc = require('sassdoc');
var config = require('../config/sass');
var bulksass = require('gulp-sass-bulk-import');
var handleErrors = require('../lib/handleErrors');

gulp.task('sassdoc', function () {
  return gulp.src(config.doc)
  	.pipe(bulksass())
	.pipe(converter({
      from: 'sass',
      to: 'scss',
    }))
    .pipe(sassdoc({verbose:true}))
    .on('error', handleErrors)
});