<template>
    <div class="AccountFunds">
        <account-primary-section class="AccountFunds__section">

            <account-primary-header class="AccountFunds__header">
                My funds
            </account-primary-header>

            <!-- information -->
            <div class="AccountFunds__information">

                <span class="AccountFunds__desk">
                    Total
                </span>

                <div class="AccountFunds__price">

                    <span class="AccountFunds__currency">
                        TRX
                    </span>

                    <span class="AccountFunds__price-count">
                        455.00
                    </span>

                </div>

                <user-button to="/" theme="red" class="AccountFunds__button">
                    Deposit
                </user-button>

            </div>
            <!-- end information -->

            <div class="AccountFunds__content" v-bar>

                <div class="AccountFunds__wrapper">

                    <!-- item -->
                    <div v-for="item in data" v-bind:key="item.id" class="AccountFunds__item">

                    <span class="AccountFunds__item-heading">
                        {{ item.currency }}
                    </span>

                        <span class="AccountFunds__item-count">
                        {{ item.count }}
                    </span>

                    </div>
                    <!-- item end -->

                </div>

            </div>

        </account-primary-section>
    </div>
</template>

<script>
    import AccountPrimarySection from "@/components/Local/Account/AccountPrimarySection/AccountPrimarySection";
    import AccountPrimaryHeader from "@/components/Local/Account/AccountPrimarySection/component/AccountPrimaryHeader/AccountPrimaryHeader";
    import UserButton from "@/components/Global/UserButton/UserButton";
    export default {
        name: "AccountFunds",
        components: {UserButton, AccountPrimaryHeader, AccountPrimarySection},
        data () {
            return {
                data: [
                    {
                        id: 0,
                        currency: 'TRX',
                        count: '0.00'
                    },
                    {
                        id: 1,
                        currency: 'TRX',
                        count: '0.00'
                    },
                    {
                        id: 2,
                        currency: 'TRX',
                        count: '0.00'
                    },
                    {
                        id: 3,
                        currency: 'TRX',
                        count: '0.00'
                    },
                    {
                        id: 4,
                        currency: 'TRX',
                        count: '0.00'
                    },
                    {
                        id: 5,
                        currency: 'TRX',
                        count: '0.00'
                    },
                    {
                        id: 6,
                        currency: 'TRX',
                        count: '0.00'
                    },
                    {
                        id: 7,
                        currency: 'TRX',
                        count: '0.00'
                    },
                    {
                        id: 8,
                        currency: 'TRX',
                        count: '0.00'
                    },
                    {
                        id: 9,
                        currency: 'TRX',
                        count: '0.00'
                    },
                    {
                        id: 10,
                        currency: 'TRX',
                        count: '0.00'
                    },
                    {
                        id: 11,
                        currency: 'TRX',
                        count: '0.00'
                    },
                    {
                        id: 12,
                        currency: 'TRX',
                        count: '0.00'
                    },
                    {
                        id: 13,
                        currency: 'TRX',
                        count: '0.00'
                    },
                    {
                        id: 14,
                        currency: 'TRX',
                        count: '0.00'
                    },
                    {
                        id: 15,
                        currency: 'TRX',
                        count: '0.00'
                    },
                    {
                        id: 16,
                        currency: 'TRX',
                        count: '0.00'
                    },
                    {
                        id: 17,
                        currency: 'TRX',
                        count: '0.00'
                    },
                    {
                        id: 18,
                        currency: 'TRX',
                        count: '0.00'
                    },
                    {
                        id: 19,
                        currency: 'TRX',
                        count: '0.00'
                    },
                    {
                        id: 20,
                        currency: 'TRX',
                        count: '0.00'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss">
    @import "AccountFunds";
</style>
