const postcss = require('postcss');
const autoprefixer = require("autoprefixer");
const imageInliner = require('postcss-image-inliner');

const opts = {
  assetPaths: ['/','/public'],     // List of directories where the inliner should look for assets
  maxFileSize: 10240  // Sets a max file size (in bytes)
};

const config = {
  plugins: [imageInliner(opts),autoprefixer],
};


//postcss([ imageInliner(opts),autoprefixer ]);

module.exports = config;
