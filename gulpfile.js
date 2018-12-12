/*
  This is an EXAMPLE gulpfile.js
  You'll want to change it to match your project.
  Find plugins at https://npmjs.org/browse/keyword/gulpplugin
*/
var gulp = require('gulp'),
    wiredep = require('wiredep').stream,
    wiredepFiles = require('wiredep')(),
    inject = require('gulp-inject'),
    uglify = require('gulp-uglify'),
    nodemon = require('gulp-nodemon'),
    addTemplates = require('gulp-angular-templatecache'),
    livereload = require('gulp-livereload'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    clean = require('gulp-clean'),
    runSequence = require('run-sequence'),
    path = require('path'),
    flatten = require('gulp-flatten'),
    pump = require('pump'),
    templateCache = require('gulp-templatecache'),
    replace = require('gulp-replace');

gulp.task('templates', function (done) {
    gulp.src('bower_components/**/*.html')
        .pipe(addTemplates('templateFile.js', {
            module: 'taskoli'
        }))
        .pipe(gulp.dest('./frontend/template/'));
    done();
});

gulp.task('fonts', function () {
    return gulp.src('./bower_components/**/*.{eot,svg,ttf,woff,woff2}')
        .pipe(flatten())
        .pipe(gulp.dest(path.join('content/css/fonts/')));
});

gulp.task('copy-fonts', function () {
    return gulp.src('./bower_components/**/*.{eot,svg,ttf,woff,woff2}')
        .pipe(flatten())
        .pipe(gulp.dest(path.join('public/fonts/')));
});

gulp.task('inject-all', function (done) {
    var target = gulp.src('frontend/index.html', {
        base: "."
    });
    // It's not necessary to read the files (will speed up things), we're only after their paths:
    var sources = gulp.src(['frontend/init.js', 'frontend/**/*.js', 'content/css/**/*.css'], {
        read: false
    });
    return target.pipe(inject(sources, {
            starttag: '<!-- inject:{{ext}} -->'
        }))
        .pipe(wiredep({}))
        .pipe(gulp.dest('.'));
    done();
});

gulp.task('inject-for-prod', function () {
    var target = gulp.src('public/index.html', {
        base: "."
    });
    // It's not necessary to read the files (will speed up things), we're only after their paths:
    var mainSources = inject(gulp.src(['public/js/main.min.js', 'public/js/template/templates.js', 'public/css/style.min.css'], {
        read: true
    }), {
        starttag: '<!-- inject:{{ext}} -->'
    });
    var vendorSources = inject(gulp.src(['public/js/vendor.min.js', 'public/css/vendor.min.css'], {
        read: true
    }), {
        starttag: '<!-- bower:{{ext}} -->'
    });

    return target
        .pipe(mainSources)
        .pipe(vendorSources)
        .pipe(gulp.dest('.'));
});

// TODO: fix overriding
gulp.task('build-vendor-js', function (done) {
    var jsSource = gulp.src(wiredepFiles.js, {
        read: true
    });
    // It's not necessary to read the files (will speed up things), we're only after their paths:
    pump([
        jsSource,
        concat('vendor.min.js'),
        uglify(),
        gulp.dest('public/js')
    ], done)
});

gulp.task('build-vendor-css', function (done) {
    var cssSource = gulp.src(wiredepFiles.css, {
        read: true
    });

    return cssSource
        .pipe((cssnano()))
        .pipe(concat('vendor.min.css'))
        .pipe(gulp.dest('public/css'));
});

gulp.task('server', function () {
    nodemon({
        'script': 'app.js'
    });
});

gulp.task('watch', function () {
    gulp.watch('frontend/**/*.html', ['template-html-dev']);
    livereload.listen();
});

gulp.task('scripts', function () {
    return gulp.src('frontend/**/*.js')
        .pipe(uglify({ mangle: false }))
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest('public/js'))
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(livereload());
});

gulp.task('template-html', function() {
    var options = {
        output: 'template/templates.js',
        // angular module name 
        moduleName: 'templates',
        minify: {}
      }
     
      gulp.src('frontend/**/*.html')
        .pipe(templateCache(options))
        .pipe(uglify({mangle: false}))
        .pipe(gulp.dest('./public/js'))
});

gulp.task('template-html-dev', function() {
    var options = {
        output: 'template/templates.js',
        // angular module name 
        moduleName: 'templates',
        minify: {}
      }
     
      gulp.src('frontend/**/*.html')
        .pipe(templateCache(options))
        .pipe(gulp.dest('./frontend'))
});

gulp.task('test', function () {
    return gulp.src('frontend/**/*.js')
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(livereload());
});

gulp.task('vendor-scripts', function () {
    return gulp.src('frontend/**/*.js')
        .pipe(concat('main.min.js'))
        .pipe(uglify({ mangle: false }))
        .pipe(gulp.dest('public/js'))
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(livereload());
});

gulp.task('styles', function () {
    return gulp.src('content/**/*.css')
        .pipe((cssnano()))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(replace('/content/', '/public/content/'))
        .pipe(replace('../img', '/public/content/img'))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('public/css'));
});

gulp.task('copy', function () {
    return gulp.src(['frontend/index.html'])
        .pipe(gulp.dest('public'));
});

gulp.task('images', function () {
    return gulp.src('content/img/**')
        .pipe(gulp.dest('public/content/img'));
});

gulp.task('clean', function () {
    return gulp
        .src('public', {
            read: false
        })
        .pipe(clean());
});

gulp.task('build-vendor', function (callback) {
    return runSequence('build-vendor-js', 'build-vendor-css', callback);
});

gulp.task('build', ['clean'], function (callback) {
    return runSequence('copy', 'images', 'copy-fonts', 'styles', 'scripts', 'template-html', 'build-vendor', 'inject-for-prod', callback);
});

// TODO: Complete watch with injection for dev env
gulp.task('serve', ['server', 'template-html-dev', 'inject-all', 'fonts', 'watch']);

gulp.task('default', ['build']);