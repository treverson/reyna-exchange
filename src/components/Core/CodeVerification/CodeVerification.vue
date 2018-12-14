<template>
    <div :class="['code-verification']">
        <input v-model="object.model" type="text" @keyup="splitModelCode()" :class="['code-verification__field']" :maxlength="codeWidth">
        <div :class="['code-verification__code']">
            <div v-for="item in object.array" v-bind:key="item.id" :class="['code-verification__num']">
                {{ item.code }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CodeVerification",
        props: {
            codeWidth: {
                type: Number,
                default: 6
            }
        },
        data () {
            return {
                object: {
                    model: '',
                    array: []
                }
            }
        },
        methods: {
            splitModelCode: function () {
                let i = 0

                this.object.array = []
                for (i; i < this.codeWidth; i++) {
                    this.object.array.push({ id: i, code: this.object.model[i] })
                }

                this.$parent.$emit('response-verification-code', this.object.model)
            },
            setDefaultChar: function () {
                let i = 0

                for (i; i < this.codeWidth; i++) {
                    this.object.array.push({ id: i, code: ' ' })
                }
            }
        },
        created () {
            this.setDefaultChar()
        }
    }
</script>

<style lang="scss">
    @import "CodeVerification";
</style>
