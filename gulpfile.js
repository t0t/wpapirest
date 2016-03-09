var gulp            =     require('gulp');
// var img          =     require('gulp-image');
// var babel           =     require("gulp-babel");
var sourcemaps      =     require("gulp-sourcemaps");
var uglify          =     require('gulp-uglify');
var htmlmin         =     require('gulp-htmlmin');
var autoprefixer    =     require('gulp-autoprefixer');
var cssnano         =     require('gulp-cssnano');
var sass            =     require('gulp-sass');

var gutil           =     require('gulp-util');
var source          =     require('vinyl-source-stream');
var browserify      =     require('browserify');
var watchify        =     require('watchify');
var babelify        =     require('babelify');
var browserSync     =     require('browser-sync').create();

// var ghPages         =     require('gulp-gh-pages');
// var del             =     require('del');
// var data            =     require('gulp-data');
// var concat          =     require("gulp-concat");

/*
  Compile Sass
*/
gulp.task( 'sass', function () {
  gulp.src( './assets/sass/**/*.scss' )
    .pipe( sourcemaps.init() )
    .pipe( sass() )
    .pipe( autoprefixer({
        browsers: [ 'last 2 versions' ],
        cascade: false
    }))
    .pipe( sourcemaps.write( './' ) )
    .pipe( gulp.dest( './assets/css' ) )
});

/*
  Images
*/
// gulp.task( 'img', function () {
//   gulp.src( './dev/img/*.jpg' )
//     .pipe( gulp.dest( './prod/img' ) )
// });

/*
  Icons
*/
gulp.task( 'icons', function () {
  gulp.src( './assets/icons/*.svg' )
    .pipe( gulp.dest( './assets/icons' ) )
});

/*
  Data
*/
gulp.task( 'data', function () {
  gulp.src( './assets/data/' )
    .pipe( gulp.dest( './assets/data/' ) )
});

/*
  html
*/
// gulp.task( 'html', function() {
//   return gulp.src( 'dev/*.html' )
//     .pipe( htmlmin({collapseWhitespace: true}))
//     .pipe( gulp.dest( 'prod' ))
// });

// bundle
function bundle (bundler) {
  return bundler
    .transform(babelify, {presets: ['es2015']})
    .bundle()
    .on('error', function (e) {
      gutil.log(e.message);
    })
    .pipe(source('build.js'))
    .pipe( gulp.dest( "./assets/js/" ) )
    .pipe( browserSync.stream());
}

/*
  JS
*/
gulp.task( "js", function () {
  return bundle(browserify('assets/js/app/app.js'));
});

/*
  Compress Js
*/
gulp.task( 'minijs', function () {
  return gulp.src( 'assets/js/build.js' )
    .pipe( uglify() )
    .pipe( gulp.dest( 'assets/js' ));
});

/*
  Compress CSS
*/
gulp.task( 'minicss', function() {
    return gulp.src( 'assets/css/main.css' )
        .pipe( cssnano() )
        .pipe( gulp.dest( 'assets/css/' ));
});

/*
  Watch
*/
gulp.task('watch', ['browser-sync'], function () {

  var watcher = watchify( browserify( './assets/js/app/app.js', watchify.args ));
  bundle(watcher);
  watcher.on('update', function () {
    bundle(watcher);
  });
  watcher.on('log', gutil.log);
  gulp.watch([ './assets/sass/*.scss', 'assets/sass/**/*.scss' ], [ 'sass' ]);
});

gulp.task('browser-sync', function() {
  browserSync.init(['./assets/css/style.css','./assets/js/build.js'], {
    proxy: 'dev.wpapirest.com/',
    host: 'localhost'
  });
});
/*
  Build
*/
gulp.task('build', [ 'sass', 'js' ]);

/*
  Deploy to Github
*/
// gulp.task( 'deploy', [ 'minicss', 'minijs', 'icons', 'data' ], function () {
//   return gulp.src( './dist/**/*' )
//     .pipe( ghPages() );
// });
