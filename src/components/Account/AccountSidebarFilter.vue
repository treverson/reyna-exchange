<template>
    <div class="account-sidebar-filter">
        <div class="account-sidebar-filter__section">
            <label for="side" class="account-sidebar-filter__heading">Side</label>
            <div id="side" class="account-sidebar-filter__select">
                <span class="account-sidebar-filter__select-current">All types</span>
            </div>
        </div>
        <div class="account-sidebar-filter__section">
            <label for="currencies" class="account-sidebar-filter__heading">Currency</label>
            <select id="currencies" class="account-sidebar-filter__select">
                <option value="0">All currencies</option>
            </select>
        </div>
        <div v-show="showOnlyConstructor.length > 0" class="account-sidebar-filter__section">
            <label class="account-sidebar-filter__heading">Show only</label>
            <div v-for="item in showOnlyConstructor" v-bind:key="item.id" class="account-sidebar-filter__checkbox">
                <input v-model="item.model" type="radio" name="show-only" :id="item.code" class="account-sidebar-filter__checkbox-hidden">
                <label :for="item.code" class="account-sidebar-filter__checkbox-plate">{{ item.title }}</label>
            </div>
        </div>
        <div class="account-sidebar-filter__section">
            <button class="account-sidebar-filter__button" @click="resetFilter()">Reset</button>
            <button class="account-sidebar-filter__button">Export orders history</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AccountSidebarFilter",
        data () {
            return {
                showSideConstructor: [
                    {
                        id: 0,
                        name: 'All types',
                        active: true
                    },
                    {
                        id: 1,
                        name: 'Withdraw'
                    },
                    {
                        id: 2,
                        name: 'Deposit'
                    }
                ],
                showOnlyConstructor: [
                    {
                        id: 0,
                        title: 'Last 30 days',
                        code: 'last-30-days',
                        model: false
                    },
                    {
                        id: 1,
                        title: 'Last 7 days',
                        code: 'last-7-days',
                        model: false
                    },
                    {
                        id: 2,
                        title: 'Last day',
                        code: 'last-day',
                        model: false
                    }
                ]
            }
        },
        methods: {
            resetFilter: function () {
                this.resetShowOnly()
            },
            resetShowOnly: function () {}
        },
    }
</script>

<style lang="scss">
    .account-sidebar-filter {
        max-width: 255px;
        width: 100%;

        flex-shrink: 0;

        padding: 20px 18px 24px 21px;
        box-sizing: border-box;

        border-radius: 5px;
        background-color: #fff;
    }

    .account-sidebar-filter__section {
        display: flex;
        flex-direction: column;

        &:not(:last-child) {
            margin-bottom: 10px;
        }
    }

    .account-sidebar-filter__heading {
        color: rgba(0, 0, 0, 0.4);
        font-size: 10px;
        font-weight: 500;
        line-height: 12px;
        margin-bottom: 9px;
    }

    .account-sidebar-filter__select {
        position: relative;
        -webkit-appearance: none;
        -moz-appearance: none;
        text-indent: 1px;
        text-overflow: '';

        width: 100%;
        height: 34px;

        color: #000000;
        font-size: 12px;
        font-weight: 500;
        line-height: 14px;

        display: flex;
        align-items: center;

        box-sizing: border-box;
        padding: 0 25px 0 15px;
        outline: none;
        cursor: pointer;

        border: 1px solid #E6E6E6;
        border-radius: 3px;
        background-color: #fff;

        &:after {
            position: absolute;
            content: "\e904";

            right: 12px;

            color: #000000;
            font-size: 3px;
            font-family: 'icomoon';
        }
    }

    .account-sidebar-filter__checkbox {
        &:not(:last-child) {
            margin-bottom: 10px;
        }

        &:last-child {
            margin-bottom: 13px;
        }
    }

    .account-sidebar-filter__checkbox-hidden {
        display: none;

        &:checked + .account-sidebar-filter__checkbox-plate {
            &:before {
                background-color: #E95A5A;
            }
        }
    }

    .account-sidebar-filter__checkbox-plate {
        width: 100%;
        height: 34px;

        position: relative;

        display: flex;
        align-items: center;
        cursor: pointer;

        padding: 0 35px;
        box-sizing: border-box;

        border: 1px solid #E6E6E6;
        border-radius: 3px;
        background-color: #fff;

        transition: .15s ease;

        &:before {
            content: "";

            position: absolute;
            box-sizing: border-box;

            left: 14px;

            width: 14px;
            height: 14px;

            border-radius: 50%;
            background-color: #D8D8D8;
            border: 3px solid #D8D8D8;

            transition: .15s ease;
        }
    }

    .account-sidebar-filter__button {
        width: 100%;
        height: 34px;

        display: block;
        text-align: center;
        cursor: pointer;
        outline: none;

        color: #000000;
        font-size: 12px;
        font-weight: bold;

        border: 1px solid #E6E6E6;
        border-radius: 3px;

        transition: .15s ease;

        &:not(:last-child) {
            margin-bottom: 10px;
        }

        &:hover,
        &:focus {
            background-color: #E6E6E6;
        }
    }

    .account-sidebar-filter__select-list {
        padding: 0;
        margin: 0;
        list-style: none;
    }
</style>
