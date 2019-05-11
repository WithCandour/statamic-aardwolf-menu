// TODO: This file will be moved up a directory in "production"/"on GitHub"
const mix = require("laravel-mix");

mix.sass("resources/src/sass/styles.scss", "resources/assets/css/");
mix.js("resources/src/js/scripts.js", "resources/assets/js/");