<template>
    <div class="TerminalOrders">
        <terminal-primary-section class="TerminalOrders__section">
            <terminal-primary-header heading="You orders" :tab-data="tabData" />
            <terminal-primary-content type="tab" class="TerminalOrders__content">

                <terminal-primary-tab-item :tab-id="0">
                    <terminal-table-generator :table-data="tableData" />
                </terminal-primary-tab-item>

                <terminal-primary-tab-item :tab-id="1">
                    Empty
                </terminal-primary-tab-item>

                <terminal-primary-tab-item :tab-id="2">
                    Empty
                </terminal-primary-tab-item>

                <terminal-primary-tab-item :tab-id="3">
                    Empty
                </terminal-primary-tab-item>

            </terminal-primary-content>
        </terminal-primary-section>
    </div>
</template>

<script>
    import TerminalPrimarySection from "@/components/Local/Terminal/TerminalPrimarySection/TerminalPrimarySection";
    import TerminalPrimaryHeader
        from "@/components/Local/Terminal/TerminalPrimarySection/components/TerminalPrimaryHeader/TerminalPrimaryHeader";
    import TerminalPrimaryContent
        from "@/components/Local/Terminal/TerminalPrimarySection/components/TerminalPrimaryContent/TerminalPrimaryContent";
    import TerminalPrimaryTabItem
        from "@/components/Local/Terminal/TerminalPrimarySection/components/TerminalPrimaryTabItem/TerminalPrimaryTabItem";
    import TerminalTableGenerator from "@/components/Local/Terminal/TerminalTableGenerator/TerminalTableGenerator";
    export default {
        name: "TerminalOrders",
        components: {
            TerminalTableGenerator,
            TerminalPrimaryTabItem,
            TerminalPrimaryContent,
            TerminalPrimaryHeader,
            TerminalPrimarySection
        },
        data () {
            return {
                tabData: [
                    {
                        id: 0,
                        title: 'Open Orders'
                    },
                    {
                        id: 1,
                        title: 'Order History'
                    },
                    {
                        id: 2,
                        title: 'Trade History'
                    },
                    {
                        id: 3,
                        title: 'Funds'
                    }
                ],
                tableData: {
                    id: 0,
                    head: [
                        {
                            id: 0,
                            title: 'Size (BCH)',
                            width: '119px',
                            align: 'left'
                        },
                        {
                            id: 1,
                            title: 'Filled',
                            width: '51px',
                            align: 'right'
                        },
                        {
                            id: 2,
                            title: 'Price (TRX)',
                            width: '111px',
                            align: 'right'
                        },
                        {
                            id: 3,
                            title: 'Time',
                            width: '200px',
                            align: 'right'
                        },
                        {
                            id: 4,
                            title: 'Type',
                            width: '133px',
                            align: 'center'
                        },
                        {
                            id: 5,
                            title: 'Status',
                            width: '74px',
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
                                    content: '1.00000000',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'default',
                                    content: '0.00000000',
                                    align: 'right',
                                },
                                {
                                    id: 2,
                                    template: 'default',
                                    content: '0.00004',
                                    align: 'right',
                                },
                                {
                                    id: 3,
                                    template: 'default',
                                    content: '18-11-30 - 22:40:17',
                                    align: 'right',
                                },
                                {
                                    id: 4,
                                    template: 'type',
                                    content: true,
                                    align: 'center',
                                },
                                {
                                    id: 5,
                                    template: 'status',
                                    content: true,
                                    align: 'right',
                                }
                            ]
                        },
                        {
                            id: 1,
                            rowContent: [
                                {
                                    id: 0,
                                    template: 'default',
                                    content: '1.00000000',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'default',
                                    content: '0.00000000',
                                    align: 'right',
                                },
                                {
                                    id: 2,
                                    template: 'default',
                                    content: '0.00004',
                                    align: 'right',
                                },
                                {
                                    id: 3,
                                    template: 'default',
                                    content: '18-11-30 - 22:40:17',
                                    align: 'right',
                                },
                                {
                                    id: 4,
                                    template: 'type',
                                    content: true,
                                    align: 'center',
                                },
                                {
                                    id: 5,
                                    template: 'status',
                                    content: false,
                                    align: 'right',
                                }
                            ]
                        },
                        {
                            id: 2,
                            rowContent: [
                                {
                                    id: 0,
                                    template: 'default',
                                    content: '1.00000000',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'default',
                                    content: '0.00000000',
                                    align: 'right',
                                },
                                {
                                    id: 2,
                                    template: 'default',
                                    content: '0.00004',
                                    align: 'right',
                                },
                                {
                                    id: 3,
                                    template: 'default',
                                    content: '18-11-30 - 22:40:17',
                                    align: 'right',
                                },
                                {
                                    id: 4,
                                    template: 'type',
                                    content: false,
                                    align: 'center',
                                },
                                {
                                    id: 5,
                                    template: 'status',
                                    content: false,
                                    align: 'right',
                                }
                            ]
                        },
                        {
                            id: 3,
                            rowContent: [
                                {
                                    id: 0,
                                    template: 'default',
                                    content: '1.00000000',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'default',
                                    content: '0.00000000',
                                    align: 'right',
                                },
                                {
                                    id: 2,
                                    template: 'default',
                                    content: '0.00004',
                                    align: 'right',
                                },
                                {
                                    id: 3,
                                    template: 'default',
                                    content: '18-11-30 - 22:40:17',
                                    align: 'right',
                                },
                                {
                                    id: 4,
                                    template: 'type',
                                    content: true,
                                    align: 'center',
                                },
                                {
                                    id: 5,
                                    template: 'status',
                                    content: true,
                                    align: 'right',
                                }
                            ]
                        },
                        {
                            id: 4,
                            rowContent: [
                                {
                                    id: 0,
                                    template: 'default',
                                    content: '1.00000000',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'default',
                                    content: '0.00000000',
                                    align: 'right',
                                },
                                {
                                    id: 2,
                                    template: 'default',
                                    content: '0.00004',
                                    align: 'right',
                                },
                                {
                                    id: 3,
                                    template: 'default',
                                    content: '18-11-30 - 22:40:17',
                                    align: 'right',
                                },
                                {
                                    id: 4,
                                    template: 'type',
                                    content: true,
                                    align: 'center',
                                },
                                {
                                    id: 5,
                                    template: 'status',
                                    content: true,
                                    align: 'right',
                                }
                            ]
                        },
                        {
                            id: 5,
                            rowContent: [
                                {
                                    id: 0,
                                    template: 'default',
                                    content: '1.00000000',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'default',
                                    content: '0.00000000',
                                    align: 'right',
                                },
                                {
                                    id: 2,
                                    template: 'default',
                                    content: '0.00004',
                                    align: 'right',
                                },
                                {
                                    id: 3,
                                    template: 'default',
                                    content: '18-11-30 - 22:40:17',
                                    align: 'right',
                                },
                                {
                                    id: 4,
                                    template: 'type',
                                    content: true,
                                    align: 'center',
                                },
                                {
                                    id: 5,
                                    template: 'status',
                                    content: true,
                                    align: 'right',
                                }
                            ]
                        },
                        {
                            id: 6,
                            rowContent: [
                                {
                                    id: 0,
                                    template: 'default',
                                    content: '1.00000000',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'default',
                                    content: '0.00000000',
                                    align: 'right',
                                },
                                {
                                    id: 2,
                                    template: 'default',
                                    content: '0.00004',
                                    align: 'right',
                                },
                                {
                                    id: 3,
                                    template: 'default',
                                    content: '18-11-30 - 22:40:17',
                                    align: 'right',
                                },
                                {
                                    id: 4,
                                    template: 'type',
                                    content: true,
                                    align: 'center',
                                },
                                {
                                    id: 5,
                                    template: 'status',
                                    content: true,
                                    align: 'right',
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
    @import "TerminalOrders";
</style>
