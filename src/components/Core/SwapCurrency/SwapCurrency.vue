<template>
    <div :class="['swap-currency']">
        <block-section currency-name="TRC10" />
        <div :class="['swap-currency__separator']">
            <span :class="['icon-heavy-arrow-down']"></span>
            <span :class="['icon-heavy-arrow-down']"></span>
        </div>
        <block-section currency-name="TRC20" />
    </div>
</template>

<script>
    import BlockSection from "./components/BlockSection/BlockSection.vue";

    export default {
        name: "SwapCurrency",
        components: {BlockSection}
    }
</script>

<style lang="scss">
    @import "SwapCurrency";
</style>
