import preprocess from "svelte-preprocess";
// import Imageinliner from "postcss-image-inliner"
// import postcss   from "postcss";

const config = {
  preprocess: [
    preprocess({
       postcss: true,
     }
    ),
  ],
};

export default config;
