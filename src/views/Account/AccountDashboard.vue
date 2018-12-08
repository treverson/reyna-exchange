<template>
  <Page theme="account">
    <div class="account-dashboard">
      <Header />

        <AccountContainer>
          <div class="account-dashboard__grid">

            <!-- getting start -->
            <div class="account-dashboard__getting-start">
              <GettingStart />
            </div>
            <!-- getting start end -->

            <!-- available-currencies -->
            <div class="account-dashboard__available-currencies">
              <AvailableCurrencies table-name="Available currencies" :current-item="0" :table-data="tableData" :toggle-actions="true" />
            </div>
            <!-- available-currencies end -->

            <!-- my funds -->
            <div class="account-dashboard__my-funds">
              <MyFunds />
            </div>
            <!-- my funds end -->

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
  import GettingStart from '@/components/Account/UI/GettingStart'
  import AvailableCurrencies from '@/components/Account/UI/AvailableCurrencies'
  import MyFunds from '@/components/Account/UI/MyFunds'

  export default {
    name: 'accountDashboard',
    components: {
        Page,
        Header,
        Footer,
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
            ]
        }
    }
  }
</script>

<style lang="scss">
  .account-dashboard__grid {
    margin-top: 13px;

    display: flex;
    align-items: flex-start;
  }

  .account-dashboard__getting-start {
    flex-shrink: 0;
    max-width: 256px;
    width: 100%;

    margin-right: 17px;
  }

  .account-dashboard__available-currencies {
    flex-shrink: 0;
    max-width: 712px;
    width: 100%;

    margin-right: 16px;
  }

  .account-dashboard__my-funds {
    flex-shrink: 0;
    max-width: 256px;
    width: 100%;
  }
</style>
