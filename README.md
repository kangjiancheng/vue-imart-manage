# vue-imart-manage

#### Project Before
```
yarn install
```

#### Start for development
```
yarn serve
```

#### Build for production
```
yarn build
```

### Mock

src/api/mock/README.md


### iconfont  使用

#### 引入 阿里巴巴 iconfont

引入 对应iconfont 文件到 public下 im-iconfont

1、通过 font icon 使用： (index.html需先引入：```<link rel="stylesheet" href="./im-iconfont/iconfont.css">```)
```html
<i class="iconfont im-icon-web-logo"></i>
```

2、通过svg symbol 使用并定义 vue 组件 (index.html需先引入：``` <script src="./im-iconfont/iconfont.js"></script>```)
```vue
<svg-sprite-icon icon="im-icon-web-logo" />
```
  
#### 使用font-awesome 5 (free)

通过vue组件形式 引入对应的font-awesome icon

```vue
<font-awesome-icon :icon="['fab', 'github']" />
```
需要先引入font-awesome里的icon对应的组件 `src/components/Modules/FontAwesomeIcon`，并注册到vue全局。


### Ecosystem Reference

This is a list of the project related libraries and resources. 

- [Vue](https://vuejs.org/index.html) the project base framework
- [Element UI](https://element.eleme.cn/#/zh-CN) base UI
- [Vue CLI](https://cli.vuejs.org/) vue.config.js
- [Axios](http://www.axios-js.com/) ajax
- [i18n](http://kazupon.github.io/vue-i18n/) language help
- [Mock](https://github.com/nuysoft/Mock/wiki) mock data
- [fontawesome](https://github.com/FortAwesome/vue-fontawesome) icon 
- [vue-fontawesome](https://fontawesome.com/) vue fontawesome component icon 
- [VuePress](https://vuepress.vuejs.org/zh/) help docs setup

