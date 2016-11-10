const gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect'),
    stylus = require('gulp-stylus');

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


gulp.task('js-angular', function(){
    var filesAngular = [
        'app/app.js',
        'app/routes.js',
        'app/Factories/*.js',
        'app/Services/*.js',
        'app/Controllers/*.js'
    ];

    return gulp.src(filesAngular)
        .pipe(concat('app-concated.js'))
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('public/assets/js/'));
});

gulp.task('connect', function(){
    connect.server({
        root: 'public',
        port: 4000,
        livereload: true
    });
});

gulp.task('stylus', function () {
    return gulp.src('src/assets/stylus/app.styl')
        .pipe(stylus({
            compress: true
        }))
        .pipe(rename('app.min.css'))
        .pipe(gulp.dest('assets/css/'))
        .pipe(connect.reload());
});

gulp.task('default', ['js-angular', 'stylus'], function(){
    gulp.watch([
        'app/*.js',
        'app/**/*.js'
    ], ['js-angular']);

    gulp.watch([
        'src/assets/stylus/*.styl',
        'src/assets/stylus/**/*.styl'
    ], ['stylus']);
    
    gulp.start('connect');
});