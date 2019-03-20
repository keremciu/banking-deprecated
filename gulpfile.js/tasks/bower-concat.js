var gulp        = require('gulp');
var concat      = require('gulp-concat');
var mainBowerFiles = require('main-bower-files');
var config      = require('../config/bower');
var fs = require('fs');

var vendorScripts = function (minified) {
    var scripts = mainBowerFiles().filter(function (filename) {
      return filename.match(/.+\.js$/)
    });
    if (minified) {
      scripts = scripts.map(function (orgFilename) {
        var minFilename = orgFilename.replace(/^(.+)\.js$/, '$1.min.js');
        if (fs.existsSync(minFilename)) {
          return minFilename
        }
        return orgFilename;
      });
    }
    return scripts;
};

gulp.task('bower:concat', function() {
  return gulp.src(vendorScripts(true))
    .pipe(concat('vendors.js'))
    .pipe(gulp.dest(config.minified));  
});