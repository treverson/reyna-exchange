<template>
    <div class="TerminalTableHistory">
        <terminal-primary-section class="TerminalTableHistory__content">
            <terminal-primary-header heading="Trade history"/>
            <terminal-table-generator :table-data="dataTable" />
        </terminal-primary-section>
    </div>
</template>

<script>
    import TerminalPrimarySection from '@/components/Local/Terminal/TerminalPrimarySection/TerminalPrimarySection.vue'
    import TerminalPrimaryHeader
        from "@/components/Local/Terminal/TerminalPrimarySection/components/TerminalPrimaryHeader/TerminalPrimaryHeader";
    import TerminalTableGenerator from "@/components/Local/Terminal/TerminalTableGenerator/TerminalTableGenerator";

    export default {
        name: "TerminalTableHistory",
        components: {
            TerminalTableGenerator,
            TerminalPrimaryHeader,
            TerminalPrimarySection
        },
        data() {
            return {
                dataTable: {
                    id: 0,
                    head: [
                        {
                            id: 0,
                            title: 'Size',
                            width: '90px',
                            align: 'left'
                        },
                        {
                            id: 1,
                            title: 'Price (TRX)',
                            width: '70px',
                            align: 'left'
                        },
                        {
                            id: 2,
                            title: 'Time',
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
                                    content: '0.01765694',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'gray',
                                    content: '01:26:30',
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
                                    content: '0.01765694',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'gray',
                                    content: '01:26:30',
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
                                    content: '0.01765694',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'gray',
                                    content: '01:26:30',
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
                                    content: '0.01765694',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'gray',
                                    content: '01:26:30',
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
                                    content: '0.01765694',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'gray',
                                    content: '01:26:30',
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
                                    content: '0.01765694',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'gray',
                                    content: '01:26:30',
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
                                    content: '0.01765694',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'gray',
                                    content: '01:26:30',
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
                                    content: '0.01765694',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'gray',
                                    content: '01:26:30',
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
                                    content: '0.01765694',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'gray',
                                    content: '01:26:30',
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
                                    content: '0.01765694',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'gray',
                                    content: '01:26:30',
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
                                    content: '0.01765694',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'gray',
                                    content: '01:26:30',
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
                                    content: '0.01765694',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'gray',
                                    content: '01:26:30',
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
                                    content: '0.01765694',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'gray',
                                    content: '01:26:30',
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
                                    content: '0.01765694',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'gray',
                                    content: '01:26:30',
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
                                    content: '0.01765694',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'gray',
                                    content: '01:26:30',
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
                                    content: '0.01765694',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'gray',
                                    content: '01:26:30',
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
                                    content: '0.01765694',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'gray',
                                    content: '01:26:30',
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
                                    content: '0.01765694',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'gray',
                                    content: '01:26:30',
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
                                    content: '0.01765694',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'gray',
                                    content: '01:26:30',
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
                                    content: '0.01765694',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'gray',
                                    content: '01:26:30',
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
                                    content: '0.01765694',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'gray',
                                    content: '01:26:30',
                                    width: '48px',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 21,
                            rowContent: [
                                {
                                    id: 0,
                                    template: 'default',
                                    content: '0.01765694',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'gray',
                                    content: '01:26:30',
                                    width: '48px',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 22,
                            rowContent: [
                                {
                                    id: 0,
                                    template: 'default',
                                    content: '0.01765694',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'gray',
                                    content: '01:26:30',
                                    width: '48px',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 23,
                            rowContent: [
                                {
                                    id: 0,
                                    template: 'default',
                                    content: '0.01765694',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'gray',
                                    content: '01:26:30',
                                    width: '48px',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 24,
                            rowContent: [
                                {
                                    id: 0,
                                    template: 'default',
                                    content: '0.01765694',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'gray',
                                    content: '01:26:30',
                                    width: '48px',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 25,
                            rowContent: [
                                {
                                    id: 0,
                                    template: 'default',
                                    content: '0.01765694',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'gray',
                                    content: '01:26:30',
                                    width: '48px',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 26,
                            rowContent: [
                                {
                                    id: 0,
                                    template: 'default',
                                    content: '0.01765694',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'gray',
                                    content: '01:26:30',
                                    width: '48px',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 27,
                            rowContent: [
                                {
                                    id: 0,
                                    template: 'default',
                                    content: '0.01765694',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'gray',
                                    content: '01:26:30',
                                    width: '48px',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 28,
                            rowContent: [
                                {
                                    id: 0,
                                    template: 'default',
                                    content: '0.01765694',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'gray',
                                    content: '01:26:30',
                                    width: '48px',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 29,
                            rowContent: [
                                {
                                    id: 0,
                                    template: 'default',
                                    content: '0.01765694',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'gray',
                                    content: '01:26:30',
                                    width: '48px',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 30,
                            rowContent: [
                                {
                                    id: 0,
                                    template: 'default',
                                    content: '0.01765694',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'gray',
                                    content: '01:26:30',
                                    width: '48px',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 31,
                            rowContent: [
                                {
                                    id: 0,
                                    template: 'default',
                                    content: '0.01765694',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'gray',
                                    content: '01:26:30',
                                    width: '48px',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 32,
                            rowContent: [
                                {
                                    id: 0,
                                    template: 'default',
                                    content: '0.01765694',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'gray',
                                    content: '01:26:30',
                                    width: '48px',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 33,
                            rowContent: [
                                {
                                    id: 0,
                                    template: 'default',
                                    content: '0.01765694',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'gray',
                                    content: '01:26:30',
                                    width: '48px',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 34,
                            rowContent: [
                                {
                                    id: 0,
                                    template: 'default',
                                    content: '0.01765694',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'gray',
                                    content: '01:26:30',
                                    width: '48px',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 35,
                            rowContent: [
                                {
                                    id: 0,
                                    template: 'default',
                                    content: '0.01765694',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'gray',
                                    content: '01:26:30',
                                    width: '48px',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 36,
                            rowContent: [
                                {
                                    id: 0,
                                    template: 'default',
                                    content: '0.01765694',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'gray',
                                    content: '01:26:30',
                                    width: '48px',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 37,
                            rowContent: [
                                {
                                    id: 0,
                                    template: 'default',
                                    content: '0.01765694',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'gray',
                                    content: '01:26:30',
                                    width: '48px',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 38,
                            rowContent: [
                                {
                                    id: 0,
                                    template: 'default',
                                    content: '0.01765694',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'gray',
                                    content: '01:26:30',
                                    width: '48px',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 39,
                            rowContent: [
                                {
                                    id: 0,
                                    template: 'default',
                                    content: '0.01765694',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'gray',
                                    content: '01:26:30',
                                    width: '48px',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 40,
                            rowContent: [
                                {
                                    id: 0,
                                    template: 'default',
                                    content: '0.01765694',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'gray',
                                    content: '01:26:30',
                                    width: '48px',
                                    align: 'right'
                                }
                            ]
                        },
                        {
                            id: 41,
                            rowContent: [
                                {
                                    id: 0,
                                    template: 'default',
                                    content: '0.01765694',
                                    width: '90px',
                                    align: 'left',
                                },
                                {
                                    id: 1,
                                    template: 'red',
                                    content: '0.06996',
                                    width: '70px',
                                    align: 'left'
                                },
                                {
                                    id: 2,
                                    template: 'gray',
                                    content: '01:26:30',
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
    @import "TerminalTableHistory";
</style>
