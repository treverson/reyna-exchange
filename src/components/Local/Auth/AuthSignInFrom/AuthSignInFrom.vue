<template>
    <div :class="['auth-sign-in-form']">
        <p v-show="isError === true" :class="['auth-sign-in-form__error']">
            {{ error }}
        </p>
        <div :class="['auth-sign-in-form__wrap']">
            <h3 :class="['auth-sign-in-form__heading']">
                Sign In
            </h3>
            <div class="auth-sign-in-form__row">
                <form-input type="email" placeholder="Email" responsive-key="email" :class="['auth-sign-in-form__field']" />
            </div>
            <div class="auth-sign-in-form__row">
                <form-input type="password" placeholder="Password" responsive-key="password" :class="['auth-sign-in-form__field']" />
            </div>
            <code-verification v-if="isCodeSend === true" :class="['auth-sign-in-form__validation']" />
            <div class="auth-sign-in-form__controls">
                <user-button @click.native="onSubmitForm()" type="button" theme="green">
                    <template v-if="isRequestSend === false">
                        Sign In
                    </template>
                    <template v-else>
                        <button-loader />
                    </template>
                </user-button>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    import FormInput from '@/components/Global/Form/FormInput/FormInput.vue'
    import CodeVerification from '@/components/Global/CodeVerification/CodeVerification.vue'
    import UserButton from '@/components/Global/UserButton/UserButton.vue'
    import ButtonLoader from '@/components/Global/ButtonLoader/ButtonLoader.vue'

    export default {
        name: "AuthSignInFrom",
        components: {
            FormInput,
            CodeVerification,
            UserButton,
            ButtonLoader
        },
        data () {
            return {
                isRequestSend: false,
                sendCodePhone: null,
                accountPhone: null,
                authToken: null,
                isCodeSend: false,
                isError: false,
                error: '',
                responseCode: null,
                enterCode: null,
                form: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            /* eslint-disable */

            onSubmitForm: function () {
                if (this.form.email.length === 0 || this.form.password.length === 0) {
                    this.isError = true
                    this.error = 'Email or password is not correct'
                }

                if (this.isCodeSend === true) {

                    this.isRequestSend = true

                    axios.post('https://api.reyna.ml/api/Customers/login/finish', {
                        phone: parseInt(this.accountPhone),
                        code: parseInt(this.enterCode),
                        token: this.authToken
                    }).then(() => {

                        this.$store.commit('changeLogged', true)
                        this.$store.commit('changeRegistrationState', false)
                        this.$router.push('/account/dashboard')

                    }).catch(error => {

                        this.isError = true
                        this.isRequestSend = false

                        this.error = error.response.data.error.message
                        console.log(error.response)

                    })

                }

                else {
                    this.isError = false
                    this.isRequestSend = true

                    console.log(this.form.email)
                    console.log(this.form.password)

                    axios.post('https://api.reyna.ml/api/Customers/login/start', {
                        email: this.form.email,
                        password: this.form.password
                    }).then(response => {

                        this.isCodeSend = true
                        this.isRequestSend = false

                        this.authToken = response.data.token.token
                        this.accountPhone = response.data.token.phone

                    }).catch(error => {

                        this.isError = true
                        this.isRequestSend = false

                        this.error = error.response.data.error.message

                    });
                }
            }
        },
        computed: {
            getSendCodeState: function () {
                let result = false

                if (this.form.email.length > 0) {
                    result = true
                }

                return result
            }
        },
        mounted () {
            this.$on('response-input', function (response) {
                this.form[response[0]] = response[1]
            })

            this.$on('response-send-code', function (response) {
                this.responseCode = response
            })

            this.$on('response-verification-code', function (response) {
                this.enterCode = response
            })
        }
    }
</script>

<style lang="scss">
    @import "AuthSignInFrom";
</style>
