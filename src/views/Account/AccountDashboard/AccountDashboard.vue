<template>
  <Page theme="account">
    <div :class="['account-dashboard']">
      <account-header />
        <div v-if="window.width <= 712" class="account__section-tabs">
          <div class="account__section-tabs-wrap">
            <button :class="{ 'account__section-tab': true, 'account__section-tab--isActive-yes': currentTab === 0 }" @click="changeCurrentTab(0)">Getting Start</button>
            <button :class="{ 'account__section-tab': true, 'account__section-tab--isActive-yes': currentTab === 1 }" @click="changeCurrentTab(1)">My funds</button>
            <button :class="{ 'account__section-tab': true, 'account__section-tab--isActive-yes': currentTab === 2 }" @click="changeCurrentTab(2)">Available currencies</button>
          </div>
        </div>
        <account-container>
          <div :class="['account-dashboard__grid']">
            <div v-if="getSectionVisible(0)" :class="['account-dashboard__item', 'account-dashboard__item--type-getting-start']">
              <getting-start />
            </div>
            <div v-if="getSectionVisible(1)" :class="['account-dashboard__item', 'account-dashboard__item--type-available-currencies']">
              <available-currencies table-name="Available currencies" :table-data="tableData" :toggle-actions="true" />
            </div>
            <div v-if="getSectionVisible(2)" :class="['account-dashboard__item', 'account-dashboard__item--type-my-funds']">
              <my-funds />
            </div>
          </div>
        </account-container>
      <account-footer />
    </div>
  </Page>
</template>

<script>
  import Page from '@/components/Core/Page/Page'
  import AccountHeader from '@/components/Account/Header/Header'
  import AccountFooter from '@/components/Account/Footer/Footer'
  import AccountContainer from '@/components/Account/AccountContainer/AccountContainer'
  import GettingStart from '@/components/Account/GettingStart/GettingStart'
  import AvailableCurrencies from '@/components/Account/AvailableCurrencies/AvailableCurrencies'
  import MyFunds from '@/components/Account/MyFunds/MyFunds'

  export default {
    name: 'accountDashboard',
    components: {
        Page,
        AccountHeader,
        AccountFooter,
        AccountContainer,
        GettingStart,
        AvailableCurrencies,
        MyFunds
    },
    data () {
        return {
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
                            id: 3,
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
                            id: 4,
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
                            id: 5,
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
                            id: 6,
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
                            id: 7,
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
                            id: 8,
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
                            id: 9,
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
                            id: 10,
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
                                    title: 'diceTop'
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
                            id: 3,
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
                            id: 4,
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
                            id: 5,
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
                            id: 6,
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
                            id: 7,
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
                            id: 8,
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
                            id: 9,
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
                            id: 10,
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
                            id: 3,
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
                            id: 4,
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
                            id: 5,
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
                            id: 6,
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
                            id: 7,
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
                            id: 8,
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
                            id: 9,
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
                            id: 10,
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
                            id: 3,
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
                            id: 4,
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
                            id: 5,
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
                            id: 6,
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
                            id: 7,
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
                            id: 8,
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
                            id: 9,
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
                            id: 10,
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
            ],
            currentTab: 0,
            window: {
                width: 0,
                height: 0
            }
        }
    },
    methods: {
        changeCurrentTab: function (id) {
            this.currentTab = id
        },
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
        },
        getSectionVisible: function () {
            return true
        }
    },
    created() {
        window.addEventListener('resize', this.handleResize)
        this.handleResize();
    }
  }
</script>

<style lang="scss">
  @import "AccountDashboard";
</style>
