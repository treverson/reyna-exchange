import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'

// Account
import AccountEntryPoint from './views/Account/AccountEntryPoint'
import AccountDashboard from './views/Account/AccountDashboard'
import AccountBuyAndSell from './views/Account/AccountBuyAndSell'
import AccountHistory from './views/Account/AccountHistory'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/account',
      name: 'account',
      component: AccountEntryPoint,
      children: [
          {
              path: 'dashboard',
              name: 'accountDashboard',
              component: AccountDashboard
          },
          {
              path: 'buy-and-sell',
              name: 'accountBuyAndSell',
              component: AccountBuyAndSell
          },
          {
              path: 'history',
              name: 'accountHistory',
              component: AccountHistory
          }
      ]
    }
  ]
})
