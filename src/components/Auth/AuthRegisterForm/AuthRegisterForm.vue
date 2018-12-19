<template>
    <div :class="['auth-register-form']">
        <h3 :class="['auth-register-form__heading']">
            Create your account
        </h3>
        <p v-show="formErrorID !== 0" :class="{ 'auth-register-form__error': true }">
            {{ formError }}
        </p>
        <div :class="['auth-register-form__wrap']">
            <div :class="['auth-register-form__content']">
                <div :class="['auth-register-form__row']">
                    <div :class="['auth-register-form__column']">
                        <form-input type="text" placeholder="First Name" responsive-key="firstName" :class="['auth-register-form__field']" />
                    </div>
                    <div :class="['auth-register-form__column']">
                        <form-input type="text" placeholder="Last Name" responsive-key="lastName" :class="['auth-register-form__field']" />
                    </div>
                </div>
                <div :class="['auth-register-form__row']">
                    <div :class="['auth-register-form__column']">
                        <form-input type="email" placeholder="Email" responsive-key="email" :class="['auth-register-form__field']" />
                    </div>
                </div>
                <div :class="['auth-register-form__row']">
                    <div :class="['auth-register-form__column']">
                        <form-input type="password" placeholder="Choose a password" responsive-key="password" :class="['auth-register-form__field']" />
                    </div>
                </div>
                <div v-show="form.password.length > 0" :class="['auth-register-form__validity']">
                    <span :style="validityClassByID(0)"></span>
                    <span :style="validityClassByID(1)"></span>
                    <span :style="validityClassByID(2)"></span>
                    <span :class="validityLabelClass">{{ passwordError }}</span>
                </div>
                <div :class="['auth-register-form__reCaptcha']">
                    <vue-recaptcha sitekey="6LduE4AUAAAAAD9JCpzfpMIjwr36co5x--SxYADo" />
                </div>
                <div :class="['auth-register-form__rules']">
                    <form-checkbox responsive-key="rules" :checked="false" label="I certify that I am 18 years of age or older, and I agree to the User Agreement and Privacy Policy"/>
                </div>
                <user-button type="button" @click.native="validateDataForm()" theme="green" :class="['auth-register-form__button']">
                    <template v-if="isCreate === false">
                        Create account
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
    import VueRecaptcha from 'vue-recaptcha'

    import FormInput from '@/components/Core/Form/FormInput/FormInput.vue'
    import FormCheckbox from '@/components/Core/Form/FormCheckbox/FormCheckbox.vue'
    import UserButton from '@/components/Core/UserButton/UserButton.vue'
    import ButtonLoader from '@/components/Core/ButtonLoader/ButtonLoader.vue'

    let formErrors = [
        'none',
        'Your first name must be entered',
        'Your last name must be entered',
        'Your email must be entered',
        'Password must be entered',
        'Please agree with our confidential policy.'
    ]

    let passwordErrors = [
        'Too week',
        'Good',
        'Excellent'
    ]

    export default {
        name: "AuthRegisterForm",
        components: {
            VueRecaptcha,
            FormInput,
            FormCheckbox,
            UserButton,
            ButtonLoader
        },
        data () {
            return {
                formErrorID: 0,
                formError: formErrors[0],
                passwordErrorID: 0,
                passwordError: passwordErrors[0],
                isCreate: false,
                form: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    rules: false
                }
            }
        },
        methods: {
            validityClassByID: function (id) {
                let object = {}

                switch (id) {
                    case 0:
                        switch (this.passwordErrorID) {
                            case 0:
                                object = {
                                    backgroundColor: '#F65454'
                                }
                                break;
                            case 1:
                                object = {
                                    backgroundColor: '#F69A54'
                                }
                                break;
                            case 2:
                                object = {
                                    backgroundColor: '#2ED44D'
                                }
                                break;
                        }
                        break;
                    case 1:
                        switch (this.passwordErrorID) {
                            case 0:
                                object = {
                                    backgroundColor: '#D9D9D9'
                                }
                                break;
                            case 1:
                                object = {
                                    backgroundColor: '#F69A54'
                                }
                                break;
                            case 2:
                                object = {
                                    backgroundColor: '#2ED44D'
                                }
                                break;
                        }
                        break;
                    case 2:
                        switch (this.passwordErrorID) {
                            case 0:
                                object = {
                                    backgroundColor: '#D9D9D9'
                                }
                                break;
                            case 1:
                                object = {
                                    backgroundColor: '#D9D9D9'
                                }
                                break;
                            case 2:
                                object = {
                                    backgroundColor: '#2ED44D'
                                }
                                break;
                        }
                        break;
                }

                return object
            },
            setPasswordErrorLabel: function (id) {
                this.passwordErrorID = id
                this.passwordError = passwordErrors[id]
            },
            setFormErrorLabel: function (id, label = null) {
                this.formErrorID = id
                this.formError = formErrors[id]

                if (label !== null && label.length > 0) {
                    this.formError = label
                }
            },
            getPasswordError: function () {
                if (this.form.password.length <= 0 || this.form.password.length <= 6) {
                    return this.setPasswordErrorLabel(0)
                } else if (this.form.password.length >= 6 && this.form.password.length < 12) {
                    return this.setPasswordErrorLabel(1)
                } else {
                    return this.setPasswordErrorLabel(2)
                }
            },
            validateDataForm: function () {
                if (this.form.firstName.length <= 0) {
                    this.setFormErrorLabel(1)
                }

                else if (this.form.lastName.length <= 0) {
                    this.setFormErrorLabel(2)
                }

                else if (this.form.email.length <= 0) {
                    this.setFormErrorLabel(3)
                }

                else if (this.form.password.length <= 0) {
                    this.setFormErrorLabel(4)
                }

                else if (this.form.rules === false) {
                    this.setFormErrorLabel(5)
                }

                else {
                    if (this.isCreate === true) return true

                    this.isCreate = true

                    axios.post('https://api.reyna.ml/api/Customers/signup', {
                        email: this.form.email,
                        password: this.form.password,
                        name: this.form.firstName,
                        familyName: this.form.lastName
                    })
                    .then(response => {
                        switch (response.status) {
                            case 200:
                                this.$router.push('/auth/registration-confirm')
                                break
                        }
                    })
                    .catch(error => {
                        this.isCreate = false
                        this.setFormErrorLabel(999, error.response.data.error.message)
                    });
                }
            }
        },
        computed: {
            validityLabelClass: function () {
                return {
                    'auth-register-form__password-validate': true,
                    'auth-register-form__password-validate--type-bad': this.passwordErrorID === 0,
                    'auth-register-form__password-validate--type-medium': this.passwordErrorID === 1,
                    'auth-register-form__password-validate--type-good': this.passwordErrorID === 2
                }
            }
        },
        mounted () {
            /* eslint-disable */
            this.$on('response-input', function (response) {
                this.form[response[0]] = response[1]

                this.getPasswordError()
            })

            this.$on('response-checkbox', function (response) {
                this.form[response[0]] = response[1]
            })
        }
    }
</script>

<style lang="scss">
    @import "AuthRegisterForm";
</style>
