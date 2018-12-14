<template>
    <page theme="terminal">
        <terminal-header/>
        <terminal-order :style="{ maxWidth: '256px' }" />
        <terminal-table-history />
    </page>
</template>

<script>
    import Page from '@/components/Core/Page/Page.vue'
    import TerminalHeader from '@/components/Terminal/TerminalHeader/TerminalHeader.vue'
    import TerminalOrder from '@/components/Terminal/TerminalOrder/TerminalOrder.vue'
    import TerminalTableHistory from '@/components/Terminal/TerminalTableHistory/TerminalTableHistory.vue'

    export default {
        name: "TerminalHome",
        components: {
            Page,
            TerminalHeader,
            TerminalOrder,
            TerminalTableHistory
        }
    }
</script>

<style lang="scss">
    @import "TerminalHome.scss";
</style>
