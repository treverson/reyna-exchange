<template>
    <div class="header-accordion">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "HeaderAccordion",
        props: {
            currentItem: {
                type: Number,
                default: 0
            }
        },
        data () {
            return {
                windowWidth: 0
            }
        },
        mounted () {
            /* eslint-disable */

            this.$nextTick(() => {
                window.addEventListener('resize', () => {
                    this.windowWidth = window.innerWidth

                    this.$children.forEach(function (item, index) {

                        if (window.innerWidth <= 712) {
                            item.$el.hidden = true

                            if (index === currentItem) {
                                item.$el.hidden = false
                            }
                        }

                        else {
                            item.$el.hidden = false
                        }

                    })
                })
            })

            let array = []
            let width = this.windowWidth
            let currentItem = this.currentItem

            this.$children.forEach(function (item, index) {
                array.push({ id: index, sectionTitle: item.$props['sectionTitle'] })

                if (width <= 712) {
                    item.$el.hidden = true

                    if (index === currentItem) {
                        item.$el.hidden = false
                    }
                }

            })

            this.$root.$emit('header-accordion-data', [array, this.currentItem]);

            this.$root.$on('header-accordion-navigation-change', id => {

                this.$children.forEach(function (item, index) {

                    if (index !== id) {
                        item.$el.hidden = true
                    }

                    else {
                        item.$el.hidden = false
                    }

                })

            })

        },
        created () {
            this.windowWidth = window.innerWidth
        }
    }
</script>

<style lang="scss">
    @import "HeaderAccordion";
</style>
