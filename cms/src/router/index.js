import Vue from 'vue'
import Router from 'vue-router'
import App from '@/views/App'

Vue.use(Router)

const  routes = [
  {
    path: '/',
    name: 'App',
    component: App
  }
]

const router = new Router({
  routes
})

export default router
