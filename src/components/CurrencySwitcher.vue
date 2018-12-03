<template>
    <div class="currency-switcher">
        <div class="currency-switcher__current">USD</div>
    </div>
</template>

<script>
    export default {
        name: "CurrencySwitcher"
    }
</script>

<style lang="scss">
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

            background-image: url('../assets/img/switcher-arrow.svg');
        }
    }
</style>
