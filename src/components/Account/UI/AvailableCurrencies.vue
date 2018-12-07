<template>
    <div class="available-currencies">
        <h3 class="available-currencies__header">Available currencies</h3>
        <div class="available-currencies__filter">
            <ul class="available-currencies__menu">

                <!-- menu item -->
                <li
                        v-for="item in tableData"
                        v-bind:key="item.id"
                        class="available-currencies__item"
                >

                    <!-- menu button -->
                    <button
                            @click="changeCurrentTableItem(item.id)"
                            :class="{ 'available-currencies__button': true, 'available-currencies__button--isCurrent-yes': item.id === currentTableItem }"
                    >{{ item.categoryName }}</button>
                    <!-- menu button end -->

                </li>
                <!-- menu item end -->


            </ul>
            <div class="available-currencies__search">
                <input type="text" placeholder="Search for currency" class="available-currencies__field">
            </div>
        </div>


        <!-- content -->
        <div
                v-for="item in tableData"
                v-bind:key="item.id"
                v-show="item.id === currentTableItem"
                class="available-currencies__content">

            <div class="available-currencies__inner">
                <!-- table -->
                <table class="available-currencies__table" cellspacing="0" border="0" cellpadding="0">

                    <!-- head -->
                    <thead class="available-currencies__head">

                        <!-- row -->
                        <tr class="available-currencies__row">

                            <!-- item -->
                            <th
                                    v-for="headItem in item.tableHead" v-bind:key="headItem.id"
                                    class="available-currencies__column available-currencies__table-heading"
                                    :style="{ width: headItem.width, textAlign: headItem.align }"
                            >{{ headItem.title }}</th>
                            <!-- item end -->

                        </tr>
                        <!-- row end -->

                    </thead>
                    <!-- head end -->

                    <!-- body -->
                    <tbody class="available-currencies__body">

                        <!-- row -->
                        <tr
                                v-for="row in item.rows"
                                v-bind:key="row.id"
                                class="available-currencies__row"
                        >

                            <!-- item -->
                            <th
                                    v-for="bodyItem in row.content"
                                    v-bind:key="bodyItem.id"
                                    class="available-currencies__column available-currencies__table-item"
                            >
                                <template v-if="bodyItem.type === 'currency'">
                                    <div class="available-currencies__table-currency">
                                        <div class="available-currencies__table-currency-icon"></div>
                                        <span class="available-currencies__table-currency-title">{{ bodyItem.title }}</span>
                                    </div>
                                </template>
                                <template v-else-if="bodyItem.type === 'price'">
                                    <div class="available-currencies__table-price">
                                        <span class="available-currencies__table-price-content">{{ bodyItem.price }}</span>
                                        <span class="available-currencies__table-price-convertPrice">{{ bodyItem.convertPrice }}</span>
                                    </div>
                                </template>
                                <template v-else-if="bodyItem.type === 'change'">
                                    <div class="available-currencies__table-change">
                                        <span
                                                :class="{ 'available-currencies__table-change-percent': true, 'available-currencies__table-change-percent--type-good': bodyItem.isGood === true, 'available-currencies__table-change-percent--type-bad': bodyItem.isGood === false }"
                                        >{{ bodyItem.percent }}</span>
                                    </div>
                                </template>
                                <template v-else-if="bodyItem.type === 'volume'">
                                    <div class="available-currencies__table-volume">
                                        <span class="available-currencies__table-volume-content">
                                            {{ bodyItem.volume }}
                                        </span>
                                    </div>
                                </template>
                            </th>
                            <!-- item end -->

                            <!-- actions -->
                            <th class="available-currencies__column available-currencies__table-item">
                                <div class="available-currencies__table-actions">
                                    <button class="available-currencies__table-action available-currencies__table-action--type-buy">Buy</button>
                                    <button class="available-currencies__table-action available-currencies__table-action--type-sell">Sell</button>
                                    <button class="available-currencies__table-comparison">
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
        data () {
            return {
                currentTableItem: 0,
                tableData: [
                    {
                        id: 0,
                        categoryName: 'TRX',
                        tableHead: [
                            {
                                id: 0,
                                width: '134px',
                                title: 'Currency'
                            },
                            {
                                id: 1,
                                width: '190px',
                                title: 'Price'
                            },
                            {
                                id: 2,
                                width: '112px',
                                title: 'Change'
                            },
                            {
                                id: 3,
                                width: '107px',
                                title: 'Volume 24h (TRX)'
                            },
                            {
                                id: 4,
                                width: '106px',
                                title: 'Actions',
                                align: 'right'
                            }
                        ],
                        rows: [
                            {
                                id: 0,
                                content: [
                                    {
                                        id: 0,
                                        type: 'currency',
                                        title: 'dice'
                                    },
                                    {
                                        id: 1,
                                        type: 'price',
                                        price: '110.94',
                                        convertPrice: '0.07407600'
                                    },
                                    {
                                        id: 2,
                                        type: 'change',
                                        percent: '+3.66 %',
                                        isGood: true
                                    },
                                    {
                                        id: 3,
                                        type: 'volume',
                                        volume: '14 255 360'
                                    }
                                ]
                            },
                            {
                                id: 1,
                                content: [
                                    {
                                        id: 0,
                                        type: 'currency',
                                        title: 'IGG'
                                    },
                                    {
                                        id: 1,
                                        type: 'price',
                                        price: '110.94',
                                        convertPrice: '0.07407600'
                                    },
                                    {
                                        id: 2,
                                        type: 'change',
                                        percent: '+3.66 %',
                                        isGood: true
                                    },
                                    {
                                        id: 3,
                                        type: 'volume',
                                        volume: '14 255 360'
                                    }
                                ]
                            },
                            {
                                id: 2,
                                content: [
                                    {
                                        id: 0,
                                        type: 'currency',
                                        title: 'ton'
                                    },
                                    {
                                        id: 1,
                                        type: 'price',
                                        price: '110.94',
                                        convertPrice: '0.07407600'
                                    },
                                    {
                                        id: 2,
                                        type: 'change',
                                        percent: '-18.52%',
                                        isGood: false
                                    },
                                    {
                                        id: 3,
                                        type: 'volume',
                                        volume: '14 255 360'
                                    }
                                ]
                            },
                            {
                                id: 2,
                                content: [
                                    {
                                        id: 0,
                                        type: 'currency',
                                        title: 'TRZ'
                                    },
                                    {
                                        id: 1,
                                        type: 'price',
                                        price: '110.94',
                                        convertPrice: '0.07407600'
                                    },
                                    {
                                        id: 2,
                                        type: 'change',
                                        percent: '+3.66 %',
                                        isGood: true
                                    },
                                    {
                                        id: 3,
                                        type: 'volume',
                                        volume: '14 255 360'
                                    }
                                ]
                            },
                            {
                                id: 3,
                                content: [
                                    {
                                        id: 0,
                                        type: 'currency',
                                        title: 'WIN'
                                    },
                                    {
                                        id: 1,
                                        type: 'price',
                                        price: '110.94',
                                        convertPrice: '0.07407600'
                                    },
                                    {
                                        id: 2,
                                        type: 'change',
                                        percent: '-17.36%',
                                        isGood: false
                                    },
                                    {
                                        id: 3,
                                        type: 'volume',
                                        volume: '14 255 360'
                                    }
                                ]
                            },
                            {
                                id: 4,
                                content: [
                                    {
                                        id: 0,
                                        type: 'currency',
                                        title: 'TWX'
                                    },
                                    {
                                        id: 1,
                                        type: 'price',
                                        price: '110.94',
                                        convertPrice: '0.07407600'
                                    },
                                    {
                                        id: 2,
                                        type: 'change',
                                        percent: '-14.81%',
                                        isGood: false
                                    },
                                    {
                                        id: 3,
                                        type: 'volume',
                                        volume: '14 255 360'
                                    }
                                ]
                            },
                            {
                                id: 5,
                                content: [
                                    {
                                        id: 0,
                                        type: 'currency',
                                        title: 'TWM'
                                    },
                                    {
                                        id: 1,
                                        type: 'price',
                                        price: '110.94',
                                        convertPrice: '0.07407600'
                                    },
                                    {
                                        id: 2,
                                        type: 'change',
                                        percent: '+3.66 %',
                                        isGood: true
                                    },
                                    {
                                        id: 3,
                                        type: 'volume',
                                        volume: '14 255 360'
                                    }
                                ]
                            },
                            {
                                id: 6,
                                content: [
                                    {
                                        id: 0,
                                        type: 'currency',
                                        title: 'dice'
                                    },
                                    {
                                        id: 1,
                                        type: 'price',
                                        price: '110.94',
                                        convertPrice: '0.07407600'
                                    },
                                    {
                                        id: 2,
                                        type: 'change',
                                        percent: '+3.66 %',
                                        isGood: true
                                    },
                                    {
                                        id: 3,
                                        type: 'volume',
                                        volume: '14 255 360'
                                    }
                                ]
                            },
                            {
                                id: 7,
                                content: [
                                    {
                                        id: 0,
                                        type: 'currency',
                                        title: 'IGG'
                                    },
                                    {
                                        id: 1,
                                        type: 'price',
                                        price: '110.94',
                                        convertPrice: '0.07407600'
                                    },
                                    {
                                        id: 2,
                                        type: 'change',
                                        percent: '+3.66 %',
                                        isGood: true
                                    },
                                    {
                                        id: 3,
                                        type: 'volume',
                                        volume: '14 255 360'
                                    }
                                ]
                            },
                            {
                                id: 8,
                                content: [
                                    {
                                        id: 0,
                                        type: 'currency',
                                        title: 'TRZ'
                                    },
                                    {
                                        id: 1,
                                        type: 'price',
                                        price: '110.94',
                                        convertPrice: '0.07407600'
                                    },
                                    {
                                        id: 2,
                                        type: 'change',
                                        percent: '-36.14%',
                                        isGood: false
                                    },
                                    {
                                        id: 3,
                                        type: 'volume',
                                        volume: '14 255 360'
                                    }
                                ]
                            },
                            {
                                id: 9,
                                content: [
                                    {
                                        id: 0,
                                        type: 'currency',
                                        title: 'WIN'
                                    },
                                    {
                                        id: 1,
                                        type: 'price',
                                        price: '110.94',
                                        convertPrice: '0.07407600'
                                    },
                                    {
                                        id: 2,
                                        type: 'change',
                                        percent: '+3.66 %',
                                        isGood: true
                                    },
                                    {
                                        id: 3,
                                        type: 'volume',
                                        volume: '14 255 360'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: 1,
                        categoryName: 'REY',
                        tableHead: [
                            {
                                id: 0,
                                width: '134px',
                                title: 'Currency'
                            },
                            {
                                id: 1,
                                width: '190px',
                                title: 'Price'
                            },
                            {
                                id: 2,
                                width: '112px',
                                title: 'Change'
                            },
                            {
                                id: 3,
                                width: '107px',
                                title: 'Volume 24h (TRX)'
                            },
                            {
                                id: 4,
                                width: '106px',
                                title: 'Actions',
                                align: 'right'
                            }
                        ],
                        rows: [
                            {
                                id: 0,
                                content: [
                                    {
                                        id: 0,
                                        type: 'currency',
                                        title: 'dice1'
                                    },
                                    {
                                        id: 1,
                                        type: 'price',
                                        price: '110.94',
                                        convertPrice: '0.07407600'
                                    },
                                    {
                                        id: 2,
                                        type: 'change',
                                        percent: '+3.66 %',
                                        isGood: true
                                    },
                                    {
                                        id: 3,
                                        type: 'volume',
                                        volume: '14 255 360'
                                    }
                                ]
                            },
                            {
                                id: 1,
                                content: [
                                    {
                                        id: 0,
                                        type: 'currency',
                                        title: 'IGG'
                                    },
                                    {
                                        id: 1,
                                        type: 'price',
                                        price: '110.94',
                                        convertPrice: '0.07407600'
                                    },
                                    {
                                        id: 2,
                                        type: 'change',
                                        percent: '+3.66 %',
                                        isGood: true
                                    },
                                    {
                                        id: 3,
                                        type: 'volume',
                                        volume: '14 255 360'
                                    }
                                ]
                            },
                            {
                                id: 2,
                                content: [
                                    {
                                        id: 0,
                                        type: 'currency',
                                        title: 'ton'
                                    },
                                    {
                                        id: 1,
                                        type: 'price',
                                        price: '110.94',
                                        convertPrice: '0.07407600'
                                    },
                                    {
                                        id: 2,
                                        type: 'change',
                                        percent: '-18.52%',
                                        isGood: false
                                    },
                                    {
                                        id: 3,
                                        type: 'volume',
                                        volume: '14 255 360'
                                    }
                                ]
                            },
                            {
                                id: 2,
                                content: [
                                    {
                                        id: 0,
                                        type: 'currency',
                                        title: 'TRZ'
                                    },
                                    {
                                        id: 1,
                                        type: 'price',
                                        price: '110.94',
                                        convertPrice: '0.07407600'
                                    },
                                    {
                                        id: 2,
                                        type: 'change',
                                        percent: '+3.66 %',
                                        isGood: true
                                    },
                                    {
                                        id: 3,
                                        type: 'volume',
                                        volume: '14 255 360'
                                    }
                                ]
                            },
                            {
                                id: 3,
                                content: [
                                    {
                                        id: 0,
                                        type: 'currency',
                                        title: 'WIN'
                                    },
                                    {
                                        id: 1,
                                        type: 'price',
                                        price: '110.94',
                                        convertPrice: '0.07407600'
                                    },
                                    {
                                        id: 2,
                                        type: 'change',
                                        percent: '-17.36%',
                                        isGood: false
                                    },
                                    {
                                        id: 3,
                                        type: 'volume',
                                        volume: '14 255 360'
                                    }
                                ]
                            },
                            {
                                id: 4,
                                content: [
                                    {
                                        id: 0,
                                        type: 'currency',
                                        title: 'TWX'
                                    },
                                    {
                                        id: 1,
                                        type: 'price',
                                        price: '110.94',
                                        convertPrice: '0.07407600'
                                    },
                                    {
                                        id: 2,
                                        type: 'change',
                                        percent: '-14.81%',
                                        isGood: false
                                    },
                                    {
                                        id: 3,
                                        type: 'volume',
                                        volume: '14 255 360'
                                    }
                                ]
                            },
                            {
                                id: 5,
                                content: [
                                    {
                                        id: 0,
                                        type: 'currency',
                                        title: 'TWM'
                                    },
                                    {
                                        id: 1,
                                        type: 'price',
                                        price: '110.94',
                                        convertPrice: '0.07407600'
                                    },
                                    {
                                        id: 2,
                                        type: 'change',
                                        percent: '+3.66 %',
                                        isGood: true
                                    },
                                    {
                                        id: 3,
                                        type: 'volume',
                                        volume: '14 255 360'
                                    }
                                ]
                            },
                            {
                                id: 6,
                                content: [
                                    {
                                        id: 0,
                                        type: 'currency',
                                        title: 'dice'
                                    },
                                    {
                                        id: 1,
                                        type: 'price',
                                        price: '110.94',
                                        convertPrice: '0.07407600'
                                    },
                                    {
                                        id: 2,
                                        type: 'change',
                                        percent: '+3.66 %',
                                        isGood: true
                                    },
                                    {
                                        id: 3,
                                        type: 'volume',
                                        volume: '14 255 360'
                                    }
                                ]
                            },
                            {
                                id: 7,
                                content: [
                                    {
                                        id: 0,
                                        type: 'currency',
                                        title: 'IGG'
                                    },
                                    {
                                        id: 1,
                                        type: 'price',
                                        price: '110.94',
                                        convertPrice: '0.07407600'
                                    },
                                    {
                                        id: 2,
                                        type: 'change',
                                        percent: '+3.66 %',
                                        isGood: true
                                    },
                                    {
                                        id: 3,
                                        type: 'volume',
                                        volume: '14 255 360'
                                    }
                                ]
                            },
                            {
                                id: 8,
                                content: [
                                    {
                                        id: 0,
                                        type: 'currency',
                                        title: 'TRZ'
                                    },
                                    {
                                        id: 1,
                                        type: 'price',
                                        price: '110.94',
                                        convertPrice: '0.07407600'
                                    },
                                    {
                                        id: 2,
                                        type: 'change',
                                        percent: '-36.14%',
                                        isGood: false
                                    },
                                    {
                                        id: 3,
                                        type: 'volume',
                                        volume: '14 255 360'
                                    }
                                ]
                            },
                            {
                                id: 9,
                                content: [
                                    {
                                        id: 0,
                                        type: 'currency',
                                        title: 'WIN'
                                    },
                                    {
                                        id: 1,
                                        type: 'price',
                                        price: '110.94',
                                        convertPrice: '0.07407600'
                                    },
                                    {
                                        id: 2,
                                        type: 'change',
                                        percent: '+3.66 %',
                                        isGood: true
                                    },
                                    {
                                        id: 3,
                                        type: 'volume',
                                        volume: '14 255 360'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: 2,
                        categoryName: 'SEED',
                        tableHead: [
                            {
                                id: 0,
                                width: '134px',
                                title: 'Currency'
                            },
                            {
                                id: 1,
                                width: '190px',
                                title: 'Price'
                            },
                            {
                                id: 2,
                                width: '112px',
                                title: 'Change'
                            },
                            {
                                id: 3,
                                width: '107px',
                                title: 'Volume 24h (TRX)'
                            },
                            {
                                id: 4,
                                width: '106px',
                                title: 'Actions',
                                align: 'right'
                            }
                        ],
                        rows: [
                            {
                                id: 0,
                                content: [
                                    {
                                        id: 0,
                                        type: 'currency',
                                        title: 'dice2'
                                    },
                                    {
                                        id: 1,
                                        type: 'price',
                                        price: '110.94',
                                        convertPrice: '0.07407600'
                                    },
                                    {
                                        id: 2,
                                        type: 'change',
                                        percent: '+3.66 %',
                                        isGood: true
                                    },
                                    {
                                        id: 3,
                                        type: 'volume',
                                        volume: '14 255 360'
                                    }
                                ]
                            },
                            {
                                id: 1,
                                content: [
                                    {
                                        id: 0,
                                        type: 'currency',
                                        title: 'IGG'
                                    },
                                    {
                                        id: 1,
                                        type: 'price',
                                        price: '110.94',
                                        convertPrice: '0.07407600'
                                    },
                                    {
                                        id: 2,
                                        type: 'change',
                                        percent: '+3.66 %',
                                        isGood: true
                                    },
                                    {
                                        id: 3,
                                        type: 'volume',
                                        volume: '14 255 360'
                                    }
                                ]
                            },
                            {
                                id: 2,
                                content: [
                                    {
                                        id: 0,
                                        type: 'currency',
                                        title: 'ton'
                                    },
                                    {
                                        id: 1,
                                        type: 'price',
                                        price: '110.94',
                                        convertPrice: '0.07407600'
                                    },
                                    {
                                        id: 2,
                                        type: 'change',
                                        percent: '-18.52%',
                                        isGood: false
                                    },
                                    {
                                        id: 3,
                                        type: 'volume',
                                        volume: '14 255 360'
                                    }
                                ]
                            },
                            {
                                id: 2,
                                content: [
                                    {
                                        id: 0,
                                        type: 'currency',
                                        title: 'TRZ'
                                    },
                                    {
                                        id: 1,
                                        type: 'price',
                                        price: '110.94',
                                        convertPrice: '0.07407600'
                                    },
                                    {
                                        id: 2,
                                        type: 'change',
                                        percent: '+3.66 %',
                                        isGood: true
                                    },
                                    {
                                        id: 3,
                                        type: 'volume',
                                        volume: '14 255 360'
                                    }
                                ]
                            },
                            {
                                id: 3,
                                content: [
                                    {
                                        id: 0,
                                        type: 'currency',
                                        title: 'WIN'
                                    },
                                    {
                                        id: 1,
                                        type: 'price',
                                        price: '110.94',
                                        convertPrice: '0.07407600'
                                    },
                                    {
                                        id: 2,
                                        type: 'change',
                                        percent: '-17.36%',
                                        isGood: false
                                    },
                                    {
                                        id: 3,
                                        type: 'volume',
                                        volume: '14 255 360'
                                    }
                                ]
                            },
                            {
                                id: 4,
                                content: [
                                    {
                                        id: 0,
                                        type: 'currency',
                                        title: 'TWX'
                                    },
                                    {
                                        id: 1,
                                        type: 'price',
                                        price: '110.94',
                                        convertPrice: '0.07407600'
                                    },
                                    {
                                        id: 2,
                                        type: 'change',
                                        percent: '-14.81%',
                                        isGood: false
                                    },
                                    {
                                        id: 3,
                                        type: 'volume',
                                        volume: '14 255 360'
                                    }
                                ]
                            },
                            {
                                id: 5,
                                content: [
                                    {
                                        id: 0,
                                        type: 'currency',
                                        title: 'TWM'
                                    },
                                    {
                                        id: 1,
                                        type: 'price',
                                        price: '110.94',
                                        convertPrice: '0.07407600'
                                    },
                                    {
                                        id: 2,
                                        type: 'change',
                                        percent: '+3.66 %',
                                        isGood: true
                                    },
                                    {
                                        id: 3,
                                        type: 'volume',
                                        volume: '14 255 360'
                                    }
                                ]
                            },
                            {
                                id: 6,
                                content: [
                                    {
                                        id: 0,
                                        type: 'currency',
                                        title: 'dice'
                                    },
                                    {
                                        id: 1,
                                        type: 'price',
                                        price: '110.94',
                                        convertPrice: '0.07407600'
                                    },
                                    {
                                        id: 2,
                                        type: 'change',
                                        percent: '+3.66 %',
                                        isGood: true
                                    },
                                    {
                                        id: 3,
                                        type: 'volume',
                                        volume: '14 255 360'
                                    }
                                ]
                            },
                            {
                                id: 7,
                                content: [
                                    {
                                        id: 0,
                                        type: 'currency',
                                        title: 'IGG'
                                    },
                                    {
                                        id: 1,
                                        type: 'price',
                                        price: '110.94',
                                        convertPrice: '0.07407600'
                                    },
                                    {
                                        id: 2,
                                        type: 'change',
                                        percent: '+3.66 %',
                                        isGood: true
                                    },
                                    {
                                        id: 3,
                                        type: 'volume',
                                        volume: '14 255 360'
                                    }
                                ]
                            },
                            {
                                id: 8,
                                content: [
                                    {
                                        id: 0,
                                        type: 'currency',
                                        title: 'TRZ'
                                    },
                                    {
                                        id: 1,
                                        type: 'price',
                                        price: '110.94',
                                        convertPrice: '0.07407600'
                                    },
                                    {
                                        id: 2,
                                        type: 'change',
                                        percent: '-36.14%',
                                        isGood: false
                                    },
                                    {
                                        id: 3,
                                        type: 'volume',
                                        volume: '14 255 360'
                                    }
                                ]
                            },
                            {
                                id: 9,
                                content: [
                                    {
                                        id: 0,
                                        type: 'currency',
                                        title: 'WIN'
                                    },
                                    {
                                        id: 1,
                                        type: 'price',
                                        price: '110.94',
                                        convertPrice: '0.07407600'
                                    },
                                    {
                                        id: 2,
                                        type: 'change',
                                        percent: '+3.66 %',
                                        isGood: true
                                    },
                                    {
                                        id: 3,
                                        type: 'volume',
                                        volume: '14 255 360'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: 3,
                        categoryName: 'LWH',
                        tableHead: [
                            {
                                id: 0,
                                width: '134px',
                                title: 'Currency'
                            },
                            {
                                id: 1,
                                width: '190px',
                                title: 'Price'
                            },
                            {
                                id: 2,
                                width: '112px',
                                title: 'Change'
                            },
                            {
                                id: 3,
                                width: '107px',
                                title: 'Volume 24h (TRX)'
                            },
                            {
                                id: 4,
                                width: '106px',
                                title: 'Actions',
                                align: 'right'
                            }
                        ],
                        rows: [
                            {
                                id: 0,
                                content: [
                                    {
                                        id: 0,
                                        type: 'currency',
                                        title: 'dice3'
                                    },
                                    {
                                        id: 1,
                                        type: 'price',
                                        price: '110.94',
                                        convertPrice: '0.07407600'
                                    },
                                    {
                                        id: 2,
                                        type: 'change',
                                        percent: '+3.66 %',
                                        isGood: true
                                    },
                                    {
                                        id: 3,
                                        type: 'volume',
                                        volume: '14 255 360'
                                    }
                                ]
                            },
                            {
                                id: 1,
                                content: [
                                    {
                                        id: 0,
                                        type: 'currency',
                                        title: 'IGG'
                                    },
                                    {
                                        id: 1,
                                        type: 'price',
                                        price: '110.94',
                                        convertPrice: '0.07407600'
                                    },
                                    {
                                        id: 2,
                                        type: 'change',
                                        percent: '+3.66 %',
                                        isGood: true
                                    },
                                    {
                                        id: 3,
                                        type: 'volume',
                                        volume: '14 255 360'
                                    }
                                ]
                            },
                            {
                                id: 2,
                                content: [
                                    {
                                        id: 0,
                                        type: 'currency',
                                        title: 'ton'
                                    },
                                    {
                                        id: 1,
                                        type: 'price',
                                        price: '110.94',
                                        convertPrice: '0.07407600'
                                    },
                                    {
                                        id: 2,
                                        type: 'change',
                                        percent: '-18.52%',
                                        isGood: false
                                    },
                                    {
                                        id: 3,
                                        type: 'volume',
                                        volume: '14 255 360'
                                    }
                                ]
                            },
                            {
                                id: 2,
                                content: [
                                    {
                                        id: 0,
                                        type: 'currency',
                                        title: 'TRZ'
                                    },
                                    {
                                        id: 1,
                                        type: 'price',
                                        price: '110.94',
                                        convertPrice: '0.07407600'
                                    },
                                    {
                                        id: 2,
                                        type: 'change',
                                        percent: '+3.66 %',
                                        isGood: true
                                    },
                                    {
                                        id: 3,
                                        type: 'volume',
                                        volume: '14 255 360'
                                    }
                                ]
                            },
                            {
                                id: 3,
                                content: [
                                    {
                                        id: 0,
                                        type: 'currency',
                                        title: 'WIN'
                                    },
                                    {
                                        id: 1,
                                        type: 'price',
                                        price: '110.94',
                                        convertPrice: '0.07407600'
                                    },
                                    {
                                        id: 2,
                                        type: 'change',
                                        percent: '-17.36%',
                                        isGood: false
                                    },
                                    {
                                        id: 3,
                                        type: 'volume',
                                        volume: '14 255 360'
                                    }
                                ]
                            },
                            {
                                id: 4,
                                content: [
                                    {
                                        id: 0,
                                        type: 'currency',
                                        title: 'TWX'
                                    },
                                    {
                                        id: 1,
                                        type: 'price',
                                        price: '110.94',
                                        convertPrice: '0.07407600'
                                    },
                                    {
                                        id: 2,
                                        type: 'change',
                                        percent: '-14.81%',
                                        isGood: false
                                    },
                                    {
                                        id: 3,
                                        type: 'volume',
                                        volume: '14 255 360'
                                    }
                                ]
                            },
                            {
                                id: 5,
                                content: [
                                    {
                                        id: 0,
                                        type: 'currency',
                                        title: 'TWM'
                                    },
                                    {
                                        id: 1,
                                        type: 'price',
                                        price: '110.94',
                                        convertPrice: '0.07407600'
                                    },
                                    {
                                        id: 2,
                                        type: 'change',
                                        percent: '+3.66 %',
                                        isGood: true
                                    },
                                    {
                                        id: 3,
                                        type: 'volume',
                                        volume: '14 255 360'
                                    }
                                ]
                            },
                            {
                                id: 6,
                                content: [
                                    {
                                        id: 0,
                                        type: 'currency',
                                        title: 'dice'
                                    },
                                    {
                                        id: 1,
                                        type: 'price',
                                        price: '110.94',
                                        convertPrice: '0.07407600'
                                    },
                                    {
                                        id: 2,
                                        type: 'change',
                                        percent: '+3.66 %',
                                        isGood: true
                                    },
                                    {
                                        id: 3,
                                        type: 'volume',
                                        volume: '14 255 360'
                                    }
                                ]
                            },
                            {
                                id: 7,
                                content: [
                                    {
                                        id: 0,
                                        type: 'currency',
                                        title: 'IGG'
                                    },
                                    {
                                        id: 1,
                                        type: 'price',
                                        price: '110.94',
                                        convertPrice: '0.07407600'
                                    },
                                    {
                                        id: 2,
                                        type: 'change',
                                        percent: '+3.66 %',
                                        isGood: true
                                    },
                                    {
                                        id: 3,
                                        type: 'volume',
                                        volume: '14 255 360'
                                    }
                                ]
                            },
                            {
                                id: 8,
                                content: [
                                    {
                                        id: 0,
                                        type: 'currency',
                                        title: 'TRZ'
                                    },
                                    {
                                        id: 1,
                                        type: 'price',
                                        price: '110.94',
                                        convertPrice: '0.07407600'
                                    },
                                    {
                                        id: 2,
                                        type: 'change',
                                        percent: '-36.14%',
                                        isGood: false
                                    },
                                    {
                                        id: 3,
                                        type: 'volume',
                                        volume: '14 255 360'
                                    }
                                ]
                            },
                            {
                                id: 9,
                                content: [
                                    {
                                        id: 0,
                                        type: 'currency',
                                        title: 'WIN'
                                    },
                                    {
                                        id: 1,
                                        type: 'price',
                                        price: '110.94',
                                        convertPrice: '0.07407600'
                                    },
                                    {
                                        id: 2,
                                        type: 'change',
                                        percent: '+3.66 %',
                                        isGood: true
                                    },
                                    {
                                        id: 3,
                                        type: 'volume',
                                        volume: '14 255 360'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        methods: {
            changeCurrentTableItem: function (id) {
                this.currentTableItem = id
            }
        }
    }
</script>

<style lang="scss">
    .available-currencies {
        max-width: 712px;
        width: 100%;
    }

    .available-currencies__header {
        margin: 0;

        width: 100%;
        height: 50px;

        display: flex;
        align-items: center;

        padding: 0 19.5px;
        box-sizing: border-box;

        color: #000000;
        font-size: 14px;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: .3px;
        line-height: 16px;

        background-color: #fff;
    }

    .available-currencies__filter {
        width: 100%;
        height: 60px;
        background-color: #F5F5F5;

        padding-right: 20px;
        box-sizing: border-box;

        display: flex;
        align-items: center;
    }

    .available-currencies__menu {
        height: 100%;

        padding: 0;
        margin: 0;
        list-style: none;

        display: flex;
        align-items: center;
    }

    .available-currencies__item {
        height: 100%;
    }

    .available-currencies__button {
        height: 100%;

        padding: 0 21.5px;

        border: none;
        background-color: transparent;
        outline: none;
        cursor: pointer;

        color: #000000;
        font-size: 12px;
        line-height: 14px;
        letter-spacing: .3px;
        text-transform: uppercase;
    }

    .available-currencies__button--isCurrent-yes {
        color: #fff;
        background-color: #F65454;
    }

    .available-currencies__search {
        position: relative;
        max-width: 155px;
        width: 100%;

        margin-left: auto;

        &:before {
            position: absolute;

            top: 0;
            bottom: 0;
            left: 14px;

            display: flex;
            align-items: center;

            content: "\e905";
            font-family: 'icomoon';

            color: #F65454;
        }
    }

    .available-currencies__field {
        width: 100%;
        height: 30px;

        padding: 0 13px 0 38px;
        box-sizing: border-box;

        border-radius: 2px;
        border: none;

        outline: none;

        &:focus {
            &::placeholder {
                opacity: 0;
            }
        }

        &::placeholder {
            color: rgba(0, 0, 0, 0.4);
            font-size: 12px;
            line-height: 14px;

            transition: .15s ease;
        }
    }

    .available-currencies__content {
        width: 100%;
        height: 549px;

        background-color: #fff;
    }

    .available-currencies__table {
        width: 100%;
    }

    .available-currencies__table-heading {
        height: 42px;

        text-align: left;

        color: rgba(0, 0, 0, 0.5);
        font-size: 12px;
        font-weight: 500;
        line-height: 14px;

        border-bottom: 1px solid rgba(246, 84, 84, 0.17);
    }

    .available-currencies__row {
        .available-currencies__column {
            &:first-child {
                padding-left: 20px;
            }
            &:last-child {
                padding-right: 20px;
            }
        }
    }

    .available-currencies__table-currency {
        display: flex;
        align-items: center;
    }

    .available-currencies__table-currency-icon {
        width: 20px;
        height: 20px;

        margin-right: 14px;

        border-radius: 50%;
        background-color: #FAAFAF;
    }

    .available-currencies__table-currency-title {
        color: #000000;
        font-size: 14px;
        font-weight: 500;
        line-height: 16px;
    }

    .available-currencies__table-item {
        height: 45px;

        border-bottom: 1px solid rgba(246, 84, 84, 0.17);
    }

    .available-currencies__table-price {
        display: flex;
        align-items: center;
    }

    .available-currencies__table-price-content {
        color: #000000;
        font-size: 11px;
        font-weight: 500;
        line-height: 13px;
    }

    .available-currencies__table-price-convertPrice {
        color: rgba(0, 0, 0, 0.7);
        font-size: 11px;
        font-weight: 500;
        line-height: 13px;

        padding: 4px 9px;

        margin-left: 9px;

        background-color: #F5F5F5;
        border-radius: 2px;
    }

    .available-currencies__table-change {
        text-align: left;
    }

    .available-currencies__table-change-percent {
        font-size: 14px;
        font-weight: 500;
        line-height: 16px;

        text-align: left;
    }

    .available-currencies__table-change-percent--type-good {
        color: #2ED44D;
    }

    .available-currencies__table-change-percent--type-bad {
        color: #F65454;
    }

    .available-currencies__table-volume {
        text-align: left;
    }

    .available-currencies__table-volume-content {
        color: rgba(0, 0, 0, 0.85);
        font-size: 12px;
        font-weight: 500;
    }

    .available-currencies__table-actions {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .available-currencies__table-action {
        width: 30px;
        height: 17px;
        padding: 0 0 1px 0;
        line-height: 0;

        display: flex;
        align-items: center;
        justify-content: center;

        border: 1px solid transparent;
        background-color: transparent;

        color: #000000;
        font-size: 10px;
        text-transform: uppercase;

        margin-right: 7px;

        border-radius: 2px;

        outline: none;
        cursor: pointer;
    }

    .available-currencies__table-action--type-buy {
        border-color: #2ED44D;
    }

    .available-currencies__table-action--type-sell {
        border-color: #F65454;
    }

    .available-currencies__table-comparison {
        padding: 0;
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;

        color: rgba(12, 63, 183, 0.6);
    }
</style>
