<template>
    <div class="FormRadio" @click="changeFormStatus()">
        <input type="radio" class="FormRadio__input" :checked="isFormChecked">
        <div class="FormRadio__custom"></div>
        <span class="FormRadio__label">
            {{ title}}
        </span>
    </div>
</template>

<script>
    export default {
        name: "FormRadio",
        props: {
            responsiveKey: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            }
        },
        data () {
            return {
                isFormChecked: false
            }
        },
        methods: {
            changeFormStatus: function () {
                this.isFormChecked = true

                this.$parent.$emit('response-radio', this.responsiveKey)
            }
        }
    }
</script>

<style lang="scss">
    @import "FormRadio";
</style>

