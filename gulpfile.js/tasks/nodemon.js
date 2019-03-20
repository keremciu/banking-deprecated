var gulp        = require('gulp');
var nodemon 	= require('gulp-nodemon');
var express		= './gulpfile.js/lib/express_server.js';

gulp.task('nodemon', function (cb) {
	return nodemon({
	  script: express,
	    ignore: [
	      './bower_components/**',
	      './node_modules/**',
	      './public/**'
	    ]
	}).on('start', function () {
      cb();
  });
});