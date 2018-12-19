<template>
    <page theme="terminal">
        <terminal-header/>
        <container>
            <terminal-order :style="{ maxWidth: '256px' }" />
            <terminal-table-history />
        </container>
    </page>
</template>

<script>
    import Page from '@/components/Core/Page/Page.vue'
    import TerminalHeader from '@/components/Terminal/TerminalHeader/TerminalHeader.vue'
    import TerminalOrder from '@/components/Terminal/TerminalOrder/TerminalOrder.vue'
    import TerminalTableHistory from '@/components/Terminal/TerminalTableHistory/TerminalTableHistory.vue'
    import Container from '@/components/Account/AccountContainer/AccountContainer'

    export default {
        name: "TerminalHome",
        components: {
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
