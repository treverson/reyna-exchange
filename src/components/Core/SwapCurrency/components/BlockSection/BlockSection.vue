<template>
    <div :class="['swap-currency__section']">
        <input v-model="fieldModel" type="number" placeholder="0" :class="['currency__section__field']">
        <div :class="['swap-currency__details']">
            <span :class="['swap-currency__currency-name']">
                {{ currencyName }}
            </span>
            <div :class="['swap-currency__counter']">
                <button :class="['swap-currency__count', 'swap-currency__count--type-up']" @click="addUnit()">
                    <span :class="['icon-small-arrow']"></span>
                </button>
                <button :class="['swap-currency__count', 'swap-currency__count--type-down']" @click="reduceUnit()">
                    <span :class="['icon-small-arrow']"></span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BlockSection",
        props: {
            currencyName: {
                type: String,
                required: true
            }
        },
        data () {
            return {
                fieldModel: ''
            }
        },
        methods: {
            /*
             * Добавляет +1 к введенному значению
             */
            addUnit: function () {
                this.fieldModel++
            },
            reduceUnit: function () {
                if (this.fieldModel - 1 >= 0) {
                    this.fieldModel = this.fieldModel - 1
                }
            }
        }
    }
</script>

<style lang="scss">
    @import "BlockSection";
</style>
