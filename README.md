# vue-imart-manage

### 安装 [Yarn](https://classic.yarnpkg.com/en/docs/install#mac-stable)

```shell script
brew install yarn
```

#### 安装项目依赖库
```
yarn install
```

#### 运行项目
```
yarn start
```

#### 打包项目
```
yarn build
```

## 项目结构

```
.
├── docs                    （帮助文档 基于vuepress创建）
│   ├── .vuepress
│   │   └── config.js       （帮助文档配置）
│   ├── README.md           （帮助文档首页）
├── public
│   ├── docs                （帮助文档build后的位置）
│   │   ...
│   │   └── index.html      （帮助文档页面）
│   ├── im-iconfont         （阿里iconfont）
│   └── index.html           
├── src
│   ├── api
│   │   ├── actions         （api 请求接口路径）
│   │   └── mock            （mock数据）
│   ├── assets
│   │   ├── images
│   │   ├── logo.png
│   │   └── styles
│   │       ├── element-ui.scss   （全局覆盖element-ui）
│   │       └── variables.scss    （scss 对应的全局变量、函数）
│   ├── components
│   │   ├── HelloWorld.vue
│   │   ├── Layout
│   │   │   └── MenuHeader        （网站页面整体布局结构）
│   │   └── Modules               （vue 全局组件自动注册）
│   │       ├── FontAwesomeIcon   （font-awesome-free 对应的vue组件）
│   │       ├── SvgSpriteIcon     （svg sprites的使用针对阿里symbol格式的icon图标）
│   │       └── index.js          （在此目录下的组件会自动注册到vue 全局组件上）
│   ├── locale                    （语言国际化）
│   ├── router
│   │   ├── index.js
│   │   ├── menu.json             （网站菜单栏）
│   │   └── route.json            （vue-router 路径）
│   ├── store
│   ├── utils
│   │   └── ajax.js               （ajax后端请求与响应处理方法）
│   ├── views                     （网站页面结构 （目录名即vue-router对应的路由name）
│   │   ├── 404.vue
│   │   ├── About.vue
│   │   ├── Home.vue
│   │   ├── page-a
│   │   │   └── index.vue
│   │   ├── page-b
│   │   │   └── index.vue
│   │    ...
│   ├── app.config.js             （项目配置，如api代理、mock）
│   ├── App.vue
│   └── main.js
...
├── vue.config.js                 （vue-cli 配置）
└── package.json
```

## 项目帮助

### API

#### api 规范

请求与响应的处理实现逻辑 [查看](./src/utils/ajax.js)

1、请求数据格式

- get   将参数添加到params，即将参数追加到接口地址后面： searchSomeInfo?id=1
- post、put 、delete 将参数添加body体中，以json格式传递

2、响应数据格式

请求成功：后端数据处理成功或有进一步要求前端处理其它状况，data属性只能存在 error: 0时。  
以下为必须字段：
```json
{
  "error": 0,
  "data": ""
}
```

请求失败：后端能接受到该请求时，数据不合后端要求，只是要求前端简单给用户报错。  
以下为必须字段：

```json
{
  "error": 1,
  "msg": "错误信息"
}
```

#### 使用  

定义对应的接口模块，即创建对应的actions 文件：

```shell script
src/api
├── actions
│   └── test.js
└── index.js
```

src/api/actions/test.js : 

```javascript
export default {
  get: {
    getUserInfo: '/user/userInfo',
  },
  post: {
    addUserInfo: '/user/userInfo',
  },
  put: {
    editUserInfo: '/user/userInfo',
  },
  delete: {
    deleteUserInfo: '/user/userInfo',
  },
}

``` 

在 [api](./src/api/index.js) 中的actions 引入对应的接口模块，在文件中使用方式：

```javascript
this.$_api.test.getUserInfo({ name: 'Tom'}, (err, data) => {
  console.log('err: ', err)
  if (err) return

  // do something
  console.log('res: ', data)
})
```

### Mock

[local static mock](./src/api/mock/README.md)

### 引入 iconfont  

#### 阿里 [iconfont](https://www.iconfont.cn/)

引入 对应iconfont 文件到 public下 im-iconfont：  
（使用im-icon-** 其中前缀 'im-icon' 在创建阿里iconfont的时候定义，默认为'icon-**'）

1、通过 font icon 使用： ([index.html](./public/index.html)需先引入：```<link rel="stylesheet" href="./im-iconfont/iconfont.css">```)
```html
<i class="iconfont im-icon-web-logo"></i>
```

2、通过svg symbol 使用并定义 vue 组件 ([index.html](./public/index.html)需先引入：``` <script src="./im-iconfont/iconfont.js"></script>```)
```vue
<svg-sprite-icon icon="im-icon-web-logo" />
```
  
#### 使用font-awesome 5 (free)

通过vue组件形式 引入对应的font-awesome icon

```vue
<font-awesome-icon :icon="['fab', 'github']" />
```
需要先引入font-awesome里的icon对应的组件 [FontAwesomeIcon](./src/components/Modules/FontAwesomeIcon/index.js)，并注册到vue全局。


### 帮助文档

docs 目前功能暂未完成

### Ecosystem Reference

This is a list of the project related libraries and resources. 

- [Yarn](https://classic.yarnpkg.com/en/)
- [Vue](https://vuejs.org/index.html) the project base framework
- [Element UI](https://element.eleme.cn/#/zh-CN) base UI
- [Vue CLI](https://cli.vuejs.org/) vue.config.js
- [Axios](http://www.axios-js.com/) ajax
- [i18n](http://kazupon.github.io/vue-i18n/) language help
- [Mock](https://github.com/nuysoft/Mock/wiki) mock data
- [fontawesome](https://github.com/FortAwesome/vue-fontawesome) icon 
- [vue-fontawesome](https://fontawesome.com/) vue fontawesome component icon 
- [VuePress](https://vuepress.vuejs.org/zh/) help docs setup

