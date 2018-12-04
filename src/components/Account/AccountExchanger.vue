<template>
    <div class="account-exchanger">
        <div class="account-exchanger__header">
            <button :class="{ 'account-exchanger__tab': true, 'account-exchanger__tab--state-active': exchangerState === 0 }" @click="changeExchangerState(0)">Buy</button>
            <button :class="{ 'account-exchanger__tab': true, 'account-exchanger__tab--state-active': exchangerState === 1 }" @click="changeExchangerState(1)">Sell</button>
        </div>
        <div v-show="exchangerState === 0" class="account-exchanger__content account-exchanger__content--type-buy">
            <div class="account-exchanger__search">
                <input type="text" placeholder="Search" class="account-exchanger__search-field">
                <button class="account-exchanger__search-button">
                    <span class="icon-search"></span>
                </button>
            </div>
            <table class="account-exchanger__table account-exchanger__table--type-buy" border="0" cellspacing="0" cellpadding="0">
                <tr class="account-exchanger__table-header">
                    <th class="account-exchanger__column account-exchanger__column--type-currency">Currency</th>
                    <th class="account-exchanger__column account-exchanger__column--type-funds">Funds</th>
                </tr>
                <tr class="account-exchanger__item">
                    <th>
                        <div class="account-exchanger__wallet">
                            <div class="account-exchanger__wallet-icon"></div>
                            <span class="account-exchanger__wallet-name">dice</span>
                        </div>
                    </th>
                    <th>
                        <div class="account-exchanger__funds">
                            <span class="account-exchanger__funds-price">110.94 $</span>
                            <span class="account-exchanger__funds-count">0.07407600</span>
                        </div>
                    </th>
                </tr>
                <tr class="account-exchanger__item">
                    <th>
                        <div class="account-exchanger__wallet">
                            <div class="account-exchanger__wallet-icon"></div>
                            <span class="account-exchanger__wallet-name">dice</span>
                        </div>
                    </th>
                    <th>
                        <div class="account-exchanger__funds">
                            <span class="account-exchanger__funds-price">110.94 $</span>
                            <span class="account-exchanger__funds-count">0.07407600</span>
                        </div>
                    </th>
                </tr>
                <tr class="account-exchanger__item">
                    <th>
                        <div class="account-exchanger__wallet">
                            <div class="account-exchanger__wallet-icon"></div>
                            <span class="account-exchanger__wallet-name">dice</span>
                        </div>
                    </th>
                    <th>
                        <div class="account-exchanger__funds">
                            <span class="account-exchanger__funds-price">110.94 $</span>
                            <span class="account-exchanger__funds-count">0.07407600</span>
                        </div>
                    </th>
                </tr>
                <tr class="account-exchanger__item">
                    <th>
                        <div class="account-exchanger__wallet">
                            <div class="account-exchanger__wallet-icon"></div>
                            <span class="account-exchanger__wallet-name">dice</span>
                        </div>
                    </th>
                    <th>
                        <div class="account-exchanger__funds">
                            <span class="account-exchanger__funds-price">110.94 $</span>
                            <span class="account-exchanger__funds-count">0.07407600</span>
                        </div>
                    </th>
                </tr>
                <tr class="account-exchanger__item">
                    <th>
                        <div class="account-exchanger__wallet">
                            <div class="account-exchanger__wallet-icon"></div>
                            <span class="account-exchanger__wallet-name">dice</span>
                        </div>
                    </th>
                    <th>
                        <div class="account-exchanger__funds">
                            <span class="account-exchanger__funds-price">110.94 $</span>
                            <span class="account-exchanger__funds-count">0.07407600</span>
                        </div>
                    </th>
                </tr>
            </table>
            <AccountTrade type="buy" class="account-exchanger__trade" />
        </div>
        <div v-show="exchangerState === 1" class="account-exchanger__content account-exchanger__content--type-sell">
            <div class="account-exchanger__search">
                <input type="text" placeholder="Search" class="account-exchanger__search-field">
                <button class="account-exchanger__search-button">
                    <span class="icon-search"></span>
                </button>
            </div>
            <table class="account-exchanger__table account-exchanger__table--type-buy" border="0" cellspacing="0" cellpadding="0">
                <tr class="account-exchanger__table-header">
                    <th class="account-exchanger__column account-exchanger__column--type-currency">Currency</th>
                    <th class="account-exchanger__column account-exchanger__column--type-funds">Funds</th>
                </tr>
                <tr class="account-exchanger__item">
                    <th>
                        <div class="account-exchanger__wallet">
                            <div class="account-exchanger__wallet-icon"></div>
                            <span class="account-exchanger__wallet-name">dice</span>
                        </div>
                    </th>
                    <th>
                        <div class="account-exchanger__funds">
                            <span class="account-exchanger__funds-price">110.94 $</span>
                            <span class="account-exchanger__funds-count">0.07407600</span>
                        </div>
                    </th>
                </tr>
                <tr class="account-exchanger__item">
                    <th>
                        <div class="account-exchanger__wallet">
                            <div class="account-exchanger__wallet-icon"></div>
                            <span class="account-exchanger__wallet-name">dice</span>
                        </div>
                    </th>
                    <th>
                        <div class="account-exchanger__funds">
                            <span class="account-exchanger__funds-price">110.94 $</span>
                            <span class="account-exchanger__funds-count">0.07407600</span>
                        </div>
                    </th>
                </tr>
                <tr class="account-exchanger__item">
                    <th>
                        <div class="account-exchanger__wallet">
                            <div class="account-exchanger__wallet-icon"></div>
                            <span class="account-exchanger__wallet-name">dice</span>
                        </div>
                    </th>
                    <th>
                        <div class="account-exchanger__funds">
                            <span class="account-exchanger__funds-price">110.94 $</span>
                            <span class="account-exchanger__funds-count">0.07407600</span>
                        </div>
                    </th>
                </tr>
                <tr class="account-exchanger__item">
                    <th>
                        <div class="account-exchanger__wallet">
                            <div class="account-exchanger__wallet-icon"></div>
                            <span class="account-exchanger__wallet-name">dice</span>
                        </div>
                    </th>
                    <th>
                        <div class="account-exchanger__funds">
                            <span class="account-exchanger__funds-price">110.94 $</span>
                            <span class="account-exchanger__funds-count">0.07407600</span>
                        </div>
                    </th>
                </tr>
                <tr class="account-exchanger__item">
                    <th>
                        <div class="account-exchanger__wallet">
                            <div class="account-exchanger__wallet-icon"></div>
                            <span class="account-exchanger__wallet-name">dice</span>
                        </div>
                    </th>
                    <th>
                        <div class="account-exchanger__funds">
                            <span class="account-exchanger__funds-price">110.94 $</span>
                            <span class="account-exchanger__funds-count">0.07407600</span>
                        </div>
                    </th>
                </tr>
            </table>
            <AccountTrade type="sell" class="account-exchanger__trade" />
        </div>
    </div>
</template>

<script>
    import AccountTrade from '@/components/Account/AccountTrade'

    export default {
        name: "AccountExchanger",
        components: {
            AccountTrade
        },
        data () {
            return {
                exchangerState: 0
            }
        },
        methods: {
            changeExchangerState: function (state) {
                this.exchangerState = state
            }
        }
    }
</script>

<style lang="scss">
    .account-exchanger {
        max-width: 540px;
        width: 100%;
    }

    .account-exchanger__header {
        height: 87px;

        display: flex;
        align-items: flex-end;
    }

    .account-exchanger__tab {
        width: 100%;
        height: 84px;

        border: none;
        cursor: pointer;
        outline: none;

        color: #6B6B6B;
        font-size: 18px;
        font-weight: bold;

        background-color: #EFE5E5;

        transition: .15s ease;

        &:first-child {
            border-top-left-radius: 5px;
        }

        &:last-child {
            border-top-right-radius: 5px;
        }
    }

    .account-exchanger__tab--state-active {
        height: 87px;

        border-top-left-radius: 5px;
        border-top-right-radius: 5px;

        color: #E95A5A;

        background-color: #fff;
    }

    .account-exchanger__content {
        width: 100%;

        padding: 20px;
        box-sizing: border-box;

        background-color: #fff;
    }

    .account-exchanger__search {
        position: relative;
    }

    .account-exchanger__search-field {
        width: 100%;
        height: 40px;

        border-radius: 3px;

        padding: 0 40px 0 12px;
        box-sizing: border-box;

        border: none;
        outline: none;

        color: #000;
        font-size: 10px;
        font-weight: 500;

        background-color: #F6F6F6;

        transition: .15s ease;

        &:focus {
            background-color: #eeeeee;

            &::placeholder {
                opacity: 0;
            }
        }

        &::placeholder {
            color: rgba(114, 128, 150, 0.5);
            transition: .15s ease;
        }
    }

    .account-exchanger__search-button {
        position: absolute;

        right: 12px;
        top: 0;
        bottom: 0;
        margin: auto;


        width: 11px;
        height: 11px;
        padding: 10px;

        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;

        border: none;
        outline: none;
        cursor: pointer;

        .icon-search {
            position: relative;
            top: -6px;

            color: rgba(175, 175, 175, 0.5);

            transition: .15s ease;
        }

        &:focus,
        &:hover {
            .icon-search {
                color: rgba(175, 175, 175, 1);
            }
        }
    }

    .account-exchanger__table {
        width: 100%;

        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    }

    .account-exchanger__table--type-buy {
        .account-exchanger__column--type-currency {
            width: 350px;
            text-align: left;
        }

        .account-exchanger__column--type-funds {
            text-align: right;
        }
    }

    .account-exchanger__column {
        color: rgba(0, 0, 0, 0.5);
        font-size: 9px;
        font-weight: 500;
        letter-spacing: 2px;
        text-transform: uppercase;

        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    }

    .account-exchanger__table-header {
        height: 32px;
    }

    .account-exchanger__wallet {
        display: flex;
        align-items: center;
    }

    .account-exchanger__wallet-icon {
        width: 22px;
        height: 22px;

        margin-right: 10px;

        border-radius: 50%;
        background-color: #FAAFAF;
    }

    .account-exchanger__wallet-name {
        color: #000000;
        font-size: 14px;
        font-weight: 500;
    }

    .account-exchanger__item {
        height: 45px;
    }

    .account-exchanger__funds {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .account-exchanger__funds-price {
        color: rgba(0, 0, 0, 0.4);
        font-size: 11px;
        font-weight: 500;

        margin-right: 9px;
    }

    .account-exchanger__funds-count {
        color: rgba(0, 0, 0, 0.7);
        font-size: 11px;
        font-weight: 500;

        padding: 3px 9px;
        border-radius: 2px;

        background-color: #ECECEC;
    }

    .account-exchanger__trade {
        margin-top: 26px;
    }
</style>
