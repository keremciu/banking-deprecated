var config = require('./')

module.exports = {
  source: config.sourceAssets,
  autoprefixer: { browsers: ['last 2 version'] },
  doc: [
        config.sourceAssets + "/stylesheets/*.+(sass)",
  ],
  src: config.sourceAssets + "/stylesheets/**/*.+(sass|scss)",
  dest: config.publicAssets + '/stylesheets',
  settings: {
    indentedSyntax: true, // Enable .sass syntax!
    imagePath: 'assets/images', // Used by the image-url helper
    includePaths: [
    		'./bower_components/bootstrap-sass/assets/stylesheets', 
        './bower_components/ladda/css',
        './bower_components/fontawesome/css',
        './bower_components/eonasdan-bootstrap-datetimepicker/src/sass',
    ],
    errLogToConsole: false
  }
}