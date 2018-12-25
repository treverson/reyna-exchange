<template>
    <div :class="['trade-amount']">
        <h3 :class="['trade-amount__header']">
            Amount
        </h3>
        <div :class="['trade-amount__content']">
            <span :class="['trade-amount__convert']">
                1 TRX = 999 USD
            </span>
            <div :class="['trade-amount__item']">
                <div :class="['trade-amount__head']">
                    <span :class="['trade-amount__title']">
                        Buying
                    </span>
                    <span :class="['trade-amount__currency']">
                        TRX
                    </span>
                </div>
                <input type="number" placeholder="0.00000000" :class="['trade-amount__field']">
                <div :class="['trade-amount__footer']">
                    <span :class="['trade-amount__balance-title']">
                        Balance
                    </span>
                    <span :class="['trade-amount__balance-content']">
                        99.00000000 TRX
                    </span>
                </div>
            </div>
            <div :class="['trade-amount__item']">
                <div :class="['trade-amount__head']">
                    <span :class="['trade-amount__title']">
                        Paying with
                    </span>
                    <span :class="['trade-amount__currency']">
                        USD
                    </span>
                </div>
                <input type="number" placeholder="0.00000000" :class="['trade-amount__field']">
                <div :class="['trade-amount__footer']">
                    <span :class="['trade-amount__balance-title']">
                        Balance
                    </span>
                    <span :class="['trade-amount__balance-content']">
                        1000.00 USD
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TradeAmount"
    }
</script>

<style lang="scss">
    @import "TradeAmount";
</style>
