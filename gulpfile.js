var gulp = require('gulp');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var Server = require('karma').Server;

gulp.task('build', function () {
  gulp.src('source/*.js')
    .pipe(sourcemaps.init())
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(concat('ng-device.min.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, function () {
    done();
  }).start();
});

gulp.task('watch', function () {
  gulp.watch('source/*.js', ['test']);
});

gulp.task('default', ['test']);