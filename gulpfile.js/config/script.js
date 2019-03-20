var config = require('./')

module.exports = {
  watch: config.sourceDirectory + '/assets/javascripts/*.js',
  src: [config.sourceDirectory + '/assets/javascripts/*.js', '!'+ config.sourceDirectory + '/assets/javascripts/excluded.js'],
  excluded: config.sourceDirectory + '/assets/javascripts/excluded.js',
  dest: config.publicDirectory + '/assets/javascripts/',
}