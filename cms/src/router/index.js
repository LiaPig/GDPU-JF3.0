import Vue from 'vue'
import Router from 'vue-router'
import App from '@/views/App'
import Menu from '@/views/System/Menu'

Vue.use(Router)

const  routes = [
  {
    path: '/',
    name: 'App',
    component: App,
    children: [
      {
        path: '/system/menu',
        name: 'Menu',
        component: Menu
      }
    ]
  }
]

const router = new Router({
  routes
})

export default router
