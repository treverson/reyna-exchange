<template>
    <page theme="auth">
        <auth-header />
        <auth-confirm-phone-form :phone-token="this.$route.params['phoneToken']" />
    </page>
</template>

<script>
    import Page from '@/components/Global/Page/Page.vue'
    import AuthHeader from '@/components/Local/Auth/AuthHeader/AuthHeader.vue'
    import AuthConfirmPhoneForm from '@/components/Local/Auth/AuthConfirmPhoneForm/AuthConfirmPhoneForm.vue'

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
