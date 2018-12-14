<template>
    <router-link to="" :class="objectClass">
        <slot></slot>
    </router-link>
</template>

<script>
    export default {
        name: "Button",
        props: {
            to: {
                type: String,
                required: true
            },
            theme: {
                type: String,
                required: true
            }
        },
        computed: {
            objectClass: function () {
                return {
                    'account-button': true,
                    'account-button--theme-green': this.theme === 'green',
                    'account-button--theme-red': this.theme === 'red'
                }
            }
        }
    }
</script>

<style lang="scss">
    .account-button {
        display: inline-block;

        color: #fff;
        font-size: 12px;
        font-weight: 500;
        text-transform: uppercase;
        text-decoration: none;

        padding: 0 23px;
        line-height: 37px;

        border-radius: 2px;

        transition: .15s ease;
    }

    .account-button--theme-green {
        background-color: #2ED44D;

        &:hover,
        &:focus {
            background-color: #10AC2D;
        }
    }

    .account-button--theme-red {
        background-color: #F65454;

        &:hover,
        &:focus {
            background-color: #D11A1A;
        }
    }
</style>
