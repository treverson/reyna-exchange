<template>
    <div :class="objectClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "AccountContainer",
        props: {
            boxSizing: {
                type: String
            }
        },
        computed: {
            objectClass: function () {
                return {
                    'account-container': true,
                    'account-container--boxSizing-content': this.boxSizing === 'content-box'
                }
            }
        }
    }
</script>

<style lang="scss">
    @import "AccountContainer";
</style>

