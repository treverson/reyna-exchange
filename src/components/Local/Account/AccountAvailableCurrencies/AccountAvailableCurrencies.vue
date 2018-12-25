<template>
    <div class="AccountAvailableCurrencies">
        <account-primary-section class="AccountAvailableCurrencies__section">

            <!-- header -->
            <account-primary-header class="AccountAvailableCurrencies__header">
                {{ title }}
            </account-primary-header><!-- header end -->

            <!-- filter -->
            <div class="AccountAvailableCurrencies__filter">

                <!-- tabs -->
                <div v-for="tab in data" v-bind:key="tab.id" class="AccountAvailableCurrencies__tabs">
                    <button :class="setTabObjectClass(tab.id)" @click="changeCurrentTab(tab.id)">
                        {{ tab.categoryName }}
                    </button>
                </div><!-- tabs end -->

                <!-- search -->
                <div class="AccountAvailableCurrencies__search">
                    <input v-model="search" type="text" placeholder="Search for currency" class="AccountAvailableCurrencies__field">
                </div><!-- search end -->

            </div><!-- filter end -->

            <!-- content -->
            <div v-for="item in data" v-bind:key="item.id" v-show="item.id === currentTab" class="AccountAvailableCurrencies__content">

                <div class="AccountAvailableCurrencies__inner">
                    <!-- table header -->
                    <div class="AccountAvailableCurrencies__table-header">
                        <div class="AccountAvailableCurrencies__wrapper">

                            <table class="AccountAvailableCurrencies__table">
                                <tr>
                                    <th v-for="headItem in item.tableHead" v-bind:key="headItem.id" class="AccountAvailableCurrencies__headItem" :style="setHeadItemStyle(headItem)">
                                        {{ headItem.title }}
                                    </th>
                                </tr>
                            </table>

                        </div>
                    </div><!-- table header end -->

                    <!-- table content -->
                    <div class="AccountAvailableCurrencies__table-content" v-bar>
                        <div class="AccountAvailableCurrencies__wrapper">

                            <table class="AccountAvailableCurrencies__table">

                                <tr v-for="row in filteredTableList" v-bind:key="row.id" @click="setRowSelectable(row.id)" :class="setBodyRowClass(row)">

                                    <th v-for="bodyItem in row.content" v-bind:key="bodyItem.id" class="AccountAvailableCurrencies__tableColumn" :style="{ width: bodyItem.width }">

                                        <template v-if="bodyItem.type === 'default'">
                                        <span class="AccountAvailableCurrencies__tableTitle">
                                            {{ bodyItem.title }}
                                        </span>
                                        </template>

                                        <template v-if="bodyItem.type === 'status'">
                                            <div class="AccountAvailableCurrencies__tableStatus">
                                            <span :class="setBodyItemStatusClass(bodyItem.status)">
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
                                            <div class="AccountAvailableCurrencies__tableCurrency">
                                                <div class="AccountAvailableCurrencies__tableCurrencyIcon"></div>
                                                <span class="AccountAvailableCurrencies__tableCurrencyTitle">
                                                {{ bodyItem.title }}
                                            </span>
                                            </div>
                                        </template>

                                        <template v-else-if="bodyItem.type === 'price'">
                                            <div class="AccountAvailableCurrencies__tablePrice" :style="{ justifyContent: bodyItem.priceAlign }">
                                            <span class="AccountAvailableCurrencies__tablePriceContent">
                                                {{ bodyItem.price }}
                                            </span>
                                                <span class="AccountAvailableCurrencies__tablePriceConvert">
                                                {{ bodyItem.convertPrice }}
                                            </span>
                                            </div>
                                        </template>

                                        <template v-else-if="bodyItem.type === 'change'">
                                            <div class="AccountAvailableCurrencies__tableChange" :class="['available-currencies__table-change']">
                                            <span :class="setBodyItemChangeClass(bodyItem.isGood)">
                                                {{ bodyItem.percent }}
                                            </span>
                                            </div>
                                        </template>

                                        <template v-else-if="bodyItem.type === 'volume'">
                                            <div class="AccountAvailableCurrencies__tableVolume">
                                            <span class="AccountAvailableCurrencies__tableVolumeContent">
                                                {{ bodyItem.volume }}
                                            </span>
                                            </div>
                                        </template>

                                        <template v-else-if="bodyItem.type === 'type'">
                                            <div class="AccountAvailableCurrencies__tableType">
                                                <template v-if="bodyItem.isSale === true">
                                                    <span class="AccountAvailableCurrencies__tableTypeContent AccountAvailableCurrencies__tableTypeContent_Sell">
                                                        Sell
                                                    </span>
                                                </template>
                                                <template v-else-if="bodyItem.isSale === false">
                                                    <span class="AccountAvailableCurrencies__tableTypeContent AccountAvailableCurrencies__tableTypeContent_Buy">
                                                        Buy
                                                    </span>
                                                </template>
                                            </div>
                                        </template>

                                        <template v-else-if="bodyItem.type === 'date'">
                                            <div class="AccountAvailableCurrencies__tableDate">
                                                <span class="AccountAvailableCurrencies__tableDateContent">
                                                    {{ bodyItem.content }}
                                                </span>
                                            </div>
                                        </template>

                                        <template v-else-if="bodyItem.type === 'cryptoCurrency'">
                                            <div class="AccountAvailableCurrencies__tableCryptoCurrency" :style="{ textAlign: bodyItem.align }">
                                                <span class="AccountAvailableCurrencies__tableCryptoCurrencyContent">
                                                    {{ bodyItem.content }}
                                                    <span>
                                                        {{ bodyItem.currencyType }}
                                                    </span>
                                                </span>
                                            </div>
                                        </template>

                                    </th>

                                    <!-- actions -->
                                    <th v-if="toggleActions === true" class="AccountAvailableCurrencies__tableColumn">
                                        <div class="AccountAvailableCurrencies__tableActions">
                                            <button class="AccountAvailableCurrencies__tableAction AccountAvailableCurrencies__tableAction_typeBuy">
                                                Buy
                                            </button>
                                            <button class="AccountAvailableCurrencies__tableAction AccountAvailableCurrencies__tableAction_typeSell">
                                                Sell
                                            </button>
                                            <button class="AccountAvailableCurrencies__tableComparison">
                                                <span class="icon-advanced-view"></span>
                                            </button>
                                        </div>
                                    </th>
                                    <!-- actions end -->

                                </tr>

                            </table>

                        </div>
                    </div><!-- table content end -->
                </div>

            </div><!-- content end -->

        </account-primary-section>
    </div>
</template>

<script>
    import AccountPrimarySection from "@/components/Local/Account/AccountPrimarySection/AccountPrimarySection";
    import AccountPrimaryHeader from "@/components/Local/Account/AccountPrimarySection/component/AccountPrimaryHeader/AccountPrimaryHeader";
    export default {
        name: "AccountAvailableCurrencies",
        components: {AccountPrimaryHeader, AccountPrimarySection},
        props: {
            title: {
                type: String,
                required: true
            },
            data: {
                type: Array,
                required: true
            },
            toggleActions: {
                type: Boolean,
                required: true
            }
        },
        data () {
            return {
                search: '',
                currentTab: 0,
                objectData: this.data
            }
        },
        methods: {
            setTabObjectClass: function (id) {
                return {
                    'AccountAvailableCurrencies__tab': true,
                    'AccountAvailableCurrencies__tab_Active': this.currentTab === id
                }
            },
            changeCurrentTab: function (id) {
                this.currentTab = id
            },
            setHeadItemStyle: function (array) {
                return {
                    width: array.width,
                    textAlign: array.align
                }
            },
            setBodyItemStatusClass: function (id) {
                return {
                    'AccountAvailableCurrencies__tableStatusTitle': true,
                    'AccountAvailableCurrencies__tableStatus__Close': id === 0,
                    'AccountAvailableCurrencies__tableStatus__Open': id === 1,
                    'AccountAvailableCurrencies__tableStatus__Pending': id === 2
                }
            },
            setBodyItemChangeClass: function (boolean) {
                return {
                    'AccountAvailableCurrencies__tableChangePercent': true,
                    'AccountAvailableCurrencies__tableChangePercent_Good': boolean === true,
                    'AccountAvailableCurrencies__tableChangePercent_Bad': boolean === false
                }
            },
            setRowSelectable: function (id) {
                if ('selected' in this.objectData[this.currentTab].rows[id]) {
                    this.objectData[this.currentTab].rows[id].selected = !this.objectData[this.currentTab].rows[id].selected
                }
            },
            setBodyRowClass: function (array) {

                let objectClass = []

                objectClass.push({ 'AccountAvailableCurrencies__tableRow': true })

                if ('selected' in array) {
                    objectClass.push({ 'AccountAvailableCurrencies__tableRow_Selectable': true })

                    if (array.selected === true) {
                        objectClass.push({ 'AccountAvailableCurrencies__tableRow_Selected': true })
                    }
                }

                return objectClass
            }
        },
        computed: {
            filteredTableList: function () {

                let result = []
                let searchData = this.search
                let currentData = this.objectData[this.currentTab].rows

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
    @import "AccountAvailableCurrencies";
</style>
