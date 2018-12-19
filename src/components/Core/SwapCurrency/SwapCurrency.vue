<template>
    <div :class="['swap-currency']">
        <block-section currency-name="TRC10" :value="firstValue" :disabled="disabled" />
        <div :class="['swap-currency__separator']">
            <span :class="['icon-heavy-arrow-down']"></span>
            <span :class="['icon-heavy-arrow-down']"></span>
        </div>
        <block-section currency-name="TRC20" :value="secondValue" :disabled="disabled" />
    </div>
</template>

<script>
    import BlockSection from "./components/BlockSection/BlockSection.vue";

    export default {
        name: "SwapCurrency",
        props: {
            firstValue: {
                type: Number,
                required: true
            },
            firstName: {
                type: String,
                required: true
            },
            secondValue: {
                type: Number,
                required: true
            },
            secondName: {
                type: String,
                required: true
            },
            disabled: {
                type: Boolean
            }
        },
        components: { BlockSection }
    }
</script>

<style lang="scss">
    @import "SwapCurrency";
</style>
