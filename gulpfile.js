const gulp        = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('serve', [], function() {

    browserSync.init({
        watch: true,
        server: "./src",
        ui: false,
        ghostMode: false
    });

});



gulp.task('default', ['serve']);
