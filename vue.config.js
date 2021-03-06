/**
 * https://cli.vuejs.org/config/
 */
const path = require('path')
const execa = require('execa')

function resolve (dir) {
 return  path.resolve(__dirname, dir)
}
const isProduction = process.env.NODE_ENV === 'production'
const branch = execa.sync('git', ['rev-parse', '--abbrev-ref', 'HEAD']).stdout

module.exports = {
  publicPath: isProduction ? '/vue-imart-manage' : '/',
  outputDir: isProduction ? '../kangjiancheng.github.io/vue-imart-manage' : 'dist',
  assetsDir: 'assets',
  devServer: {
    // see ./src/app.config.js proxy attribute for below proxy help
    proxy: {
      '/__local__': {
        target: 'http://127.0.0.1:8080',
        changeOrigin: true,
        pathRewrite: { '^/__local__': '' },
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
      /**
       * build 时的性能提示
       */
      config.performance.maxEntrypointSize = 5 * 1024 * 1024 // 对所有资源 5 MB
      config.performance.maxAssetSize = 2 * 1024 * 1024 // 对每个生成的文件限制
      /**
       * 取消对build后的首页index.html的代码压缩处理
       */
      // https://github.com/jantimon/html-webpack-plugin#options
      config.plugin('html').tap(args => {
        // https://cli.vuejs.org/guide/webpack.html#simple-configuration
        // minify 只在 production 环境中存在
        args[0].minify.collapseWhitespace = false // 取消 build 后的 index.html 文件内容压缩在一起，
        return args
      })
    }

    // 设置环境变量： git 当前分支
    config
      .plugin('define')
      .tap(args => {
        args[0]['process.env.GIT_BRANCH'] = JSON.stringify(branch)
        return args
      })
  },
  css: {
    // 向 CSS 相关的 loader 传递选项
    loaderOptions: {
      // 给 scss-loader 传递选项
      scss: {
        prependData: `@import "~@/assets/styles/variables.scss";` // 全局变量、函数
      },
    },
  },
  // false 时 build 不生成 .map 文件
  // productionSourceMap: false
}
