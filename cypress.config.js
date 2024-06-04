const { defineConfig } = require("cypress");




module.exports = defineConfig({
  e2e: {
    experimentalStudio: true,
  },

  
  
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});

