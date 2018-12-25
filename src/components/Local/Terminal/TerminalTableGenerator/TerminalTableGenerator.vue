<template>
    <div class="TerminalTableGenerators">
        <table v-if="tableHead === true" class="TerminalTableGenerator">
            <tr>
                <th v-for="column in tableData.head"
                    v-bind:key="column.id"
                    class="TerminalTableGenerator__headerColumn"
                    :style="{ width: column.width, textAlign: column.align }">
                    {{ column.title }}
                </th>
            </tr>
        </table>

        <div class="TerminalTableGenerator__content" v-bar>
            <div class="TerminalTableGenerator__inner">
                <table class="TerminalTableGenerator">
                    <tr v-for="row in tableData.body" v-bind:key="row.id" class="TerminalTableGenerator__bodyRow">
                        <th v-for="column in row.rowContent"
                            v-bind:key="column.id"
                            class="TerminalTableGenerator__bodyColumn"
                            :style="{ width: column.width, textAlign: column.align }">

                            <template v-if="column.template === 'gray'">
                            <span class="TerminalTableGenerator__template-gray">
                                {{ column.content }}
                            </span>
                            </template>

                            <template v-else-if="column.template === 'red'">
                            <span class="TerminalTableGenerator__template-red">
                                {{ column.content }}
                            </span>
                            </template>

                            <template v-else-if="column.template === 'type'">
                            <span :class="{ 'TerminalTableGenerator__template-type-red': column.content === false, 'TerminalTableGenerator__template-type-green': column.content === true }">
                                <template v-if="column.content === true">
                                    Buy
                                </template>
                                <template v-else>
                                    Sell
                                </template>
                            </span>
                            </template>

                            <template v-else-if="column.template === 'status'">
                                <template v-if="column.content === true">
                                    <div class="TerminalTableGenerator__statusWrapper">
                                        <button class="TerminalTableGenerator__buttonStatus TerminalTableGenerator__buttonStatus_Open">
                                            Open
                                        </button>
                                        <button class="TerminalTableGenerator__buttonStatus TerminalTableGenerator__buttonStatus_Close">
                                            Cancel
                                        </button>
                                    </div>
                                </template>
                                <template v-else>
                                <span class="TerminalTableGenerator__statusCanceled">
                                    Canceled
                                </span>
                                </template>
                            </template>

                            <template v-else>
                                {{ column.content }}
                            </template>
                        </th>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TerminalTableGenerator",
        props: {
            tableHead: {
                type: Boolean,
                default: true
            },
            tableData: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style lang="scss">
    @import "TerminalTableGenerator";
</style>
