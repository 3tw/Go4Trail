const mix = require('laravel-mix')
const LiveReloadPlugin = require('webpack-livereload-plugin')

mix.webpackConfig({
  plugins: [new LiveReloadPlugin()]
})

mix.options({
  processCssUrls: false
})

mix
  .scripts(['src/js/jqueryValidate.js', 'src/js/main.js'], 'js/app.js')
  .sass('src/sass/main.sass', 'styles/main.css')
