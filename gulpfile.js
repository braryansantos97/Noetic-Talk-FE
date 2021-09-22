const gulp = require('gulp');
const sass = require('gulp-sass');
const sassGlob = require("gulp-sass-glob");

gulp.task('sass', function(done){
    // stream
    gulp.src('./sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./style/css/'));

    console.log('sass compile');
    done();
});

gulp.task('default', ['sass']);

gulp.task('watch', function(done){
    gulp.watch('./sass/*.scss', gulp.task('sass'));
    //watch task
    console.log('watch start');
    done();
});

gulp.task('default', ['sass']);

gulp.task('sass', function(done){
    // stream
    gulp.src('./sass/**/*.scss')
    .pipe(sassGlob()) 
    .pipe(sass())
    .pipe(gulp.dest('./style/css/'));

    console.log('sass compile');
    done();
});
