var config = require('./')

module.exports = {
  server: {
    baseDir: config.publicDirectory
  },
  port: 3000,
  files: ['public/**/*.html','app/data/data.json']
}