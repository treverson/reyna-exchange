<template>
    <div :class="['terminal-simple-calendar']">
        <span :class="['terminal-simple-calendar__date']">
            {{ handlerDate }}
        </span>
        <div :class="['terminal-simple-calendar__time']">
            {{ handlerTime }}
        </div>
    </div>
</template>

<script>
    export default {
        name: "TerminalSimpleCalendar",
        methods: {
            rewriteNumber: function (number) {
                if (number < 10) {
                    number = '0' + number
                }
                return number
            }
        },
        computed: {
            handlerDate: function () {
                const monthNames = [
                    "January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"
                ];
                return new Date().getDay() + ' ' + monthNames[new Date().getMonth()] + ' ' + new Date().getFullYear()
            },
            handlerTime: function () {
                return this.rewriteNumber(new Date().getHours()) + ':' + this.rewriteNumber(new Date().getMinutes()) + ':' + this.rewriteNumber(new Date().getSeconds())
            }
        }
    }
</script>

<style lang="scss">
    @import "TerminalSimpleCalendar";
</style>
