<template>
    <header :class="['terminal-header']">
        <container :class="['terminal-header__container']">
            <logo to="/account" :class="['terminal-header__logo']" theme="white" />
            <terminal-simple-calendar :class="['terminal-header__calendar']" />
            <terminal-project-status :class="['terminal-header__status']" />
            <terminal-current-bunch />
            <account-profile user-name="Georg Pavlov" avatar-url="https://pp.userapi.com/c830308/v830308045/13f4f6/RwaDj5qlQwQ.jpg?ava=1" theme="dark" :class="['terminal-header__profile']" />
        </container>
    </header>
</template>

<script>
    import Logo from '@/components/Global/Logo/Logo.vue'
    import TerminalSimpleCalendar from '@/components/Local/Terminal/TerminalSimpleCalendar/TerminalSimpleCalendar.vue'
    import TerminalProjectStatus from '@/components/Local/Terminal/TerminalProjectStatus/TerminalProjectStatus.vue'
    import AccountProfile from '@/components/Global/AccountProfile/AccountProfile.vue'
    import Container from "@/components/Local/Account/AccountContainer/AccountContainer";
    import TerminalCurrentBunch from "@/components/Local/Terminal/TerminalCurrentBunch/TerminalCurrentBunch";

    export default {
        name: "TerminalHeader",
        components: {
            TerminalCurrentBunch,
            Container,
            Logo,
            TerminalSimpleCalendar,
            TerminalProjectStatus,
            AccountProfile
        }
    }
</script>

<style lang="scss">
    @import "TerminalHeader";
</style>
