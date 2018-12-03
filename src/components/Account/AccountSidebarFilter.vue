<template>
    <form class="account-sidebar-filter">
        <div class="account-sidebar-filter__section">
            <label for="side" class="account-sidebar-filter__heading">Side</label>
            <select id="side" class="account-sidebar-filter__select">
                <option value="0">All types</option>
            </select>
        </div>
        <div class="account-sidebar-filter__section">
            <label for="currencies" class="account-sidebar-filter__heading">Currency</label>
            <select id="currencies" class="account-sidebar-filter__select">
                <option value="0">All currencies</option>
            </select>
        </div>
        <div class="account-sidebar-filter__section">
            <label class="account-sidebar-filter__heading">Show only</label>
            <div class="account-sidebar-filter__checkbox">
                <input type="radio" name="show-only" id="last-30-days" class="account-sidebar-filter__checkbox-hidden">
                <label for="last-30-days" class="account-sidebar-filter__checkbox-plate">Last 30 days</label>
            </div>
            <div class="account-sidebar-filter__checkbox">
                <input type="radio" name="show-only" id="last-7-days" class="account-sidebar-filter__checkbox-hidden">
                <label for="last-7-days" class="account-sidebar-filter__checkbox-plate">Last 7 days</label>
            </div>
            <div class="account-sidebar-filter__checkbox">
                <input type="radio" name="show-only" id="last-1-days" class="account-sidebar-filter__checkbox-hidden">
                <label for="last-1-days" class="account-sidebar-filter__checkbox-plate">Last day</label>
            </div>
        </div>
        <div class="account-sidebar-filter__section">
            <button class="account-sidebar-filter__button">Reset</button>
            <button class="account-sidebar-filter__button">Export orders history</button>
        </div>
    </form>
</template>

<script>
    export default {
        name: "AccountSidebarFilter"
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

        padding: 0 25px 0 15px;
        outline: none;

        border: 1px solid #E6E6E6;
        border-radius: 3px;
        background-color: #fff;
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
</style>
