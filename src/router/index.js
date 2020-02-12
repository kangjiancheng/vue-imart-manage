import Vue from 'vue'
import VueRouter from 'vue-router'
import routeList from "./route"
import appConfig from '@/app.config'
Vue.use(VueRouter)

// 路由列表
const vueRoutes = routeList.map(route => Object.assign({
  path: route.path,
  name: route.name,
  component: () => import(`@/views/${route.name}`),
  meta: route.meta || {}
}))


// 路由实现
const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: () => import(`@/components/Layout/MenuHeader`),
      redirect: { name:routeList[0].name },
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
  let title = to.meta && to.meta.title || to.name
  window.document.title = appConfig.title +' | ' + title
})

export default router
