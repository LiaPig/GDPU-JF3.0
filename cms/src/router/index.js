import Vue from 'vue'
import store from '@/store'
import Router from 'vue-router'
import App from '@/views/App'
import Menu from '@/views/System/Menu'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: '首页',
    component: App,
    children: [
      {
        path: '/system/menu',
        name: '菜单管理',
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

  let flag = 1
  if (!store.getters.breadList.length) {
    store.dispatch('addBreadList', {name: to.name, path: to.path})
    store.dispatch('setActiveBread', to.name)
  }
  else {
    for (let i = 0; i < store.getters.breadList.length; i++) {
      if (store.getters.breadList[i].name === to.name) {
        flag = 0
        return
      }
    }
    if (flag) {
      store.dispatch('addBreadList', {name: to.name, path: to.path})
      store.dispatch('setActiveBread', to.name)
    }
  }
})

export default router
