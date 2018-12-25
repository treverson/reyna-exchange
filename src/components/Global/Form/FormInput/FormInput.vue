<template>
    <div :class="['form-input']">
        <input v-model="object.model" :type="object.type" :class="objectClass" :placeholder="object.placeholder" @keyup="onChangeModel()" @change="handlerChange()" :disabled="object.disabled">
        <button v-if="type === 'password'" @click="handlerType(type, 'text')" :class="{ 'form-input__password': true, 'form-input__password--isActive-true': object.type === 'text' }">
            <span :class="['form-input__icon', 'icon-password']"></span>
        </button>
        <span v-if="type === 'email'" :class="{ 'form-input__error-email': true, 'form-input__error-email--isActive-true': object.isCorrect === false }">You must enter valid email</span>
    </div>
</template>

<script>
    export default {
        name: "FormInput",
        props: {
            type: {
                type: String,
                required: true,
                default: "text"
            },
            placeholder: {
                type: String
            },
            responsiveKey: {
                type: String,
                required: true
            },
            value: {
                type: String
            },
            disabled: {
                type: Boolean
            }
        },
        data () {
            return {
                defaultType: this.type,
                object: {
                    isCorrect: true,
                    key: this.responsiveKey,
                    model: this.value,
                    type: this.type,
                    placeholder: this.placeholder,
                    disabled: this.disabled
                }
            }
        },
        methods: {
            handlerType: function (oldType, newType) {

                if (this.object.type === oldType) {
                    this.object.type = newType
                }

                else {
                    this.object.type = oldType
                }

            },
            handlerChange: function () {
                // if (this.type === 'email') {
                //
                //     if (!this.validateEmail(this.object.model) && this.object.model.length > 0  ) {
                //         this.object.isCorrect = false
                //     }
                //
                //     else {
                //         this.object.isCorrect = true
                //     }
                // }
            },
            onChangeModel: function () {
                this.$parent.$emit('response-input', [this.object.key, this.object.model])
            },
            validateEmail: function (email) {
                let rules = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
                return rules.test(email);
            }
        },
        computed: {
            objectClass: function () {
                return {
                    'form-input__object': true,
                    'form-input__object--type-password': this.type === 'password',
                    'form-input__object--emailNotCorrect-yes': this.type === 'email' && this.object.isCorrect === false,
                    'form-input__object--type-Disabled': this.object.disabled === true,
                }
            }
        }
    }
</script>

<style lang="scss">
    @import "FormInput";
</style>
