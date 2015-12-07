var paths = {
    'SOURCE'     : './resources/',
    'DESTINATION': './public/assets/',
    'BOWER'      : './bower_components/',
    'NODE'       : './node_modules/',
}

var elixir = require('laravel-elixir');
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');


gulp.task('imagemin', function () {
  return gulp.src(paths.SOURCE + 'images/**/*.{png,jpg,gif}')
      .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
      }))
      .pipe(gulp.dest(paths.DESTINATION + 'images'));
});

var BrowserSync = require('laravel-elixir-browsersync2');

elixir(function(mix) {

    BrowserSync.init();
    mix.BrowserSync(
    {
        proxy           : "courtneyperets.app",
        logPrefix       : "Laravel Eixir BrowserSync",
        logConnections  : false,
        reloadOnRestart : false,
        notify          : false
    });

    mix.copy(paths.SOURCE + 'fonts', paths.DESTINATION + 'fonts');
    mix.copy(paths.SOURCE + 'images', paths.DESTINATION + 'images');
    // mix.task('imagemin');

    mix.sass(paths.SOURCE + 'sass/style.scss', paths.DESTINATION + 'css/style.css', {
        includePaths: [
            paths.NODE,
            paths.BOWER
        ],
        browsers: [ 'last 2 versions', 'ie >= 9', 'and_chr >= 2.3' ]
    });

    mix.scripts([
      paths.NODE + 'jquery/dist/jquery.js',
      paths.SOURCE + 'vendor/modernizr.js',
      paths.SOURCE + 'vendor/TweenMax.js',
      paths.SOURCE + 'vendor/ScrollToPlugin.js',
      paths.SOURCE + 'vendor/jquery.hammer.js',
      paths.SOURCE + 'js/ace-two-axis-slideshow.js',
      paths.SOURCE + 'js/intro.js',
      paths.SOURCE + 'js/main.js'
    ], paths.DESTINATION + 'js/app.js', './');

});
