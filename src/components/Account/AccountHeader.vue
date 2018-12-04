<template>
    <header class="account-header">
        <router-link to="/account" class="account-header__logo">R</router-link>
        <ul class="account-header__menu">
            <li class="account-header__item">
                <router-link to="/account/dashboard" class="account-header__link"><span class="account-header__icon icon-icon-dashboard"></span> Dashboard</router-link>
            </li>
            <li class="account-header__item">
                <router-link to="/account/buy-and-sell" class="account-header__link"><span class="account-header__icon icon-icon-buysell"></span> Buy & Sell</router-link>
            </li>
            <li class="account-header__item">
                <router-link to="/account/advanced-view" class="account-header__link"><span class="account-header__icon icon-icon-advanced-view"></span> Advanced View</router-link>
            </li>
            <li class="account-header__item">
                <router-link to="/account/history" class="account-header__link"><span class="account-header__icon icon-icon-history"></span> History</router-link>
            </li>
        </ul>
        <CurrencySwitcher class="account-header__currency-switcher" />
        <div class="account-header__actions">
            <router-link to="#" class="account-header__username">Nikita K.</router-link>
            <div class="account-header__avatar" v-bind:style="{'background-image': 'url(' + require('../../assets/img/avatar.jpg') + ')'}"></div>
            <button class="account-header__action">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </header>
</template>

<script>
    import CurrencySwitcher from '@/components/CurrencySwitcher'

    export default {
        name: "AccountHeader",
        components: {
            CurrencySwitcher
        }
    }
</script>

<style lang="scss">
    .account-header {
        width: 100%;
        height: 70px;

        margin: 0 0 50px 0;
        padding: 0 22px 0 33px;
        box-sizing: border-box;

        display: flex;
        align-items: center;

        background-color: #fff;
        box-shadow: 0 2px 3px rgba(0, 0, 0, 0.05);
    }

    .account-header__logo {
        color: #F65454;
        font-size: 28px;
        font-weight: bold;
        line-height: 34px;
        text-transform: uppercase;
    }

    .account-header__container {
        height: 100%;
    }

    .account-header__menu {
        padding: 0;
        margin: 0 24px 0 105px;
        list-style: none;

        height: 100%;

        display: flex;
        align-items: center;
    }

    .account-header__item {
        height: 100%;

        &:not(:last-child) {
            margin-right: 25px;
        }
    }

    .account-header__link {
        display: flex;
        align-items: center;
        box-sizing: border-box;

        padding: 0 10px;
        height: 100%;

        color: #570000;
        font-weight: 500;
        line-height: 18px;
        font-size: 15px;

        border-bottom: 3px solid transparent;
        transition: .15s ease;

        &:hover,
        &:focus {
            border-color: #E95A5A;
        }

        &.router-link-active {
            border-color: #E95A5A;

            .account-header__icon {
                color: #E95A5A;
            }
        }
    }

    .account-header__icon {
        color: #A6B2C4;
        margin-right: 18px;

        &.icon-icon-dashboard {
            font-size: 15px;
        }

        &.icon-icon-buysell {
            font-size: 23px;
        }

        &.icon-icon-advanced-view {
            font-size: 23px;
        }

        &.icon-icon-history {
            font-size: 22px;
        }
    }

    .account-header__currency-switcher {
        margin: 0 auto 0 0;
    }

    .account-header__actions {
        display: flex;
        align-items: center;
        margin: 0 0 0 auto;
    }

    .account-header__username {
        color: #728096;
        font-size: 14px;
        font-weight: 500;
        line-height: 16px;

        margin: 0 18px 0 0;

        transition: .15s ease;

        &:hover,
        &:focus {
            color: #69707c;
        }
    }

    .account-header__avatar {
        width: 30px;
        height: 30px;

        margin-right: 5px;

        border-radius: 50%;
        background-color: #728096;

        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }

    .account-header__action {
        cursor: pointer;
        position: relative;

        background-color: transparent;
        border: none;
        outline: none;
        box-shadow: none;

        display: flex;
        flex-direction: column;

        padding: 15px;

        transition: .15s ease;

        span {
            width: 4px;
            height: 4px;

            display: block;
            transition: .15s ease;

            border-radius: 50%;
            background-color: #A6B2C4;

            &:not(:last-child) {
                margin-bottom: 2px;
            }
        }

        &:hover,
        &:focus {
            span {
                background-color: #8892a1;
            }
        }
    }
</style>
