const sass = require('gulp-sass');
const concat = require('gulp-concat');
const gulp = require('gulp');

const paths = {
  js: [
    'node_modules/angular/angular.js',
    'node_modules/angular-route/angular-route.js',
    'node_modules/angular-resource/angular-resource.js',
    'src/js/**/*.js'
  ]
};

gulp.task('sass', () => {
  return gulp.src('src/sass/style.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('js', () => {
  return gulp.src(paths.js)
    .pipe(concat('app.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('images', () => {
  return gulp.src('src/images/**/*.*')
    .pipe(gulp.dest('dist/images'));
});

gulp.task('default', gulp.parallel('js', 'sass', 'images'));

gulp.task('watch', () => {
  gulp.watch('src/js/**/*.js', gulp.series('js'));
  gulp.watch('src/sass/**/*.sass', gulp.series('sass'));
});
