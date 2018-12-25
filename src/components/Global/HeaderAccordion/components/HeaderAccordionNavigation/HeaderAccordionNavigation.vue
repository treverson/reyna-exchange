<template>
    <div :class="['header-accordion-navigation']">
        <ul :class="['header-accordion-navigation__list']">
            <li v-for="item in navigationItems" v-bind:key="item.id" :class="{ 'header-accordion-navigation__item': true, 'header-accordion-navigation__item--isActive-yes': currentItem === item.id }" @click="changeCurrentItem(item.id)">
                {{ item.sectionTitle }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Navigation",
        data () {
            return {
                currentItem: 0,
                navigationItems: null
            }
        },
        methods: {
            changeCurrentItem: function (id) {
                this.currentItem = id
                this.$root.$emit('header-accordion-navigation-change', id);
            }
        },
        mounted () {
            /* eslint-disable */

            this.$root.$on('header-accordion-data', response => {
                this.navigationItems = response[0]
                this.currentItem = response[1]
            })
        }
    }
</script>

<style lang="scss">
    @import "HeaderAccordionNavigation";
</style>
