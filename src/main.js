import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './locale'

// element-ui
import ElementUI from 'element-ui'
Vue.use(ElementUI)

import GlobalComponent from './components/Modules'
Vue.use(GlobalComponent)

// fontawesome free 5: http://fa5.dashgame.com/
import '@fortawesome/fontawesome-free/css/all.min.css'

import './assets/styles/index.scss'

// 引入 echarts: https://www.echartsjs.com/
import echarts from 'echarts'
Vue.prototype.$_echarts = echarts

// vcharts: https://v-charts.js.org/
import VCharts from 'v-charts'
Vue.use(VCharts)

// Axios Ajax
import api from './api'
Vue.prototype.$_api = api

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
