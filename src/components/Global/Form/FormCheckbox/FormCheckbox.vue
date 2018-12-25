<template>
    <div @click="handlerChecked()" :class="['form-checkbox']">
        <input v-model="object.model" type="checkbox" :class="['form-checkbox__object']">
        <div :class="['form-checkbox__custom']"></div>
        <span :class="['form-checkbox__label']">
            {{ object.label }}
        </span>
    </div>
</template>

<script>
    export default {
        name: "FormCheckbox",
        props: {
            responsiveKey: {
                type: String,
                required: true
            },
            checked: {
                type: Boolean,
                default: false
            },
            label: {
                type: String,
                required: true
            }
        },
        data () {
            return {
                object: {
                    model: this.checked,
                    label: this.label
                }
            }
        },
        methods: {
            handlerChecked: function () {
                this.object.model = !this.object.model

                this.$parent.$emit('response-checkbox', [this.responsiveKey, this.object.model])
            }
        }
    }
</script>

<style lang="scss">
    @import "FormCheckbox";
</style>
