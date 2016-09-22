var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task("sass",function(){

    gulp.src('./sass/common.scss')
    .pipe(sass())

        .pipe(gulp.dest('./css'));
});


gulp.task("watch",function(){
    gulp.watch(['./sass/common.scss'],['sass']);
});

