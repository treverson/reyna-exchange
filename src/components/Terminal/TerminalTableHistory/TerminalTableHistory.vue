<template>
    <div :class="['terminal-table-history']">
        <terminal-table table-heading="Trade history" :table-data="data" />
    </div>
</template>

<script>
    import ExampleData from '@/components/Terminal/TerminalTable/TerminalTable.json'
    import TerminalTable from '@/components/Terminal/TerminalTable/TerminalTable.vue'

    export default {
        name: "TerminalTableHistory",
        components: {
            TerminalTable
        },
        data () {
            return {
                data: ExampleData
            }
        }
    }
</script>

<style lang="scss">
    @import "TerminalTableHistory";
</style>
