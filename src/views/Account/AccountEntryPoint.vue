<template>
    <router-view/>
</template>

<script>
    export default {
        name: 'accountEntryPoint',
        created () {
            if (this.$store.state.isLogged !== true) {
                this.$router.push('/auth/sign-in')
            }
        }
    }
</script>
