<template>
    <page theme="terminal">
        <terminal-header/>
        <container>
            <div class="terminal__grid">
                <div class="terminal__column terminal__column_size_big">
                    <terminal-charts class="terminal__componentCharts" />
                    <terminal-orders class="terminal__componentOrders" />
                </div>
                <div class="terminal__column terminal__column_size_medium">
                    <terminal-table-history class="terminal__componentHistory" />
                </div>
                <div class="terminal__column terminal__column_size_small">
                    <terminal-order-book class="terminal__componentOrderBook" />
                    <terminal-order />
                </div>
            </div>
        </container>
    </page>
</template>

<script>
    import Page from '@/components/Global/Page/Page.vue'
    import TerminalHeader from '@/components/Local/Terminal/TerminalHeader/TerminalHeader.vue'
    import TerminalOrder from '@/components/Local/Terminal/TerminalOrder/TerminalOrder.vue'
    import TerminalTableHistory from '@/components/Local/Terminal/TerminalTableHistory/TerminalTableHistory.vue'
    import Container from '@/components/Local/Account/AccountContainer/AccountContainer'
    import TerminalCharts from "@/components/Local/Terminal/TerminalCharts/TerminalCharts";
    import TerminalOrderBook from "@/components/Local/Terminal/TerminalOrderBook/TerminalOrderBook";
    import TerminalOrders from "@/components/Local/Terminal/TerminalOrders/TerminalOrders";

    export default {
        name: "TerminalHome",
        components: {
            TerminalOrders,
            TerminalOrderBook,
            TerminalCharts,
            Page,
            TerminalHeader,
            TerminalOrder,
            TerminalTableHistory,
            Container
        }
    }
</script>

<style lang="scss">
    @import "TerminalHome.scss";
</style>
