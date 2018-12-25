<template>
    <router-link :to="to" :class="objectClass">
        Exchange
    </router-link>
</template>

<script>
    export default {
        name: "Logo",
        props: {
            to: {
                type: String,
                required: true
            },
            theme: {
                type: String
            }
        },
        computed: {
            objectClass: function () {
                return {
                    'primary-logo': true,
                    'primary-logo--theme-white': this.theme === 'white'
                }
            }
        }
    }
</script>

<style lang="scss">
    @import "Logo";
</style>
