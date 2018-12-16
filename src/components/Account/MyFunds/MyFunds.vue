<template>
    <div :class="['account-funds']">
        <h3 :class="['account-funds__header']">
            My funds
        </h3>
        <div :class="['account-funds__info']">
            <span :class="['account-funds__desk']">
                Total
            </span>
            <div :class="['account-funds__price']">
                <span :class="['account-funds__currency']">
                    TRX
                </span>
                <span :class="['account-funds__price-count']">
                    455.00
                </span>
            </div>
            <user-button to="/" theme="red" :class="['account-funds__button']">
                Deposit
            </user-button>
        </div>
        <div :class="['account-funds__list']">

            <!-- item -->
            <div v-for="item in listData" v-bind:key="item.id" :class="['account-funds__item']">
                <span :class="['account-funds__name']">
                    {{ item.title }}
                </span>
                <span :class="['account-funds__count']">
                    {{ item.count }}
                </span>
            </div>
            <!-- item end -->

        </div>
    </div>
</template>

<script>
    import UserButton from '@/components/Core/UserButton/UserButton.vue'

    export default {
        name: "MyFunds",
        components: {
            UserButton
        },
        data () {
            return {
                listData: [
                    {
                        id: 0,
                        title: 'USD',
                        count: '0.00'
                    },
                    {
                        id: 1,
                        title: 'TRX',
                        count: '0.00'
                    },
                    {
                        id: 2,
                        title: 'IGC',
                        count: '0.00'
                    },
                    {
                        id: 3,
                        title: 'TWX',
                        count: '0.00'
                    },
                    {
                        id: 4,
                        title: 'DICE',
                        count: '0.00'
                    },
                    {
                        id: 5,
                        title: 'TON',
                        count: '0.00'
                    },
                    {
                        id: 6,
                        title: 'TRZ',
                        count: '0.00'
                    },
                    {
                        id: 7,
                        title: 'USD',
                        count: '0.00'
                    },
                    {
                        id: 8,
                        title: 'TRX',
                        count: '0.00'
                    },
                    {
                        id: 9,
                        title: 'WIN',
                        count: '0.00'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss">
    @import "MyFunds";
</style>
