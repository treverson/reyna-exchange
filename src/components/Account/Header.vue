<template>
    <header class="account-header">
        <a href="#" class="account-header__logo">Exchange</a>
        <ul class="account-header__menu">
            <li class="account-header__item">
                <router-link to="/account/dashboard" class="account-header__link"><span class="icon-dashboard account-header__icon"></span> Dashboard</router-link>
            </li>
            <li class="account-header__item">
                <router-link to="/account/buy-and-sell" class="account-header__link"><span class="icon-buy-and-sell account-header__icon"></span> Buy & Sell</router-link>
            </li>
            <li class="account-header__item">
                <router-link to="/account/advanced-view" class="account-header__link"><span class="icon-advanced-view account-header__icon"></span> Advanced View</router-link>
            </li>
            <li class="account-header__item">
                <router-link to="/account/history" class="account-header__link"><span class="icon-history account-header__icon"></span> History</router-link>
            </li>
        </ul>
        <DropDownList :data="AvailableCurrencies" class="account-header__currency" />
        <div class="account-header__profile">
            <router-link to="/account/profile" class="account-header__user">
                <span class="account-header__username">Georg P.</span>
                <img :src="avatarUrl" alt="" class="account-header__avatar">
            </router-link>
            <button class="account-header__action">
                <span class="icon-heavy-arrow-down"></span>
            </button>
        </div>
    </header>
</template>

<script>
    import DropDownList from '@/components/DropDown/DropDownList'
    import DropDownAvailableCurrencies from '@/components/DropDown/autolaod/available-currencies'

    export default {
        name: "Header",
        components: {
            DropDownList
        },
        data () {
            return {
                AvailableCurrencies: DropDownAvailableCurrencies,
                avatarUrl: 'https://pp.userapi.com/c830308/v830308045/13f4f6/RwaDj5qlQwQ.jpg?ava=1'
            }
        }
    }
</script>

<style lang="scss">
    .account-header {
        width: 100%;
        height: 60px;

        display: flex;
        align-items: center;

        padding: 0 58.9px 0 50px;
        box-sizing: border-box;

        background: #fff;
        border-bottom: 1px solid #F65454;
    }

    .account-header__logo {
        color: #F65454;
        font-size: 17px;
        font-weight: bold;
        line-height: 20px;

        display: flex;
        align-items: center;

        margin-right: auto;

        text-decoration: none;
        outline: none;

        &:before {
            content: "";

            margin-right: 10px;

            width: 30px;
            height: 30px;
            display: inline-block;

            border-radius: 50%;
            background-size: 39%;
            background-image: url('../../assets/img/reyna-logo.svg');
            background-repeat: no-repeat;
            background-position: calc(50% + 1px) center;
            background-color: #F65454;
        }
    }

    .account-header__menu {
        height: 100%;

        padding: 0;
        margin: 0;
        list-style: none;

        display: flex;
        align-items: center;
    }

    .account-header__item {
        height: 100%;
    }

    .account-header__link {
        height: 100%;

        padding: 0 28px;

        display: flex;
        align-items: center;

        color: #000000;
        font-size: 14px;
        font-weight: 500;
        line-height: 16px;
        text-decoration: none;

        &.router-link-active {
            color: #fff;
            background-color: #F65454;

            .account-header__icon {
                color: #fff;
            }
        }
    }

    .account-header__icon {
        color: #D3D3D3;
        font-size: 10px;
        margin-right: 10px;
    }

    .account-header__currency {
        margin-left: 70px;
        margin-right: 60px;
    }

    .account-header__profile {
        display: flex;
    }

    .account-header__user {
        display: flex;
        align-items: center;
        text-decoration: none;
    }

    .account-header__username {
        color: #161616;
        font-size: 12px;
        line-height: 14px;

        margin-right: 17px;
    }

    .account-header__avatar {
        width: 30px;
        height: 30px;

        border-radius: 5px;
        background-color: gray;
    }

    .account-header__action {
        padding: 0 10px;

        border: none;
        background-color: transparent;
        outline: none;
        cursor: pointer;

        color: rgba(0, 0, 0, 0.7);

        span {
            position: relative;
            top: 2px;

            font-size: 12px;
        }
    }
</style>
