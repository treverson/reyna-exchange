<template>
  <transition name="fade" mode="out-in">
    <PageWrapper theme="account">
      <AccountHeader />
      <PageContent>
        <Container>
          <AccountHeading>History</AccountHeading>
        </Container>
        <Container class="container__page-account-history">
          <AccountTableConstructor :content="tableData" />
          <AccountSidebarFilter />
        </Container>
      </PageContent>
      <AccountFooter />
    </PageWrapper>
  </transition>
</template>

<script>
  import PageWrapper from '@/components/PageWrapper'
  import PageContent from '@/components/PageContent'
  import AccountHeader from '@/components/Account/AccountHeader'
  import Container from '@/components/Container'
  import AccountHeading from '@/components/Account/AccountHeading'
  import AccountSidebarFilter from '@/components/Account/AccountSidebarFilter'
  import AccountFooter from '@/components/Account/AccountFooter'
  import AccountTableConstructor from '@/components/Account/AccountTableConstructor'

  export default {
    name: 'accountHistory',
    components: {
        PageWrapper,
        PageContent,
        AccountHeader,
        Container,
        AccountHeading,
        AccountSidebarFilter,
        AccountTableConstructor,
        AccountFooter
    },
    data () {
        return {
            tableData: [
                {
                    id: 0,
                    sectionName: 'Buy & Sell',
                    tableHead: [
                        {
                            id: 1,
                            title: 'Currency',
                            width: '120px',
                            align: 'left'
                        },
                        {
                            id: 1,
                            title: 'Date',
                            width: '135px',
                            align: 'left'
                        },
                        {
                            id: 2,
                            title: 'Side',
                            width: '69px',
                            align: 'left'
                        },
                        {
                            id: 3,
                            title: 'Amount',
                            width: '98px',
                            align: 'right'
                        },
                        {
                            id: 4,
                            title: 'Rate',
                            width: '126px',
                            align: 'right'
                        },
                        {
                            id: 5,
                            title: 'Fee',
                            width: '113px',
                            align: 'right'
                        },
                        {
                            id: 6,
                            title: 'Total',
                            width: '118px',
                            align: 'right'
                        }
                    ],
                    tableBody: [
                        {
                            id: 0,
                            content: [
                                {
                                    id: 0,
                                    align: 'left',
                                    type: 'currency',
                                    data: {
                                        transactionFrom: 'Jopas',
                                        transactionTo: 'BTC'
                                    }
                                },
                                {
                                    id: 1,
                                    content: '18-11-30 - 21:00:23',
                                    align: 'left',
                                    type: 'date'
                                },
                                {
                                    id: 2,
                                    content: 'Sell',
                                    align: 'left',
                                    type: 'side',
                                    isSell: true
                                },
                                {
                                    id: 3,
                                    content: '718.00000000',
                                    align: 'right',
                                    type: 'amount',
                                    currency: 'TRX'
                                },
                                {
                                    id: 4,
                                    content: '0.00000327',
                                    align: 'right',
                                    type: 'amount',
                                    currency: 'BTC'
                                },
                                {
                                    id: 5,
                                    content: '0.00011739',
                                    align: 'right',
                                    type: 'amount',
                                    currency: 'BTC'
                                },
                                {
                                    id: 6,
                                    content: '0.00234786',
                                    align: 'right',
                                    type: 'amount',
                                    currency: 'BTC'
                                }
                            ]
                        },
                        {
                            id: 1,
                            content: [
                                {
                                    id: 0,
                                    align: 'left',
                                    type: 'currency'
                                },
                                {
                                    id: 1,
                                    content: '18-11-30 - 14:11:23',
                                    align: 'left',
                                    type: 'date'
                                },
                                {
                                    id: 2,
                                    content: 'Sell',
                                    align: 'left',
                                    type: 'side',
                                    isSell: false
                                },
                                {
                                    id: 3,
                                    content: '718.00000000',
                                    align: 'right',
                                    type: 'amount',
                                    currency: 'TRX'
                                },
                                {
                                    id: 4,
                                    content: '0.00000327',
                                    align: 'right',
                                    type: 'amount',
                                    currency: 'BTC'
                                },
                                {
                                    id: 5,
                                    content: '0.00011739',
                                    align: 'right',
                                    type: 'amount',
                                    currency: 'BTC'
                                },
                                {
                                    id: 6,
                                    content: '0.00234786',
                                    align: 'right',
                                    type: 'amount',
                                    currency: 'BTC'
                                }
                            ]
                        },
                        {
                            id: 2,
                            content: [
                                {
                                    id: 0,
                                    align: 'left',
                                    type: 'currency'
                                },
                                {
                                    id: 1,
                                    content: '18-11-30 - 14:11:23',
                                    align: 'left',
                                    type: 'date'
                                },
                                {
                                    id: 2,
                                    content: 'Sell',
                                    align: 'left',
                                    type: 'side',
                                    isSell: false
                                },
                                {
                                    id: 3,
                                    content: '718.00000000',
                                    align: 'right',
                                    type: 'amount',
                                    currency: 'TRX'
                                },
                                {
                                    id: 4,
                                    content: '0.00000327',
                                    align: 'right',
                                    type: 'amount',
                                    currency: 'BTC'
                                },
                                {
                                    id: 5,
                                    content: '0.00011739',
                                    align: 'right',
                                    type: 'amount',
                                    currency: 'BTC'
                                },
                                {
                                    id: 6,
                                    content: '0.00234786',
                                    align: 'right',
                                    type: 'amount',
                                    currency: 'BTC'
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 1,
                    sectionName: 'Advanced view',
                    tableHead: [
                        {
                            id: 0,
                            title: 'Currency',
                            width: '120px',
                            align: 'left'
                        },
                        {
                            id: 1,
                            title: 'Type',
                            width: '66px',
                            align: 'left'
                        },
                        {
                            id: 2,
                            title: 'Side',
                            width: '45px',
                            align: 'left'
                        },
                        {
                            id: 3,
                            title: 'Average price',
                            width: '114px',
                            align: 'right'
                        },
                        {
                            id: 4,
                            title: 'Filled',
                            width: '82px',
                            align: 'right'
                        },
                        {
                            id: 5,
                            title: 'Amount',
                            width: '94px',
                            align: 'right'
                        },
                        {
                            id: 6,
                            title: 'Total',
                            width: '94px',
                            align: 'right'
                        },
                        {
                            id: 7,
                            title: 'Status',
                            width: '88px',
                            align: 'right'
                        }
                    ],
                    tableBody: [
                        {
                            id: 0,
                            content: [
                                {
                                    id: 0,
                                    align: 'left',
                                    type: 'currency'
                                },
                                {
                                    id: 1,
                                    content: 'Limit',
                                    align: 'left',
                                    type: 'type'
                                },
                                {
                                    id: 2,
                                    content: 'Side',
                                    align: 'left',
                                    type: 'side',
                                    isSell: true
                                },
                                {
                                    id: 3,
                                    content: '0.00019000',
                                    align: 'right',
                                    type: 'amount',
                                    currency: 'TRX'
                                },
                                {
                                    id: 4,
                                    content: '0.00000000',
                                    align: 'right',
                                    type: 'amount'
                                },
                                {
                                    id: 5,
                                    content: '1.00000000',
                                    align: 'right',
                                    type: 'amount'
                                },
                                {
                                    id: 6,
                                    content: '0.00234786',
                                    align: 'right',
                                    type: 'amount',
                                    currency: 'BTC'
                                },
                                {
                                    id: 7,
                                    content: 'Cancelled',
                                    align: 'right',
                                    type: 'status',
                                    status: false
                                }
                            ]
                        },
                        {
                            id: 1,
                            content: [
                                {
                                    id: 0,
                                    align: 'left',
                                    type: 'currency'
                                },
                                {
                                    id: 1,
                                    content: 'Limit',
                                    align: 'left',
                                    type: 'type'
                                },
                                {
                                    id: 2,
                                    content: 'Side',
                                    align: 'left',
                                    type: 'side',
                                    isSell: false
                                },
                                {
                                    id: 3,
                                    content: '0.00019000',
                                    align: 'right',
                                    type: 'amount',
                                    currency: 'TRX'
                                },
                                {
                                    id: 4,
                                    content: '0.00000000',
                                    align: 'right',
                                    type: 'amount'
                                },
                                {
                                    id: 5,
                                    content: '1.00000000',
                                    align: 'right',
                                    type: 'amount'
                                },
                                {
                                    id: 6,
                                    content: '0.00234786',
                                    align: 'right',
                                    type: 'amount',
                                    currency: 'BTC'
                                },
                                {
                                    id: 7,
                                    content: 'Open',
                                    align: 'right',
                                    type: 'status',
                                    status: true
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
  .container__page-account-history {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
</style>
