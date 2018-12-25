<template>
    <page theme="auth">
        <auth-header />
        <div v-show="isShowFlash === true" :class="['auth-sign-in__flash']">
            <flash theme="green">
                Your account successfully created. Please, sign in
            </flash>
        </div>
        <auth-sign-in-from />
    </page>
</template>

<script>
    import Page from '@/components/Global/Page/Page.vue'
    import AuthHeader from '@/components/Local/Auth/AuthHeader/AuthHeader.vue'
    import AuthSignInFrom from '@/components/Local/Auth/AuthSignInFrom/AuthSignInFrom.vue'
    import Flash from '@/components/Global/Flash/Flash.vue'

    export default {
        name: "AuthSignIn",
        components: {
            Page,
            AuthHeader,
            AuthSignInFrom,
            Flash
        },
        data () {
            return {
                isShowFlash: false
            }
        },
        mounted () {
            if (this.$store.state.isRegistrationSuccessful === true) {
                this.isShowFlash = true
            }
        }
    }
</script>

<style lang="scss">
    @import "AuthSignIn";
</style>
