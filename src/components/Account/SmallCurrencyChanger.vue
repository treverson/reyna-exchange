<template>
    <div class="small-currency-changer">
        <div class="small-currency-changer__title">Change</div>
    </div>
</template>

<script>
    export default {
        name: "smallCurrencyChanger"
    }
</script>

<style lang="scss">
    .small-currency-changer {}

    .small-currency-changer__title {
        width: 54px;
        height: 15px;

        position: relative;
        cursor: pointer;

        display: flex;
        align-items: center;

        padding-left: 4px;
        box-sizing: border-box;

        color: #fff;
        font-size: 7px;
        font-weight: 500;
        letter-spacing: 1px;
        text-transform: uppercase;

        border-radius: 2px;
        background-color: #E95A5A;

        transition: .15s ease;

        &:after {
            position: absolute;

            content: "\e904";
            font-family: 'icomoon';

            right: 4px;

            color: #fff;
            font-size: 3px;
        }

        &:hover {
            background-color: #d65353;
        }
    }
</style>
