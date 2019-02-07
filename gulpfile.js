
// General dependencies
let gulp = require('gulp');
let rename = require('gulp-rename');

// CSS dependencies
let cleanCSS = require('gulp-clean-css');
let sass = require('gulp-sass');

// JS dependencies
let concat = require('gulp-concat');
let uglify = require('gulp-uglify-es').default;


// CSS functions

gulp.task('sass', function () {
    return gulp.src('./src/scss/styles.scss')
        .pipe(sass())
        .pipe(rename('styles.css'))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('minify-css', () => {
	return gulp.src('./dist/css/styles.css')
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('./dist/css/'));
})

// JS functions

gulp.task('styles', gulp.series('sass', 'minify-css'));

gulp.task('concatScripts', function () {
	return gulp.src('./src/js/*.js')
		.pipe(concat('all.js'))	
		.pipe(gulp.dest('./dist/js/'));
});

gulp.task('uglyScripts', function () {
	return gulp.src('./dist/js/all.js')
		.pipe(uglify())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('./dist/js/'));
})

gulp.task('javaScript', gulp.series('concatScripts', 'uglyScripts'));


// Watch


gulp.task('watch', function () {
	gulp.watch('./src/scss/*.scss', gulp.series('styles'));
	gulp.watch('./src/js/*.js', gulp.series('javaScript'));

});



