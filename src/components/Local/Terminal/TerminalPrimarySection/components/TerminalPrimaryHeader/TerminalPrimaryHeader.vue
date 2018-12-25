<template>
    <div class="TerminalPrimaryHeader">
        <div class="TerminalPrimaryHeader__wrapper">
            <span class="TerminalPrimaryHeader__heading">
                {{ heading }}
            </span>
            <div v-if="typeof tabData !== undefined" class="TerminalPrimaryHeader__tabs">
                <a v-for="tab in tabData"
                   v-bind:key="tab.id"
                   @click="changeCurrentTabItem(tab.id)"
                   :class="{ 'TerminalPrimaryHeader__tab': true, 'TerminalPrimaryHeader__tab_Active': tab.id === currentTabItem }">
                    {{ tab.title }}
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TerminalPrimaryHeader",
        props: {
            heading: {
                type: String,
                required: true
            },
            tabData: {
                type: Array
            },
            currentTab: {
                type: Number,
                default: 0
            }
        },
        data () {
            return {
                currentTabItem: this.currentTab
            }
        },
        methods: {
            changeCurrentTabItem: function (id) {
                this.currentTabItem = id
                this.$parent.$emit('current-tab-item', id)
            }
        },
        mounted () {

            this.$parent.$emit('current-tab-item', this.currentTabItem)

        }
    }
</script>

<style lang="scss">
    @import "TerminalPrimaryHeader";
</style>
