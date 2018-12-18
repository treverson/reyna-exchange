<template>
    <div class="FormRadio" @click="changeFormStatus()">
        <input type="radio" class="FormRadio__input" :checked="isFormChecked">
        <div class="FormRadio__custom"></div>
        <span class="FormRadio__label">
            Any amount of digital currency
        </span>
    </div>
</template>

<script>
    export default {
        name: "FormRadio",
        data () {
            return {
                isFormChecked: false
            }
        },
        methods: {
            changeFormStatus: function () {
                this.isFormChecked = true
            }
        }
    }
</script>

<style lang="scss">
    @import "FormRadio";
</style>

