<template>
  <Page theme="account">
    <div class="account-history">
      <Header />

        <AccountContainer>
          <div class="account-history__grid">

            <div class="account-history__column-history-filter">

              <!-- history-filter -->
              <div class="account-history__history-filter">
                <HistoryFilter />
              </div>

              <!-- export orders -->
              <div class="account-history__export-orders">
                <ExportOrders />
              </div>
              <!-- export orders end -->

              <!-- history-filter end -->
            </div>

            <!-- available-currencies -->
            <div class="account-history__available-currencies">
              <AvailableCurrencies table-name="Transactions" :current-item="0" :table-data="tableData" :toggle-actions="false" />
            </div>
            <!-- available-currencies end -->

          </div>
        </AccountContainer>

      <Footer />
    </div>
  </Page>
</template>

<script>
  import Page from '@/components/Page'
  import Header from '@/components/Account/Header'
  import Footer from '@/components/Account/Footer'
  import AccountContainer from '@/components/Account/AccountContainer'
  import AvailableCurrencies from '@/components/Account/UI/AvailableCurrencies'
  import HistoryFilter from '@/components/Account/UI/HistoryFilter'
  import ExportOrders from '@/components/Account/UI/ExportOrders'

  export default {
    name: 'accountHistory',
    components: {
        Page,
        Header,
        Footer,
        AccountContainer,
        AvailableCurrencies,
        HistoryFilter,
        ExportOrders
    },
    data () {
        return {
            tableData: [
                {
                    id: 0,
                    categoryName: 'Buy & Sell',
                    tableHead: [
                        {
                            id: 0,
                            width: '118px',
                            title: 'Currency'
                        },
                        {
                            id: 1,
                            width: '81px',
                            title: 'Type'
                        },
                        {
                            id: 2,
                            width: '177px',
                            title: 'Date'
                        },
                        {
                            id: 3,
                            width: '168px',
                            title: 'Amount'
                        },
                        {
                            id: 4,
                            width: '149px',
                            title: 'Rate'
                        },
                        {
                            id: 5,
                            width: '175px',
                            title: 'Fee'
                        },
                        {
                            id: 6,
                            width: '117px',
                            title: 'Total',
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
                                    type: 'type',
                                    isSale: true
                                },
                                {
                                    id: 2,
                                    type: 'date',
                                    content: '18-11-30 - 14:11:23'
                                },
                                {
                                    id: 3,
                                    type: 'cryptoCurrency',
                                    content: '718.00000000',
                                    currencyType: 'TRX'
                                },
                                {
                                    id: 4,
                                    type: 'cryptoCurrency',
                                    content: '0.00000327',
                                    currencyType: 'BTC'
                                },
                                {
                                    id: 5,
                                    type: 'cryptoCurrency',
                                    content: '0.00011739',
                                    currencyType: 'BTC'
                                },
                                {
                                    id: 6,
                                    type: 'cryptoCurrency',
                                    content: '0.00234786 ',
                                    currencyType: 'BTC',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 0,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    title: 'trx'
                                },
                                {
                                    id: 1,
                                    type: 'type',
                                    isSale: false
                                },
                                {
                                    id: 2,
                                    type: 'date',
                                    content: '18-11-30 - 14:11:23'
                                },
                                {
                                    id: 3,
                                    type: 'cryptoCurrency',
                                    content: '718.00000000',
                                    currencyType: 'TRX'
                                },
                                {
                                    id: 4,
                                    type: 'cryptoCurrency',
                                    content: '0.00000327',
                                    currencyType: 'BTC'
                                },
                                {
                                    id: 5,
                                    type: 'cryptoCurrency',
                                    content: '0.00011739',
                                    currencyType: 'BTC'
                                },
                                {
                                    id: 6,
                                    type: 'cryptoCurrency',
                                    content: '0.00234786 ',
                                    currencyType: 'BTC',
                                    align: 'right'
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 1,
                    categoryName: 'Advanced view',
                    tableHead: [
                        {
                            id: 0,
                            width: '118px',
                            title: 'Currency'
                        },
                        {
                            id: 1,
                            width: '81px',
                            title: 'Type'
                        },
                        {
                            id: 2,
                            width: '177px',
                            title: 'Date'
                        },
                        {
                            id: 3,
                            width: '168px',
                            title: 'Amount'
                        },
                        {
                            id: 4,
                            width: '149px',
                            title: 'Rate'
                        },
                        {
                            id: 5,
                            width: '175px',
                            title: 'Fee'
                        },
                        {
                            id: 6,
                            width: '117px',
                            title: 'Total',
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
                                    type: 'type',
                                    isSale: true
                                },
                                {
                                    id: 2,
                                    type: 'date',
                                    content: '18-11-30 - 14:11:23'
                                },
                                {
                                    id: 3,
                                    type: 'cryptoCurrency',
                                    content: '718.00000000',
                                    currencyType: 'TRX'
                                },
                                {
                                    id: 4,
                                    type: 'cryptoCurrency',
                                    content: '0.00000327',
                                    currencyType: 'BTC'
                                },
                                {
                                    id: 5,
                                    type: 'cryptoCurrency',
                                    content: '0.00011739',
                                    currencyType: 'BTC'
                                },
                                {
                                    id: 6,
                                    type: 'cryptoCurrency',
                                    content: '0.00234786 ',
                                    currencyType: 'BTC',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 0,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    title: 'trx'
                                },
                                {
                                    id: 1,
                                    type: 'type',
                                    isSale: false
                                },
                                {
                                    id: 2,
                                    type: 'date',
                                    content: '18-11-30 - 14:11:23'
                                },
                                {
                                    id: 3,
                                    type: 'cryptoCurrency',
                                    content: '718.00000000',
                                    currencyType: 'TRX'
                                },
                                {
                                    id: 4,
                                    type: 'cryptoCurrency',
                                    content: '0.00000327',
                                    currencyType: 'BTC'
                                },
                                {
                                    id: 5,
                                    type: 'cryptoCurrency',
                                    content: '0.00011739',
                                    currencyType: 'BTC'
                                },
                                {
                                    id: 6,
                                    type: 'cryptoCurrency',
                                    content: '0.00234786 ',
                                    currencyType: 'BTC',
                                    align: 'right'
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 2,
                    categoryName: 'Deposit',
                    tableHead: [
                        {
                            id: 0,
                            width: '118px',
                            title: 'Currency'
                        },
                        {
                            id: 1,
                            width: '81px',
                            title: 'Type'
                        },
                        {
                            id: 2,
                            width: '177px',
                            title: 'Date'
                        },
                        {
                            id: 3,
                            width: '168px',
                            title: 'Amount'
                        },
                        {
                            id: 4,
                            width: '149px',
                            title: 'Rate'
                        },
                        {
                            id: 5,
                            width: '175px',
                            title: 'Fee'
                        },
                        {
                            id: 6,
                            width: '117px',
                            title: 'Total',
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
                                    type: 'type',
                                    isSale: true
                                },
                                {
                                    id: 2,
                                    type: 'date',
                                    content: '18-11-30 - 14:11:23'
                                },
                                {
                                    id: 3,
                                    type: 'cryptoCurrency',
                                    content: '718.00000000',
                                    currencyType: 'TRX'
                                },
                                {
                                    id: 4,
                                    type: 'cryptoCurrency',
                                    content: '0.00000327',
                                    currencyType: 'BTC'
                                },
                                {
                                    id: 5,
                                    type: 'cryptoCurrency',
                                    content: '0.00011739',
                                    currencyType: 'BTC'
                                },
                                {
                                    id: 6,
                                    type: 'cryptoCurrency',
                                    content: '0.00234786 ',
                                    currencyType: 'BTC',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 0,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    title: 'trx'
                                },
                                {
                                    id: 1,
                                    type: 'type',
                                    isSale: false
                                },
                                {
                                    id: 2,
                                    type: 'date',
                                    content: '18-11-30 - 14:11:23'
                                },
                                {
                                    id: 3,
                                    type: 'cryptoCurrency',
                                    content: '718.00000000',
                                    currencyType: 'TRX'
                                },
                                {
                                    id: 4,
                                    type: 'cryptoCurrency',
                                    content: '0.00000327',
                                    currencyType: 'BTC'
                                },
                                {
                                    id: 5,
                                    type: 'cryptoCurrency',
                                    content: '0.00011739',
                                    currencyType: 'BTC'
                                },
                                {
                                    id: 6,
                                    type: 'cryptoCurrency',
                                    content: '0.00234786 ',
                                    currencyType: 'BTC',
                                    align: 'right'
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
  .account-history__grid {
    margin-top: 13px;

    display: flex;
    align-items: flex-start;
  }

  .account-history__history-filter {
    margin-bottom: 16px;
  }

  .account-history__column-history-filter {
    flex-shrink: 0;
    max-width: 256px;
    width: 100%;

    margin-right: 16px;
  }

  .account-history__available-currencies {
    flex-shrink: 0;
    max-width: 985px;
    width: 100%;
  }
</style>
