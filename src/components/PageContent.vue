<template>
    <main class="page__content">
        <slot></slot>
    </main>
</template>

<script>
    export default {
        name: "PageContent"
    }
</script>

<style lang="scss">
    .page__content {
        padding-bottom: 150px;
    }

    .page__sidebar {
        flex-shrink: 0;
    }

    .page__section {
        &:not(:last-child) {
            margin-bottom: 50px;
        }
    }
</style>
