<template>
    <div class="account-receipt">
        <div class="account-receipt__header">
            <div class="account-receipt__icon"></div>
            <span class="account-receipt__desk">You are buying</span>
            <span class="account-receipt__current-count">0 TRX</span>
            <span class="account-receipt__price">And will pay 0.00 USD</span>
            <span class="account-receipt__budget-count">At <strong class="account-receipt__budget-current">999.99 USD</strong> per 1 TRX</span>
        </div>
        <div class="account-receipt__content">
            <table class="account-receipt__table" border="0" cellspacing="0" cellpadding="0">
                <tr class="account-receipt__row">
                    <th class="account-receipt__column account-receipt__title account-receipt__column--align-left">Price</th>
                    <th class="account-receipt__column account-receipt__column--align-right">0.00 USD</th>
                </tr>
                <tr class="account-receipt__row">
                    <th class="account-receipt__column account-receipt__title account-receipt__column--align-left">Fee</th>
                    <th class="account-receipt__column account-receipt__column--align-right">0 TRX</th>
                </tr>
            </table>
        </div>
        <ButtonComponent :button-class="['button-component', 'button-component--type-fluid']" class="account-receipt__button">Buy TRX</ButtonComponent>
    </div>
</template>

<script>
    import ButtonComponent from '@/components/ButtonComponent'

    export default {
        name: "AccountReceipt",
        components: {
            ButtonComponent
        },
        data () {
            return {}
        }
    }
</script>

<style lang="scss">
    .account-receipt {
        max-width: 350px;
        width: 100%;

        overflow: hidden;

        flex-shrink: 0;
    }

    .account-receipt__header {
        position: relative;

        background-color: #fff;

        padding: 36px 0 55px 0;

        border-top-left-radius: 5px;
        border-top-right-radius: 5px;

        &:before,
        &:after {
            position: absolute;
            content: "";

            width: 32px;
            height: 32px;
            display: inline-block;

            border-radius: 50%;
            background-color: #F3F3F3;
        }

        &:before {
            bottom: 0;
            left: -16px;
        }

        &:after {
            bottom: 0;
            right: -16px;
        }
    }

    .account-receipt__icon {
        width: 40px;
        height: 40px;

        margin: 0 auto 20px auto;

        border-radius: 50%;
        background-color: #FAAFAF;
    }

    .account-receipt__desk {
        display: block;

        color: #9E9E9E;
        font-size: 12px;
        font-weight: 500;
        letter-spacing: 0.5px;

        margin-bottom: 5px;

        text-align: center;
    }

    .account-receipt__current-count {
        display: block;

        color: #000000;
        font-size: 24px;
        font-weight: bold;
        line-height: 29px;
        letter-spacing: 1px;

        margin-bottom: 5px;

        text-align: center;
    }

    .account-receipt__price {
        display: block;

        color: #9E9E9E;
        font-size: 12px;
        font-weight: 500;
        letter-spacing: .5px;
        line-height: 14px;

        margin-bottom: 20px;

        text-align: center;
    }

    .account-receipt__budget-count {
        display: block;

        color: #9E9E9E;
        font-size: 12px;
        font-weight: 500;
        letter-spacing: .5px;
        line-height: 14px;

        text-align: center;
    }

    .account-receipt__budget-current {
        color: #000;
        text-transform: uppercase;
    }

    .account-receipt__content {
        position: relative;

        background-color: #fff;

        padding: 10px 18px;

        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;

        &:before {
            position: absolute;

            top: -18px;

            content: "";

            width: 311px;
            height: 1px;
            display: block;

            border-bottom: 2px dashed #DFD9D9;
        }
    }

    .account-receipt__table {
        width: 100%;
    }

    .account-receipt__column--align-left {
        text-align: left;
    }

    .account-receipt__column--align-right {
        text-align: right;
    }

    .account-receipt__column {
        height: 40px;

        color: #000;
        font-size: 14px;
        font-weight: bold;
    }

    .account-receipt__title {
        color: #9E9E9E;
        font-weight: 500;
    }

    .account-receipt__row {
        &:not(:last-child) {
            .account-receipt__column {
                border-bottom: 2px dashed #DFD9D9;
            }
        }
    }

    .account-receipt__button {
        margin-top: 15px;
    }
</style>

