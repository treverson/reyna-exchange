<template>
    <div class="TerminalCharts">
        <div class="TerminalCharts__header">
            <h3 class="TerminalCharts__heading">
                Charts
            </h3>
            <div class="TerminalCharts__menuSection">
                <div class="TerminalCharts__menuCurrent">
                    <span class="TerminalCharts__menuHeading">Overlay</span>
                    <span class="icon-heavy-arrow-down TerminalCharts__menuIcon"></span>
                </div>
            </div>
            <div class="TerminalCharts__menuSection">
                <div class="TerminalCharts__menuCurrent">
                    <span class="TerminalCharts__menuHeading">5 min</span>
                    <span class="icon-heavy-arrow-down TerminalCharts__menuIcon"></span>
                </div>
            </div>
            <a :class="objectCandle">
                Candle
            </a>
            <a :class="objectLine">
                Line
            </a>
            <a :class="objectDepth">
                Depth
            </a>
            <a class="TerminalCharts__resize">
                <span class="icon-resize"></span>
            </a>
        </div>
        <div class="TerminalCharts__content">
            <p>Lorem</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TerminalCharts",
        data () {
            return {
                chartViewPort: {
                    settings: {
                        candle: true,
                        line: false,
                        depth: false
                    }
                }
            }
        },
        computed: {
            objectCandle: function () {
                return {
                    'TerminalCharts__control': true,
                    'TerminalCharts__control_Active': this.chartViewPort.settings.candle === true
                }
            },
            objectLine: function () {
                return {
                    'TerminalCharts__control': true,
                    'TerminalCharts__control_Active': this.chartViewPort.settings.line === true
                }
            },
            objectDepth: function () {
                return {
                    'TerminalCharts__control': true,
                    'TerminalCharts__control_Active': this.chartViewPort.settings.depth === true
                }
            }
        }
    }
</script>

<style lang="scss">
    @import "TerminalCharts";
</style>
