<template>
    <div class="account-container">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "AccountContainer"
    }
</script>

<style lang="scss">
    .account-container {
        max-width: 1258px;
        margin: 0 auto;
        padding: 0 15px;
    }

    @media (max-width: 1200px) {
        .account-container {
            max-width: 960px;
        }
    }

    @media (max-width: 992px) {
        .account-container {
            max-width: 720px;
        }
    }

    @media (max-width: 768px) {
        .account-container {
            max-width: 540px;
        }
    }

    @media (max-width: 576px) {
        .account-container {
            max-width: 100%;
        }
    }
</style>
