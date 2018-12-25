<template>
    <page theme="auth">
        <auth-header />
        <auth-register-form />
    </page>
</template>

<script>
    import Page from '@/components/Global/Page/Page.vue'
    import AuthHeader from '@/components/Local/Auth/AuthHeader/AuthHeader.vue'
    import AuthRegisterForm from '@/components/Local/Auth/AuthRegisterForm/AuthRegisterForm.vue'

    export default {
        name: "AuthRegister",
        components: {
            Page,
            AuthHeader,
            AuthRegisterForm
        }
    }
</script>

<style lang="scss">
    @import "AuthRegister";
</style>
