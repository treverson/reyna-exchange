<template>
    <div :class="['getting-start']">
        <h3 :class="['getting-start__header']">
            Getting Start
        </h3>
        <div :class="['getting-start__content']">
            <!-- item -->
            <div :class="['getting-start__item']">
                <div :class="['getting-start__icon']">
                    <span :class="['icon-arrow-up']"></span>
                </div>
                <h4 :class="['getting-start__heading']">
                    Make your first deposit
                </h4>
                <p :class="['getting-start__desk']">
                    Make your first deposit to start trading and fully use CoinFalcon
                </p>
                <user-button to="/account/dashboard" theme="green" :class="['getting-start__button']">
                    Buy
                </user-button>
            </div><!-- end -->
            <!-- item -->
            <div :class="['getting-start__item']">
                <div :class="['getting-start__icon']">
                    <span :class="['icon-advanced-view']"></span>
                </div>
                <h4 :class="['getting-start__heading']">
                    Make your first trade
                </h4>
                <p :class="['getting-start__desk']">
                    Go to our Buy & Sell and make your first trade. Start trading with us!
                </p>
                <user-button to="/account/dashboard" theme="red" :class="['getting-start__button']">
                    Go to Buy & Sell
                </user-button>
            </div><!-- end -->
        </div>
    </div>
</template>

<script>
    import UserButton from '@/components/Core/UserButton/UserButton.vue'

    export default {
        name: "GettingStart",
        components: {
            UserButton
        }
    }
</script>

<style lang="scss">
    @import "GettingStart";
</style>
