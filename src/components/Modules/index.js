/**
 * 自定义 组件
 * https://www.webpackjs.com/api/module-methods/#webpack
 *
 * require.context()创建自定义模块上下文, webpack 会在构建的时候解析代码中的 require.context()
 * @params: path - 要搜索的文件夹目录
 * @params: deep - 是否搜索对应的子目录
 * @params: filter - 根据正则表达式匹配对应文件
 *
 *
 * require.context()返回一个(require)函数 webpackContext(request):
 *    该函数接收一个参数 request, 根据request的表达式(expressions)，会创建一个上下文(context)
 *
 *    ƒ webpackContext(req) {
 *      var id = webpackContextResolve(req);
 *      return __webpack_require__(id); // 根据id 找到对应模块
 *    }
 *
 *    上下文模块包含一个 map 对象，会把 request 中所有模块转译成对应的模块 id。如：
 *    {
 *      "./table.ejs": 42,
 *      "./table-row.ejs": 43,
 *      "./directory/folder.ejs": 44
 *    }
 *
 *    webpackContext有3个属性：
 *      resolve() 是一个函数，它返回请求被解析后得到的模块 id。
 *      keys()即：Object.keys(map) 也是一个函数，它返回一个数组，由所有可能被上下文模块处理的请求(文件路径)
 *      id
 *
 */
export default {
  install(Vue, Option) {
    // 当前目录下子目录的 index.js 文件路径
    const webpackContext = require.context('.', true, /\/.+\/index\.js/)

    webpackContext.keys().forEach(componentIndex => {
      // // 通过文件路径匹配对应ID，从而取得模块上下文
      const component = webpackContext(componentIndex)

      // 子文件名 PascalCase 转换为 kebab-case
      const componentName = componentIndex
        .replace(/.+\/(.+)\/.+/, '$1') // 获取子文件名
        .replace(/\B(?=[A-Z])/g, '-') // 非首 大写字母前 添加 '-'
        .toLowerCase() // 转换为小写

      // 定义组件
      Vue.component(componentName, component.default || component)
    })
  },
}
