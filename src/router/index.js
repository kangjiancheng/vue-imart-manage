import Vue from 'vue'
import VueRouter from 'vue-router'
import routeList from "./route"
Vue.use(VueRouter)

/**
 * 重写路由的push方法
 */
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

/**
 * 获取页面布局风格，并再次设置
 */
export const layoutList = [ 'MenuHeader',  'MenuAside', 'MenuHeaderAside', ]

export function getLayout() {
  let _layout = localStorage.getItem('layout')
  if (!layoutList.includes(_layout)) _layout = layoutList[0]

  return setLayout(_layout)
}

export function setLayout(layout) {
  let _layout = localStorage.getItem('layout')

  if (layoutList.includes(layout)) _layout = layout
  else if (!layoutList.includes(_layout)) _layout = layoutList[0]

  localStorage.setItem('layout', _layout)
  return _layout
}

const layout = setLayout('MenuHeader') // 'MenuHeader'

// 路由列表
const layoutRoutes = routeList.map(route => Object.assign({
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
      component: () => import(`@/components/Layout/${layout}`),
      redirect: { name:routeList[0].name },
      children: [
        ...layoutRoutes
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
  window.document.title = 'Imart | ' + title
})

export default router
