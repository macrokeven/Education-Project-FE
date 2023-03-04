const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: process.env.outputDir,
  devServer: {
    proxy: {
      '/api': {
        target: "http://localhost:8001/",
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        },
      },
    },
  }
});
