const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 7070,
  // //   proxy: {
  // //      "": {
  // //       target: 'http://localhost:8080',
  // //       changeOrigin: true
  // //     }
  // //   }
  }
})
