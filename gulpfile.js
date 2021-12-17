const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const uglifycss = require('gulp-uglifycss');
const terser = require('gulp-terser');
const htmlmin = require('gulp-htmlmin');
const { src, dest } = require('gulp');
const concat = require('gulp-concat');

//bundle css
const cssBundle = () =>
  src([
    'node_modules/bootstrap/dist/css/bootstrap.min.css',
    'assets/css/style.css',
  ])
    .pipe(concat('style.css'))
    .pipe(dest('dist/assets/css'));

//bundle JavaScript
const jsBundle = () =>
  src([
    'assets/scripts/apiMovies.js',
    'assets/scripts/apiTV.js',
    'assets/scripts/main.js',
    'node_modules/jquery/dist/jquery.slim.min.js',
    'node_modules/popper.js/dist/umd/popper.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
  ])
    .pipe(concat('main.js'))
    .pipe(dest('dist/assets/scripts'));

//minify html
function minify() {
  return gulp
    .src(['./*.html', './pages/*.html'], { base: './' })
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(['dist']));
}

//uglify JavaScript
function es() {
  return gulp
    .src('./assets/scripts/**/*.js')
    .pipe(terser())
    .pipe(gulp.dest('dist/assets/scripts'));
}
exports.default = es;

//updates css when new scss code is written
function style() {
  return gulp
    .src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'))
    .pipe(browserSync.stream());
}

//runs browser-sync and launches chrome as default browser
function watch() {
  browserSync.init({
    browser: 'google chrome',
    server: {
      baseDir: './',
    },
  });
  gulp.watch('./src/sass/**/*.scss', style);
  gulp.watch('./**/*.html').on('change', browserSync.reload);
  gulp.watch('./src/**/*.js').on('change', browserSync.reload);
}

//minify CSS
async function mincss() {
  gulp
    .src('./assets/css/**/*.css')
    .pipe(
      uglifycss({
        uglyComments: true,
      })
    )
    .pipe(gulp.dest('dist/css'));
}

exports.style = style;
exports.watch = watch;
exports.mincss = mincss;
exports.es = es;
exports.minify = minify;
exports.cssBundle = cssBundle;
exports.jsBundle = jsBundle;
