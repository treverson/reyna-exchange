<template>
    <div class="header-accordion-item">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Item",
        props: {
            sectionTitle: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="scss">
    @import "HeaderAccordionItem";
</style>
