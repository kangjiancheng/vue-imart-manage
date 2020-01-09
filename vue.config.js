/**
 * https://cli.vuejs.org/config/
 */
const path = require('path')
function resolve (dir) {
 return  path.resolve(__dirname, dir)
}
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  publicPath: '/',
  // outputDir: isProduction ? '../../resources/static' : 'dist',
  assetsDir: 'assets',
  devServer: {
    proxy: {
      '/proxy_local': {
        target: 'http://127.0.0.1:8080',
        changeOrigin: true,
        pathRewrite: { '^/proxy_local': '' },
      },
    },
    host: '127.0.0.1',
    port: 8090,
    overlay: {
      warnings: true,
      errors: true,
      open: true,
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        // 方便 WebStorm 可以正常识别 @
        '@': resolve('src')
      }
    }
  },
  chainWebpack: () => {
    // https://cli.vuejs.org/config/#chainwebpack
  },
  css: {},
}
