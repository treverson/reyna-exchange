<template>
    <div class="TerminalCurrentBunch">

        <button :class="{ 'TerminalCurrentBunch__buttonSwitch': true, 'TerminalCurrentBunch__buttonSwitch_Active': isButtonActive === true }" @click="changeButtonState()">
            <span class="TerminalCurrentBunch__currentLabel">
                BCH-TRX
            </span>
            <span class="icon-heavy-arrow-down TerminalCurrentBunch__currentIcon"></span>
        </button>

        <div :class="{ 'TerminalCurrentBunch__TableWrapper': true, 'TerminalCurrentBunch__TableWrapper_Visible': isButtonActive === true }">

            <div class="TerminalCurrentBunch__TableHeader">
                <div class="TerminalCurrentBunch__TableTabs">
                    <a class="TerminalCurrentBunch__TableTab TerminalCurrentBunch__TableTab_isCurrent">All</a>
                    <a class="TerminalCurrentBunch__TableTab">TRX</a>
                    <a class="TerminalCurrentBunch__TableTab">BTC</a>
                    <a class="TerminalCurrentBunch__TableTab">ETH</a>
                    <a class="TerminalCurrentBunch__TableTab">USD</a>
                </div>

                <div class="TerminalCurrentBunch__TableSearch">
                    <span class="icon-search TerminalCurrentBunch__TableSearchIcon"></span>
                    <input type="text" class="TerminalCurrentBunch__TableField" placeholder="Search for currency">
                </div>
            </div>

            <table class="TerminalCurrentBunch__Table">

                <thead>
                    <tr>
                        <th class="TerminalCurrentBunch__TableHeading TerminalCurrentBunch__TableHeading_headingTypeCurrency TerminalCurrentBunch__TableHeading_alignLeft">
                            Currency
                        </th>
                        <th class="TerminalCurrentBunch__TableHeading TerminalCurrentBunch__TableHeading_headingTypeLastPrice TerminalCurrentBunch__TableHeading_alignRight">
                            Last Price
                        </th>
                        <th class="TerminalCurrentBunch__TableHeading TerminalCurrentBunch__TableHeading_headingTypeChange TerminalCurrentBunch__TableHeading_alignLeft">
                            Change
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <th class="TerminalCurrentBunch__TableColumn">
                            <div class="TerminalCurrentBunch__Currency">
                                <span class="TerminalCurrentBunch__CurrencyIcon"></span>
                                <span class="TerminalCurrentBunch__CurrencyTitle">
                                    ADA-TRX
                                </span>
                            </div>
                        </th>
                        <th class="TerminalCurrentBunch__TableColumn">
                            <span class="TerminalCurrentBunch__Price">
                                0.00000327
                            </span>
                        </th>
                        <th class="TerminalCurrentBunch__TableColumn">
                            <div class="TerminalCurrentBunch__Change">
                                <span class="TerminalCurrentBunch__ChangeTitle">
                                    +3.01%
                                </span>
                                <span class="icon-favorite TerminalCurrentBunch__ChangeIcon"></span>
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <th class="TerminalCurrentBunch__TableColumn">
                            <div class="TerminalCurrentBunch__Currency">
                                <span class="TerminalCurrentBunch__CurrencyIcon"></span>
                                <span class="TerminalCurrentBunch__CurrencyTitle">
                                    ADA-TRX
                                </span>
                            </div>
                        </th>
                        <th class="TerminalCurrentBunch__TableColumn">
                            <span class="TerminalCurrentBunch__Price">
                                0.00000327
                            </span>
                        </th>
                        <th class="TerminalCurrentBunch__TableColumn">
                            <div class="TerminalCurrentBunch__Change">
                                <span class="TerminalCurrentBunch__ChangeTitle">
                                    +3.01%
                                </span>
                                <span class="icon-favorite TerminalCurrentBunch__ChangeIcon"></span>
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <th class="TerminalCurrentBunch__TableColumn">
                            <div class="TerminalCurrentBunch__Currency">
                                <span class="TerminalCurrentBunch__CurrencyIcon"></span>
                                <span class="TerminalCurrentBunch__CurrencyTitle">
                                    ADA-TRX
                                </span>
                            </div>
                        </th>
                        <th class="TerminalCurrentBunch__TableColumn">
                            <span class="TerminalCurrentBunch__Price">
                                0.00000327
                            </span>
                        </th>
                        <th class="TerminalCurrentBunch__TableColumn">
                            <div class="TerminalCurrentBunch__Change">
                                <span class="TerminalCurrentBunch__ChangeTitle">
                                    +3.01%
                                </span>
                                <span class="icon-favorite TerminalCurrentBunch__ChangeIcon"></span>
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <th class="TerminalCurrentBunch__TableColumn">
                            <div class="TerminalCurrentBunch__Currency">
                                <span class="TerminalCurrentBunch__CurrencyIcon"></span>
                                <span class="TerminalCurrentBunch__CurrencyTitle">
                                    ADA-TRX
                                </span>
                            </div>
                        </th>
                        <th class="TerminalCurrentBunch__TableColumn">
                            <span class="TerminalCurrentBunch__Price">
                                0.00000327
                            </span>
                        </th>
                        <th class="TerminalCurrentBunch__TableColumn">
                            <div class="TerminalCurrentBunch__Change">
                                <span class="TerminalCurrentBunch__ChangeTitle">
                                    +3.01%
                                </span>
                                <span class="icon-favorite TerminalCurrentBunch__ChangeIcon"></span>
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <th class="TerminalCurrentBunch__TableColumn">
                            <div class="TerminalCurrentBunch__Currency">
                                <span class="TerminalCurrentBunch__CurrencyIcon"></span>
                                <span class="TerminalCurrentBunch__CurrencyTitle">
                                    ADA-TRX
                                </span>
                            </div>
                        </th>
                        <th class="TerminalCurrentBunch__TableColumn">
                            <span class="TerminalCurrentBunch__Price">
                                0.00000327
                            </span>
                        </th>
                        <th class="TerminalCurrentBunch__TableColumn">
                            <div class="TerminalCurrentBunch__Change">
                                <span class="TerminalCurrentBunch__ChangeTitle">
                                    +3.01%
                                </span>
                                <span class="icon-favorite TerminalCurrentBunch__ChangeIcon"></span>
                            </div>
                        </th>
                    </tr>
                </tbody>

            </table>

        </div>

    </div>
</template>

<script>
    export default {
        name: "TerminalCurrentBunch",
        data () {
            return {
                isButtonActive: false
            }
        },
        methods: {
            /*
             * Переключатель состояния кнопки
             */
            changeButtonState: function () {
                this.isButtonActive = !this.isButtonActive
            }
        }
    }
</script>

<style lang="scss">
    @import "TerminalCurrentBunch";
</style>
