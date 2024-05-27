import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// 检索文件目录 import.meta.glob
const routeFiles = import.meta.glob('../views/works/**/*.vue', { eager: true })
const routes = []
for (const path in routeFiles) {
  if (Object.hasOwnProperty.call(routeFiles, path)) {
    const routeConfig = routeFiles[path].default
    const routerPath = path.replace(/.vue*$/g, '').split('../views/works')[1]
    const routerName = routerPath.split('/').reverse()[0]
    const element = {
      path: encodeURI(routerPath), //处理中文路径乱码问题
      name: routerName,
      component: routeConfig,
      /**
       * code github代码地址
       * link 掘金文章地址
       * hidden 是否在随机时隐藏
       * cover 封面图
       * info 内容信息描述
       * sort 排序数值越大越靠前
       * date 日期
       */
      meta: { title: routerName }
    }
    routes.push(element)
  }
}
window.WORKS_ROUTES = routes
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    ...routes
  ]
})

export default router
