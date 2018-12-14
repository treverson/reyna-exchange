<template>
    <div class="getting-start">
        <h3 class="getting-start__header">Getting start</h3>
        <div class="getting-start__content">

            <!-- item -->
            <div class="getting-start__item">
                <div class="getting-start__icon getting-start__icon--type-arrow"></div>
                <h4 class="getting-start__heading">Make your first deposit</h4>
                <p class="getting-start__desk">Make your first deposit to start trading and fully use CoinFalcon</p>
                <Button to="/account/dashboard" theme="green" class="getting-start__button">Buy</Button>
            </div><!-- end -->

            <!-- item -->
            <div class="getting-start__item">
                <div class="getting-start__icon getting-start__icon--type-advanced"></div>
                <h4 class="getting-start__heading">Make your first trade</h4>
                <p class="getting-start__desk">Go to our Buy & Sell and make your first trade. Start trading with us!</p>
                <Button to="/account/dashboard" theme="red" class="getting-start__button">GO TO BUY & SELL</Button>
            </div><!-- end -->

        </div>
    </div>
</template>

<script>
    import Button from '@/components/Account/UI/Button'

    export default {
        name: "GettingStart",
        components: {
            Button
        }
    }
</script>

<style lang="scss">
    .getting-start {
        max-width: 256px;
    }

    .getting-start__header {
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

    .getting-start__item {
        width: 100%;

        padding: 29.5px 22px 23.5px 20px;
        box-sizing: border-box;

        background-color: #fff;

        &:not(:last-child) {
            border-bottom: 1px solid rgba(246, 84, 84, 0.17);
        }
    }

    .getting-start__icon {
        width: 48.5px;
        height: 48.5px;

        margin-bottom: 18px;

        border-radius: 50%;
        background-color: #FFD9D9;

        background-size: 30%;
        background-repeat: no-repeat;
        background-position: center;
    }

    .getting-start__icon--type-arrow {
        background-position: calc(50% + 1px) center;
        background-image: url('../../assets/img/icons/getting-start-arrow.svg');
    }

    .getting-start__icon--type-advanced {
        background-size: 40%;
        background-image: url('../../assets/img/icons/getting-start-advanced.svg');
    }

    .getting-start__heading {
        margin: 0 0 8px 0;
        color: #000000;
        font-size: 17px;
        line-height: 20px;
        font-weight: normal;
    }

    .getting-start__desk {
        margin: 0 0 13px 0;
        color: #161616;
        font-size: 12px;
        line-height: 16px;
    }

    .getting-start__button {
        max-width: 153px;
        width: 100%;

        text-align: center;
        box-sizing: border-box;
    }
</style>
