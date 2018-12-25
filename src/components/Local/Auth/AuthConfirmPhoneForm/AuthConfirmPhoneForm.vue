<template>
    <div :class="['auth-confirm-phone-form']">
        <p v-show="hasError === true" :class="{ 'auth-confirm-phone-form__error': true }">
            {{ errorTitle }}
        </p>
        <div :class="['auth-confirm-phone-form__wrap']">
            <div :class="['auth-confirm-phone-form__icon']">
                <span :class="['icon-good']"></span>
            </div>
            <h3 :class="['auth-confirm-phone-form__heading']">
                Verify your phone
            </h3>
            <p :class="['auth-confirm-phone-form__desk']">
                We need to verify your phone number in order to make your account more secure
            </p>
            <div :class="['auth-confirm-phone-form__content']">
                <vue-tel-input v-model="phoneNumber" defaultCountry="us" @onInput="onInput" placeholder="+ 1 000 000 0000" :class="['auth-confirm-phone-form__phone']" />
                <resend-code :is-active="validPhone" :phone="phoneNumber" :token="phoneToken" :class="['auth-confirm-phone-form__code']" />
            </div>
            <code-verification :class="['auth-confirm-phone-form__verify']" />
            <user-button type="button" theme="green" @click.native="onClickSubmit()" :class="['auth-confirm-phone-form__button']">
                <template v-if="isRequestSend === false">
                    Verify
                </template>
                <template v-else>
                    <button-loader />
                </template>
            </user-button>
        </div>
    </div>
</template>

<script>

    import axios from 'axios'

    import UserButton from '@/components/Global/UserButton/UserButton.vue'
    import CodeVerification from '@/components/Global/CodeVerification/CodeVerification.vue'
    import ButtonLoader from '@/components/Global/ButtonLoader/ButtonLoader.vue'
    import ResendCode from '@/components/Global/ResendCode/ResendCode.vue'

    export default {
        name: "AuthConfirmPhoneForm",
        props: {
            resendTime: {
                type: Number,
                default: 60
            },
            phoneToken: {
                type: String,
                required: true
            }
        },
        components: {
            UserButton,
            CodeVerification,
            ButtonLoader,
            ResendCode
        },
        data () {
            return {
                phoneNumber: '',
                hasError: false,
                errorTitle: '',
                validPhone: false,
                isSendCode: false,
                isRequestSend: false,
                resendTimer: 0, // в секундах
                token: null,
                enterCode: '' // введенный код
            }
        },
        methods: {
            phoneStringToNumber: function (number) {
                return number.replace(/\s/g, '').substr(1)
            },
            onInput: function ({ isValid }) {
                this.validPhone = isValid
            },
            onClickSubmit: function () {
                if (this.token === null) {
                    this.hasError = true
                    this.errorTitle = 'Phone is not valid'
                }

                else {
                    this.hasError = false
                    this.errorTitle = ''
                    this.isRequestSend = true

                    axios.post('https://api.reyna.ml/api/Customers/login/finish', {
                        phone: parseInt(this.phoneStringToNumber(this.phoneNumber)),
                        code: parseInt(this.enterCode),
                        token: this.token
                    })
                    .then(() => {
                        this.$store.commit('changeRegistrationState', true)
                        this.$router.push('/auth/sign-in')
                    })
                    .catch(error => {
                        this.hasError = true
                        this.isRequestSend = false
                        this.errorTitle = error.response.data.error.message
                    })
                }
            }
        },
        mounted () {
            this.$on('response-verification-code', function (response) {
                this.enterCode = response
            })

            this.$on('response-send-code', function (response) {
                this.token = response
            })

            this.$on('response-send-code-error', function (response) {
                this.hasError = true
                this.errorTitle = response
            })
        }
    }
</script>

<style lang="scss">
    @import "AuthConfirmPhoneForm";
</style>
