var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');

gulp.task('less', function () {
    return gulp.src('css/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('css'))
});

gulp.task('watch', function () {
    gulp.watch('css/**/*.less', ['less']);
});