<template>
  <Page theme="account">
    <div class="account-buy-and-sell">
      <Header />

        <AccountContainer>
          <div class="account-buy-and-sell__grid">

            <!-- available-currencies -->
            <div class="account-buy-and-sell__available-currencies">
              <AvailableCurrencies table-name="Available currencies" :current-item="0" :table-data="tableData" />
            </div>
            <!-- available-currencies end -->

            <!-- trade amount -->
            <div class="account-buy-and-sell__trade-amount">
              <TradeAmount />
            </div>
            <!-- trade amount end -->

            <!-- trade details -->
            <div class="account-buy-and-sell__trade-details">
              <TradeDetails />
            </div>
            <!-- trade details end -->

          </div>
        </AccountContainer>

      <Footer />
    </div>
  </Page>
</template>

<script>
  import Page from '@/components/Core/Page/Page'
  import Header from '@/components/Account/AccountHeader/AccountHeader'
  import Footer from '@/components/Account/Footer'
  import AccountContainer from '@/components/Account/AccountContainer'
  import AvailableCurrencies from '@/components/Account/UI/AvailableCurrencies'
  import TradeAmount from '@/components/Account/TradeAmount'
  import TradeDetails from '@/components/Account/TradeDetails'

  export default {
    name: 'accountBuyAndSell',
    components: {
        Page,
        Header,
        Footer,
        AccountContainer,
        AvailableCurrencies,
        TradeAmount,
        TradeDetails
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
  .account-buy-and-sell__grid {
    margin-top: 13px;

    display: flex;
    align-items: flex-start;
  }

  .account-buy-and-sell__available-currencies {
    flex-shrink: 0;
    max-width: 711px;
    width: 100%;

    margin-right: 17px;
  }

  .account-buy-and-sell__trade-amount {
    flex-shrink: 0;
    max-width: 256px;
    width: 100%;

    margin-right: 17px;
  }

  .account-buy-and-sell__trade-details {
    flex-shrink: 0;
    max-width: 256px;
    width: 100%;
  }
</style>
