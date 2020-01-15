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
        // 方便 WebStorm 可以索引标识符 @ 的路径
        '@': resolve('src')
      }
    },
  },

  chainWebpack: config => {
    if (isProduction) {
      config.performance.maxEntrypointSize = 5 * 1024 * 1024 // 对所有资源 5 MB
      config.performance.maxAssetSize = 2 * 1024 * 1024 // 对每个生成的文件限制
    }
    // https://github.com/jantimon/html-webpack-plugin#options
    config.plugin('html').tap(args => {
      // https://cli.vuejs.org/guide/webpack.html#simple-configuration
      if (isProduction) {
        // minify 只在 production 环境中存在
        args[0].minify.collapseWhitespace = false // 取消 build 后的 index.html 文件内容压缩在一起，
      }
      return args
    })
  },
  css: {
    // 向 CSS 相关的 loader 传递选项
    loaderOptions: {
      // 给 scss-loader 传递选项
      scss: {
        prependData: `@import "~@/assets/styles/variables.scss";`
      },
    },
  },
  // false 时 build 不生成 .map 文件
  // productionSourceMap: false
}
