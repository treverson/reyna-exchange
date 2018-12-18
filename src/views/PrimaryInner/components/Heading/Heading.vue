<template>
    <h1 class="primary-inner__heading">
        <slot></slot>
    </h1>
</template>

<script>
    export default {
        name: "Heading",
        props: {
            size: String
        }
    }
</script>

<style lang="scss">
    @import "Heading";
</style>
