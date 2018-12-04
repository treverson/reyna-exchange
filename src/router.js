import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Account from './views/Account/Account'
import AccountProfile from './views/Account/AccountProfile'
import AccountHistory from './views/Account/AccountHistory'
import AccountBuyAndSell from './views/Account/AccountBuyAndSell'

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
      component: Account,
      children: [
          {
              path: '',
              name: 'accountProfile',
              component: AccountProfile
          },
          {
              path: 'history',
              name: 'accountHistory',
              component: AccountHistory
          },
          {
              path: 'buy-and-sell',
              name: 'accountBuyAndSell',
              component: AccountBuyAndSell
          }
      ]
    }
  ]
})
