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

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requiresAuth)) {  // 判断该路由是否需要登录权限
    // console.log(store.getters.isLogin);
    // if (store.getters.isLogin) {  // 通过vuex 如果当前有登录
    //   next();
    // }
    // else {
    //   console.log("没有登录吖")
    //   next({
    //     path: '/login',
    //     query: {redirect: to.fullPath}
    //   })
    // }
    }
    else {
      next();
    }
    console.log(to.name, to.path)
  })

export default router
