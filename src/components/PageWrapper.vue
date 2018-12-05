<template>
    <div :class="objectClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "PageWrapper",
        props: {
            theme: {
                type: String
            }
        },
        computed: {
            objectClass: function () {
                return {
                    'page': true,
                    'page--theme-account': this.theme === 'account'
                }
            }
        }
    }
</script>

<style lang="scss">
    .page {
        padding: 0;
        position: relative;
        min-height: 100vh;
    }

    .page--theme-account {
        background-color: #F3F3F3;
    }
</style>
