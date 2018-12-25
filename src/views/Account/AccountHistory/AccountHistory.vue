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
                <account-available-currencies title="Transactions" :data="tableData" :toggle-actions="false" />
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
  import Page from '@/components/Global/Page/Page'
  import Header from '@/components/Local/Account/Header/Header'
  import Footer from '@/components/Local/Account/Footer/Footer'
  import AccountContainer from '@/components/Local/Account/AccountContainer/AccountContainer'
  import HistoryFilter from '@/components/Local/Account/HistoryFilter/HistoryFilter'
  import ExportOrders from '@/components/Local/Account/ExportOrders/ExportOrders'
  import HeaderAccordion from "@/components/Global/HeaderAccordion/HeaderAccordion.vue"
  import HeaderAccordionItem from "@/components/Global/HeaderAccordion/components/HeaderAccordionItem/HeaderAccordionItem.vue"
  import HeaderAccordionNavigation from "@/components/Global/HeaderAccordion/components/HeaderAccordionNavigation/HeaderAccordionNavigation.vue"
  import AccountAvailableCurrencies
      from "@/components/Local/Account/AccountAvailableCurrencies/AccountAvailableCurrencies";

  export default {
    name: 'accountHistory',
    components: {
        AccountAvailableCurrencies,
        Page,
        Header,
        Footer,
        AccountContainer,
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
                                    width: '118px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'type',
                                    width: '81px',
                                    isSale: true
                                },
                                {
                                    id: 2,
                                    type: 'date',
                                    width: '177px',
                                    content: '18-11-30 - 14:11:23'
                                },
                                {
                                    id: 3,
                                    width: '168px',
                                    type: 'cryptoCurrency',
                                    content: '718.00000000',
                                    currencyType: 'TRX'
                                },
                                {
                                    id: 4,
                                    width: '149px',
                                    type: 'cryptoCurrency',
                                    content: '0.00000327',
                                    currencyType: 'BTC'
                                },
                                {
                                    id: 5,
                                    width: '175px',
                                    type: 'cryptoCurrency',
                                    content: '0.00011739',
                                    currencyType: 'BTC'
                                },
                                {
                                    id: 6,
                                    width: '117px',
                                    type: 'cryptoCurrency',
                                    content: '0.00234786 ',
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
                                    width: '118px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'type',
                                    width: '81px',
                                    isSale: false
                                },
                                {
                                    id: 2,
                                    type: 'date',
                                    width: '177px',
                                    content: '18-11-30 - 14:11:23'
                                },
                                {
                                    id: 3,
                                    width: '168px',
                                    type: 'cryptoCurrency',
                                    content: '718.00000000',
                                    currencyType: 'TRX'
                                },
                                {
                                    id: 4,
                                    width: '149px',
                                    type: 'cryptoCurrency',
                                    content: '0.00000327',
                                    currencyType: 'BTC'
                                },
                                {
                                    id: 5,
                                    width: '175px',
                                    type: 'cryptoCurrency',
                                    content: '0.00011739',
                                    currencyType: 'BTC'
                                },
                                {
                                    id: 6,
                                    width: '117px',
                                    type: 'cryptoCurrency',
                                    content: '0.00234786 ',
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
                                    width: '118px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'type',
                                    width: '81px',
                                    isSale: true
                                },
                                {
                                    id: 2,
                                    type: 'date',
                                    width: '177px',
                                    content: '18-11-30 - 14:11:23'
                                },
                                {
                                    id: 3,
                                    width: '168px',
                                    type: 'cryptoCurrency',
                                    content: '718.00000000',
                                    currencyType: 'TRX'
                                },
                                {
                                    id: 4,
                                    width: '149px',
                                    type: 'cryptoCurrency',
                                    content: '0.00000327',
                                    currencyType: 'BTC'
                                },
                                {
                                    id: 5,
                                    width: '175px',
                                    type: 'cryptoCurrency',
                                    content: '0.00011739',
                                    currencyType: 'BTC'
                                },
                                {
                                    id: 6,
                                    width: '117px',
                                    type: 'cryptoCurrency',
                                    content: '0.00234786 ',
                                    currencyType: 'BTC',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 3,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '118px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'type',
                                    width: '81px',
                                    isSale: true
                                },
                                {
                                    id: 2,
                                    type: 'date',
                                    width: '177px',
                                    content: '18-11-30 - 14:11:23'
                                },
                                {
                                    id: 3,
                                    width: '168px',
                                    type: 'cryptoCurrency',
                                    content: '718.00000000',
                                    currencyType: 'TRX'
                                },
                                {
                                    id: 4,
                                    width: '149px',
                                    type: 'cryptoCurrency',
                                    content: '0.00000327',
                                    currencyType: 'BTC'
                                },
                                {
                                    id: 5,
                                    width: '175px',
                                    type: 'cryptoCurrency',
                                    content: '0.00011739',
                                    currencyType: 'BTC'
                                },
                                {
                                    id: 6,
                                    width: '117px',
                                    type: 'cryptoCurrency',
                                    content: '0.00234786 ',
                                    currencyType: 'BTC',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 4,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '118px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'type',
                                    width: '81px',
                                    isSale: true
                                },
                                {
                                    id: 2,
                                    type: 'date',
                                    width: '177px',
                                    content: '18-11-30 - 14:11:23'
                                },
                                {
                                    id: 3,
                                    width: '168px',
                                    type: 'cryptoCurrency',
                                    content: '718.00000000',
                                    currencyType: 'TRX'
                                },
                                {
                                    id: 4,
                                    width: '149px',
                                    type: 'cryptoCurrency',
                                    content: '0.00000327',
                                    currencyType: 'BTC'
                                },
                                {
                                    id: 5,
                                    width: '175px',
                                    type: 'cryptoCurrency',
                                    content: '0.00011739',
                                    currencyType: 'BTC'
                                },
                                {
                                    id: 6,
                                    width: '117px',
                                    type: 'cryptoCurrency',
                                    content: '0.00234786 ',
                                    currencyType: 'BTC',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 5,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '118px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'type',
                                    width: '81px',
                                    isSale: true
                                },
                                {
                                    id: 2,
                                    type: 'date',
                                    width: '177px',
                                    content: '18-11-30 - 14:11:23'
                                },
                                {
                                    id: 3,
                                    width: '168px',
                                    type: 'cryptoCurrency',
                                    content: '718.00000000',
                                    currencyType: 'TRX'
                                },
                                {
                                    id: 4,
                                    width: '149px',
                                    type: 'cryptoCurrency',
                                    content: '0.00000327',
                                    currencyType: 'BTC'
                                },
                                {
                                    id: 5,
                                    width: '175px',
                                    type: 'cryptoCurrency',
                                    content: '0.00011739',
                                    currencyType: 'BTC'
                                },
                                {
                                    id: 6,
                                    width: '117px',
                                    type: 'cryptoCurrency',
                                    content: '0.00234786 ',
                                    currencyType: 'BTC',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 6,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '118px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'type',
                                    width: '81px',
                                    isSale: true
                                },
                                {
                                    id: 2,
                                    type: 'date',
                                    width: '177px',
                                    content: '18-11-30 - 14:11:23'
                                },
                                {
                                    id: 3,
                                    width: '168px',
                                    type: 'cryptoCurrency',
                                    content: '718.00000000',
                                    currencyType: 'TRX'
                                },
                                {
                                    id: 4,
                                    width: '149px',
                                    type: 'cryptoCurrency',
                                    content: '0.00000327',
                                    currencyType: 'BTC'
                                },
                                {
                                    id: 5,
                                    width: '175px',
                                    type: 'cryptoCurrency',
                                    content: '0.00011739',
                                    currencyType: 'BTC'
                                },
                                {
                                    id: 6,
                                    width: '117px',
                                    type: 'cryptoCurrency',
                                    content: '0.00234786 ',
                                    currencyType: 'BTC',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 7,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '118px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'type',
                                    width: '81px',
                                    isSale: true
                                },
                                {
                                    id: 2,
                                    type: 'date',
                                    width: '177px',
                                    content: '18-11-30 - 14:11:23'
                                },
                                {
                                    id: 3,
                                    width: '168px',
                                    type: 'cryptoCurrency',
                                    content: '718.00000000',
                                    currencyType: 'TRX'
                                },
                                {
                                    id: 4,
                                    width: '149px',
                                    type: 'cryptoCurrency',
                                    content: '0.00000327',
                                    currencyType: 'BTC'
                                },
                                {
                                    id: 5,
                                    width: '175px',
                                    type: 'cryptoCurrency',
                                    content: '0.00011739',
                                    currencyType: 'BTC'
                                },
                                {
                                    id: 6,
                                    width: '117px',
                                    type: 'cryptoCurrency',
                                    content: '0.00234786 ',
                                    currencyType: 'BTC',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 8,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '118px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'type',
                                    width: '81px',
                                    isSale: true
                                },
                                {
                                    id: 2,
                                    type: 'date',
                                    width: '177px',
                                    content: '18-11-30 - 14:11:23'
                                },
                                {
                                    id: 3,
                                    width: '168px',
                                    type: 'cryptoCurrency',
                                    content: '718.00000000',
                                    currencyType: 'TRX'
                                },
                                {
                                    id: 4,
                                    width: '149px',
                                    type: 'cryptoCurrency',
                                    content: '0.00000327',
                                    currencyType: 'BTC'
                                },
                                {
                                    id: 5,
                                    width: '175px',
                                    type: 'cryptoCurrency',
                                    content: '0.00011739',
                                    currencyType: 'BTC'
                                },
                                {
                                    id: 6,
                                    width: '117px',
                                    type: 'cryptoCurrency',
                                    content: '0.00234786 ',
                                    currencyType: 'BTC',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 9,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '118px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'type',
                                    width: '81px',
                                    isSale: true
                                },
                                {
                                    id: 2,
                                    type: 'date',
                                    width: '177px',
                                    content: '18-11-30 - 14:11:23'
                                },
                                {
                                    id: 3,
                                    width: '168px',
                                    type: 'cryptoCurrency',
                                    content: '718.00000000',
                                    currencyType: 'TRX'
                                },
                                {
                                    id: 4,
                                    width: '149px',
                                    type: 'cryptoCurrency',
                                    content: '0.00000327',
                                    currencyType: 'BTC'
                                },
                                {
                                    id: 5,
                                    width: '175px',
                                    type: 'cryptoCurrency',
                                    content: '0.00011739',
                                    currencyType: 'BTC'
                                },
                                {
                                    id: 6,
                                    width: '117px',
                                    type: 'cryptoCurrency',
                                    content: '0.00234786 ',
                                    currencyType: 'BTC',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 10,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '118px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'type',
                                    width: '81px',
                                    isSale: true
                                },
                                {
                                    id: 2,
                                    type: 'date',
                                    width: '177px',
                                    content: '18-11-30 - 14:11:23'
                                },
                                {
                                    id: 3,
                                    width: '168px',
                                    type: 'cryptoCurrency',
                                    content: '718.00000000',
                                    currencyType: 'TRX'
                                },
                                {
                                    id: 4,
                                    width: '149px',
                                    type: 'cryptoCurrency',
                                    content: '0.00000327',
                                    currencyType: 'BTC'
                                },
                                {
                                    id: 5,
                                    width: '175px',
                                    type: 'cryptoCurrency',
                                    content: '0.00011739',
                                    currencyType: 'BTC'
                                },
                                {
                                    id: 6,
                                    width: '117px',
                                    type: 'cryptoCurrency',
                                    content: '0.00234786 ',
                                    currencyType: 'BTC',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 11,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '118px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'type',
                                    width: '81px',
                                    isSale: true
                                },
                                {
                                    id: 2,
                                    type: 'date',
                                    width: '177px',
                                    content: '18-11-30 - 14:11:23'
                                },
                                {
                                    id: 3,
                                    width: '168px',
                                    type: 'cryptoCurrency',
                                    content: '718.00000000',
                                    currencyType: 'TRX'
                                },
                                {
                                    id: 4,
                                    width: '149px',
                                    type: 'cryptoCurrency',
                                    content: '0.00000327',
                                    currencyType: 'BTC'
                                },
                                {
                                    id: 5,
                                    width: '175px',
                                    type: 'cryptoCurrency',
                                    content: '0.00011739',
                                    currencyType: 'BTC'
                                },
                                {
                                    id: 6,
                                    width: '117px',
                                    type: 'cryptoCurrency',
                                    content: '0.00234786 ',
                                    currencyType: 'BTC',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 12,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '118px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'type',
                                    width: '81px',
                                    isSale: true
                                },
                                {
                                    id: 2,
                                    type: 'date',
                                    width: '177px',
                                    content: '18-11-30 - 14:11:23'
                                },
                                {
                                    id: 3,
                                    width: '168px',
                                    type: 'cryptoCurrency',
                                    content: '718.00000000',
                                    currencyType: 'TRX'
                                },
                                {
                                    id: 4,
                                    width: '149px',
                                    type: 'cryptoCurrency',
                                    content: '0.00000327',
                                    currencyType: 'BTC'
                                },
                                {
                                    id: 5,
                                    width: '175px',
                                    type: 'cryptoCurrency',
                                    content: '0.00011739',
                                    currencyType: 'BTC'
                                },
                                {
                                    id: 6,
                                    width: '117px',
                                    type: 'cryptoCurrency',
                                    content: '0.00234786 ',
                                    currencyType: 'BTC',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 13,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '118px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'type',
                                    width: '81px',
                                    isSale: true
                                },
                                {
                                    id: 2,
                                    type: 'date',
                                    width: '177px',
                                    content: '18-11-30 - 14:11:23'
                                },
                                {
                                    id: 3,
                                    width: '168px',
                                    type: 'cryptoCurrency',
                                    content: '718.00000000',
                                    currencyType: 'TRX'
                                },
                                {
                                    id: 4,
                                    width: '149px',
                                    type: 'cryptoCurrency',
                                    content: '0.00000327',
                                    currencyType: 'BTC'
                                },
                                {
                                    id: 5,
                                    width: '175px',
                                    type: 'cryptoCurrency',
                                    content: '0.00011739',
                                    currencyType: 'BTC'
                                },
                                {
                                    id: 6,
                                    width: '117px',
                                    type: 'cryptoCurrency',
                                    content: '0.00234786 ',
                                    currencyType: 'BTC',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 14,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '118px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'type',
                                    width: '81px',
                                    isSale: true
                                },
                                {
                                    id: 2,
                                    type: 'date',
                                    width: '177px',
                                    content: '18-11-30 - 14:11:23'
                                },
                                {
                                    id: 3,
                                    width: '168px',
                                    type: 'cryptoCurrency',
                                    content: '718.00000000',
                                    currencyType: 'TRX'
                                },
                                {
                                    id: 4,
                                    width: '149px',
                                    type: 'cryptoCurrency',
                                    content: '0.00000327',
                                    currencyType: 'BTC'
                                },
                                {
                                    id: 5,
                                    width: '175px',
                                    type: 'cryptoCurrency',
                                    content: '0.00011739',
                                    currencyType: 'BTC'
                                },
                                {
                                    id: 6,
                                    width: '117px',
                                    type: 'cryptoCurrency',
                                    content: '0.00234786 ',
                                    currencyType: 'BTC',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 15,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '118px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'type',
                                    width: '81px',
                                    isSale: true
                                },
                                {
                                    id: 2,
                                    type: 'date',
                                    width: '177px',
                                    content: '18-11-30 - 14:11:23'
                                },
                                {
                                    id: 3,
                                    width: '168px',
                                    type: 'cryptoCurrency',
                                    content: '718.00000000',
                                    currencyType: 'TRX'
                                },
                                {
                                    id: 4,
                                    width: '149px',
                                    type: 'cryptoCurrency',
                                    content: '0.00000327',
                                    currencyType: 'BTC'
                                },
                                {
                                    id: 5,
                                    width: '175px',
                                    type: 'cryptoCurrency',
                                    content: '0.00011739',
                                    currencyType: 'BTC'
                                },
                                {
                                    id: 6,
                                    width: '117px',
                                    type: 'cryptoCurrency',
                                    content: '0.00234786 ',
                                    currencyType: 'BTC',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 16,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '118px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'type',
                                    width: '81px',
                                    isSale: true
                                },
                                {
                                    id: 2,
                                    type: 'date',
                                    width: '177px',
                                    content: '18-11-30 - 14:11:23'
                                },
                                {
                                    id: 3,
                                    width: '168px',
                                    type: 'cryptoCurrency',
                                    content: '718.00000000',
                                    currencyType: 'TRX'
                                },
                                {
                                    id: 4,
                                    width: '149px',
                                    type: 'cryptoCurrency',
                                    content: '0.00000327',
                                    currencyType: 'BTC'
                                },
                                {
                                    id: 5,
                                    width: '175px',
                                    type: 'cryptoCurrency',
                                    content: '0.00011739',
                                    currencyType: 'BTC'
                                },
                                {
                                    id: 6,
                                    width: '117px',
                                    type: 'cryptoCurrency',
                                    content: '0.00234786 ',
                                    currencyType: 'BTC',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 17,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '118px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'type',
                                    width: '81px',
                                    isSale: true
                                },
                                {
                                    id: 2,
                                    type: 'date',
                                    width: '177px',
                                    content: '18-11-30 - 14:11:23'
                                },
                                {
                                    id: 3,
                                    width: '168px',
                                    type: 'cryptoCurrency',
                                    content: '718.00000000',
                                    currencyType: 'TRX'
                                },
                                {
                                    id: 4,
                                    width: '149px',
                                    type: 'cryptoCurrency',
                                    content: '0.00000327',
                                    currencyType: 'BTC'
                                },
                                {
                                    id: 5,
                                    width: '175px',
                                    type: 'cryptoCurrency',
                                    content: '0.00011739',
                                    currencyType: 'BTC'
                                },
                                {
                                    id: 6,
                                    width: '117px',
                                    type: 'cryptoCurrency',
                                    content: '0.00234786 ',
                                    currencyType: 'BTC',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 18,
                            content: [
                                {
                                    id: 0,
                                    type: 'currency',
                                    width: '118px',
                                    title: 'dice'
                                },
                                {
                                    id: 1,
                                    type: 'type',
                                    width: '81px',
                                    isSale: true
                                },
                                {
                                    id: 2,
                                    type: 'date',
                                    width: '177px',
                                    content: '18-11-30 - 14:11:23'
                                },
                                {
                                    id: 3,
                                    width: '168px',
                                    type: 'cryptoCurrency',
                                    content: '718.00000000',
                                    currencyType: 'TRX'
                                },
                                {
                                    id: 4,
                                    width: '149px',
                                    type: 'cryptoCurrency',
                                    content: '0.00000327',
                                    currencyType: 'BTC'
                                },
                                {
                                    id: 5,
                                    width: '175px',
                                    type: 'cryptoCurrency',
                                    content: '0.00011739',
                                    currencyType: 'BTC'
                                },
                                {
                                    id: 6,
                                    width: '117px',
                                    type: 'cryptoCurrency',
                                    content: '0.00234786 ',
                                    currencyType: 'BTC',
                                    align: 'right'
                                }
                            ]
                        }
                    ]
                }
                // {
                //     id: 1,
                //     categoryName: 'Advanced view',
                //     tableHead: [
                //         {
                //             id: 0,
                //             width: '152px',
                //             title: 'Currency'
                //         },
                //         {
                //             id: 1,
                //             width: '97px',
                //             title: 'Side'
                //         },
                //         {
                //             id: 2,
                //             width: '76px',
                //             title: 'Type'
                //         },
                //         {
                //             id: 3,
                //             width: '164px',
                //             title: 'Average Price'
                //         },
                //         {
                //             id: 4,
                //             width: '120px',
                //             title: 'Filled'
                //         },
                //         {
                //             id: 5,
                //             width: '142px',
                //             title: 'Amount'
                //         },
                //         {
                //             id: 6,
                //             width: '56px',
                //             title: 'Status',
                //             align: 'right'
                //         },
                //         {
                //             id: 7,
                //             width: '177px',
                //             title: 'Total',
                //             align: 'right'
                //         }
                //     ],
                //     rows: [
                //         {
                //             id: 0,
                //             content: [
                //                 {
                //                     id: 0,
                //                     type: 'currency',
                //                     width: '152px',
                //                     title: 'dice'
                //                 },
                //                 {
                //                     id: 1,
                //                     type: 'type',
                //                     width: '97px',
                //                     title: 'dice',
                //                     isSale: true
                //                 },
                //                 {
                //                     id: 2,
                //                     type: 'default',
                //                     width: '76px',
                //                     title: 'Limit',
                //                     align: 'left'
                //                 },
                //                 {
                //                     id: 3,
                //                     width: '164px',
                //                     type: 'cryptoCurrency',
                //                     content: '718.00000000',
                //                     currencyType: 'TRX'
                //                 },
                //                 {
                //                     id: 4,
                //                     width: '120px',
                //                     type: 'default',
                //                     title: '0.00000327',
                //                     align: 'left'
                //                 },
                //                 {
                //                     id: 5,
                //                     width: '142px',
                //                     type: 'default',
                //                     title: '1.00000000',
                //                     align: 'left'
                //                 },
                //                 {
                //                     id: 6,
                //                     type: 'status',
                //                     width: '56px',
                //                     status: 0,
                //                     align: 'right'
                //                 },
                //                 {
                //                     id: 7,
                //                     type: 'cryptoCurrency',
                //                     width: '177px',
                //                     content: '0.00234786',
                //                     currencyType: 'BTC',
                //                     align: 'right'
                //                 }
                //             ]
                //         },
                //         {
                //             id: 1,
                //             content: [
                //                 {
                //                     id: 0,
                //                     type: 'currency',
                //                     width: '152px',
                //                     title: 'dice'
                //                 },
                //                 {
                //                     id: 1,
                //                     type: 'type',
                //                     width: '97px',
                //                     title: 'dice',
                //                     isSale: true
                //                 },
                //                 {
                //                     id: 2,
                //                     type: 'default',
                //                     width: '76px',
                //                     title: 'Limit',
                //                     align: 'left'
                //                 },
                //                 {
                //                     id: 3,
                //                     width: '164px',
                //                     type: 'cryptoCurrency',
                //                     content: '718.00000000',
                //                     currencyType: 'TRX'
                //                 },
                //                 {
                //                     id: 4,
                //                     width: '120px',
                //                     type: 'default',
                //                     title: '0.00000327',
                //                     align: 'left'
                //                 },
                //                 {
                //                     id: 5,
                //                     width: '142px',
                //                     type: 'default',
                //                     title: '1.00000000',
                //                     align: 'left'
                //                 },
                //                 {
                //                     id: 6,
                //                     type: 'status',
                //                     width: '56px',
                //                     status: 0,
                //                     align: 'right'
                //                 },
                //                 {
                //                     id: 7,
                //                     type: 'cryptoCurrency',
                //                     width: '177px',
                //                     content: '0.00234786',
                //                     currencyType: 'BTC',
                //                     align: 'right'
                //                 }
                //             ]
                //         },
                //         {
                //             id: 2,
                //             content: [
                //                 {
                //                     id: 0,
                //                     type: 'currency',
                //                     width: '152px',
                //                     title: 'dice'
                //                 },
                //                 {
                //                     id: 1,
                //                     type: 'type',
                //                     width: '97px',
                //                     title: 'dice',
                //                     isSale: false
                //                 },
                //                 {
                //                     id: 2,
                //                     type: 'default',
                //                     width: '76px',
                //                     title: 'Limit',
                //                     align: 'left'
                //                 },
                //                 {
                //                     id: 3,
                //                     width: '164px',
                //                     type: 'cryptoCurrency',
                //                     content: '718.00000000',
                //                     currencyType: 'TRX'
                //                 },
                //                 {
                //                     id: 4,
                //                     width: '120px',
                //                     type: 'default',
                //                     title: '0.00000327',
                //                     align: 'left'
                //                 },
                //                 {
                //                     id: 5,
                //                     width: '142px',
                //                     type: 'default',
                //                     title: '1.00000000',
                //                     align: 'left'
                //                 },
                //                 {
                //                     id: 6,
                //                     type: 'status',
                //                     width: '56px',
                //                     status: 1,
                //                     align: 'right'
                //                 },
                //                 {
                //                     id: 7,
                //                     type: 'cryptoCurrency',
                //                     width: '177px',
                //                     content: '0.00234786',
                //                     currencyType: 'BTC',
                //                     align: 'right'
                //                 }
                //             ]
                //         }
                //     ]
                // }
            ]
        }
    }
  }
</script>

<style lang="scss">
  @import "AccountHistory";
</style>
