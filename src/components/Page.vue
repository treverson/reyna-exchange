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
                    'page--theme-account': this.theme === 'account'
                }
            }
        }
    }
</script>

<style lang="scss">
    .page {
        font: 13px "SF UI Display", "SF UI Display Fixed", sans-serif;
        line-height: 1.5;

        position: relative;
        min-height: 100vh;
        margin: 0;

        color: #262626;
        background: #fff;
    }


    .page--theme-account {
        background-color: #F5EBEB;
    }
</style>
