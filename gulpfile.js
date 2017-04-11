var gulp         = require('gulp');
var browserSync  = require('browser-sync').create();
var sass         = require('gulp-sass');
var htmlmin      = require('gulp-htmlmin');
var postcss      = require('gulp-postcss');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var cssnano      = require('cssnano');
var uglify       = require('gulp-uglify');
var concat       = require('gulp-concat');
var usemin       = require('gulp-usemin');

// Static Server + watching scss/html files
gulp.task('serve', function() {

  browserSync.init({
      server: {
        baseDir: './build'
      }
  });
    gulp.watch('styles/*.scss', ['sass']);
    gulp.watch('js/*.js', ['scripts', browserSync.reload]);
    gulp.watch('*.html', ['html']).on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src('styles/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build/css'))
        .pipe(browserSync.stream());
});

// Minify html
gulp.task('html', function() {
  return gulp.src('*.html')
    .pipe(usemin())
    .pipe(htmlmin({
      removeComments: true,
      collapseWhitespace: true,
      collapseBooleanAttributes: true,
      removeAttributeQuotes: true,
      removeRedundantAttributes: true,
      removeEmptyAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true
    }))
    .pipe(gulp.dest('build'));
});

// Minify and combine js
gulp.task('scripts', function() {
  return gulp.src('js/*.js')
  .pipe(sourcemaps.init())
  .pipe(concat('main.min.js'))
  .pipe(uglify())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('build/js'));
})

gulp.task('default', ['serve']);
