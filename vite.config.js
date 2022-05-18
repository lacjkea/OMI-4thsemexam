const { resolve } = require("path");

module.exports = {
  base: "./", //set base here or in the build command
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        sub0: resolve(__dirname, "cases.html"),
        sub1: resolve(__dirname, "approach.html"),
        sub2: resolve(__dirname, "services.html"),
        sub3: resolve(__dirname, "team.html"),
        sub4: resolve(__dirname, "contact.html"),
      },
    },
  },
};
