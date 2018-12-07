<template>
    <div class="drop-down-list">

        <!-- current -->
        <button
                class="drop-down-list__current"
                @click="onChangeState()"
        >{{ data.content[currentItem].title }} <span class="drop-down-list__icon icon-heavy-arrow-down"></span></button>
        <!-- current end -->

        <!-- list -->
        <ul :class="toggleMenuClass">

            <!-- item -->
            <li
                    v-for="item in data.content"
                    v-bind:key="item.id"
                    class="drop-down-list__item"
            >

                <!-- button -->
                <button
                        @click="onChangeCurrentItem(item.id)"
                        class="drop-down-list__button">
                    {{ item.title }}
                </button>
                <!-- button end -->

            </li>
            <!-- item end -->

        </ul>
        <!-- list end -->

    </div>
</template>

<script>
    export default {
        name: "DropDownList",
        props: {
            data: {
                type: Array,
                required: true
            }
        },
        data () {
            return {
                currentItem: this.data['defaultCurrentItem'],
                isActive: false
            }
        },
        computed: {
            toggleMenuClass: function () {
                return {
                    'drop-down-list__menu': true,
                    'drop-down-list__menu--isActive-yes': this.isActive === true
                }
            }
        },
        methods: {
            onChangeCurrentItem: function (item) {
                this.currentItem = item
                this.onChangeState()
            },
            onChangeState: function () {
                this.isActive = !this.isActive
            }
        }
    }
</script>

<style lang="scss">
    .drop-down-list {
        position: relative;
    }

    .drop-down-list__current {
        padding: 0;

        color: #000000;
        font-size: 14px;
        font-weight: bold;
        line-height: 16px;

        display: flex;
        align-items: center;

        border: none;
        background-color: transparent;
        outline: none;
        cursor: pointer;
        box-shadow: none;
    }

    .drop-down-list__icon {
        color: rgba(0, 0, 0, 0.7);
        font-size: 12px;

        margin-left: 9px;
    }

    .drop-down-list__menu {
        position: absolute;

        top: 25px;

        margin: 0;
        list-style: none;

        display: flex;
        flex-direction: column;

        background-color: #fff;
        border: 1px solid gray;
        border-radius: 5px;

        padding: 5px;

        visibility: hidden;
        opacity: 0;

        transition: .15s ease;
    }

    .drop-down-list__menu--isActive-yes {
        visibility: visible;
        opacity: 1;
    }
</style>
