<template>
    <header :class="['terminal-header']">
        <logo to="/terminal" :class="['terminal-header__logo']" theme="white" />
        <terminal-simple-calendar :class="['terminal-header__calendar']" />
        <terminal-project-status :class="['terminal-header__status']" />
        <account-profile user-name="Georg Pavlov" avatar-url="https://pp.userapi.com/c830308/v830308045/13f4f6/RwaDj5qlQwQ.jpg?ava=1" theme="dark" :class="['terminal-header__profile']" />
    </header>
</template>

<script>
    import Logo from '@/components/Core/Logo/Logo.vue'
    import TerminalSimpleCalendar from '@/components/Terminal/TerminalSimpleCalendar/TerminalSimpleCalendar.vue'
    import TerminalProjectStatus from '@/components/Terminal/TerminalProjectStatus/TerminalProjectStatus.vue'
    import AccountProfile from '@/components/Core/AccountProfile/AccountProfile.vue'

    export default {
        name: "TerminalHeader",
        components: {
            Logo,
            TerminalSimpleCalendar,
            TerminalProjectStatus,
            AccountProfile
        }
    }
</script>

<style lang="scss">
    @import "TerminalHeader.scss";
</style>
