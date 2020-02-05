# vue-imart-manage

安装 [yarn](https://classic.yarnpkg.com/en/docs/install#mac-stable)

```shell script
brew install yarn
```

#### 安装项目相关第三方依赖库 (install the project related libraries)
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

### Mock

[local static mock](./src/api/mock/README.md)

### iconfont  使用

#### 引入 阿里巴巴 iconfont

引入 对应iconfont 文件到 public下 im-iconfont

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

