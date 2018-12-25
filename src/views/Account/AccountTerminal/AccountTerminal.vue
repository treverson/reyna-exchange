<template>
    <page theme="terminal">
        <terminal-header />
        <account-container class="AccountTerminal__container">

            <div class="AccountTerminal__content">

                <div class="AccountTerminal__column AccountTerminal__column_typeBig">

                    <div class="AccountTerminal__componentCharts">
                        <terminal-charts />
                    </div>

                    <div class="AccountTerminal__componentOrders">
                        <terminal-orders />
                    </div>

                </div>

                <div class="AccountTerminal__column AccountTerminal__column_typeMedium">

                    <div class="AccountTerminal__History">
                        <terminal-table-history />
                    </div>

                </div>

                <div class="AccountTerminal__column AccountTerminal__column_typeMedium">

                    <div class="AccountTerminal__componentOrderBook">
                        <terminal-order-book />
                    </div>

                    <div class="AccountTerminal__componentOrder">
                        <terminal-order />
                    </div>

                </div>

            </div>

        </account-container>
    </page>
</template>

<script>
    import Page from "@/components/Global/Page/Page";
    import TerminalHeader from "@/components/Local/Terminal/TerminalHeader/TerminalHeader";
    import AccountContainer from "@/components/Local/Account/AccountContainer/AccountContainer";
    import TerminalCharts from "@/components/Local/Terminal/TerminalCharts/TerminalCharts";
    import TerminalOrders from "@/components/Local/Terminal/TerminalOrders/TerminalOrders";
    import TerminalTableHistory from "@/components/Local/Terminal/TerminalTableHistory/TerminalTableHistory";
    import TerminalOrderBook from "@/components/Local/Terminal/TerminalOrderBook/TerminalOrderBook";
    import TerminalOrder from "@/components/Local/Terminal/TerminalOrder/TerminalOrder";
    export default {
        name: "AccountTerminal",
        components: {
            TerminalOrder,
            TerminalOrderBook,
            TerminalTableHistory, TerminalOrders, TerminalCharts, AccountContainer, TerminalHeader, Page}
    }
</script>

<style lang="scss">
    @import "AccountTerminal";
</style>
