<template>
    <div class="account-my-funds">
        <AccountHeading size="3">My Funds</AccountHeading>

        <section class="account-my-funds__container">
            <div class="account-my-funds__header">
                <span class="account-my-funds__title">Estimated portfolio value</span>
                <span class="account-my-funds__money">9.80 <span class="account-my-funds__sign">$</span></span>
                <span class="account-my-funds__trx">99.00000000 TRX</span>
            </div>
            <div class="account-my-funds__content">
                <div class="account-my-funds__item">
                    <div class="account-my-funds__wallet">
                        <div class="account-my-funds__icon"></div>
                        <span class="account-my-funds__heading">USD</span>
                    </div>
                    <ButtonComponent :button-class="['button-component', 'button-component--theme-gray']" class="account-my-funds__button">Deposit</ButtonComponent>
                </div>
                <div class="account-my-funds__item">
                    <div class="account-my-funds__wallet">
                        <div class="account-my-funds__icon"></div>
                        <span class="account-my-funds__heading">USD</span>
                    </div>
                    <ButtonComponent :button-class="['button-component', 'button-component--theme-gray']" class="account-my-funds__button">Deposit</ButtonComponent>
                </div>
                <div class="account-my-funds__item">
                    <div class="account-my-funds__wallet">
                        <div class="account-my-funds__icon"></div>
                        <span class="account-my-funds__heading">USD</span>
                    </div>
                    <ButtonComponent :button-class="['button-component', 'button-component--theme-gray']" class="account-my-funds__button">Deposit</ButtonComponent>
                </div>
                <div class="account-my-funds__item">
                    <div class="account-my-funds__wallet">
                        <div class="account-my-funds__icon"></div>
                        <span class="account-my-funds__heading">USD</span>
                    </div>
                    <ButtonComponent :button-class="['button-component', 'button-component--theme-gray']" class="account-my-funds__button">Deposit</ButtonComponent>
                </div>
                <div class="account-my-funds__item">
                    <div class="account-my-funds__wallet">
                        <div class="account-my-funds__icon"></div>
                        <span class="account-my-funds__heading">USD</span>
                    </div>
                    <ButtonComponent :button-class="['button-component', 'button-component--theme-gray']" class="account-my-funds__button">Deposit</ButtonComponent>
                </div>
                <div class="account-my-funds__item">
                    <div class="account-my-funds__wallet">
                        <div class="account-my-funds__icon"></div>
                        <span class="account-my-funds__heading">USD</span>
                    </div>
                    <ButtonComponent :button-class="['button-component', 'button-component--theme-gray']" class="account-my-funds__button">Deposit</ButtonComponent>
                </div>
                <div class="account-my-funds__item">
                    <div class="account-my-funds__wallet">
                        <div class="account-my-funds__icon"></div>
                        <span class="account-my-funds__heading">USD</span>
                    </div>
                    <ButtonComponent :button-class="['button-component', 'button-component--theme-gray']" class="account-my-funds__button">Deposit</ButtonComponent>
                </div>
            </div>
            <button class="account-my-funds__load-more">And 10 more currencies</button>
        </section>
    </div>
</template>

<script>
    import AccountHeading from '@/components/Account/AccountHeading'
    import ButtonComponent from '@/components/ButtonComponent'

    export default {
        name: "AccountMyFunds",
        components: {
            AccountHeading,
            ButtonComponent
        }
    }
</script>

<style lang="scss">
    .account-my-funds {
        max-width: 285px;
        width: 100%;
    }

    .account-my-funds__container {
        width: 100%;
        overflow: hidden;

        border-radius: 5px;
        background-color: #fff;
    }

    .account-my-funds__header {
        width: 100%;

        padding: 32px 24px 35px 24px;
        box-sizing: border-box;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .account-my-funds__title {
        display: block;

        color: rgba(22, 22, 22, 0.5);
        font-size: 12px;
        font-weight: 300;
        line-height: 14px;

        margin-bottom: 5px;
    }

    .account-my-funds__money {
        display: inline-block;
        position: relative;

        color: #161616;
        font-size: 26px;
        font-weight: bold;
        line-height: 31px;

        margin-bottom: 5px;
    }

    .account-my-funds__sign {
        position: absolute;

        top: -2px;
        right: -12px;

        font-size: 14px;
    }

    .account-my-funds__trx {
        color: rgba(22, 22, 22, 0.5);
        font-size: 12px;
        font-weight: 300;
        line-height: 14px;
    }

    .account-my-funds__content {
        background-color: #fff;
        border-top: 1px solid rgba(0, 0, 0, 0.05);
    }

    .account-my-funds__item {
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 10px 22px 10px 24px;

        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    }

    .account-my-funds__wallet {
        display: flex;
        align-items: center;
    }

    .account-my-funds__icon {
        width: 24px;
        height: 24px;

        margin-right: 10px;

        border-radius: 50%;
        background-color: #FAAFAF;
    }

    .account-my-funds__heading {
        color: #000000;
        font-size: 14px;
        font-weight: 500;
        line-height: 16px;
    }

    .account-my-funds__button {
        height: 22px;
        padding: 0 13px;

        font-size: 11px;
        font-weight: 500;
    }

    .account-my-funds__load-more {
        width: 100%;
        height: 50px;

        color: #F65454;
        font-size: 11px;
        font-weight: 500;

        border: none;
        outline: none;
        cursor: pointer;

        background-color: #EAEAEA;
        transition: .15s ease;

        &:hover,
        &:focus {
            background-color: #e2e2e2;
        }
    }
</style>
