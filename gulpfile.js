const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildStyles() {
  return src('./styles/styles.scss')
  .pipe(sass())
  .pipe(dest('css'))
}

function watchTask() {
  watch(['./styles/*.scss'], buildStyles)
  watch(['./styles/blocks/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)