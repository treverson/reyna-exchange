<template>
    <div :class="['button-loader', 'lds-ellipsis']">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>

<script>
    export default {
        name: "ButtonLoader"
    }
</script>

<style lang="scss">
    @import "ButtonLoader";
</style>
