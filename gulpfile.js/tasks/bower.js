var gulp        = require('gulp');
var mainBowerFiles = require('main-bower-files');
var config      = require('../config/bower');

gulp.task('bower', function() {
  return gulp.src(mainBowerFiles(), { base: "bower_components"})
  	.pipe(gulp.dest(config.dest));
});