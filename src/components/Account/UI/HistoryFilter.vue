<template>
    <div class="history-filter">
        <h3 class="history-filter__heading">Filter</h3>
        <div class="history-filter__content">
            <div class="history-filter__section">
                <MultipleList :data="listBuyAndSell" />
            </div>
            <div class="history-filter__section">
                <MultipleList :data="listAllCurrencies" />
            </div>
            <div class="history-filter__wrap">
                <div class="history-filter__item">
                    <input id="today" name="radio" type="radio" class="history-filter__radio">
                    <label for="today" class="history-filter__button">Today</label>
                </div>
                <div class="history-filter__item">
                    <input id="last-7-days" name="radio" type="radio" class="history-filter__radio">
                    <label for="last-7-days" class="history-filter__button">Last 7 days</label>
                </div>
                <div class="history-filter__item">
                    <input id="last-30-days" name="radio" type="radio" class="history-filter__radio">
                    <label for="last-30-days" class="history-filter__button">Last 30 days</label>
                </div>
                <div class="history-filter__item">
                    <input id="last-90-days" name="radio" type="radio" class="history-filter__radio">
                    <label for="last-90-days" class="history-filter__button">Last 90 days</label>
                </div>
                <div class="history-filter__item">
                    <input id="last-180-days" name="radio" type="radio" class="history-filter__radio">
                    <label for="last-180-days" class="history-filter__button">Last 180 days</label>
                </div>
                <div class="history-filter__item">
                    <input id="last-1-years" name="radio" type="radio" class="history-filter__radio">
                    <label for="last-1-years" class="history-filter__button">1 year</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import MultipleList from '@/components/Account/MultipleList'

    export default {
        name: "HistoryFilter",
        components: {
            MultipleList
        },
        data () {
            return {
                listBuyAndSell: {
                    id: 0,
                    content: [
                        {
                            id: 0,
                            title: 'Buy & Sell'
                        },
                        {
                            id: 1,
                            title: 'Example 2'
                        },
                        {
                            id: 2,
                            title: 'Example 3'
                        },
                        {
                            id: 3,
                            title: 'Example 4'
                        }
                    ]
                },
                listAllCurrencies: {
                    id: 0,
                    content: [
                        {
                            id: 0,
                            title: 'All currencies'
                        },
                        {
                            id: 1,
                            title: 'Example 2'
                        },
                        {
                            id: 2,
                            title: 'Example 3'
                        },
                        {
                            id: 3,
                            title: 'Example 4'
                        }
                    ]
                }
            }
        }
    }
</script>

<style lang="scss">
    .history-filter {}

    .history-filter__heading {
        width: 100%;
        height: 50px;

        margin: 0;
        color: #000000;
        font-size: 14px;
        font-weight: bold;
        line-height: 16px;
        text-transform: uppercase;

        padding: 0 20px;
        box-sizing: border-box;

        letter-spacing: .3px;

        display: flex;
        align-items: center;

        background-color: #fff;
        border-bottom: 1px solid rgba(246, 84, 84, 0.17);
    }

    .history-filter__content {
        padding: 22.5px 20px 20px 20px;
        box-sizing: border-box;

        background-color: #fff;
    }

    .history-filter__section {
        &:not(:last-child) {
            margin-bottom: 20px;
        }
    }

    .history-filter__wrap {
        display: flex;
        flex-wrap: wrap;

        margin-bottom: -10px;
    }

    .history-filter__item {
        margin-right: 10px;
        margin-bottom: 10px;
    }

    .history-filter__radio {
        display: none;

        &:checked + .history-filter__button {
            border-color: #F65454;
        }
    }

    .history-filter__button {
        display: inline-block;

        color: rgba(0, 0, 0, 0.7);
        font-size: 12px;
        font-weight: 500;
        line-height: 30px;
        cursor: pointer;

        background-color: #F5EBEB;
        border-radius: 2px;

        border: 1px solid transparent;

        padding: 0 13px;

        transition: .15s ease;

        &:hover,
        &:focus {
            color: rgba(255, 255, 255, 0.7);
            background-color: #FF9F9F;
        }
    }
</style>
