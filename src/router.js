import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import AccountHistory from './views/AccountHistory'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/account-history',
      name: 'accountHistory',
      component: AccountHistory
    }
  ]
})
