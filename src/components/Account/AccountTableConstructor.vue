<template>
    <div class="account-table-constructor">
        <div class="account-table-constructor__controls">
            <div class="account-table-constructor__tabs">

                <!-- Loading buttons -->
                <button
                        v-for="item in content"
                        v-bind:key="item.id"
                        :class="{ 'account-table-constructor__tab': true, 'account-table-constructor__tab--state-active': currentItem ===  item.id }"
                        @click="changeCurrentItem(item.id)"
                >{{ item.sectionName }}</button>
                <!-- end -->

            </div>
            <div class="account-table-constructor__form">
                <input type="text" placeholder="Search for currency" class="account-table-constructor__field">
                <button class="account-table-constructor__button"></button>
            </div>
        </div>
        <div class="account-table-constructor__content" v-bar>

            <!-- Table load -->
            <div
                v-for="item in content"
                v-bind:key="item.id"
                v-show="currentItem === item.id"
                class="account-table-constructor__item"
            >

                <!-- Loading table -->
                <table class="account-table-constructor__table" border="0" cellspacing="0" cellpadding="0">

                    <!-- Table header -->
                    <thead class="account-table-constructor__header">
                        <tr>
                            <td
                                v-for="heading in item.tableHead" v-bind:key="heading.id"
                                class="account-table-constructor__row account-table-constructor__heading"
                                :style="{ width: heading.width, textAlign: heading.align }"
                                @click="changeSortingKey(heading.title)"
                            >{{ heading.title }}</td>
                        </tr>
                    </thead>
                    <!-- end -->

                    <!-- Table body -->
                    <tbody class="account-table-constructor__body">

                        <!-- Table row -->
                        <tr
                            v-for="row in item.tableBody"
                            v-bind:key="row.id"
                        >
                            <!-- Table column -->
                            <td
                                v-for="column in row.content"
                                v-bind:key="column.id"
                                :class="{ 'account-table-constructor__row': true, 'account-table-constructor__row--type-date': column.type === 'date', 'account-table-constructor__row--type-sideSell': column.type === 'side' && column.isSell === true, 'account-table-constructor__row--type-sideBuy': column.type === 'side' && column.isSell === false, 'account-table-constructor__row--type-amount': column.type === 'amount', 'account-table-constructor__row--type-limit': column.type === 'type' }"
                                :style="{ textAlign: column.align }"
                            >
                                <template v-if="column.type === 'currency'">
                                    <AccountTransaction from="wef" to="wef" />
                                </template>
                                <template v-else-if="column.type === 'amount'">
                                    {{ column.content }} <span>{{ column.currency }}</span>
                                </template>
                                <template v-else-if="column.type === 'status'">
                                    <span :class="{ 'account-table-constructor__row--type-statusClose': column.type === 'status' && column.status === false, 'account-table-constructor__row--type-statusOpen': column.type === 'status' && column.status === true }">
                                        {{ column.content }}
                                    </span>
                                </template>
                                <template v-else>
                                    {{ column.content }}
                                </template>
                            </td>
                            <!-- end -->

                        </tr>
                        <!-- end -->

                    </tbody>
                    <!-- end -->

                </table>
                <!-- end -->

            </div>
            <!-- end -->

        </div>
    </div>
</template>

<script>
    import AccountTransaction from '@/components/Account/AccountTransaction'

    export default {
        name: "AccountTableConstructor",
        components: {
            AccountTransaction
        },
        props: {
            content: {
                type: Array,
                required: true
            }
        },
        data () {
            return {
                currentItem: 0,
                sortingKey: null
            }
        },
        methods: {
            changeCurrentItem: function (id) {
                if (this.currentItem !== id) {
                    this.currentItem = id
                }
            },
            changeSortingKey: function (sort) {
                this.sortingKey = sort.toLowerCase()
            }
        },
        computed: {
            sortingTable: function (array) {
                return array
            }
        }
    }
</script>

<style lang="scss">

    .account-table-constructor__controls {
        width: 100%;
        height: 50px;

        display: flex;
        align-items: center;

        padding: 0 18px 0 32px;
        box-sizing: border-box;

        border-top-left-radius: 5px;
        border-top-right-radius: 5px;

        background-color: #EAEAEA;
    }

    .account-table-constructor__tabs {
        height: 100%;
    }

    .account-table-constructor__tab {
        height: 100%;

        cursor: pointer;
        outline: none;
        border: none;
        background-color: transparent;
        box-shadow: none;

        padding: 0 5px;

        color: rgba(0, 0, 0, 0.5);
        font-size: 12px;
        font-weight: bold;
        letter-spacing: .5px;

        border-bottom: 3px solid transparent;

        transition: .15s ease;

        &:not(:last-child) {
            margin-right: 15px;
        }

        &:hover,
        &:focus {
            color: #000;
        }
    }

    .account-table-constructor__form {
        position: relative;
        margin-left: auto;
    }

    .account-table-constructor__field {
        max-width: 172px;
        width: 100%;
        height: 30px;

        padding: 0 40px 0 14px;
        box-sizing: border-box;

        background-color: #E4E4E4;
        border-radius: 3px;
        border: none;
        outline: none;

        color: #000;
        font-size: 12px;
        font-weight: 500;

        transition: .15s ease;

        &:focus {
            background-color: #d1d1d1;

            &::placeholder {
                opacity: 0;
            }
        }

        &::placeholder {
            color: rgba(0, 0, 0, 0.20);
            font-weight: 500;
            font-size: 12px;

            transition: .15s ease;
        }
    }

    .account-table-constructor__button {
        position: absolute;

        right: 11px;
        top: 0;
        bottom: 0;
        margin: auto;

        cursor: pointer;
        outline: none;
        border: none;
        background-color: transparent;
        box-shadow: none;

        width: 25px;
        height: 25px;

        background-image: url('../../assets/img/search.svg');
        background-repeat: no-repeat;
        background-position: center;
    }

    .account-table-constructor__tab--state-active {
        color: #000;
        border-color: #E95A5A;
    }

    .account-table-constructor__content {
        width: 100%;
        height: 388px;
        background-color: #fff;
    }

    .account-table-constructor__table {
        width: 100%;
        border-spacing: 0;
    }

    .account-table-constructor__row {
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);

        &:first-child {
            padding-left: 32px;
        }

        &:last-child {
            padding-right: 19px;
        }
    }

    .account-table-constructor__heading {
        color: rgba(0, 0, 0, 0.5);
        font-weight: 500;
        font-size: 9px;
        letter-spacing: 2px;
        text-transform: uppercase;

        cursor: pointer;

        transition: .15s ease;

        &:hover,
        &:focus {
            color: rgba(0, 0, 0, 0.8);
        }

        &:after {
            content: "";

            width: 5px;
            height: 7px;
            display: inline-block;

            margin-left: 2px;

            background-repeat: no-repeat;
            background-position: center;

            background-image: url('../../assets/img/icons/filter.svg');
        }
    }

    .account-table-constructor__header {
        .account-table-constructor__row {
            height: 28px;
        }
    }

    .account-table-constructor__body {
        .account-table-constructor__row {
            height: 60px;
        }
    }

    .account-table-constructor__row--type-date {
        color: rgba(0, 0, 0, 0.4);
        font-size: 10px;
        font-weight: 500;
    }

    .account-table-constructor__row--type-sideSell {
        color: #E95A5A;
        font-size: 10px;
        font-weight: 500;
    }

    .account-table-constructor__row--type-sideBuy {
        color: #54E16F;
        font-size: 10px;
        font-weight: 500;
    }

    .account-table-constructor__row--type-amount {
        color: #000000;
        font-size: 10px;
        font-weight: 500;

        span {
            color: rgba(0, 0, 0, 0.30);
            margin-left: 6px;
        }
    }

    .account-table-constructor__row--type-statusClose {
        color: rgba(0, 0, 0, 0.5);
        font-size: 10px;
        font-weight: 500;
    }

    .account-table-constructor__row--type-statusOpen {
        color: #fff;

        padding: 3px 10px;

        border-radius: 3px;
        background-color: #E95A5A;
    }

    .account-table-constructor__row--type-limit {
        color: rgba(0, 0, 0, 0.5);
        font-size: 10px;
        font-weight: 500;
    }
</style>
