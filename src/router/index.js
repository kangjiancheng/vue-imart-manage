import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/components/Layout'
import routeList from "./route"

Vue.use(VueRouter)

const vueRoutes = routeList.map(route => Object.assign({
  path: route.path,
  name: route.name,
  component: () => import(`@/views/${route.name}`),
  meta: route.meta || {}
}))


const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: routeList[0].name,
      children: [
        ...vueRoutes
      ],
    },
    {
      path: '*',
      redirect: '/404',
    },
  ],
})

router.beforeEach( async (to, from, next) => {
  try {
    const isOK = false
    if (isOK) {
      next('/')
    } else {
      next()
    }

  } catch (e) {
    console.log(e)
    next('/')
  }
})

router.afterEach((to, from) => {
  // 设置浏览器标题
  window.document.title = 'imart-manage | ' + to.name
})

export default router
