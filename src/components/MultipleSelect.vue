<template>
    <div class="multiple-select">
        <template v-if="type === 'primary'">
            <!-- current -->
            <button
                    :class="{ 'multiple-select__current': true, 'multiple-select__current--state-active': state === true }"
                    @click="changeState"
            >{{ data[current].name }}</button>
            <!-- end -->

            <div :class="{ 'multiple-select__wrapper': true, 'multiple-select__wrapper--state-active': state === true }">
                <ul class="multiple-select__list">

                    <!-- item -->
                    <li
                            v-for="item in data"
                            v-bind:key="item.id"
                            :class="{ 'multiple-select__item': true, 'multiple-select__item--state-active': current === item.id }"
                            @click="changeCurrent(item.id)"
                    >{{ item.name }}</li>
                    <!-- end -->
                </ul>
            </div>
        </template>
        <template v-else-if="type === 'multiple'">
            <!-- current -->
            <button
                    :class="{ 'multiple-select__current': true, 'multiple-select__current--state-active': state === true }"
                    @click="changeState"
            >
                <span class="multiple-select__icon"></span>
                {{ data[0].category }}
            </button>
            <!-- end -->

            <div :class="{ 'multiple-select__wrapper': true, 'multiple-select__wrapper--state-active': state === true }">
                <ul
                    v-for="list in data"
                    v-bind:key="list.id"
                    class="multiple-select__list"
                >
                    <li class="multiple-select__heading">{{ list.category }}</li>

                    <!-- item -->
                    <li
                            v-for="item in list.content"
                            v-bind:key="item.id"
                            :class="{ 'multiple-select__item': true, 'multiple-select__item--state-active': current === item.id }"
                            @click="changeCurrent(item.id)"
                    ><span class="multiple-select__icon multiple-select__icon--size-big"></span> {{ item.id }} {{ item.title }}</li>
                    <!-- end -->

                </ul>
            </div>
        </template>
    </div>
</template>

<script>
    export default {
        name: "MultipleSelect",
        props: {
            type: {
                type: String,
                required: true
            },
            data: {
                type: [Array, Object],
                required: true
            }
        },
        data () {
            return {
                current: 0,
                state: false
            }
        },
        methods: {
            changeState: function () {
                this.state = !this.state
            },
            changeCurrent: function (id) {
                this.current = id
                this.closeList()
            },
            closeList: function () {
                this.state = false
            }
        }
    }
</script>

<style lang="scss">
    .multiple-select {
        width: 100%;
        position: relative;
    }

    .multiple-select__current {
        position: relative;

        width: 100%;
        height: 34px;

        display: flex;
        align-items: center;

        padding: 0 30px 0 14px;
        box-sizing: border-box;

        cursor: pointer;
        outline: none;

        color: #000000;
        font-size: 12px;
        font-weight: 500;

        border: 1px solid #E6E6E6;
        border-radius: 3px;
        background-color: #fff;

        transition: .15s ease;
        text-align: left;

        &:after {
            position: absolute;
            content: "\e904";

            right: 12px;
            transition: .25s ease;

            color: #000000;
            font-size: 3px;
            font-family: 'icomoon';
        }
    }

    .multiple-select__current--state-active {
        &:after {
            transform: rotate(180deg);
        }
    }

    .multiple-select__list {
        padding: 0;
        margin: 0;
        list-style: none;

        &:not(:last-child) {
            margin-bottom: 15px;
        }
    }

    .multiple-select__item {
        color: #000000;
        font-size: 10px;
        font-weight: 500;

        padding: 5px 0;

        display: flex;
        align-items: center;

        cursor: pointer;
        user-select: none;

        transition: .15s ease;

        &:hover,
        &:focus {
            color: #E95A5A;
        }
    }

    .multiple-select__item--state-active {
        color: #E95A5A;
    }

    .multiple-select__icon {
        width: 14px;
        height: 14px;
        display: block;

        margin-right: 7px;

        border-radius: 50%;
        background-color: #D8D8D8;
    }

    .multiple-select__wrapper {
        width: 100%;

        position: absolute;
        z-index: 99;

        top: 34px;

        padding: 14px;
        margin: 0;
        list-style: none;

        box-sizing: border-box;

        border-radius: 3px;
        background-color: #fff;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.10);

        visibility: hidden;
        opacity: 0;
        pointer-events: none;

        transition: .25s ease;
    }

    .multiple-select__wrapper--state-active {
        top: calc(34px + 8px);

        visibility: visible;
        opacity: 1;
        pointer-events: auto;
    }

    .multiple-select__heading {
        color: #000000;
        font-size: 10px;
        font-weight: 700;
        margin-bottom: 14px;
    }

    .multiple-select__icon--size-big {
        width: 20px;
        height: 20px;
    }
</style>
