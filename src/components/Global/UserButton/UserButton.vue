<template>
    <div class="user-button">
        <template v-if="type === 'router-link'">
            <router-link :to="to" :class="objectClass">
                <slot></slot>
            </router-link>
        </template>
        <template v-else-if="type === 'button'">
            <button :class="objectClass">
                <slot></slot>
            </button>
        </template>
    </div>
</template>

<script>
    export default {
        name: "UserButton",
        props: {
            type: {
                type: String,
                default: 'router-link'
            },
            to: {
                type: String
            },
            theme: {
                type: String
            }
        },
        computed: {
            objectClass: function () {
                return {
                    'user-button__content': true,
                    'user-button__content--theme-red': this.theme === 'red',
                    'user-button__content--theme-green': this.theme === 'green',
                    'user-button__content--theme-gray': this.theme === 'gray'
                }
            }
        }
    }
</script>

<style lang="scss">
    @import "UserButton";
</style>
