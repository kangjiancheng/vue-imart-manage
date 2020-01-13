import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/components/Layout'
import routeList from "./route.json"

Vue.use(VueRouter)

const vueRoutes = routeList.map(route => Object.assign({
  path: route.path,
  name: route.name,
  component: () => import(`@/views/${route.name}`),
  meta: route.meta || {}
}))

export const allRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/get-start',
    children: [
      ...vueRoutes,
    ],
  },

  {
    path: '*',
    redirect: '/404',
  },
]

const router = new VueRouter({
  routes: allRoutes,
})


router.beforeEach( async (to, from, next) => {
  try {
    // await store.dispatch('app/SET_ALL_MENU', { allMenu })

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

export default router
