<template>
    <div class="container"><slot></slot></div>
</template>

<script>
    export default {
        name: "Container"
    }
</script>

<style lang="scss">
    .container {
        max-width: 1110px;
        margin: 0 auto;
        padding: 0 15px;
    }

    @media (max-width: 1200px) {
        .container {
            max-width: 960px;
        }
    }

    @media (max-width: 992px) {
        .container {
            max-width: 720px;
        }
    }

    @media (max-width: 768px) {
        .container {
            max-width: 540px;
        }
    }

    @media (max-width: 576px) {
        .container {
            max-width: 100%;
        }
    }
</style>
