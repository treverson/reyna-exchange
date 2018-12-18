<template>
  <Page theme="account">
    <div class="account-buy-and-sell">
      <Header />
      <header-accordion-navigation />

        <AccountContainer>

          <header-accordion>
            <div class="account-buy-and-sell__grid">

              <!-- available-currencies -->
              <header-accordion-item section-title="Available currencies" class="account-buy-and-sell__available-currencies">
                <AvailableCurrencies table-name="Available currencies" :current-item="0" :table-data="tableData" />
              </header-accordion-item>
              <!-- available-currencies end -->

              <!-- trade amount -->
              <header-accordion-item section-title="Amount" class="account-buy-and-sell__trade-amount">
                <TradeAmount />
              </header-accordion-item>
              <!-- trade amount end -->

              <!-- trade details -->
              <header-accordion-item section-title="Details" class="account-buy-and-sell__trade-details">
                <TradeDetails />
              </header-accordion-item>
              <!-- trade details end -->

            </div>
          </header-accordion>

        </AccountContainer>

      <Footer />
    </div>
  </Page>
</template>

<script>
  import Page from '@/components/Core/Page/Page'
  import Header from '@/components/Account/Header/Header'
  import Footer from '@/components/Account/Footer/Footer'
  import AccountContainer from '@/components/Account/AccountContainer/AccountContainer'
  import AvailableCurrencies from '@/components/Account/AvailableCurrencies/AvailableCurrencies'
  import TradeAmount from '@/components/Account/TradeAmount/TradeAmount'
  import TradeDetails from '@/components/Account/TradeDetails/TradeDetails'
  import HeaderAccordion from "@/components/Core/HeaderAccordion/HeaderAccordion.vue"
  import HeaderAccordionItem from "@/components/Core/HeaderAccordion/components/HeaderAccordionItem/HeaderAccordionItem.vue"
  import HeaderAccordionNavigation from "@/components/Core/HeaderAccordion/components/HeaderAccordionNavigation/HeaderAccordionNavigation.vue"

  export default {
    name: 'accountBuyAndSell',
    components: {
        Page,
        Header,
        Footer,
        AccountContainer,
        AvailableCurrencies,
        TradeAmount,
        TradeDetails,
        HeaderAccordion,
        HeaderAccordionItem,
        HeaderAccordionNavigation,
    },
    data () {
        return {
            tableData: [
                {
                    id: 0,
                    categoryName: 'BUY',
                    isSelectable: true,
                    tableHead: [
                        {
                            id: 0,
                            width: '288px',
                            title: 'Currency'
                        },
                        {
                            id: 1,
                            width: '148px',
                            title: 'Price',
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
                                    convertPrice: '0.07407600',
                                    align: 'right',
                                    priceAlign: 'flex-end'
                                }
                            ]
                        },
                        {
                            id: 1,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    title: 'dice 1'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    price: '110.94',
                                    convertPrice: '0.07407600',
                                    align: 'right',
                                    priceAlign: 'flex-end'
                                }
                            ]
                        },
                        {
                            id: 2,
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
                                    convertPrice: '0.07407600',
                                    align: 'right',
                                    priceAlign: 'flex-end'
                                }
                            ]
                        },
                        {
                            id: 3,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    title: 'TRX'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    price: '110.94',
                                    convertPrice: '0.07407600',
                                    align: 'right',
                                    priceAlign: 'flex-end'
                                }
                            ]
                        },
                        {
                            id: 4,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    title: 'TRX'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    price: '110.94',
                                    convertPrice: '0.07407600',
                                    align: 'right',
                                    priceAlign: 'flex-end'
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 1,
                    categoryName: 'SELL',
                    isSelectable: true,
                    tableHead: [
                        {
                            id: 0,
                            width: '288px',
                            title: 'Currency'
                        },
                        {
                            id: 1,
                            width: '148px',
                            title: 'Price',
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
                                    convertPrice: '0.07407600',
                                    align: 'right',
                                    priceAlign: 'flex-end'
                                }
                            ]
                        },
                        {
                            id: 1,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    title: 'dice 1'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    price: '110.94',
                                    convertPrice: '0.07407600',
                                    align: 'right',
                                    priceAlign: 'flex-end'
                                }
                            ]
                        },
                        {
                            id: 2,
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
                                    convertPrice: '0.07407600',
                                    align: 'right',
                                    priceAlign: 'flex-end'
                                }
                            ]
                        },
                        {
                            id: 3,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    title: 'TRX'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    price: '110.94',
                                    convertPrice: '0.07407600',
                                    align: 'right',
                                    priceAlign: 'flex-end'
                                }
                            ]
                        },
                        {
                            id: 4,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    title: 'TRX'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    price: '110.94',
                                    convertPrice: '0.07407600',
                                    align: 'right',
                                    priceAlign: 'flex-end'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
  }
</script>

<style lang="scss">
  @import "AccountBuyAndSell";
</style>
