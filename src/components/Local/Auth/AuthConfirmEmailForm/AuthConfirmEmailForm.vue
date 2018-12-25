<template>
    <div :class="['auth-confirm-email-form']">
        <h3 :class="['auth-confirm-email-form__heading']">
            Please activate your account
        </h3>
        <p :class="['auth-confirm-email-form__desk']">
            Your account has been successfully created and we just sent you activation link. Please check your email.
        </p>
        <user-button type="button" theme="green" :class="['auth-confirm-email-form__button']">
            Re-send
        </user-button>
    </div>
</template>

<script>
    import UserButton from '@/components/Global/UserButton/UserButton.vue'

    export default {
        name: "AuthConfirmEmailForm",
        components: {
            UserButton
        }
    }
</script>

<style lang="scss">
    @import "AuthConfirmEmailForm";
</style>
