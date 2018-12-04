<template>
    <div class="account-getting-started">
        <AccountHeading size="3">Getting started</AccountHeading>

        <section class="account-getting-started__container">
            <div class="account-getting-started__section">
                <div class="account-getting-started__icon account-getting-started__icon--type-arrow"></div>
                <div class="account-getting-started__content">
                    <h4 class="account-getting-started__heading">Make your first deposit</h4>
                    <p class="account-getting-started__desk">Make your first deposit to start trading and fully use CoinFalcon</p>
                    <ButtonComponent :button-class="['button-component']" class="account-getting-started__button">Buy</ButtonComponent>
                </div>
            </div>
            <div class="account-getting-started__section">
                <div class="account-getting-started__icon account-getting-started__icon--type-trade"></div>
                <div class="account-getting-started__content">
                    <h4 class="account-getting-started__heading">Make your first trade</h4>
                    <p class="account-getting-started__desk">Go to our Buy & Sell and make your first trade. Start trading with us!</p>
                    <router-link to="/account/buy-and-sell">
                        <ButtonComponent :button-class="['button-component']" class="account-getting-started__button">Go to buy & sell</ButtonComponent>
                    </router-link>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import ButtonComponent from '@/components/ButtonComponent'
    import AccountHeading from '@/components/Account/AccountHeading'

    export default {
        name: "AccountGettingStarted",
        components: {
            ButtonComponent,
            AccountHeading
        }
    }
</script>

<style lang="scss">
    .account-getting-started {
        max-width: 765px;
    }

    .account-getting-started__container {
        width: 100%;

        padding: 0 38px;
        box-sizing: border-box;

        display: flex;
        justify-content: space-between;

        border-radius: 5px;
        background-color: #fff;
    }

    .account-getting-started__section {
        display: flex;

        padding: 35px 0 48px 0;

        width: 100%;

        &:first-child {
            border-right: 1px solid rgba(0, 0, 0, 0.05);
            margin-right: 46px;
        }
    }

    .account-getting-started__icon {
        width: 70px;
        height: 70px;

        margin-right: 20px;

        border-radius: 50%;
        background-color: #FFD9D9;

        &:before {
            content: "";

            width: 100%;
            height: 100%;
            display: block;

            background-repeat: no-repeat;
            background-position: center;
        }
    }

    .account-getting-started__content {
        margin-top: 7px;
    }

    .account-getting-started__icon--type-arrow {
        &:before {
            background-image: url('../../assets/img/getting-start-arrow.svg');
        }
    }

    .account-getting-started__icon--type-trade {
        &:before {
            background-image: url('../../assets/img/getting-start-trade.svg');
        }
    }

    .account-getting-started__heading {
        margin: 0 0 9px 0;

        color: #000000;
        font-size: 18px;
        font-weight: bold;
        line-height: 21px;
    }

    .account-getting-started__desk {
        margin: 0 0 26px 0;
        max-width: 223px;

        color: rgba(22, 22, 22, 0.5);
        font-size: 12px;
        font-weight: 500;
        line-height: 17px;
    }

    .account-getting-started__button {
        text-transform: uppercase;
    }
</style>
