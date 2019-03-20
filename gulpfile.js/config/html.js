var config = require('./')
var fs 	   = require('fs');
var json   = JSON.parse(fs.readFileSync(config.sourceDirectory + '/data/data.json'));

module.exports = {
  watch: config.sourceDirectory + '/views/**/*.html',
  src: [config.sourceDirectory + '/views/**/*.html', '!**/{layouts,page_partials}/**'],
  dest: config.publicDirectory,
  swig: {
    defaults: { cache: false },
    data: json,
  }
}