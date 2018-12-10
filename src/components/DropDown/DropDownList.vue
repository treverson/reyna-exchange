<template>
    <div class="drop-down-list">

        <!-- current -->
        <button
                :class="{ 'drop-down-list__current': true, 'drop-down-list__current--state-active': this.isActive === true }"
                @click="onChangeState()"
        >{{ data.content[currentItem].code }} <span class="drop-down-list__icon icon-heavy-arrow-down"></span></button>
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
                    <span>{{ item.code }}</span>{{ item.title }}
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
                type: Object,
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
        width: 60px;
        height: 16px;
        position: relative;
    }

    .drop-down-list__current {
        z-index: 999;
        position: absolute;
        padding: 0;

        top: -16.5px;

        width: 60px;

        padding: 16.5px 17.9px 16.5px 0;

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
        transition: .20s ease;
    }

    .drop-down-list__menu {
        position: absolute;
        width: 100%;
        z-index: 999;

        padding: 0 0 5px 0;
        min-width: 188px;
        box-sizing: border-box;

        top: 25px;
        right: 0;

        margin: 0;
        list-style: none;

        display: flex;
        flex-direction: column;

        background-color: #fff;
        border-radius: 3px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.10);

        visibility: hidden;
        opacity: 0;

        transition: .15s ease;
    }

    .drop-down-list__menu--isActive-yes {
        visibility: visible;
        opacity: 1;
    }

    .drop-down-list__button {
        width: 100%;

        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        border-radius: 0;
        text-align: left;

        padding: 7px 20px;

        color: #000;
        font-size: 10px;
        font-weight: 500;
        line-height: 12px;

        transition: .15s ease;

        &:hover,
        &:focus {
            background-color: #F5EBEB;
        }

        span {
            font-size: 10px;
            font-weight: bold;
            margin-right: 10px;
        }
    }

    .drop-down-list__current--state-active {
        z-index: 999;
        min-width: 188px;
        left: -128px;
        right: 0;
        justify-content: flex-end;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.10);

        .drop-down-list__icon {
            color: rgba(0, 0, 0, 0.7);
            font-size: 12px;

            margin-left: 9px;

            transform: rotate(180deg);
        }
    }
</style>
