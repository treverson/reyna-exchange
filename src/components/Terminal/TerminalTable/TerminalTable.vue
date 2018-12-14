<template>
    <div :class="['terminal-table']">
        <div :class="['terminal-table__header']">
            <h3 :class="['terminal-table__heading']">{{ tableHeading }}</h3>
        </div>
        <table :class="['terminal-table__wrapper']">
            <thead :class="['terminal-table__head']">
                <tr :class="['terminal-table__row']">
                    <th v-for="item in tableData.head" v-bind:key="item.id" :class="['terminal-table__title']" :style="{ width: item.width, textAlign: item.textAlign }">
                        {{ item.name }}
                    </th>
                </tr>
            </thead>
            <tbody :class="['terminal-table__body']">
                <tr v-for="row in tableData.body" v-bind:key="row.id" :class="['terminal-table__row']">
                    <th v-for="column in row.content" v-bind:key="column.id" :class="['terminal-table__column']">
                        <template v-if="column.component.name === 'default'">
                            <span :class="{ 'terminal-table__item': true, 'terminal-table__item--theme-red': column.component.theme === 'red', 'terminal-table__item--theme-gray': column.component.theme === 'gray' }" :style="{ textAlign: column.textAlign }">
                                {{ column.component.content }}
                            </span>
                        </template>
                    </th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "TerminalTable",
        props: {
            tableHeading: {
                type: String,
                required: true
            },
            tableData: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style lang="scss">
    @import "TerminalTable";
</style>
