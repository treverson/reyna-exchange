<template>
    <div class="multiple-list">

        <!-- current -->
        <button @click="onShow()" class="multiple-list__current">{{ data.content[current].title }} <span class="multiple-list__arrow icon-heavy-arrow-down"></span></button>
        <!-- current end -->

        <!-- container -->
        <ul :class="{ 'multiple-list__container': true, 'multiple-list__container--isActive-yes': isActive === true }">

            <!-- item -->
            <li
                    v-for="item in data.content"
                    v-bind:key="item.id"
                    class="multiple-list__item"
            >

                <!-- action -->
                <button @click="changeCurrent(item.id)" :class="{ 'multiple-list__action': true, 'multiple-list__action--state-active': current === item.id }">{{ item.title }}</button>
                <!-- action end -->

            </li>
            <!-- item end -->

        </ul>
        <!-- container end -->

    </div>
</template>

<script>
    export default {
        name: "MultipleList",
        props: {
            data: {
                type: Object,
                required: true
            },
            currentItem: {
                type: Number,
                default: 0
            }
        },
        data () {
            return {
                isActive: false,
                current: this.currentItem
            }
        },
        methods: {
            onShow: function () {
                this.isActive = !this.isActive
            },
            changeCurrent: function (id) {
                this.current = id
                this.onClose()
            },
            onClose: function () {
                this.isActive = false
            }
        }
    }
</script>

<style lang="scss">
    .multiple-list {
        position: relative;
    }

    .multiple-list__current {
        width: 100%;

        padding: 0;
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;

        color: #000000;
        font-size: 12px;
        font-weight: 500;
        line-height: 14px;

        display: flex;
        align-content: center;
        justify-content: space-between;

        text-align: left;
        padding-bottom: 4.5px;
        padding-top: 5px;

        border-bottom: 1px solid rgba(112, 112, 112, 0.8);
    }

    .multiple-list__arrow {
        font-size: 8px;
        position: relative;
        top: 2px;
    }

    .multiple-list__container {
        position: absolute;

        width: 100%;
        background-color: #fff;
        z-index: 999;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.10);

        padding: 5px 0;
        margin: 0;
        list-style: none;

        visibility: hidden;
        opacity: 0;
        pointer-events: none;
    }

    .multiple-list__container--isActive-yes {
        visibility: visible;
        opacity: 1;
        pointer-events: auto;
    }

    .multiple-list__action {
        width: 100%;

        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        padding: 9.5px 10px;

        text-align: left;

        transition: .15s ease;

        color: rgba(0, 0, 0, 0.7);
        font-size: 12px;
        font-weight: 500;
        line-height: 14px;

        &:hover,
        &:focus {
            background-color: #F5EBEB;
        }
    }

    .multiple-list__action--state-active {
        background-color: #F5EBEB;
    }
</style>
