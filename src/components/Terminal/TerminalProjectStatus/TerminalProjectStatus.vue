<template>
    <div :class="['terminal-project-status']">
        <div :class="['terminal-project-status__section']">
            <span :class="['terminal-project-status__title']">
                Last trade price
            </span>
            <p :class="['terminal-project-status__content']">
                0.49654 <span :class="['terminal-project-status__currency']">TRX</span>
            </p>
        </div>
        <div :class="['terminal-project-status__section']">
            <span :class="['terminal-project-status__title']">
                24 Hour price
            </span>
            <p :class="['terminal-project-status__content', 'terminal-project-status__content--type-percent']">
                +12.81%
            </p>
        </div>
        <div :class="['terminal-project-status__section']">
            <span :class="['terminal-project-status__title']">
                24 Hour volume
            </span>
            <p :class="['terminal-project-status__content']">
                1.71853880 <span :class="['terminal-project-status__currency']">BCH</span>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TerminalProjectStatus"
    }
</script>

<style lang="scss">
    @import "TerminalProjectStatus";
</style>
