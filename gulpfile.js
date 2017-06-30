var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

var paths = {
	js: [
		'node_modules/angular/angular.js',
    	'node_modules/angular-route/angular-route.js',
    	'node_modules/angular-resource/angular-resource.js',
    	'src/js/**/*.js'
	]
};

gulp.task('sass', function() {
    return gulp.src('src/sass/style.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('js', function() {
    return gulp.src(paths.js)
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('default', ['js', 'sass']);

gulp.task('watch', ['default'], function() {
	gulp.watch('src/js/**/*.js', ['js']);
	gulp.watch('src/sass/**/*.sass', ['sass']);
});
