<template>
    <div class="currency-switcher">
        <div :class="{ 'currency-switcher__current': true, 'currency-switcher__current--state-active': currencyStatus === true }" @click="changeCurrencyStatus()">USD</div>

        <ul :class="{ 'currency-switcher__list': true, 'currency-switcher__list--state-active': currencyStatus === true }">
            <li v-for="item in currencyList" v-bind:key="item.id" class="currency-switcher__item">
                <button class="currency-switcher__button">{{ item.name }}</button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "CurrencySwitcher",
        data () {
            return {
                currencyStatus: false,
                currencyList: [
                    {
                        id: 0,
                        name: 'USD',
                        state: false
                    },
                    {
                        id: 1,
                        name: 'RUB',
                        state: false
                    }
                ]
            }
        },
        methods: {
            changeCurrencyStatus: function () {
                this.currencyStatus = !this.currencyStatus
            }
        }
    }
</script>

<style lang="scss">
    .currency-switcher {
        position: relative;
    }

    .currency-switcher__current {
        width: 89px;
        height: 35px;
        position: relative;

        display: flex;
        align-items: center;

        padding: 0 15px;
        box-sizing: border-box;

        color: #728096;
        font-size: 14px;
        font-weight: bold;
        line-height: 16px;
        text-transform: uppercase;

        border-radius: 4px;
        background-color: #F7F8F9;

        cursor: pointer;

        &:after {
            content: "";
            position: absolute;

            right: 11px;

            width: 6px;
            height: 3px;
            display: inline-block;

            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;

            transition: .15s ease;

            background-image: url('../assets/img/switcher-arrow.svg');
        }
    }

    .currency-switcher__current--state-active {
        &:after {
            transform: rotate(180deg);
        }
    }

    .currency-switcher__list {
        width: 89px;

        position: absolute;

        padding: 14px;
        margin: 0;
        list-style: none;
        box-sizing: border-box;

        background-color: #fff;
        border-radius: 3px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.10);

        pointer-events: none;
        visibility: hidden;
        opacity: 0;
        top: 35px;
        /*top: 40px;*/

        transition: .15s ease;
    }

    .currency-switcher__list--state-active {
        pointer-events: auto;
        visibility: visible;
        opacity: 1;
        top: 40px;
    }

    .currency-switcher__item {
        &:not(:last-child) {
            margin-bottom: 10px;
        }
    }

    .currency-switcher__button {
        background-color: transparent;
        border: none;
        outline: none;
        box-shadow: none;
        cursor: pointer;

        width: 100%;

        color: #000;
        font-size: 10px;
        font-weight: 500;
        text-align: left;

        transition: .15s ease;

        &:hover,
        &:focus {
            opacity: .5;
        }
    }
</style>
