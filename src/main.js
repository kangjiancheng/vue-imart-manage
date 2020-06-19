import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './locale'

// fontawesome free 5: http://fa5.dashgame.com/
import '@fortawesome/fontawesome-free/css/all.min.css'
import './assets/styles/index.scss'

// element-ui
import ElementUI from 'element-ui'
Vue.use(ElementUI)

// 引入 echarts: https://www.echartsjs.com/
import echarts from 'echarts'
Vue.prototype.$_echarts = echarts

// vcharts: https://v-charts.js.org/
import VCharts from 'v-charts'
import 'v-charts/lib/style.css'
Vue.use(VCharts)

// date format: moment
import * as moment from 'moment'
Vue.prototype.$_moment = moment

// Axios Ajax
import axios from 'axios'
import api from './api'
Vue.prototype.$axios = axios
Vue.prototype.$_api = api

// auto global component
import GlobalComponent from './components/Modules'
Vue.use(GlobalComponent)


/**
 * TODO: GraphQL 待开发
 */
// import apolloProvider from './graphql'

// $eventBus
Vue.prototype.$eventBus = new Vue()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  // apolloProvider,
  render: h => h(App),
}).$mount('#app')
