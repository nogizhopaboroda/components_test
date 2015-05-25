var gulp = require('gulp');
var browserify = require('gulp-browserify');

var paths = {
  scripts: ['src/**/*.js']
};

// Not all tasks need to use streams

gulp.task('scripts', function() {
    // Single entry point to browserify 
  gulp.src('src/app.js')
    .pipe(browserify({
      insertGlobals : true,
      transform: ['cssify']
    }))
    .pipe(gulp.dest('./build/js'))	
});


// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.images, ['images']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'scripts']);
