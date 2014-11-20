var gulp = require('gulp');
var elixir = require('laravel-elixir');
var filter = require('gulp-filter');
var config = elixir.config;

/*
 |----------------------------------------------------------------
 | Gulp Bower Compilation
 |----------------------------------------------------------------
 |
 | This task will search for any relevant Bower dependencies, and
 | copy them to the correct directories for your Laravel app.
 |
 */

gulp.task('compile', function() {
    var cssFilter = filter('**/*.css');
    var sassFilter = filter('**/*.+(sass|scss)');
    var lessFilter = filter('**/*.less');
    var jsFilter = filter('**/*.js');

    gulp.src('./bower_components/**/*')
        .pipe(cssFilter)
            .pipe(gulp.dest(config.cssOutput + '/vendor'))
            .pipe(cssFilter.restore())

        .pipe(sassFilter)
            .pipe(gulp.dest(config.assetsDir + 'sass/vendor'))
            .pipe(sassFilter.restore())

        .pipe(lessFilter)
            .pipe(gulp.dest(config.assetsDir + 'less/vendor'))
            .pipe(lessFilter.restore())

        .pipe(jsFilter)
            .pipe(gulp.dest(config.jsOutput = '/vendor'));
});


