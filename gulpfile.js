const gulp = require('gulp');
const less = require('gulp-less');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const pug = require('gulp-pug');

gulp.task('less', function () {
  return gulp.src('./src/less/main.less')
    .pipe(less())
    .pipe(postcss([ autoprefixer({ browsers: ['> 1%', 'last 3 versions'] }) ]))
    .pipe(gulp.dest('./demo/css'));
});

gulp.task('pug', () => {
  return gulp.src('views/**/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./demo'));
});

gulp.task('watch', () => {
  // watch less files
  gulp.watch('./src/**/*.less', ['less']);
  // watch pug files
  gulp.watch('./**/*.pug', ['pug']);
});

gulp.task('default', ['less', 'pug']);