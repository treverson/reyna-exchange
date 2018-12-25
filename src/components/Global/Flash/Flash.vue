<template>
    <p :class="objectClass">
        <slot></slot>
    </p>
</template>

<script>
    export default {
        name: "Flash",
        props: {
            theme: {
                type: String,
                default: 'green'
            }
        },
        computed: {
            objectClass: function () {
                return {
                    'flash': true,
                    'flash--theme-green': this.theme === 'green'
                }
            }
        }
    }
</script>

<style lang="scss">
    @import "Flash";
</style>
