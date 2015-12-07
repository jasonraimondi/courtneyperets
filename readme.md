Getting Started
-------------

#### First you need to install the dependencies:
  - use nvm to install node
  - npm install -g gulp bower
  - npm install (installed into /node_modules)
  - bower install (installed into /vendor/bower_components)


#### Run your first GULP
    - gulp

#### Gulp Options
    - gulp watch
    - gulp imagemin
    - gulp --production
    - gulp watch --production

#### - gulp watch
This command watches for changed or updated sass or js files in **/resources/sass** & **/resources/js** into **/public/assets/sass** & **/public/assets/js** respectively as well as creating sourcemaps for both the compiled JS & SCSS files

#### - gulp imagemin
This command minifies images from **/resources/assets/images** into **/public/assets/images**

#### - gulp --production
The --production flag minifies during compilation.

#### - gulp watch --production
This command watches for changed or updated sass or js files and minifies them.



----------
