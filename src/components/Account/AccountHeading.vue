<template>
    <h1 v-if="size === '1'" class="account-heading"><slot></slot></h1>
    <h2 v-else-if="size === '2'" class="account-heading"><slot></slot></h2>
    <h3 v-else-if="size === '3'" class="account-heading"><slot></slot></h3>
    <h4 v-else-if="size === '4'" class="account-heading"><slot></slot></h4>
    <h5 v-else-if="size === '5'" class="account-heading"><slot></slot></h5>
    <h6 v-else-if="size === '6'" class="account-heading"><slot></slot></h6>
</template>

<script>
    export default {
        name: "AccountHeading",
        props: {
            size: {
                type: String,
                default: '1'
            }
        }
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
