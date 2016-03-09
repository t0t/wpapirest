'use strict';

var gulp      = require('gulp'),
  browserSync = require('browser-sync').create(),
  concat      = require('gulp-concat'),
  uglify      = require('gulp-uglify'),
  sass        = require('gulp-sass'),
  maps        = require('gulp-sourcemaps'),
  csso        = require('gulp-csso');
  // jshint      = require('gulp-jshint');
  // ghPages     = require('gulp-gh-pages'),
  // minifyHTML  = require('gulp-minify-html'),
  // del         = require('del'),
  // jade        = require('gulp-jade'),
  // babel       = require('gulp-babel');

// lint
// gulp.task('lint', function() {
//   return gulp.src('./lib/*.js')
//     .pipe(jshint())
//     .pipe(jshint.reporter('YOUR_REPORTER_HERE'));
// });



// concat Js
gulp.task('concatJs', function() {
  return gulp.src(['assets/js/app/*.js'])
    // .pipe(babel())
    .pipe(maps.init())
    .pipe(concat('build.js'))
    .pipe(maps.write('./'))
    .pipe(gulp.dest('assets/js'));
});

// compile Sass
gulp.task('compileSass', function() {
  return gulp.src(['assets/sass/*.scss','assets/sass/**/*.scss'])
    .pipe(maps.init())
    .pipe(sass({outputStyle: 'nested'}))
    .pipe(maps.write('./'))
    .pipe(gulp.dest('./'));
});

// compile Jade
// gulp.task('compileJade', function() {
//   return gulp.src(['./jade/*.jade','!./jade/_*.jade'])
//     .pipe(jade({pretty:true}))
//     .pipe(gulp.dest('./'));
// });

//compile sass and jade
// gulp.task('compileSassJade',['compileSass','compileJade'])

// ----- package

// minify Css
// gulp.task('minifyCss', function() {
//   return gulp.src('style.css')
//     .pipe(csso())
//     .pipe(gulp.dest('./'));
// });

// minify Html
// gulp.task('minifyHtml', function() {
//   return gulp.src('*.html')
//     .pipe(minifyHTML())
//     .pipe(gulp.dest('dist'));
// });

// compress Js
gulp.task('compressJs', function() {
  return gulp.src('js/build.js')
    .pipe(uglify())
    .pipe(gulp.dest('./'));
});
//
// // place Imgs and icons
// gulp.task('img', function(){
//   return gulp.src(['img/**/*','*.ico'], {base: './'})
//     .pipe(gulp.dest('dist'));
// });
//
// // delete generated files
// gulp.task('clean', function(){
//   del(['dist/**/*.*','css/*.css','css/*.css*','./*.html','js/build.js','js/build.js*']);
// });
//
// > gulp watch
gulp.task('watch', function(){
  gulp.watch(['assets/sass/**/*.scss','assets/sass/*.scss'],['compileSass']);
  gulp.watch(['assets/js/app/**/*'],['concatJs']);
  // gulp.watch(['jade/*.jade','jade/**/*.jade'],['compileJade']);
  // gulp.watch(['./*.php','**/*.php']);
});
//
//
//
//
// // transcompile to ES6
// // gulp.task('default', function () {
// // 	return gulp.src('src/app.js')
// //
// // });
//
// dev
gulp.task('dev', ['watch'], function(){
  browserSync.init(['./style.css','./assets/js/build.js'], {
    // server: { baseDir: 'http://t0t-2.local:5757/' }
    // server: { baseDir: 'http://localhost:3000/' }
    proxy: 'dev.caferminet.es',
    host: 'localhost'
    // server: { baseDir: 'dev.tiendawc.com/' }
  });
});
//
// // build
gulp.task('build', ['concatJs', 'compileSass']);
//
// // package
// gulp.task('package', ['compressJs','minifyCss','img','minifyHtml']);
//
// // deploy
// gulp.task('deploy', ['compressJs','minifyCss','minifyHtml','img'], function() {
//   return gulp.src('dist/**/*')
//   .pipe(ghPages());
// });
//
//
//
//
// // gulp
// gulp.task('default', ['clean'], function(){
//   gulp.start('build');
// });
