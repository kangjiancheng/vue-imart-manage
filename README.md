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

## 本地mock

src/api/mock/README.md

## iconfont  使用
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
需要先引入font-awesome里的icon对应的组件 ```src/components/Modules/FontAwesomeIcon```，并注册到vue全局。


### Vue-cli Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

