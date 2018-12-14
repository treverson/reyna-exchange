<template>
    <div class="account-funds">
        <h3 class="account-funds__header">My funds</h3>
        <div class="account-funds__info">
            <span class="account-funds__desk">Estimated portfolio value</span>
            <span class="account-funds__count">9.80 $</span>
            <span class="account-funds__trx">99.00000000 TRX</span>
        </div>
        <div class="account-funds__list">

            <!-- item -->
            <div
                    v-for="item in listData"
                    v-bind:key="item.id"
                    class="account-funds__item"
            >

                <span class="account-funds__name">{{ item.title }}</span>
                <button class="account-funds__action">Deposit</button>

            </div>
            <!-- item end -->

        </div>
        <div class="account-funds__list__content">
            <button class="account-funds__button">Add 10 more currencies</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MyFunds",
        data () {
            return {
                listData: [
                    {
                        id: 0,
                        title: 'USD'
                    },
                    {
                        id: 1,
                        title: 'TRX'
                    },
                    {
                        id: 2,
                        title: 'IGC'
                    },
                    {
                        id: 3,
                        title: 'TWX'
                    },
                    {
                        id: 4,
                        title: 'DICE'
                    },
                    {
                        id: 5,
                        title: 'TON'
                    },
                    {
                        id: 6,
                        title: 'TRZ'
                    },
                    {
                        id: 7,
                        title: 'USD'
                    },
                    {
                        id: 8,
                        title: 'TRX'
                    },
                    {
                        id: 9,
                        title: 'WIN'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss">
    .account-funds__header {
        width: 100%;
        height: 50px;

        margin: 0;
        color: #000000;
        font-size: 14px;
        font-weight: bold;
        line-height: 16px;
        text-transform: uppercase;

        padding: 0 20px;
        box-sizing: border-box;

        letter-spacing: .3px;

        display: flex;
        align-items: center;

        background-color: #fff;
        border-bottom: 1px solid rgba(246, 84, 84, 0.17);
    }

    .account-funds__info {
        padding: 16px 20px;
        box-sizing: border-box;

        background-color: #fff;
    }

    .account-funds__desk {
        display: block;

        color: #161616;
        font-size: 12px;
        font-weight: 500;
        line-height: 14px;

        margin-bottom: 5px;
    }

    .account-funds__count {
        display: block;

        color: #161616;
        font-size: 26px;
        font-weight: bold;
        line-height: 31px;

        margin-bottom: 5px;
    }

    .account-funds__trx {
        color: rgba(22, 22, 22, 0.7);
        font-size: 12px;
        line-height: 14px;
    }

    .account-funds__item {
        padding: 7.5px 20px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        border-bottom: 1px solid rgba(246, 84, 84, 0.17);
    }

    .account-funds__list__content {
        padding: 7.5px 13px 9px 13px;
        background-color: #fff;
    }

    .account-funds__list {
        background-color: #fff;
        border-top: 1px solid rgba(246, 84, 84, 0.17);
    }

    .account-funds__name {
        color: #000000;
        font-size: 17px;
        font-weight: 500;
    }

    .account-funds__action {
        height: 20px;

        border: none;
        outline: none;
        cursor: pointer;
        padding: 0 12px;

        color: rgba(162, 53, 53, 0.7);
        font-size: 12px;
        letter-spacing: .5px;

        border-radius: 2px;
        background-color: #FFCBCB;

        transition: .15s ease;

        &:hover,
        &:focus {
            color: rgba(255, 255, 255, 0.7);
            background-color: #F65454;
        }
    }

    .account-funds__button {
        width: 100%;

        background-color:#F6F6F6;
        border-radius: 2px;
        border: none;
        outline: none;
        cursor: pointer;
        padding: 0;

        color: #F65454;
        font-size: 12px;
        font-weight: 500;

        height: 37px;

        transition: .15s ease;

        &:hover,
        &:focus {
            background-color: #FFCBCB;
        }
    }
</style>
