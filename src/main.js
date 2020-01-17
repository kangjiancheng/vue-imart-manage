import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './locale'

import ElementUI from 'element-ui'
Vue.use(ElementUI)

import GlobalComponent from './components/Modules'
Vue.use(GlobalComponent)

import './assets/styles/index.scss'  // global

import api from './api'   // Axios
Vue.prototype.$_api = api

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
