<template>
  <Page theme="account">
    <div class="account-history">
      <Header />
      <header-accordion-navigation />

        <AccountContainer>

          <header-accordion>
            <div class="account-history__grid">

              <div class="account-history__column-history-filter">

                <!-- history-filter -->
                <header-accordion-item section-title="Filter" class="account-history__history-filter">
                  <HistoryFilter />
                </header-accordion-item>

                <!-- export orders -->
                <header-accordion-item section-title="Export" class="account-history__export-orders">
                  <ExportOrders />
                </header-accordion-item>
                <!-- export orders end -->

                <!-- history-filter end -->
              </div>

              <!-- available-currencies -->
              <header-accordion-item section-title="Transactions" class="account-history__available-currencies">
                <AvailableCurrencies table-name="Transactions" :current-item="1" :table-data="tableData" :toggle-actions="false" />
              </header-accordion-item>
              <!-- available-currencies end -->

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
  import HistoryFilter from '@/components/Account/HistoryFilter/HistoryFilter'
  import ExportOrders from '@/components/Account/ExportOrders/ExportOrders'
  import HeaderAccordion from "@/components/Core/HeaderAccordion/HeaderAccordion.vue"
  import HeaderAccordionItem from "@/components/Core/HeaderAccordion/components/HeaderAccordionItem/HeaderAccordionItem.vue"
  import HeaderAccordionNavigation from "@/components/Core/HeaderAccordion/components/HeaderAccordionNavigation/HeaderAccordionNavigation.vue"

  export default {
    name: 'accountHistory',
    components: {
        Page,
        Header,
        Footer,
        AccountContainer,
        AvailableCurrencies,
        HistoryFilter,
        ExportOrders,
        HeaderAccordion,
        HeaderAccordionItem,
        HeaderAccordionNavigation
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
                            width: '152px',
                            title: 'Currency'
                        },
                        {
                            id: 1,
                            width: '97px',
                            title: 'Side'
                        },
                        {
                            id: 2,
                            width: '76px',
                            title: 'Type'
                        },
                        {
                            id: 3,
                            width: '164px',
                            title: 'Average Price'
                        },
                        {
                            id: 4,
                            width: '120px',
                            title: 'Filled'
                        },
                        {
                            id: 5,
                            width: '142px',
                            title: 'Amount'
                        },
                        {
                            id: 6,
                            width: '56px',
                            title: 'Status',
                            align: 'right'
                        },
                        {
                            id: 7,
                            width: '177px',
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
                                    title: 'dice',
                                    isSale: true
                                },
                                {
                                    id: 2,
                                    type: 'default',
                                    title: 'Limit',
                                    align: 'left'
                                },
                                {
                                    id: 3,
                                    type: 'cryptoCurrency',
                                    content: '718.00000000',
                                    currencyType: 'TRX'
                                },
                                {
                                    id: 4,
                                    type: 'default',
                                    title: '0.00000327',
                                    align: 'left'
                                },
                                {
                                    id: 5,
                                    type: 'default',
                                    title: '1.00000000',
                                    align: 'left'
                                },
                                {
                                    id: 6,
                                    type: 'status',
                                    status: 0,
                                    align: 'right'
                                },
                                {
                                    id: 7,
                                    type: 'cryptoCurrency',
                                    content: '0.00234786',
                                    currencyType: 'BTC',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 1,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'type',
                                    title: 'dice',
                                    isSale: true
                                },
                                {
                                    id: 2,
                                    type: 'default',
                                    title: 'Limit',
                                    align: 'left'
                                },
                                {
                                    id: 3,
                                    type: 'cryptoCurrency',
                                    content: '718.00000000',
                                    currencyType: 'TRX'
                                },
                                {
                                    id: 4,
                                    type: 'default',
                                    title: '0.00000327',
                                    align: 'left'
                                },
                                {
                                    id: 5,
                                    type: 'default',
                                    title: '1.00000000',
                                    align: 'left'
                                },
                                {
                                    id: 6,
                                    type: 'status',
                                    status: 1,
                                    align: 'right'
                                },
                                {
                                    id: 7,
                                    type: 'cryptoCurrency',
                                    content: '0.00234786',
                                    currencyType: 'BTC',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 2,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'type',
                                    title: 'dice',
                                    isSale: true
                                },
                                {
                                    id: 2,
                                    type: 'default',
                                    title: 'Limit',
                                    align: 'left'
                                },
                                {
                                    id: 3,
                                    type: 'cryptoCurrency',
                                    content: '718.00000000',
                                    currencyType: 'TRX'
                                },
                                {
                                    id: 4,
                                    type: 'default',
                                    title: '0.00000327',
                                    align: 'left'
                                },
                                {
                                    id: 5,
                                    type: 'default',
                                    title: '1.00000000',
                                    align: 'left'
                                },
                                {
                                    id: 6,
                                    type: 'status',
                                    status: 2,
                                    align: 'right'
                                },
                                {
                                    id: 7,
                                    type: 'cryptoCurrency',
                                    content: '0.00234786',
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
                            width: '152px',
                            title: 'Currency'
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
  @import "AccountHistory";
</style>
