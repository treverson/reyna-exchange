<template>
    <router-link :to="to" class="primary-logo">
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
            }
        }
    }
</script>

<style lang="scss">
    @import "Logo";
</style>
