<template>
    <footer :class="['account-footer']">
        <account-container :class="['account-footer__container']">
            <span :class="['account-footer__copyright']">
                © 2018-2019 ReynaExchange. All rights reserved
            </span>
            <LangSwitcher :class="['account-footer__lang']" />
        </account-container>
    </footer>
</template>

<script>
    import AccountContainer from '@/components/Account/AccountContainer/AccountContainer.vue'
    import LangSwitcher from '@/components/Account/LangSwitcher/LangSwitcher'

    export default {
        name: "Footer",
        components: {
            LangSwitcher,
            AccountContainer
        }
    }
</script>

<style lang="scss">
    @import "Footer";
</style>

