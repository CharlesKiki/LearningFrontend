var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var less = require('gulp-less');
var path = require('path');

gulp.task('less', function() {
    return gulp.src('./*.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')] //解析less将其转换成css
        }))
        .pipe(cleanCSS({ compatibility: 'ie8' })) //这一步是压缩css

    .pipe(gulp.dest('./public-Min/css'));
});