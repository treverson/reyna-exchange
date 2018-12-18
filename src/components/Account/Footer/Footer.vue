<template>
    <footer :class="objectClass">
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
        props: {
            theme: {
                type: String
            }
        },
        components: {
            LangSwitcher,
            AccountContainer
        },
        computed: {
            objectClass: function () {
                return {
                    'account-footer': true,
                    'account-footer--theme-red': this.theme === 'red'
                }
            }
        }
    }
</script>

<style lang="scss">
    @import "Footer";
</style>

