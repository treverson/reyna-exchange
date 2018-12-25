import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'

// Account
import AccountEntryPoint from './views/Account/AccountEntryPoint.vue'
import AccountDashboard from './views/Account/AccountDashboard/AccountDashboard.vue'
import AccountBuyAndSell from './views/Account/AccountBuyAndSell/AccountBuyAndSell.vue'
import AccountHistory from './views/Account/AccountHistory/AccountHistory.vue'
import AccountSettings from './views/Account/AccountSettings/AccountSettings.vue'
import AccountTerminal from './views/Account/AccountTerminal/AccountTerminal.vue'

// Terminal
import TerminalHome from './views/Terminal/TerminalHome/TerminalHome.vue'

// Auth
import AuthEntryPoint from './views/Auth/AuthEntryPoint.vue'
import AuthRegister from './views/Auth/AuthRegister/AuthRegister.vue'
import AuthRegistrationConfirm from './views/Auth/AuthRegistrationConfirm/AuthRegistrationConfirm.vue'
import AuthSignIn from './views/Auth/AuthSignIn/AuthSignIn.vue'

// Verify
import VerifyEmail from './views/Verify/VerifyEmail.vue'
import VerifyPhone from './views/Verify/VerifyPhone.vue'

// Swap
import PageSwap from './views/Inner/PageSwap/PageSwap'

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
                    path: '',
                    redirect: 'dashboard'
                },
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
                },
                {
                    path: 'settings',
                    name: 'AccountSettings',
                    component: AccountSettings
                },
                {
                    path: 'terminal',
                    name: 'AccountTerminal',
                    component: AccountTerminal
                }
            ]
        },
        {
            path: '/terminal',
            component: TerminalHome,
        },
        {
            path: '/auth',
            component: AuthEntryPoint,
            children: [
                {
                    path: 'register',
                    name: 'AuthRegister',
                    component: AuthRegister
                },
                {
                    path: 'registration-confirm',
                    name: 'AuthRegistrationConfirm',
                    component: AuthRegistrationConfirm
                },
                {
                    path: 'sign-in',
                    name: 'AuthSignIn',
                    component: AuthSignIn
                }
            ]
        },
        {
            path: '/verify/email/:token',
            component: VerifyEmail
        },
        {
            path: '/verify/phone/:phoneToken',
            component: VerifyPhone
        },
        {
            path: '/swap',
            name: 'swap',
            component: PageSwap
        }
    ]
})
