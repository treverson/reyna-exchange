<template>
    <div :class="['available-currencies']">
        <h3 :class="['available-currencies__header']">
            {{ tableName }}
        </h3>
        <div :class="['available-currencies__filter']">
            <ul :class="['available-currencies__menu']">
                <!-- menu item -->
                <li v-for="item in tableData" v-bind:key="item.id" :class="['available-currencies__item']">
                    <!-- menu button -->
                    <button @click="changeCurrentTableItem(item.id)" :class="{ 'available-currencies__button': true, 'available-currencies__button--isCurrent-yes': item.id === currentTableItem }">
                        {{ item.categoryName }}
                    </button>
                    <!-- menu button end -->
                </li>
                <!-- menu item end -->
            </ul>
            <div :class="['available-currencies__search']">
                <input type="text" placeholder="Search for currency" v-model="fieldModel" :class="['available-currencies__field']">
            </div>
        </div>
        <!-- content -->
        <div v-for="item in tableData" v-bind:key="item.id" v-show="item.id === currentTableItem" :class="['available-currencies__content']">
            <div :class="['available-currencies__inner']">

                <!-- table -->
                <table :class="['available-currencies__table']" cellspacing="0" border="0" cellpadding="0">

                    <!-- head -->
                    <thead :class="['available-currencies__head']">

                        <!-- row -->
                        <tr :class="['available-currencies__row']">

                            <!-- item -->
                            <th v-for="headItem in item.tableHead" v-bind:key="headItem.id" :class="['available-currencies__column', 'available-currencies__table-heading']" :style="{ width: headItem.width, textAlign: headItem.align }">
                                {{ headItem.title }}
                            </th>
                            <!-- item end -->

                        </tr>
                        <!-- row end -->

                    </thead>
                    <!-- head end -->

                    <!-- body -->
                    <tbody :class="['available-currencies__body']">

                        <!-- row -->
                        <tr v-for="row in filteredTableList" v-bind:key="row.id" @click="setRowSelectable(row.id)" :class="{ 'available-currencies__row': true, 'available-currencies__row--isSelectable-yes': item.isSelectable === true, 'available-currencies__row--isSelected-yes': true, 'available-currencies__row--isSelected-yes': row.selected === true }">

                            <!-- item -->
                            <th v-for="bodyItem in row.content" v-bind:key="bodyItem.id" :style="{ textAlign: bodyItem.align }" :class="['available-currencies__column', 'available-currencies__table-item']">
                                <template v-if="bodyItem.type === 'default'">
                                    <span :class="['available-currencies__table-title']">
                                        {{ bodyItem.title }}
                                    </span>
                                </template>
                                <template v-if="bodyItem.type === 'status'">
                                    <div :class="['available-currencies__table-status']">
                                        <span :class="{ 'available-currencies__table-status-title': true, 'available-currencies__table-status-title--status-close': bodyItem.status === 0, 'available-currencies__table-status-title--status-open': bodyItem.status === 1, 'available-currencies__table-status-title--status-pending': bodyItem.status === 2}">
                                            <template v-if="bodyItem.status === 0">
                                                Close
                                            </template>
                                            <template v-else-if="bodyItem.status === 1">
                                                Open
                                            </template>
                                            <template v-else-if="bodyItem.status === 2">
                                                Pending
                                            </template>
                                        </span>
                                    </div>
                                </template>
                                <template v-if="bodyItem.type === 'currency'">
                                    <div :class="['available-currencies__table-currency']">
                                        <div :class="['available-currencies__table-currency-icon']"></div>
                                        <span :class="['available-currencies__table-currency-title']">
                                            {{ bodyItem.title }}
                                        </span>
                                    </div>
                                </template>
                                <template v-else-if="bodyItem.type === 'price'">
                                    <div :class="['available-currencies__table-price']" :style="{ justifyContent: bodyItem.priceAlign }">
                                        <span :class="['available-currencies__table-price-content']">
                                            {{ bodyItem.price }}
                                        </span>
                                        <span :class="['available-currencies__table-price-convertPrice']">
                                            {{ bodyItem.convertPrice }}
                                        </span>
                                    </div>
                                </template>
                                <template v-else-if="bodyItem.type === 'change'">
                                    <div :class="['available-currencies__table-change']">
                                        <span :class="{ 'available-currencies__table-change-percent': true, 'available-currencies__table-change-percent--type-good': bodyItem.isGood === true, 'available-currencies__table-change-percent--type-bad': bodyItem.isGood === false }">
                                            {{ bodyItem.percent }}
                                        </span>
                                    </div>
                                </template>
                                <template v-else-if="bodyItem.type === 'volume'">
                                    <div :class="['available-currencies__table-volume']">
                                        <span :class="['available-currencies__table-volume-content']">
                                            {{ bodyItem.volume }}
                                        </span>
                                    </div>
                                </template>
                                <template v-else-if="bodyItem.type === 'type'">
                                    <div :class="['available-currencies__table-type']">
                                        <template v-if="bodyItem.isSale === true">
                                            <span :class="['available-currencies__table-type-content', 'available-currencies__table-type-content--state-sell']">
                                                Sell
                                            </span>
                                        </template>
                                        <template v-else-if="bodyItem.isSale === false">
                                            <span :class="['available-currencies__table-type-content', 'available-currencies__table-type-content--state-buy']">
                                                Buy
                                            </span>
                                        </template>
                                    </div>
                                </template>
                                <template v-else-if="bodyItem.type === 'date'">
                                    <div :class="['available-currencies__table-date']">
                                        <span :class="['available-currencies__table-date-content']">
                                            {{ bodyItem.content }}
                                        </span>
                                    </div>
                                </template>
                                <template v-else-if="bodyItem.type === 'cryptoCurrency'">
                                    <div :class="['available-currencies__table-crypto-currency']" :style="{ textAlign: bodyItem.align }">
                                        <span :class="['available-currencies__table-crypto-currency-content']">
                                            {{ bodyItem.content }} <span>{{ bodyItem.currencyType }}</span>
                                        </span>
                                    </div>
                                </template>
                            </th>
                            <!-- item end -->

                            <!-- actions -->
                            <th v-if="toggleActions === true" :class="['available-currencies__column', 'available-currencies__table-item']">
                                <div :class="['available-currencies__table-actions']">
                                    <button :class="['available-currencies__table-action', 'available-currencies__table-action--type-buy']">
                                        Buy
                                    </button>
                                    <button :class="['available-currencies__table-action', 'available-currencies__table-action--type-sell']">
                                        Sell
                                    </button>
                                    <button :class="['available-currencies__table-comparison']">
                                        <span class="icon-advanced-view"></span>
                                    </button>
                                </div>
                            </th>
                            <!-- actions end -->

                        </tr>
                        <!-- row end -->

                    </tbody>
                    <!-- body end -->

                </table>
                <!-- table end -->
            </div>

        </div>
        <!-- content end -->

    </div>
</template>

<script>
    export default {
        name: "AvailableCurrencies",
        props: {
            tableName: {
                type: String,
                required: true
            },
            currentItem: {
                type: Number,
                default: 0
            },
            tableData: {
                type: Array,
                required: true
            },
            toggleActions: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                currentTableItem: this.currentItem,
                fieldModel: '',
                selected: []
            }
        },
        methods: {
            changeCurrentTableItem: function (id) {
                this.currentTableItem = id
            },
            setRowSelectable: function (id) {
                this.tableData[this.currentTableItem].rows[id].selected = !this.tableData[this.currentTableItem].rows[id].selected
            },
            autoload: function () {
                this.tableData.forEach(function (element) {
                    if (element.isSelectable === true) {

                        element.rows.forEach(function (row) {
                            row.selected = false
                        })

                    }
                })
            }
        },
        mounted () {
            this.autoload()
        },
        computed: {

            /*
             * Фильтрация таблицы по поиску валюты
             */
            filteredTableList: function () {

                let result = []
                let searchData = this.fieldModel
                let currentData = this.tableData[this.currentTableItem].rows

                if (searchData !== '') { // если в строке поиска что-то есть
                    currentData.filter(function (element) {
                        element.content.filter(function (item) {
                            if (item.type === 'currency' && item.title.toLowerCase().includes(searchData.toLowerCase())) {
                                result.push(element)
                            }
                        })
                    })
                } else { // Если строка поиска пуста
                    currentData.filter(function (element) {
                        result.push(element)
                    })
                }

                return result
            }
        }
    }
</script>

<style lang="scss">
    @import "AvailableCurrencies";
</style>
