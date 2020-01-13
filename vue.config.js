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

  // https://cli.vuejs.org/config/#chainwebpack
  chainWebpack: config => {
    // config.resolve.alias.set('utils', resolve('./utils'))

    // https://github.com/jantimon/html-webpack-plugin#options
    config.plugin('html').tap(args => {
      // https://cli.vuejs.org/guide/webpack.html#simple-configuration
      if (isProduction) {
        // 取消build后 文件内容压缩，minify 只在production环境中存在
        args[0].minify.removeComments = false
        args[0].minify.collapseWhitespace = false
      }
      return args
    })
  },
  css: {
    // 向 CSS 相关的 loader 传递选项
    // https://cli.vuejs.org/zh/guide/css.html#%E5%90%91%E9%A2%84%E5%A4%84%E7%90%86%E5%99%A8-loader-%E4%BC%A0%E9%80%92%E9%80%89%E9%A1%B9
    loaderOptions: {
      // 给 scss-loader 传递选项
      scss: {
        prependData: `@import "~@/assets/styles/variables.scss";`
      },
    },
  },
}
