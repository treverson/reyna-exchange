<template>
    <h1 class="account-heading"><slot></slot></h1>
</template>

<script>
    export default {
        name: "AccountHeading"
    }
</script>

<style lang="scss">
    .account-heading {
        color: #161616;
        font-size: 24px;
        font-weight: bold;
        line-height: 29px;

        margin: 0 0 20px 0;
    }
</style>
