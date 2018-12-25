<template>
    <div class="TerminalPrimaryTabItem">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "TerminalPrimaryTabItem",
        props: {
            tabId: {
                type: Number,
                required: true
            }
        }
    }
</script>

<style lang="scss">
    @import "TerminalPrimaryTabItem";
</style>
