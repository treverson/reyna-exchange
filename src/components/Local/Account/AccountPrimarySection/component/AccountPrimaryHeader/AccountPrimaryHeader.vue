<template>
    <div class="AccountPrimaryHeader">
        <h3 class="AccountPrimaryHeader__heading">
            <slot></slot>
        </h3>
    </div>
</template>

<script>
    export default {
        name: "AccountPrimaryHeader"
    }
</script>

<style lang="scss">
    @import "AccountPrimaryHeader";
</style>
