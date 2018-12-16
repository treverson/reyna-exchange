<template>
    <div :class="['history-filter']">
        <h3 :class="['history-filter__heading']">
            Filter
        </h3>
        <div :class="['history-filter__content']">
            <div :class="['history-filter__section']">
                <DataList data-type="list" :data="dataListContentForTypes" />
            </div>
            <div :class="['history-filter__section']">
                <DataList data-type="currency" :data="dataListContentForCurrencies" />
            </div>
            <div :class="['history-filter__wrap']">
                <div :class="['history-filter__item']">
                    <input id="today" name="radio" type="radio" :class="['history-filter__radio']">
                    <label for="today" :class="['history-filter__button']">
                        Today
                    </label>
                </div>
                <div :class="['history-filter__item']">
                    <input id="last-7-days" name="radio" type="radio" :class="['history-filter__radio']">
                    <label for="last-7-days" :class="['history-filter__button']">
                        Last 7 days
                    </label>
                </div>
                <div :class="['history-filter__item']">
                    <input id="last-30-days" name="radio" type="radio" :class="['history-filter__radio']" checked>
                    <label for="last-30-days" :class="['history-filter__button']">
                        Last 30 days
                    </label>
                </div>
                <div :class="['history-filter__item']">
                    <input id="last-90-days" name="radio" type="radio" :class="['history-filter__radio']">
                    <label for="last-90-days" :class="['history-filter__button']">
                        Last 90 days
                    </label>
                </div>
                <div :class="['history-filter__item']">
                    <input id="last-180-days" name="radio" type="radio" :class="['history-filter__radio']">
                    <label for="last-180-days" :class="['history-filter__button']">
                        Last 180 days
                    </label>
                </div>
                <div :class="['history-filter__item']">
                    <input id="last-1-years" name="radio" type="radio" :class="['history-filter__radio']">
                    <label for="last-1-years" :class="['history-filter__button']">
                        1 year
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import DataList from '@/components/Account/UI/DataList/DataList'

    export default {
        name: "HistoryFilter",
        components: { DataList },
        data () {
            return {
                dataListContentForTypes: [
                    {
                        id: 0,
                        content: "All types"
                    },
                    {
                        id: 1,
                        content: "Withdraw"
                    },
                    {
                        id: 2,
                        content: "Deposit"
                    }
                ],
                dataListContentForCurrencies: [
                    {
                        id: 0,
                        isCategory: true,
                        code: "ALL",
                        content: "All currencies"
                    },
                    {
                        id: 1,
                        code: "AFN",
                        content: "Afghan Afghani"
                    },
                    {
                        id: 2,
                        code: "ANG",
                        content: "Netherlands Antillean …"
                    },
                    {
                        id: 3,
                        code: "ARS",
                        content: "Argentine Peso"
                    },
                    {
                        id: 4,
                        code: "AWG",
                        content: "Aruban Florin"
                    },
                    {
                        id: 5,
                        code: "AZN",
                        content: "Azerbaijani Manat"
                    },
                    {
                        id: 6,
                        code: "BAM",
                        content: "Bosnia and Herzegovina …"
                    },
                    {
                        id: 7,
                        code: "BAM",
                        content: "Bosnia and Herzegovina …"
                    },
                    {
                        id: 8,
                        code: "BAM",
                        content: "Bosnia and Herzegovina …"
                    },
                    {
                        id: 9,
                        code: "BAM",
                        content: "Bosnia and Herzegovina …"
                    }
                ]
            }
        }
    }
</script>

<style lang="scss">
    @import "HistoryFilter";
</style>
