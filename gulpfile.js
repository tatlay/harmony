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
    var stream = gulp.src('./scss/styles.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/'))
        .pipe(rename('styles.css'));
    return stream;
});

gulp.task()

gulp.task('minify-css', () => {
	return gulp.src('css/styles.css')
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('./dist/'))
})

// JS functions

gulp.task('styles', gulp.series('sass', 'minify-css'));

gulp.task('concatScripts', function () {
	let stream = gulp.src(['./js/jquery-3.2.1.slim.js', './js/popper.js', './js/bootstrap.js', './js/*.js'])
		.pipe(concat('all.js'))	
		.pipe(gulp.dest('./dist/'));
	return stream;
});

gulp.task('uglyScripts', function () {
	return gulp.src('./js/all.js')
		.pipe(uglify())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('./dist/'));
})

gulp.task('catMin', gulp.series('concatScripts', 'uglyScripts'));


gulp.task('watch', function () {
	gulp.watch(['css/*.scss', 'css/*.css'])
	gulp.series('catMin');
	gulp.watch('./styles/*.js')
	gulp.series('catMin');

});










