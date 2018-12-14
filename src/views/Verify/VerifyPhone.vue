<template>
    <page theme="auth">
        <auth-header />
        <auth-confirm-phone-form :phone-token="this.$route.params['phoneToken']" />
    </page>
</template>

<script>
    import Page from '@/components/Core/Page/Page.vue'
    import AuthHeader from '@/components/Auth/AuthHeader/AuthHeader.vue'
    import AuthConfirmPhoneForm from '@/components/Auth/AuthConfirmPhoneForm/AuthConfirmPhoneForm.vue'

    export default {
        name: "VerifyPhone",
        components: {
            Page,
            AuthHeader,
            AuthConfirmPhoneForm
        },
        computed: {}
    }
</script>
