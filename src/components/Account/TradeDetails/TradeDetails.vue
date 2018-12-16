<template>
    <div :class="['trade-details']">
        <h3 :class="['trade-details__header']">
            Details
        </h3>
        <div :class="['trade-details__content__head']">
            <span :class="['trade-details__buying-title']">
                You are buying
            </span>
            <span :class="['trade-details__price']">
                2 TRX
            </span>
            <span :class="['trade-details__buying-currency']">
                At <strong>999.99 USD</strong> per 1 TRX</span>
        </div>
        <div :class="['trade-details__content']">
            <div :class="['trade-details__section']">
                <span :class="['trade-details__section-title']">
                    Price
                </span>
                <span :class="['trade-details__section-content']">
                    1998.00 USD
                </span>
            </div>
            <div :class="['trade-details__section']">
                <span :class="['trade-details__section-title']">
                    Fee
                </span>
                <span :class="['trade-details__section-content']">
                    0 TRX
                </span>
            </div>
            <div :class="['trade-details__section']">
                <span :class="['trade-details__section-title']">
                    Summary payment
                </span>
                <span :class="['trade-details__section-content', 'trade-details__result-price']">
                    1998.00 USD
                </span>
            </div>
            <user-button to="/account" theme="green" :class="['trade-details__button']">
                Buy TRX
            </user-button>
        </div>
    </div>
</template>

<script>
    import UserButton from '@/components/Core/UserButton/UserButton.vue'

    export default {
        name: "TradeDetails",
        components: {
            UserButton
        }
    }
</script>

<style lang="scss">
    @import "TradeDetails";
</style>
