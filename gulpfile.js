const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const autoprefix = require('gulp-autoprefixer');
const del = require('del');
const browserSync = require('browser-sync').create();

const paths = {
    html:['header.html'],
    css:['./src/scss/vars.scss', './src/scss/common.scss', './src/scss/header.scss', './src/scss/index.scss', './src/scss/footer.scss', './src/scss/catalog.scss', './src/scss/good-page.scss', './src/scss/contacts.scss', './src/scss/dealer.scss', './src/scss/where-to-buy.scss', './src/scss/technology.scss'],
    media:['./src/scss/vars.scss', './src/scss/media-1200.scss', './src/scss/media-992.scss', './src/scss/media-768.scss', './src/scss/media-576.scss'],
    js:['./src/js/main.js', './src/js/slider.js', './src/js/gallery.js', './src/js/validate.js', './src/js/ymaps.js', './src/js/select.js']
  };

// CSS task

gulp.task('css', function () {
    return gulp.src(paths.css)
    .pipe(concat('style.scss'))
    .pipe(sass())
    .pipe(autoprefix())
     // .pipe(cleanCSS())
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('media', function () {
  return gulp.src(paths.media)
  .pipe(concat('media.scss'))
  .pipe(sass())
  .pipe(autoprefix())
   // .pipe(cleanCSS())
  .pipe(gulp.dest('./dist/css'))
  .pipe(browserSync.stream());
});

// JS task

gulp.task('js', function () {
    return gulp.src(paths.js)
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./dist/js'))
    .pipe(browserSync.stream());
});

// Cleaning dist task

gulp.task('del', function() {
  return del(['dist/css/*', 'dist/js/*']);
});

// Watcher

function watch() {
  browserSync.init({
     server: {
         baseDir: "./",
         index: "index.html"
     }
 });
 //Watch CSS files
 gulp.watch('./src/scss/**/*.scss').on('change', gulp.series('css', browserSync.reload))
 gulp.watch('./src/scss/**/*.scss').on('change', gulp.series('media', browserSync.reload))
 //Watch JS files
 gulp.watch('./src/js/**/*.js').on('change', gulp.series('js', browserSync.reload))
 //Watch HTML files
 gulp.watch("./*.html").on('change', browserSync.reload)
}

gulp.task('watch', watch);

gulp.task('default', gulp.series('del', gulp.parallel('css', 'media', 'js', 'watch')));