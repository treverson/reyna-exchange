import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'

// Account
import AccountEntryPoint from './views/Account/AccountEntryPoint.vue'
import AccountDashboard from './views/Account/AccountDashboard/AccountDashboard.vue'
import AccountBuyAndSell from './views/Account/AccountBuyAndSell.vue'
import AccountHistory from './views/Account/AccountHistory.vue'

// Terminal
import TerminalEntryPoint from './views/Terminal/TerminalEntryPoint.vue'
import TerminalHome from './views/Terminal/TerminalHome/TerminalHome.vue'

// Auth
import AuthEntryPoint from './views/Auth/AuthEntryPoint.vue'
import AuthRegister from './views/Auth/AuthRegister/AuthRegister.vue'
import AuthRegistrationConfirm from './views/Auth/AuthRegistrationConfirm/AuthRegistrationConfirm.vue'
import AuthSignIn from './views/Auth/AuthSignIn/AuthSignIn.vue'

// Verify
import VerifyEmail from './views/Verify/VerifyEmail.vue'
import VerifyPhone from './views/Verify/VerifyPhone.vue'

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
        },
        {
            path: '/terminal',
            component: TerminalEntryPoint,
            children: [
                {
                    path: '',
                    name: 'terminalHome',
                    component: TerminalHome
                }
            ]
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
        }
    ]
})
