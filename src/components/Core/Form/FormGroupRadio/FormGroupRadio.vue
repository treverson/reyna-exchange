<template>
    <div class="FormGroupRadio">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "FormGroupRadio",
        mounted () {
            /* eslint-disable */

            this.$on('response-radio', response => {

                this.$children.forEach((element) => {

                    if (element.$props['responsiveKey'] !== response) {
                        element.$data['isFormChecked'] = false
                    }

                })

                this.$root.$on('response-group-radio-key', response)

            })
        }
    }
</script>

<style lang="scss">
    @import "FormGroupRadio";
</style>
