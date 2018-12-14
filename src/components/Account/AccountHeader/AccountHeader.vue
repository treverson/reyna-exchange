<template>
    <header :class="['account-header']">
        <logo to="/account" :class="['account-header__logo']" />
        <nav class="account-header__menu">
            <router-link to="/account/dashboard" class="account-header__link"><span class="icon-dashboard account-header__icon"></span> Dashboard</router-link>
            <router-link to="/account/buy-and-sell" class="account-header__link"><span class="icon-buy-and-sell account-header__icon"></span> Buy & Sell</router-link>
            <router-link to="/account/advanced-view" class="account-header__link"><span class="icon-advanced-view account-header__icon"></span> Advanced View</router-link>
            <router-link to="/account/history" class="account-header__link"><span class="icon-history account-header__icon"></span> History</router-link>
        </nav>
        <account-profile user-name="Georg Pavlov" avatar-url="https://pp.userapi.com/c830308/v830308045/13f4f6/RwaDj5qlQwQ.jpg?ava=1" theme="light" :class="['account-header__profile']" />
    </header>
</template>

<script>
    import Logo from '@/components/Core/Logo/Logo.vue'
    import AccountProfile from '@/components/Core/AccountProfile/AccountProfile'

    export default {
        name: "Header",
        components: {
            Logo,
            AccountProfile
        },
        data () {
            return {
                isActionsActive: false,
                avatarUrl: 'https://pp.userapi.com/c830308/v830308045/13f4f6/RwaDj5qlQwQ.jpg?ava=1'
            }
        },
        methods: {
            changeActionActive: function () {
                this.isActionsActive = !this.isActionsActive
            }
        }
    }
</script>

<style lang="scss">
    @import "AccountHeader";
</style>
