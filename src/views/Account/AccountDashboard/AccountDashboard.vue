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
                      <account-available-currencies title="Available currencies" :data="tableData" :toggle-actions="true" />
                  </header-accordion-item>

                  <header-accordion-item section-title="My funds" :class="['account-dashboard__item', 'account-dashboard__item--type-my-funds']">
                    <account-funds />
                  </header-accordion-item>

                </div>

          </header-accordion>

        </account-container>

      <account-footer />
    </div>
  </Page>
</template>

<script>
  import Page from '@/components/Global/Page/Page'
  import AccountHeader from '@/components/Local/Account/Header/Header'
  import AccountFooter from '@/components/Local/Account/Footer/Footer'
  import AccountContainer from '@/components/Local/Account/AccountContainer/AccountContainer'
  import GettingStart from '@/components/Local/Account/GettingStart/GettingStart'
  import HeaderAccordion from "@/components/Global/HeaderAccordion/HeaderAccordion.vue"
  import HeaderAccordionItem from "@/components/Global/HeaderAccordion/components/HeaderAccordionItem/HeaderAccordionItem.vue"
  import HeaderAccordionNavigation from "@/components/Global/HeaderAccordion/components/HeaderAccordionNavigation/HeaderAccordionNavigation.vue"
  import AccountFunds from "@/components/Local/Account/AccountFunds/AccountFunds";
  import AccountAvailableCurrencies from "@/components/Local/Account/AccountAvailableCurrencies/AccountAvailableCurrencies";

  export default {
    name: 'accountDashboard',
    components: {
        AccountAvailableCurrencies,
        AccountFunds,
        HeaderAccordion,
        HeaderAccordionItem,
        HeaderAccordionNavigation,
        Page,
        AccountHeader,
        AccountFooter,
        AccountContainer,
        GettingStart
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
                                    width: '134px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    width: '190px',
                                    price: '110.94',
                                    convertPrice: '0.07407600'
                                },
                                {
                                    id: 2,
                                    type: 'change',
                                    width: '112px',
                                    percent: '+3.66 %',
                                    isGood: true
                                },
                                {
                                    id: 3,
                                    type: 'volume',
                                    width: '106px',
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
                                    width: '134px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    width: '190px',
                                    price: '110.94',
                                    convertPrice: '0.07407600'
                                },
                                {
                                    id: 2,
                                    type: 'change',
                                    width: '112px',
                                    percent: '+3.66 %',
                                    isGood: true
                                },
                                {
                                    id: 3,
                                    type: 'volume',
                                    width: '106px',
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
                                    width: '134px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    width: '190px',
                                    price: '110.94',
                                    convertPrice: '0.07407600'
                                },
                                {
                                    id: 2,
                                    type: 'change',
                                    width: '112px',
                                    percent: '+3.66 %',
                                    isGood: true
                                },
                                {
                                    id: 3,
                                    type: 'volume',
                                    width: '106px',
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
                                    width: '134px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    width: '190px',
                                    price: '110.94',
                                    convertPrice: '0.07407600'
                                },
                                {
                                    id: 2,
                                    type: 'change',
                                    width: '112px',
                                    percent: '+3.66 %',
                                    isGood: true
                                },
                                {
                                    id: 3,
                                    type: 'volume',
                                    width: '106px',
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
                                    width: '134px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    width: '190px',
                                    price: '110.94',
                                    convertPrice: '0.07407600'
                                },
                                {
                                    id: 2,
                                    type: 'change',
                                    width: '112px',
                                    percent: '+3.66 %',
                                    isGood: true
                                },
                                {
                                    id: 3,
                                    type: 'volume',
                                    width: '106px',
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
                                    width: '134px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    width: '190px',
                                    price: '110.94',
                                    convertPrice: '0.07407600'
                                },
                                {
                                    id: 2,
                                    type: 'change',
                                    width: '112px',
                                    percent: '+3.66 %',
                                    isGood: true
                                },
                                {
                                    id: 3,
                                    type: 'volume',
                                    width: '106px',
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
                                    width: '134px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    width: '190px',
                                    price: '110.94',
                                    convertPrice: '0.07407600'
                                },
                                {
                                    id: 2,
                                    type: 'change',
                                    width: '112px',
                                    percent: '+3.66 %',
                                    isGood: true
                                },
                                {
                                    id: 3,
                                    type: 'volume',
                                    width: '106px',
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
                                    width: '134px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    width: '190px',
                                    price: '110.94',
                                    convertPrice: '0.07407600'
                                },
                                {
                                    id: 2,
                                    type: 'change',
                                    width: '112px',
                                    percent: '+3.66 %',
                                    isGood: true
                                },
                                {
                                    id: 3,
                                    type: 'volume',
                                    width: '106px',
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
                                    width: '134px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    width: '190px',
                                    price: '110.94',
                                    convertPrice: '0.07407600'
                                },
                                {
                                    id: 2,
                                    type: 'change',
                                    width: '112px',
                                    percent: '+3.66 %',
                                    isGood: true
                                },
                                {
                                    id: 3,
                                    type: 'volume',
                                    width: '106px',
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
                                    width: '134px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    width: '190px',
                                    price: '110.94',
                                    convertPrice: '0.07407600'
                                },
                                {
                                    id: 2,
                                    type: 'change',
                                    width: '112px',
                                    percent: '+3.66 %',
                                    isGood: true
                                },
                                {
                                    id: 3,
                                    type: 'volume',
                                    width: '106px',
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
                                    width: '134px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    width: '190px',
                                    price: '110.94',
                                    convertPrice: '0.07407600'
                                },
                                {
                                    id: 2,
                                    type: 'change',
                                    width: '112px',
                                    percent: '+3.66 %',
                                    isGood: true
                                },
                                {
                                    id: 3,
                                    type: 'volume',
                                    width: '106px',
                                    volume: '14 255 360'
                                }
                            ]
                        },
                        {
                            id: 11,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '134px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    width: '190px',
                                    price: '110.94',
                                    convertPrice: '0.07407600'
                                },
                                {
                                    id: 2,
                                    type: 'change',
                                    width: '112px',
                                    percent: '+3.66 %',
                                    isGood: true
                                },
                                {
                                    id: 3,
                                    type: 'volume',
                                    width: '106px',
                                    volume: '14 255 360'
                                }
                            ]
                        },
                        {
                            id: 12,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '134px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    width: '190px',
                                    price: '110.94',
                                    convertPrice: '0.07407600'
                                },
                                {
                                    id: 2,
                                    type: 'change',
                                    width: '112px',
                                    percent: '+3.66 %',
                                    isGood: true
                                },
                                {
                                    id: 3,
                                    type: 'volume',
                                    width: '106px',
                                    volume: '14 255 360'
                                }
                            ]
                        },
                        {
                            id: 13,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '134px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    width: '190px',
                                    price: '110.94',
                                    convertPrice: '0.07407600'
                                },
                                {
                                    id: 2,
                                    type: 'change',
                                    width: '112px',
                                    percent: '+3.66 %',
                                    isGood: true
                                },
                                {
                                    id: 3,
                                    type: 'volume',
                                    width: '106px',
                                    volume: '14 255 360'
                                }
                            ]
                        },
                        {
                            id: 14,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '134px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    width: '190px',
                                    price: '110.94',
                                    convertPrice: '0.07407600'
                                },
                                {
                                    id: 2,
                                    type: 'change',
                                    width: '112px',
                                    percent: '+3.66 %',
                                    isGood: true
                                },
                                {
                                    id: 3,
                                    type: 'volume',
                                    width: '106px',
                                    volume: '14 255 360'
                                }
                            ]
                        },
                        {
                            id: 15,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '134px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    width: '190px',
                                    price: '110.94',
                                    convertPrice: '0.07407600'
                                },
                                {
                                    id: 2,
                                    type: 'change',
                                    width: '112px',
                                    percent: '+3.66 %',
                                    isGood: true
                                },
                                {
                                    id: 3,
                                    type: 'volume',
                                    width: '106px',
                                    volume: '14 255 360'
                                }
                            ]
                        },
                        {
                            id: 16,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '134px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    width: '190px',
                                    price: '110.94',
                                    convertPrice: '0.07407600'
                                },
                                {
                                    id: 2,
                                    type: 'change',
                                    width: '112px',
                                    percent: '+3.66 %',
                                    isGood: true
                                },
                                {
                                    id: 3,
                                    type: 'volume',
                                    width: '106px',
                                    volume: '14 255 360'
                                }
                            ]
                        },
                        {
                            id: 17,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '134px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    width: '190px',
                                    price: '110.94',
                                    convertPrice: '0.07407600'
                                },
                                {
                                    id: 2,
                                    type: 'change',
                                    width: '112px',
                                    percent: '+3.66 %',
                                    isGood: true
                                },
                                {
                                    id: 3,
                                    type: 'volume',
                                    width: '106px',
                                    volume: '14 255 360'
                                }
                            ]
                        },
                        {
                            id: 18,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '134px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    width: '190px',
                                    price: '110.94',
                                    convertPrice: '0.07407600'
                                },
                                {
                                    id: 2,
                                    type: 'change',
                                    width: '112px',
                                    percent: '+3.66 %',
                                    isGood: true
                                },
                                {
                                    id: 3,
                                    type: 'volume',
                                    width: '106px',
                                    volume: '14 255 360'
                                }
                            ]
                        },
                        {
                            id: 19,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '134px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    width: '190px',
                                    price: '110.94',
                                    convertPrice: '0.07407600'
                                },
                                {
                                    id: 2,
                                    type: 'change',
                                    width: '112px',
                                    percent: '+3.66 %',
                                    isGood: true
                                },
                                {
                                    id: 3,
                                    type: 'volume',
                                    width: '106px',
                                    volume: '14 255 360'
                                }
                            ]
                        },
                        {
                            id: 20,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '134px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    width: '190px',
                                    price: '110.94',
                                    convertPrice: '0.07407600'
                                },
                                {
                                    id: 2,
                                    type: 'change',
                                    width: '112px',
                                    percent: '+3.66 %',
                                    isGood: true
                                },
                                {
                                    id: 3,
                                    type: 'volume',
                                    width: '106px',
                                    volume: '14 255 360'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    methods: {},
    created() {}
  }
</script>

<style lang="scss">
  @import "AccountDashboard";
</style>
