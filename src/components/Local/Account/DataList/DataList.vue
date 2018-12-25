<template>
    <div class="data-list">
        <template v-if="dataType === 'list'">

            <DataListSelectable :title="data[currentItem].content" :state="isActive" />

            <!-- object -->
            <div :class="{ 'data-list__object': true, 'data-list__object--isActive-yes': isActive === true, 'data-list__object--type-list': dataType === 'list'}">

                <!-- item -->
                <button
                        v-for="item in data"
                        v-bind:key="item.id"
                        @click="changeCurrentItem(item.id)"
                        :class="{ 'data-list__item': true, 'data-list__item--isCurrent-yes': currentItem === item.id }"
                >{{ item.content }}</button>
                <!-- item end -->

            </div>
            <!-- object end -->

        </template>

        <template v-else-if="dataType === 'currency'">

            <DataListSelectable :title="data[currentItem].content" :state="isActive" />

            <div :class="{ 'data-list__content': true, 'data-list__content--isActive-yes': isActive === true }">

                <!-- search -->
                <div class="data-list__search">
                    <input v-model="searchData" type="text" class="data-list__field" placeholder="Search">
                </div>
                <!-- search end -->

                <!-- object -->
                <div :class="{ 'data-list__object': true, 'data-list__object--isActive-yes': isActive === true, 'data-list__object--type-currency': dataType === 'currency' }" v-bar>

                    <div>
                        <!-- item -->
                        <button
                                v-for="item in filteredData"
                                v-bind:key="item.id"
                                @click="changeCurrentItem(item.id)"
                                class="data-list__item"
                        >
                            <template v-if="item.isCategory === true">
                                <span class="data-list__category">{{ item.content }}</span>
                            </template>
                            <template v-else>
                                <span class="data-list__code">{{ item.code }}</span>{{ item.content }}
                            </template>
                        </button>
                        <!-- item end -->
                    </div>

                </div>
                <!-- object end -->

            </div>

        </template>

    </div>
</template>

<script>
    import DataListSelectable from './components/DataListSelectable'

    export default {
        name: "DataList",
        props: {
            /*
             *  Тип выпадающего окна
             *  type: string (list | currency)
             */
            dataType: {
                type: String,
                required: true,
                default: "list"
            },
            data: {
                type: Array,
                required: true
            }
        },
        components: {
            DataListSelectable
        },
        data () {
            return {
                isActive: false,
                searchData: '',
                currentItem: 0
            }
        },
        methods: {
            changeCurrentItem: function (id) {
                this.currentItem = id
                this.onClose()
            },
            onClose: function () {
                this.isActive = false
            }
        },
        computed: {
            /*
             *  Функция фильтрует данные
             */
            filteredData: function () {
                let searchContent = this.searchData

                return this.data.filter(function (element) {
                    if (searchContent !== '') {

                        if (element.code.toLowerCase().includes(searchContent.toLowerCase())) {
                            return element
                        }

                        else if (element.content.toLowerCase() === searchContent.toLowerCase()) {
                            return element
                        }

                        else if (element.content.toLowerCase().includes(searchContent.toLowerCase())) {
                            return element
                        }

                    } else {
                        return element
                    }
                })
            }
        },
        watch: {

            isActive: function (value) {

                if (value === true) {

                    let currentID = this._uid

                    this.$parent.$children.forEach((element) => {

                        if (element['_uid'] !== currentID) {
                            element.$data['isActive'] = false
                        }

                    })

                }

            }

        }
    }
</script>

<style lang="scss">

    .data-list {
        position: relative;

        .vb-dragger {
            z-index: 9999;

            right: 10px;

            width: 4px;
            background-color: #F65454;
            border-radius: 50px;
        }

        .vb > .vb-dragger > .vb-dragger-styler {
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            -webkit-transform: rotate3d(0,0,0,0);
            transform: rotate3d(0,0,0,0);
            -webkit-transition:
                    background-color 100ms ease-out,
                    margin 100ms ease-out,
                    height 100ms ease-out;
            transition:
                    background-color 100ms ease-out,
                    margin 100ms ease-out,
                    height 100ms ease-out;
            background-color: #F65454;
            border-radius: 50px;
            height: 100%;
            display: block;
        }

        .vb.vb-scrolling-phantom > .vb-dragger > .vb-dragger-styler {
            background-color: #F65454;
        }

        .vb > .vb-dragger:hover > .vb-dragger-styler {
            background-color: #F65454;
            margin: 0;
            height: 100%;

            &:hover,
            &:focus {
                width: 3px;
                margin: 0 6px 0 0;
                height: 100%;
            }
        }

        .vb.vb-dragging > .vb-dragger > .vb-dragger-styler {
            background-color: #F65454;
            margin: 0;
            height: 100%;

            &:hover,
            &:focus{
                width: 3px;
                margin: 0 6px 0 0;
                height: 100%;
            }
        }

        .vb.vb-dragging-phantom > .vb-dragger > .vb-dragger-styler {
            background-color: #F65454;
        }
    }

    .data-list__object {
        position: absolute;
        z-index: 999;

        width: 100%;
        background-color: #fff;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.10);

        display: flex;
        flex-direction: column;

        visibility: hidden;
        opacity: 0;

        transition: .15s ease;
    }

    .data-list__object--isActive-yes {
        visibility: visible;
        opacity: 1;
    }

    .data-list__object--type-list {
        width: calc(100% + 20px);

        top: -9px;
        left: -10px;

        border-radius: 3px;

        overflow: hidden;

        .data-list__item {
            color: #000;
            font-size: 12px;
            font-weight: 500;
            line-height: 33px;

            user-focus: none;

            padding: 0 10px;
            box-sizing: border-box;

            transition: .15s ease;

            &:hover {
                color: rgba(0, 0, 0, 0.7);
                background-color: #F5EBEB;
            }
        }

        .data-list__item--isCurrent-yes {
            color: rgba(0, 0, 0, 0.7);
            background-color: #F5EBEB;
        }
    }

    .data-list__object--type-currency {
        height: 137px;

        border-bottom-left-radius: 3px;
        border-bottom-right-radius: 3px;

        padding: 0 0 5px 0;
        box-sizing: border-box;

        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.10);

        .data-list__item {
            color: #000;
            font-size: 10px;
            font-weight: 500;
            line-height: 22px;

            padding: 0 20px;
            box-sizing: border-box;

            transition: .15s ease;

            &:hover {
                color: rgba(0, 0, 0, 0.7);
                background-color: #F5EBEB;
            }
        }
    }

    .data-list__item {
        width: 100%;

        padding: 0;
        margin: 0;

        flex-shrink: 0;

        background: transparent;
        border: none;
        outline: none;
        text-align: left;
        cursor: pointer;
    }

    .data-list__code {
        font-weight: bold;

        margin-right: 10px;
    }

    .data-list__search {
        position: relative;
        width: 100%;
        z-index: 999;

        background-color: #fff;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.10);

        padding: 12px 8px;
        box-sizing: border-box;

        transition: .15s ease;

        &:before {
            position: absolute;

            left: 20px;
            top: 0;
            bottom: 0;
            margin: auto;

            display: flex;
            align-items: center;

            content: "\e909";
            font-family: 'icomoon';

            color: #F65454;
        }
    }

    .data-list__search--isActive-yes {
        visibility: visible;
        opacity: 1;
    }

    .data-list__field {
        width: 100%;
        height: 29px;

        padding: 0 10px 0 34px;
        box-sizing: border-box;

        outline: none;
        border: none;

        color: #000;
        font-size: 12px;

        border-radius: 3px;
        background-color: #F5EBEB;

        &::placeholder {
            color: rgba(0, 0, 0, 0.5);
            font-size: 12px;

            transition: .15s ease;
        }

        &:focus {
            &::placeholder {
                opacity: 0;
            }
        }
    }

    .data-list__content {
        width: 100%;
        position: absolute;

        visibility: hidden;
        opacity: 0;
    }

    .data-list__content--isActive-yes {
        visibility: visible;
        opacity: 1;
    }

    .data-list__category {
        color: #F65454;
    }

</style>
