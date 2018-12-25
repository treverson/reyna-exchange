<template>
    <div :class="objectClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Page",
        props: {
            theme: {
                type: String
            }
        },
        computed: {
            objectClass: function () {
                return {
                    'page': true,
                    'page--theme-account': this.theme === 'account',
                    'page--theme-terminal': this.theme === 'terminal',
                    'page--theme-auth': this.theme === 'auth',
                    'page--theme-red': this.theme === 'red'
                }
            }
        }
    }
</script>

<style lang="scss">
    @import "Page";
</style>
