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
                <account-available-currencies title="Available currencies" :data="tableData" :toggle-actions="false" />
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
  import Page from '@/components/Global/Page/Page'
  import Header from '@/components/Local/Account/Header/Header'
  import Footer from '@/components/Local/Account/Footer/Footer'
  import AccountContainer from '@/components/Local/Account/AccountContainer/AccountContainer'
  import TradeAmount from '@/components/Local/Account/TradeAmount/TradeAmount'
  import TradeDetails from '@/components/Local/Account/TradeDetails/TradeDetails'
  import HeaderAccordion from "@/components/Global/HeaderAccordion/HeaderAccordion.vue"
  import HeaderAccordionItem from "@/components/Global/HeaderAccordion/components/HeaderAccordionItem/HeaderAccordionItem.vue"
  import HeaderAccordionNavigation from "@/components/Global/HeaderAccordion/components/HeaderAccordionNavigation/HeaderAccordionNavigation.vue"
  import AccountAvailableCurrencies
      from "@/components/Local/Account/AccountAvailableCurrencies/AccountAvailableCurrencies";

  export default {
    name: 'accountBuyAndSell',
    components: {
        AccountAvailableCurrencies,
        Page,
        Header,
        Footer,
        AccountContainer,
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
                            selected: false,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '288px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    width: '148px',
                                    price: '110.94',
                                    convertPrice: '0.07407600',
                                    align: 'right',
                                    priceAlign: 'flex-end'
                                }
                            ]
                        },
                        {
                            id: 1,
                            selected: false,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '288px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    width: '148px',
                                    price: '110.94',
                                    convertPrice: '0.07407600',
                                    align: 'right',
                                    priceAlign: 'flex-end'
                                }
                            ]
                        },
                        {
                            id: 2,
                            selected: false,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '288px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    width: '148px',
                                    price: '110.94',
                                    convertPrice: '0.07407600',
                                    align: 'right',
                                    priceAlign: 'flex-end'
                                }
                            ]
                        },
                        {
                            id: 3,
                            selected: false,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '288px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    width: '148px',
                                    price: '110.94',
                                    convertPrice: '0.07407600',
                                    align: 'right',
                                    priceAlign: 'flex-end'
                                }
                            ]
                        },
                        {
                            id: 4,
                            selected: false,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '288px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    width: '148px',
                                    price: '110.94',
                                    convertPrice: '0.07407600',
                                    align: 'right',
                                    priceAlign: 'flex-end'
                                }
                            ]
                        },
                        {
                            id: 5,
                            selected: false,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '288px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    width: '148px',
                                    price: '110.94',
                                    convertPrice: '0.07407600',
                                    align: 'right',
                                    priceAlign: 'flex-end'
                                }
                            ]
                        },
                        {
                            id: 6,
                            selected: false,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '288px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    width: '148px',
                                    price: '110.94',
                                    convertPrice: '0.07407600',
                                    align: 'right',
                                    priceAlign: 'flex-end'
                                }
                            ]
                        },
                        {
                            id: 7,
                            selected: false,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '288px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    width: '148px',
                                    price: '110.94',
                                    convertPrice: '0.07407600',
                                    align: 'right',
                                    priceAlign: 'flex-end'
                                }
                            ]
                        },
                        {
                            id: 8,
                            selected: false,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '288px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    width: '148px',
                                    price: '110.94',
                                    convertPrice: '0.07407600',
                                    align: 'right',
                                    priceAlign: 'flex-end'
                                }
                            ]
                        },
                        {
                            id: 9,
                            selected: false,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '288px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    width: '148px',
                                    price: '110.94',
                                    convertPrice: '0.07407600',
                                    align: 'right',
                                    priceAlign: 'flex-end'
                                }
                            ]
                        },
                        {
                            id: 10,
                            selected: false,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '288px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    width: '148px',
                                    price: '110.94',
                                    convertPrice: '0.07407600',
                                    align: 'right',
                                    priceAlign: 'flex-end'
                                }
                            ]
                        },
                        {
                            id: 11,
                            selected: false,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '288px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    width: '148px',
                                    price: '110.94',
                                    convertPrice: '0.07407600',
                                    align: 'right',
                                    priceAlign: 'flex-end'
                                }
                            ]
                        },
                        {
                            id: 12,
                            selected: false,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '288px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    width: '148px',
                                    price: '110.94',
                                    convertPrice: '0.07407600',
                                    align: 'right',
                                    priceAlign: 'flex-end'
                                }
                            ]
                        },
                        {
                            id: 13,
                            selected: false,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '288px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    width: '148px',
                                    price: '110.94',
                                    convertPrice: '0.07407600',
                                    align: 'right',
                                    priceAlign: 'flex-end'
                                }
                            ]
                        },
                        {
                            id: 15,
                            selected: false,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '288px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    width: '148px',
                                    price: '110.94',
                                    convertPrice: '0.07407600',
                                    align: 'right',
                                    priceAlign: 'flex-end'
                                }
                            ]
                        },
                        {
                            id: 16,
                            selected: false,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '288px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    width: '148px',
                                    price: '110.94',
                                    convertPrice: '0.07407600',
                                    align: 'right',
                                    priceAlign: 'flex-end'
                                }
                            ]
                        },
                        {
                            id: 17,
                            selected: false,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '288px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    width: '148px',
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
                            selected: false,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '288px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    width: '148px',
                                    price: '110.94',
                                    convertPrice: '0.07407600',
                                    align: 'right',
                                    priceAlign: 'flex-end'
                                }
                            ]
                        },
                        {
                            id: 1,
                            selected: false,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '288px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    width: '148px',
                                    price: '110.94',
                                    convertPrice: '0.07407600',
                                    align: 'right',
                                    priceAlign: 'flex-end'
                                }
                            ]
                        },
                        {
                            id: 2,
                            selected: false,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '288px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    width: '148px',
                                    price: '110.94',
                                    convertPrice: '0.07407600',
                                    align: 'right',
                                    priceAlign: 'flex-end'
                                }
                            ]
                        },
                        {
                            id: 3,
                            selected: false,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '288px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    width: '148px',
                                    price: '110.94',
                                    convertPrice: '0.07407600',
                                    align: 'right',
                                    priceAlign: 'flex-end'
                                }
                            ]
                        },
                        {
                            id: 4,
                            selected: false,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '288px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    width: '148px',
                                    price: '110.94',
                                    convertPrice: '0.07407600',
                                    align: 'right',
                                    priceAlign: 'flex-end'
                                }
                            ]
                        },
                        {
                            id: 5,
                            selected: false,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '288px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    width: '148px',
                                    price: '110.94',
                                    convertPrice: '0.07407600',
                                    align: 'right',
                                    priceAlign: 'flex-end'
                                }
                            ]
                        },
                        {
                            id: 6,
                            selected: false,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '288px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    width: '148px',
                                    price: '110.94',
                                    convertPrice: '0.07407600',
                                    align: 'right',
                                    priceAlign: 'flex-end'
                                }
                            ]
                        },
                        {
                            id: 7,
                            selected: false,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '288px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    width: '148px',
                                    price: '110.94',
                                    convertPrice: '0.07407600',
                                    align: 'right',
                                    priceAlign: 'flex-end'
                                }
                            ]
                        },
                        {
                            id: 8,
                            selected: false,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '288px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    width: '148px',
                                    price: '110.94',
                                    convertPrice: '0.07407600',
                                    align: 'right',
                                    priceAlign: 'flex-end'
                                }
                            ]
                        },
                        {
                            id: 9,
                            selected: false,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '288px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    width: '148px',
                                    price: '110.94',
                                    convertPrice: '0.07407600',
                                    align: 'right',
                                    priceAlign: 'flex-end'
                                }
                            ]
                        },
                        {
                            id: 10,
                            selected: false,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '288px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    width: '148px',
                                    price: '110.94',
                                    convertPrice: '0.07407600',
                                    align: 'right',
                                    priceAlign: 'flex-end'
                                }
                            ]
                        },
                        {
                            id: 11,
                            selected: false,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '288px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    width: '148px',
                                    price: '110.94',
                                    convertPrice: '0.07407600',
                                    align: 'right',
                                    priceAlign: 'flex-end'
                                }
                            ]
                        },
                        {
                            id: 12,
                            selected: false,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '288px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    width: '148px',
                                    price: '110.94',
                                    convertPrice: '0.07407600',
                                    align: 'right',
                                    priceAlign: 'flex-end'
                                }
                            ]
                        },
                        {
                            id: 13,
                            selected: false,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '288px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    width: '148px',
                                    price: '110.94',
                                    convertPrice: '0.07407600',
                                    align: 'right',
                                    priceAlign: 'flex-end'
                                }
                            ]
                        },
                        {
                            id: 15,
                            selected: false,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '288px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    width: '148px',
                                    price: '110.94',
                                    convertPrice: '0.07407600',
                                    align: 'right',
                                    priceAlign: 'flex-end'
                                }
                            ]
                        },
                        {
                            id: 16,
                            selected: false,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '288px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    width: '148px',
                                    price: '110.94',
                                    convertPrice: '0.07407600',
                                    align: 'right',
                                    priceAlign: 'flex-end'
                                }
                            ]
                        },
                        {
                            id: 17,
                            selected: false,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '288px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'price',
                                    width: '148px',
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
