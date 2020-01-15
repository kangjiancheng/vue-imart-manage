import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './locale'

import ElementUI from 'element-ui'
Vue.use(ElementUI)

import FontAwesome from './components/FontAwesome'
Vue.use(FontAwesome)

import './assets/styles/index.scss'           // global
import './assets/im-iconfont/iconfont.js'  // svg symbol icon

import api from './api'   // Axios
Vue.prototype.$_api = api

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
