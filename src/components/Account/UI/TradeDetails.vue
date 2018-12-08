<template>
    <div class="trade-details">
        <h3 class="trade-details__header">Details</h3>
        <div class="trade-details__content__head">
            <span class="trade-details__buying-title">You are buying</span>
            <span class="trade-details__price">2 TRX</span>
            <span class="trade-details__buying-currency">At <strong>999.99 USD</strong> per 1 TRX</span>
        </div>
        <div class="trade-details__content">
            <div class="trade-details__section">
                <span class="trade-details__section-title">Price</span>
                <span class="trade-details__section-content">1998.00 USD</span>
            </div>
            <div class="trade-details__section">
                <span class="trade-details__section-title">Fee</span>
                <span class="trade-details__section-content">0 TRX</span>
            </div>
            <div class="trade-details__section">
                <span class="trade-details__section-title">Summary payment</span>
                <span class="trade-details__section-content trade-details__result-price">1998.00 USD</span>
            </div>
            <Button theme="green" class="trade-details__button">Buy TRX</Button>
        </div>
    </div>
</template>

<script>
    import Button from '@/components/Account/Button'

    export default {
        name: "TradeDetails",
        components: {
            Button
        }
    }
</script>

<style lang="scss">
    .trade-details {}

    .trade-details__header {
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

    .trade-details__content {
        background-color: #fff;
    }

    .trade-details__buying-title {
        display: block;

        color: #161616;
        font-size: 12px;
        font-weight: 500;
        line-height: 14px;

        margin-bottom: 5px;
    }

    .trade-details__price {
        display: block;

        color: #161616;
        font-size: 26px;
        font-weight: bold;
        line-height: 31px;
    }

    .trade-details__buying-currency {
        color: #161616;
        font-size: 12px;
        line-height: 14px;
    }

    .trade-details__content__head {
        padding: 16px 20px 15px 20px;
        box-sizing: border-box;
        background-color: #fff;

        border-bottom: 1px solid rgba(246, 84, 84, 0.17);
    }

    .trade-details__content {
        padding: 10px 20px 20px 20px;
        background-color: #fff;
    }

    .trade-details__section {
        &:not(:last-child) {
            margin-bottom: 16px;
        }
    }

    .trade-details__section-title {
        display: block;

        color: #000;
        font-size: 12px;
        line-height: 14px;
        letter-spacing: .4px;
    }

    .trade-details__section-content {
        display: block;

        color: rgba(0, 0, 0, 0.7);
        font-size: 12px;
        font-weight: bold;
        line-height: 14px;

        margin-top: 1px;
    }

    .trade-details__result-price {
        font-weight: bold;
        font-size: 15px;
        line-height: 18px;

        margin-top: 3px;
    }

    .trade-details__button {
        max-width: 165px;
        width: 100%;
        box-sizing: border-box;
        text-align: center;
    }
</style>
