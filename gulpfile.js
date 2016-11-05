const gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect');

gulp.task('js-vendor', function(){
    var filesVendor = [
        './node_modules/angular/angular.min.js',
        './node_modules/angular-route/angular-route.min.js',
        './node_modules/angularfire/dist/angularfire.min.js',
    ];

    return gulp.src(filesVendor)
        .pipe(concat('vendor-concated.js'))
        .pipe(rename('vendor.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/assets/js/'))
        .pipe(connect.reload());
});

gulp.task('connect', function(){
    connect.server({
        root: 'public',
        port: 4000
    });
});