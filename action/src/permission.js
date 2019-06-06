// permission.js
import Vue from 'vue'
import router from './router'
import store from './store'
import { getToken } from '@/utils/auth' // 验权

const whiteList = ['/login'] // 不重定向白名单

router.beforeEach((to, from, next) => {

  if (getToken()) { // 判断是否有token
    if (to.path === '/login') {
       next({ path: '/' })
    } else {


        store.dispatch('GetInfo').then(res => { // 拉取用户信息

          next()

        }).catch(() => {

          store.dispatch('FedLogOut').then(() => {

            next({ path: '/login' })
          })
        })

    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }
  }
})

