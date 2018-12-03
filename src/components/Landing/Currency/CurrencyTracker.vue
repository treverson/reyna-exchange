<template>
    <div class="currency-tracker">
        <div class="currency-tracker__header">
            <div class="currency-tracker__icon" :style="{ backgroundImage: 'url(' + iconLocation + ')' }"></div>
            <span class="currency-tracker__heading">{{ heading }}</span>
            <span class="currency-tracker__timer">24h</span>
        </div>
        <span class="currency-tracker__cost">USD {{ cost }}</span>
        <currency-chart :main-color="lineColor" class="currency-tracker__chart" />
    </div>
</template>

<script>
import CurrencyChart from '@/components/Landing/Currency/CurrencyChart.js'

export default {
    name: "CurrencyTracker",
    components: {
        CurrencyChart
    },
    props: {
        heading: {
            type: String,
            required: true
        },
        iconLocation: {
            type: String,
            required: true
        },
        lineColor: {
            type: Array,
            required: true
        }
    },
    data () {
        return {
            cost: 0.01254,
            image: null
        }
    },
    mounted() {
    }
}
</script>

<style lang="scss">
    .currency-tracker {
        width: 100%;
        height: 245px;
        box-sizing: border-box;
        position: relative;

        display: flex;
        flex-direction: column;

        border-radius: 5px;
        border: 1px solid #E8E8E8;
        background-color: #fff;

        box-shadow: 0 22px 40px rgba(0, 0, 0, 0.05);
    }

    .currency-tracker__header {
        display: flex;
        align-items: center;
        padding: 19px 18px 12px 18px;
    }

    .currency-tracker__heading {
        color: #151515;
        font-size: 16px;
        font-weight: bold;
        line-height: 19px;
    }

    .currency-tracker__icon {
        width: 26px;
        height: 26px;

        margin: 0 9px 0 0;
        display: inline-block;
    }

    .currency-tracker__timer {
        color: #fff;
        font-size: 12px;
        line-height: 18px;
        font-weight: 500;

        padding: 0 2px;
        margin: 0 0 0 auto;

        border-radius: 3px;
        background-color: rgba(0, 0, 0, 0.15);
    }

    .currency-tracker__cost {
        display: block;
        width: 100%;
        box-sizing: border-box;

        color: #151515;
        font-size: 20px;
        font-weight: 500;
        line-height: 24px;

        padding: 0 18px;
    }

    .currency-tracker__chart {
        position: absolute;
        bottom: 0;
        left: -1px;
        width: calc(100% + 2px);
        height: 123px;
        margin: auto 0 0 0;
    }
</style>
