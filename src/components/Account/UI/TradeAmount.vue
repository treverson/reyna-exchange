<template>
    <div class="trade-amount">
        <h3 class="trade-amount__header">Amount</h3>
        <div class="trade-amount__content">
            <span class="trade-amount__convert">1 TRX = 999 USD</span>

            <div class="trade-amount__item">

                <div class="trade-amount__head">
                    <span class="trade-amount__title">Buying</span>
                    <span class="trade-amount__currency">TRX</span>
                </div>
                <input type="number" placeholder="0.00000000" class="trade-amount__field">
                <div class="trade-amount__footer">
                    <span class="trade-amount__balance-title">Balance</span>
                    <span class="trade-amount__balance-content">99.00000000 TRX</span>
                </div>

            </div>

            <div class="trade-amount__item">

                <div class="trade-amount__head">
                    <span class="trade-amount__title">Paying with</span>
                    <span class="trade-amount__currency">USD</span>
                </div>
                <input type="number" placeholder="0.00000000" class="trade-amount__field">
                <div class="trade-amount__footer">
                    <span class="trade-amount__balance-title">Balance</span>
                    <span class="trade-amount__balance-content">1000.00 USD</span>
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
    .trade-amount {}

    .trade-amount__header {
        width: 100%;
        height: 50px;

        margin: 0;
        color: #000000;
        font-size: 14px;
        font-weight: bold;
        line-height: 16px;
        text-transform: uppercase;

        padding: 0 20px;
        box-sizing: border-box;

        letter-spacing: .3px;

        display: flex;
        align-items: center;

        background-color: #fff;
        border-bottom: 1px solid rgba(246, 84, 84, 0.17);
    }

    .trade-amount__content {
        padding-top: 6.5px;
        background-color: #fff;
    }

    .trade-amount__convert {
        display: block;

        margin-bottom: 18px;
        padding: 8.5px 18px;
        box-sizing: border-box;

        width: 100%;
        color: #161616;
        font-size: 10px;
        font-weight: 500;
        line-height: 12px;

        background-color: #F5F5F5;
    }

    .trade-amount__item {
        padding: 0 19.5px 20.5px 19.5px;
        box-sizing: border-box;

        &:not(:last-child) {
            border-bottom: 1px solid rgba(246, 84, 84, 0.17);
            margin-bottom: 24.5px;
        }
    }

    .trade-amount__head {
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
    }

    .trade-amount__field {
        width: 100%;
        height: 39px;
        border: 1px solid #D1D1D1;
        border-radius: 2px;

        padding: 0 14px;
        box-sizing: border-box;

        outline: none;
        text-align: right;

        color: #000000;
        font-size: 12px;
        font-weight: 500;

        -moz-appearance: textfield;
        &::-webkit-inner-spin-button {
            display: none;
        }

        &:focus {
            &::placeholder {
                opacity: 0;
            }
        }

        &::placeholder {
            transition: .15s ease;
            color: rgba(0, 0, 0, 0.51);
        }
    }

    .trade-amount__footer {
        margin-top: 6px;
        display: flex;
        justify-content: space-between;
    }

    .trade-amount__title {
        color: #000000;
        font-size: 12px;
        line-height: 16px;
    }

    .trade-amount__currency {
        color: #000000;
        font-size: 16px;
        font-weight: 500;
        line-height: 19px;
        text-transform: uppercase;
    }

    .trade-amount__balance-title {
        color: #000;
        font-size: 10px;
        font-weight: 500;
        line-height: 12px;
    }

    .trade-amount__balance-content {
        color: #000;
        font-size: 10px;
        font-weight: 500;
        line-height: 12px;
    }
</style>
