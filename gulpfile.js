var gulp = require('gulp');

var gutil = require('gulp-util');
var mincss = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var uncss = require('gulp-uncss');
var imagemin = require('gulp-imagemin');

var paths = {
  scripts: ['src/js/**/*.js', '!src/external/**/*.coffee'],
  images: 'src/img/**/*',
  styles: 'src/css/**/*.css'
};

gulp.task('styles', function() {
  gulp.src('./src/css/*.css')
    .pipe(mincss(opts))
    .pipe(gulp.dest('assets/css/'))
});

// Minify and copy all JavaScript (except vendor scripts)
gulp.task('scripts', function() {
  return gulp.src(paths.scripts)
    .pipe(uglify())
    .pipe(concat('all.min.js'))
    .pipe(gulp.dest('assets/js'));
});

// Copy all static images
gulp.task('images', function() {
 return gulp.src(paths.images)
    // Pass in options to the task
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest('assets/img'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.images, ['images']);
  gulp.watch(paths.styles, ['images']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['scripts', 'images', 'styles', 'watch']);

