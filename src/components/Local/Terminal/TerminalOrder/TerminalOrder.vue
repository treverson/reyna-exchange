<template>
    <div :class="['terminal-order']">
        <div :class="['terminal-order__header']">
            <h3 :class="['terminal-order__heading']">Order</h3>
            <div :class="['terminal-order__tabs']">
                <button @click="handlerCurrentTab(0)" :class="{ 'terminal-order__tab': true, 'terminal-order__tab--current-true': currentTabID === 0 }">
                    Limit
                </button>
                <button @click="handlerCurrentTab(1)" :class="{ 'terminal-order__tab': true, 'terminal-order__tab--current-true': currentTabID === 1 }">
                    Marker
                </button>
            </div>
        </div>
        <div :class="['terminal-order__container']">
            <div :class="['terminal-order__information']">
                <button @click="handlerTransactionType('buy')" :class="{ 'terminal-order__action': true, 'terminal-order__action--current-true': transactionType === 'buy' }">
                    Buy BCH
                </button>
                <button @click="handlerTransactionType('sell')" :class="{ 'terminal-order__action': true, 'terminal-order__action--current-true': transactionType === 'sell' }">
                    Sell BCH
                </button>
                <div :class="['terminal-order__budget']">
                    0.00034 TRX
                </div>
            </div>
            <div :class="['terminal-order__field']">
                <div :class="['terminal-order__interface']">
                    <span :class="['terminal-order__title']">
                        Price
                    </span>
                    <input type="number" :class="['terminal-order__input']" placeholder="0.00000">
                </div>
                <span :class="['terminal-order__currency']">
                    TRX
                </span>
                <div :class="['terminal-order__switcher']">
                    <button :class="['terminal-order__switch', 'terminal-order__switch--type-more']">
                        <span :class="['icon-small-arrow']"></span>
                    </button>
                    <button :class="['terminal-order__switch', 'terminal-order__switch--type-less']">
                        <span :class="['icon-small-arrow']"></span>
                    </button>
                </div>
            </div>
            <div :class="['terminal-order__field']">
                <div :class="['terminal-order__interface']">
                    <span :class="['terminal-order__title']">
                        Amount
                    </span>
                    <input type="number" :class="['terminal-order__input']" placeholder="0.00000">
                </div>
                <span :class="['terminal-order__currency']">
                    BCH
                </span>
                <div :class="['terminal-order__switcher']">
                    <button :class="['terminal-order__switch', 'terminal-order__switch--type-more']">
                        <span :class="['icon-small-arrow']"></span>
                    </button>
                    <button :class="['terminal-order__switch', 'terminal-order__switch--type-less']">
                        <span :class="['icon-small-arrow']"></span>
                    </button>
                </div>
            </div>
            <div :class="['terminal-order__rate']">
                <button @click="handlerRatePercent(0)" :class="{ 'terminal-order__percent': true, 'terminal-order__percent--current-true': ratePercentID === 0 }">
                    25%
                </button>
                <button @click="handlerRatePercent(1)" :class="{ 'terminal-order__percent': true, 'terminal-order__percent--current-true': ratePercentID === 1 }">
                    50%
                </button>
                <button @click="handlerRatePercent(2)" :class="{ 'terminal-order__percent': true, 'terminal-order__percent--current-true': ratePercentID === 2 }">
                    75%
                </button>
                <button @click="handlerRatePercent(3)" :class="{ 'terminal-order__percent': true, 'terminal-order__percent--current-true': ratePercentID === 3 }">
                    100%
                </button>
            </div>
            <div :class="['terminal-order__sum']">
                <span :class="['terminal-order__total']">
                    Total
                </span>
                <span :class="['terminal-order__count']">
                    0.00000 TRX
                </span>
            </div>
            <user-button to="/terminal" theme="green" :class="['terminal-order__button']">
                Buy
            </user-button>
        </div>
    </div>
</template>

<script>
    import UserButton from '@/components/Global/UserButton/UserButton'

    export default {
        name: "TerminalOrder",
        components: {
            UserButton
        },
        data () {
            return {
                currentTabID: 0,
                transactionType: 'buy',
                ratePercentID: 0
            }
        },
        methods: {
            handlerCurrentTab: function (id) {
                this.currentTabID = id
            },
            handlerTransactionType: function (type) {
                this.transactionType = type
            },
            handlerRatePercent: function (id) {
                this.ratePercentID = id
            }
        }
    }
</script>

<style lang="scss">
    @import "TerminalOrder";
</style>
