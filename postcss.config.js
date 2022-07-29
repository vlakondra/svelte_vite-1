import autoprefixer from 'autoprefixer'
import imageInliner from 'postcss-image-inliner';
import assets from 'postcss-assets'
import minmax from 'postcss-media-minmax'
import postcssGray from 'postcss-color-gray'

const opts = {
  assetPaths: ['/qq','/public2'],     // List of directories where the inliner should look for assets
  maxFileSize: 10240  // Sets a max file size (in bytes)
};

export default {
  plugins:[minmax,postcssGray, autoprefixer,assets({
    loadPaths: ['public/']
  })]
}



// const postcss = require('postcss');
// const autoprefixer = require("autoprefixer");
// const imageInliner = require('postcss-image-inliner');

// const opts = {
//   assetPaths: ['/','/public'],     // List of directories where the inliner should look for assets
//   maxFileSize: 10240  // Sets a max file size (in bytes)
// };

// const config = {
//   plugins: [imageInliner(opts),autoprefixer],
// };


// //postcss([ imageInliner(opts),autoprefixer ]);

// module.exports = config;
