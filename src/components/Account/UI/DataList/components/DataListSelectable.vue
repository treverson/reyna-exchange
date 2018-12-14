<template>
    <div :class="{ 'data-list-selectable': true, 'data-list-selectable--isActive-yes': state === true }" @click="changeActiveStatus()">
        <span class="data-list-selectable__title">{{ title }}</span>
        <span class="data-list-selectable__icon icon-heavy-arrow-down"></span>
    </div>
</template>

<script>
    export default {
        name: "DataListSelectable",
        props: {
            title: {
                type: String,
                required: true
            },
            state: {
                type: Boolean,
                required: true
            }
        },

        methods: {
            changeActiveStatus: function () {
                this.isActive = !this.isActive
                this.$parent.$data.isActive = !this.$parent.$data.isActive
            }
        }
    }
</script>

<style lang="scss">
    .data-list-selectable {
        display: flex;
        align-items: center;
        justify-content: space-between;

        cursor: pointer;

        border-bottom: 1px solid rgba(112, 112, 112, 0.7);
    }

    .data-list-selectable__title {
        color: rgba(0, 0, 0, 0.7);
        font-size: 12px;
        line-height: 14px;
        font-weight: 500;
        padding-bottom: 4.5px;

        user-focus: none;
    }

    .data-list-selectable__icon {
        color: rgba(0, 0, 0, 0.8);
        font-size: 9px;

        transition: .20s ease;
    }

    .data-list-selectable--isActive-yes {
        .data-list-selectable__icon {
            transform: rotate(180deg);
        }
    }
</style>
