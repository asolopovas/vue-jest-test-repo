const mix = require('laravel-mix');
const path = require('path')
const fs = require('fs')
require('mix-tailwindcss');

mix.ts('resources/ts/app.ts', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   .webpackConfig(() => {
       return {
           devServer: {
               hot: true,
               https: {
                   key: fs.readFileSync('./resources/ssl/localhost.key'),
                   cert: fs.readFileSync('./resources/ssl/localhost.crt'),
               },
           },
           output: {
               publicPath: 'https://localhost:8080/js/',
           },
           module: {
               rules: [
                   {
                       test: /\.tsx?$/,
                       loader: 'ts-loader',
                       options: { appendTsSuffixTo: [/\.vue$/] },
                       exclude: /node_modules/,
                   },
               ],
           },
           resolve: {
               extensions: ['.js', '.ts', '.vue', '.svg'],
               fallback: {
                   path: require.resolve('path-browserify'),
               },
           },
       }
   })
   .tailwind('./tailwind.config.js')
   .vue()

mix.disableSuccessNotifications()

mix.alias({
    '@': path.join(__dirname, '/resources'),
    '~': path.join(__dirname, '/resources/sass'),
})
