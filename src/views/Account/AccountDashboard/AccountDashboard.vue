<template>
  <Page theme="account">
    <div :class="['account-dashboard']">
      <account-header />
      <header-accordion-navigation />
        <account-container>
          <header-accordion ref="headerAccordion" :current-item="0">
            <div :class="['account-dashboard__grid']">
              <header-accordion-item section-title="Getting start" :class="['account-dashboard__item', 'account-dashboard__item--type-getting-start']">
                <getting-start />
              </header-accordion-item>
              <header-accordion-item section-title="Available currencies" :class="['account-dashboard__item', 'account-dashboard__item--type-available-currencies']">
                <available-currencies table-name="Available currencies" :table-data="tableData" :toggle-actions="true" />
              </header-accordion-item>
              <header-accordion-item section-title="My funds" :class="['account-dashboard__item', 'account-dashboard__item--type-my-funds']">
                <my-funds />
              </header-accordion-item>
            </div>
          </header-accordion>
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
  import HeaderAccordion from "@/components/Core/HeaderAccordion/HeaderAccordion.vue"
  import HeaderAccordionItem from "@/components/Core/HeaderAccordion/components/HeaderAccordionItem/HeaderAccordionItem.vue"
  import HeaderAccordionNavigation from "@/components/Core/HeaderAccordion/components/HeaderAccordionNavigation/HeaderAccordionNavigation.vue"

  export default {
    name: 'accountDashboard',
    components: {
        HeaderAccordion,
        HeaderAccordionItem,
        HeaderAccordionNavigation,
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
        }
    },
    methods: {},
    created() {}
  }
</script>

<style lang="scss">
  @import "AccountDashboard";
</style>
