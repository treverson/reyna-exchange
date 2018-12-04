<template>
    <div class="account-trade">
        <div class="account-trade__section">
            <div class="account-trade__currency">
                <div class="account-trade__icon"></div>
                <div class="account-trade__content">
                    <span v-if="type === 'buy'" class="account-trade__heading">Buying</span>
                    <span v-if="type === 'sell'" class="account-trade__heading">Selling</span>
                    <div class="account-trade__paying">
                        <span class="account-trade__title">TRX</span>
                    </div>
                    <span class="account-trade__balance">Balance: 99.00000000 TRX</span>
                </div>
            </div>
            <div class="account-trade__counter">
                <input type="number" placeholder="0.00000000" class="account-trade__field">
                <span v-if="type === 'sell'" class="account-trade__max">Max</span>
            </div>
        </div>
        <div class="account-trade__rate">
            <div class="account-trade__rate-content">1 TRX = 999.99 USD</div>
        </div>
        <div class="account-trade__section">
            <div class="account-trade__currency">
                <div class="account-trade__icon"></div>
                <div class="account-trade__content">
                    <span v-if="type === 'buy'" class="account-trade__heading">Paying with</span>
                    <span v-if="type === 'sell'" class="account-trade__heading">Receive</span>
                    <div class="account-trade__paying">
                        <span class="account-trade__title">USD</span>
                        <SmallCurrencyChanger class="account-trade__currency-changer" />
                    </div>
                    <span class="account-trade__balance">Balance: 1000.00 USD</span>
                </div>
            </div>
            <div class="account-trade__counter">
                <input type="number" placeholder="0.00000000" class="account-trade__field">
                <span v-if="type === 'buy'" class="account-trade__max">Max</span>
            </div>
        </div>
    </div>
</template>

<script>
    import SmallCurrencyChanger from '@/components/Account/SmallCurrencyChanger'

    export default {
        name: "AccountTrade",
        components: {
            SmallCurrencyChanger
        },
        props: {
            type: {
                type: String,
                required: true
            }
        },
        data () {
            return {}
        }
    }
</script>

<style lang="scss">
    .account-trade {}

    .account-trade__section {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;

        margin: 14px 0;
    }

    .account-trade__currency {
        display: flex;
        align-items: flex-start;
    }

    .account-trade__icon {
        width: 40px;
        height: 40px;

        margin-right: 13px;

        border-radius: 50%;
        background-color: #FAAFAF;
    }

    .account-trade__heading {
        display: block;

        color: #000000;
        font-size: 16px;
        font-weight: bold;
        line-height: 19px;

        margin-bottom: 3px;
    }

    .account-trade__title {
        display: block;

        color: #C9C9C9;
        font-size: 12px;
        font-weight: 500;
        line-height: 14px;
    }

    .account-trade__balance {
        display: block;

        color: #C9C9C9;
        font-size: 10px;
        font-weight: 500;
        line-height: 12px;
    }

    .account-trade__field {
        width: 250px;
        height: 43px;

        padding: 0 14px;
        box-sizing: border-box;

        outline: none;
        text-align: right;

        border-radius: 3px;
        background-color: #fff;
        border: 1px solid #EDEDED;

        color: #000;
        font-size: 12px;
        font-weight: 500;

        &:focus {
            &::placeholder {
                opacity: 0;
            }
        }

        &::placeholder {
            transition: .15s ease;

            color: #909090;
            font-size: 12px;
            font-weight: 500;
        }

        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    }

    .account-trade__paying {
        display: flex;
        align-items: center;

        margin-bottom: 16px;
    }

    .account-trade__currency-changer {
        margin-left: 17px;
    }

    .account-trade__max {
        display: block;
        text-align: right;

        color: #E95A5A;
        font-size: 10px;
        font-weight: bold;
        line-height: 12px;
        text-transform: uppercase;

        margin-top: 7px;
    }

    .account-trade__rate {
        position: relative;

        margin: calc(15px + 13px) 0;

        width: 100%;
        height: 1px;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: rgba(0, 0, 0, 0.05);
    }

    .account-trade__rate-content {
        padding: 8px 15px;

        border-radius: 15px;
        background-color: #fff;

        color: #C9C9C9;
        font-size: 8px;
        font-weight: 500;

        display: inline-block;

        border: 1px solid #F2F2F2;
    }
</style>
