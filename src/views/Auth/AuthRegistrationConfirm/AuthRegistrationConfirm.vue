<template>
    <page theme="auth">
        <auth-header />
        <auth-confirm-email-form />
    </page>
</template>

<script>
    import Page from '@/components/Core/Page/Page.vue'
    import AuthHeader from '@/components/Auth/AuthHeader/AuthHeader.vue'
    import AuthConfirmEmailForm from '@/components/Auth/AuthConfirmEmailForm/AuthConfirmEmailForm.vue'

    export default {
        name: "AuthRegistrationConfirm",
        components: {
            Page,
            AuthHeader,
            AuthConfirmEmailForm
        }
    }
</script>

<style lang="scss">
    @import "AuthRegistrationConfirm";
</style>
