<template>
    <div class="TerminalOrderBook">
        <div class="TerminalOrderBook__headerWrapper">
            <div class="TerminalOrderBook__header">
                <h3 class="TerminalOrderBook__heading">
                    Order Book
                </h3>
                <div class="TerminalOrderBook__controls">
                    <button class="TerminalOrderBook__controlButton">
                        <span class="icon-minus TerminalOrderBook__controlMinus"></span>
                    </button>
                    <button class="TerminalOrderBook__controlButton">
                        <span class="icon-plus TerminalOrderBook__controlPlus"></span>
                    </button>
                </div>
            </div>
        </div>
        <div class="TerminalOrderBook__body">
            <terminal-table-generator :table-data="dataTable" class="TerminalOrderBook__tableItem" />
            <table class="TerminalOrderBook__dashboard">
                <tr>
                    <th class="TerminalOrderBook__dashboardColumn TerminalOrderBook__dashboardColumn_columnSize">0.00%</th>
                    <th class="TerminalOrderBook__dashboardColumn TerminalOrderBook__dashboardColumn_columnMySize">0.09322000</th>
                    <th class="TerminalOrderBook__dashboardColumn TerminalOrderBook__dashboardColumn_columnPrice">0.02302</th>
                </tr>
            </table>
            <terminal-table-generator :table-head="false" :table-data="dataTable" class="TerminalOrderBook__tableItem" />
        </div>
    </div>
</template>

<script>
    import TerminalTableGenerator from "@/components/Local/Terminal/TerminalTableGenerator/TerminalTableGenerator";
    export default {
        name: "TerminalOrderBook",
        components: {TerminalTableGenerator},
        data () {
            return {
                dataTable: {
                    id: 0,
                    head: [
                        {
                            id: 0,
                            title: 'My size',
                            width: '90px',
                            align: 'left'
                        },
                        {
                            id: 1,
                            title: 'Size',
                            width: '70px',
                            align: 'left'
                        },
                        {
                            id: 2,
                            title: 'Price (TRX)',
                            width: '48px',
                            align: 'right'
                        }
                    ],
                    body: [
                        {
                            id: 0,
                            rowContent: [
                                {
                                    id: 0,
                                    template: 'default',
                                    content: '0.09322000',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'default',
                                    content: '0.01765694',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '48px',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 1,
                            rowContent: [
                                {
                                    id: 0,
                                    template: 'default',
                                    content: '0.09322000',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'default',
                                    content: '0.01765694',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '48px',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 2,
                            rowContent: [
                                {
                                    id: 0,
                                    template: 'default',
                                    content: '0.09322000',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'default',
                                    content: '0.01765694',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '48px',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 3,
                            rowContent: [
                                {
                                    id: 0,
                                    template: 'default',
                                    content: '0.09322000',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'default',
                                    content: '0.01765694',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '48px',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 4,
                            rowContent: [
                                {
                                    id: 0,
                                    template: 'default',
                                    content: '0.09322000',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'default',
                                    content: '0.01765694',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '48px',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 5,
                            rowContent: [
                                {
                                    id: 0,
                                    template: 'default',
                                    content: '0.09322000',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'default',
                                    content: '0.01765694',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '48px',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 6,
                            rowContent: [
                                {
                                    id: 0,
                                    template: 'default',
                                    content: '0.09322000',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'default',
                                    content: '0.01765694',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '48px',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 7,
                            rowContent: [
                                {
                                    id: 0,
                                    template: 'default',
                                    content: '0.09322000',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'default',
                                    content: '0.01765694',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '48px',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 8,
                            rowContent: [
                                {
                                    id: 0,
                                    template: 'default',
                                    content: '0.09322000',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'default',
                                    content: '0.01765694',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '48px',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 9,
                            rowContent: [
                                {
                                    id: 0,
                                    template: 'default',
                                    content: '0.09322000',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'default',
                                    content: '0.01765694',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '48px',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 10,
                            rowContent: [
                                {
                                    id: 0,
                                    template: 'default',
                                    content: '0.09322000',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'default',
                                    content: '0.01765694',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '48px',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 11,
                            rowContent: [
                                {
                                    id: 0,
                                    template: 'default',
                                    content: '0.09322000',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'default',
                                    content: '0.01765694',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '48px',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 12,
                            rowContent: [
                                {
                                    id: 0,
                                    template: 'default',
                                    content: '0.09322000',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'default',
                                    content: '0.01765694',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '48px',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 13,
                            rowContent: [
                                {
                                    id: 0,
                                    template: 'default',
                                    content: '0.09322000',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'default',
                                    content: '0.01765694',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '48px',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 14,
                            rowContent: [
                                {
                                    id: 0,
                                    template: 'default',
                                    content: '0.09322000',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'default',
                                    content: '0.01765694',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '48px',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 15,
                            rowContent: [
                                {
                                    id: 0,
                                    template: 'default',
                                    content: '0.09322000',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'default',
                                    content: '0.01765694',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '48px',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 16,
                            rowContent: [
                                {
                                    id: 0,
                                    template: 'default',
                                    content: '0.09322000',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'default',
                                    content: '0.01765694',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '48px',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 17,
                            rowContent: [
                                {
                                    id: 0,
                                    template: 'default',
                                    content: '0.09322000',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'default',
                                    content: '0.01765694',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '48px',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 18,
                            rowContent: [
                                {
                                    id: 0,
                                    template: 'default',
                                    content: '0.09322000',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'default',
                                    content: '0.01765694',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '48px',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 19,
                            rowContent: [
                                {
                                    id: 0,
                                    template: 'default',
                                    content: '0.09322000',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'default',
                                    content: '0.01765694',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '48px',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 20,
                            rowContent: [
                                {
                                    id: 0,
                                    template: 'default',
                                    content: '0.09322000',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'default',
                                    content: '0.01765694',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '48px',
                                    align: 'right'
                                }
                            ]
                        }
                    ]
                }
            }
        }
    }
</script>
<style lang="scss">
    @import "TerminalOrderBook";
</style>
