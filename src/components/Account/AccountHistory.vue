<template>
    <div class="account-history">
        <div class="account-history__header">
            <div class="account-history__tabs">
                <button :class="{ 'account-history__tab': true, 'account-history__tab--state-active': activeTab === 0 }" @click="changeActiveTab(0)">Buy & Sell</button>
                <button :class="{ 'account-history__tab': true, 'account-history__tab--state-active': activeTab === 1 }" @click="changeActiveTab(1)">Advanced view</button>
                <button :class="{ 'account-history__tab': true, 'account-history__tab--state-active': activeTab === 2 }" @click="changeActiveTab(2)">Deposit / Withdrawals</button>
            </div>
            <div class="account-history__form">
                <input type="text" placeholder="Search for currency" class="account-history__search">
                <button class="account-history__find"></button>
            </div>
        </div>
        <div class="account-history__content" v-bar>
            <div>
                <table v-show="activeTab === 0" class="account-history__table account-history__buy-and-sell" border="0" cellspacing="0" cellpadding="0">
                    <tbody class="account-history__table-body">
                        <tr class="account-history__table-header">
                            <td class="account-history__cell account-history__cell--type-currency">Currency</td>
                            <td class="account-history__cell account-history__cell--type-date">Date</td>
                            <td class="account-history__cell account-history__cell--type-side">Side</td>
                            <td class="account-history__cell account-history__cell--type-amount">Amount</td>
                            <td class="account-history__cell account-history__cell--type-rate">Rate</td>
                            <td class="account-history__cell account-history__cell--type-fee">Fee</td>
                            <td class="account-history__cell account-history__cell--type-total">Total</td>
                        </tr>
                        <tr class="account-history__table-item">
                            <td class="account-history__cell"></td>
                            <td class="account-history__cell"><span class="account-history__date">18-11-30 - 14:11:23</span></td>
                            <td class="account-history__cell"><span class="account-history__side account-history__side--status-sell">Sell</span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">718.00000000 <span class="account-history__amount-type">TRX</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00000327 <span class="account-history__amount-type">BTC</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00011739 <span class="account-history__amount-type">BTC</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00234786 <span class="account-history__amount-type">BTC</span></span></td>
                        </tr>
                        <tr class="account-history__table-item">
                            <td class="account-history__cell"></td>
                            <td class="account-history__cell"><span class="account-history__date">18-11-30 - 14:11:23</span></td>
                            <td class="account-history__cell"><span class="account-history__side account-history__side--status-buy">Buy</span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">718.00000000 <span class="account-history__amount-type">TRX</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00000327 <span class="account-history__amount-type">BTC</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00011739 <span class="account-history__amount-type">BTC</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00234786 <span class="account-history__amount-type">BTC</span></span></td>
                        </tr>
                        <tr class="account-history__table-item">
                            <td class="account-history__cell"></td>
                            <td class="account-history__cell"><span class="account-history__date">18-11-30 - 14:11:23</span></td>
                            <td class="account-history__cell"><span class="account-history__side account-history__side--status-sell">Sell</span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">718.00000000 <span class="account-history__amount-type">TRX</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00000327 <span class="account-history__amount-type">BTC</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00011739 <span class="account-history__amount-type">BTC</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00234786 <span class="account-history__amount-type">BTC</span></span></td>
                        </tr>
                        <tr class="account-history__table-item">
                            <td class="account-history__cell"></td>
                            <td class="account-history__cell"><span class="account-history__date">18-11-30 - 14:11:23</span></td>
                            <td class="account-history__cell"><span class="account-history__side account-history__side--status-sell">Sell</span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">718.00000000 <span class="account-history__amount-type">TRX</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00000327 <span class="account-history__amount-type">BTC</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00011739 <span class="account-history__amount-type">BTC</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00234786 <span class="account-history__amount-type">BTC</span></span></td>
                        </tr>
                        <tr class="account-history__table-item">
                            <td class="account-history__cell"></td>
                            <td class="account-history__cell"><span class="account-history__date">18-11-30 - 14:11:23</span></td>
                            <td class="account-history__cell"><span class="account-history__side account-history__side--status-sell">Sell</span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">718.00000000 <span class="account-history__amount-type">TRX</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00000327 <span class="account-history__amount-type">BTC</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00011739 <span class="account-history__amount-type">BTC</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00234786 <span class="account-history__amount-type">BTC</span></span></td>
                        </tr>
                        <tr class="account-history__table-item">
                            <td class="account-history__cell"></td>
                            <td class="account-history__cell"><span class="account-history__date">18-11-30 - 14:11:23</span></td>
                            <td class="account-history__cell"><span class="account-history__side account-history__side--status-sell">Sell</span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">718.00000000 <span class="account-history__amount-type">TRX</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00000327 <span class="account-history__amount-type">BTC</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00011739 <span class="account-history__amount-type">BTC</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00234786 <span class="account-history__amount-type">BTC</span></span></td>
                        </tr>
                        <tr class="account-history__table-item">
                            <td class="account-history__cell"></td>
                            <td class="account-history__cell"><span class="account-history__date">18-11-30 - 14:11:23</span></td>
                            <td class="account-history__cell"><span class="account-history__side account-history__side--status-sell">Sell</span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">718.00000000 <span class="account-history__amount-type">TRX</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00000327 <span class="account-history__amount-type">BTC</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00011739 <span class="account-history__amount-type">BTC</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00234786 <span class="account-history__amount-type">BTC</span></span></td>
                        </tr>
                        <tr class="account-history__table-item">
                            <td class="account-history__cell"></td>
                            <td class="account-history__cell"><span class="account-history__date">18-11-30 - 14:11:23</span></td>
                            <td class="account-history__cell"><span class="account-history__side account-history__side--status-sell">Sell</span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">718.00000000 <span class="account-history__amount-type">TRX</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00000327 <span class="account-history__amount-type">BTC</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00011739 <span class="account-history__amount-type">BTC</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00234786 <span class="account-history__amount-type">BTC</span></span></td>
                        </tr>
                        <tr class="account-history__table-item">
                            <td class="account-history__cell"></td>
                            <td class="account-history__cell"><span class="account-history__date">18-11-30 - 14:11:23</span></td>
                            <td class="account-history__cell"><span class="account-history__side account-history__side--status-sell">Sell</span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">718.00000000 <span class="account-history__amount-type">TRX</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00000327 <span class="account-history__amount-type">BTC</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00011739 <span class="account-history__amount-type">BTC</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00234786 <span class="account-history__amount-type">BTC</span></span></td>
                        </tr>
                        <tr class="account-history__table-item">
                            <td class="account-history__cell"></td>
                            <td class="account-history__cell"><span class="account-history__date">18-11-30 - 14:11:23</span></td>
                            <td class="account-history__cell"><span class="account-history__side account-history__side--status-sell">Sell</span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">718.00000000 <span class="account-history__amount-type">TRX</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00000327 <span class="account-history__amount-type">BTC</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00011739 <span class="account-history__amount-type">BTC</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00234786 <span class="account-history__amount-type">BTC</span></span></td>
                        </tr>
                        <tr class="account-history__table-item">
                            <td class="account-history__cell"></td>
                            <td class="account-history__cell"><span class="account-history__date">18-11-30 - 14:11:23</span></td>
                            <td class="account-history__cell"><span class="account-history__side account-history__side--status-sell">Sell</span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">718.00000000 <span class="account-history__amount-type">TRX</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00000327 <span class="account-history__amount-type">BTC</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00011739 <span class="account-history__amount-type">BTC</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00234786 <span class="account-history__amount-type">BTC</span></span></td>
                        </tr>
                        <tr class="account-history__table-item">
                            <td class="account-history__cell"></td>
                            <td class="account-history__cell"><span class="account-history__date">18-11-30 - 14:11:23</span></td>
                            <td class="account-history__cell"><span class="account-history__side account-history__side--status-sell">Sell</span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">718.00000000 <span class="account-history__amount-type">TRX</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00000327 <span class="account-history__amount-type">BTC</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00011739 <span class="account-history__amount-type">BTC</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00234786 <span class="account-history__amount-type">BTC</span></span></td>
                        </tr>
                        <tr class="account-history__table-item">
                            <td class="account-history__cell"></td>
                            <td class="account-history__cell"><span class="account-history__date">18-11-30 - 14:11:23</span></td>
                            <td class="account-history__cell"><span class="account-history__side account-history__side--status-sell">Sell</span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">718.00000000 <span class="account-history__amount-type">TRX</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00000327 <span class="account-history__amount-type">BTC</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00011739 <span class="account-history__amount-type">BTC</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00234786 <span class="account-history__amount-type">BTC</span></span></td>
                        </tr>
                        <tr class="account-history__table-item">
                            <td class="account-history__cell"></td>
                            <td class="account-history__cell"><span class="account-history__date">18-11-30 - 14:11:23</span></td>
                            <td class="account-history__cell"><span class="account-history__side account-history__side--status-sell">Sell</span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">718.00000000 <span class="account-history__amount-type">TRX</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00000327 <span class="account-history__amount-type">BTC</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00011739 <span class="account-history__amount-type">BTC</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00234786 <span class="account-history__amount-type">BTC</span></span></td>
                        </tr>
                        <tr class="account-history__table-item">
                            <td class="account-history__cell"></td>
                            <td class="account-history__cell"><span class="account-history__date">18-11-30 - 14:11:23</span></td>
                            <td class="account-history__cell"><span class="account-history__side account-history__side--status-sell">Sell</span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">718.00000000 <span class="account-history__amount-type">TRX</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00000327 <span class="account-history__amount-type">BTC</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00011739 <span class="account-history__amount-type">BTC</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00234786 <span class="account-history__amount-type">BTC</span></span></td>
                        </tr>
                        <tr class="account-history__table-item">
                            <td class="account-history__cell"></td>
                            <td class="account-history__cell"><span class="account-history__date">18-11-30 - 14:11:23</span></td>
                            <td class="account-history__cell"><span class="account-history__side account-history__side--status-sell">Sell</span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">718.00000000 <span class="account-history__amount-type">TRX</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00000327 <span class="account-history__amount-type">BTC</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00011739 <span class="account-history__amount-type">BTC</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00234786 <span class="account-history__amount-type">BTC</span></span></td>
                        </tr>
                    </tbody>
                </table>
                <table v-show="activeTab === 1" class="account-history__table account-history__advanced-view" border="0" cellspacing="0" cellpadding="0">
                    <tbody class="account-history__table-body">
                        <tr class="account-history__table-header">
                            <td class="account-history__cell account-history__cell--type-currency">Currency</td>
                            <td class="account-history__cell account-history__cell--type-type">Type</td>
                            <td class="account-history__cell account-history__cell--type-side">Side</td>
                            <td class="account-history__cell account-history__cell--type-average-price">Average price</td>
                            <td class="account-history__cell account-history__cell--type-filled">Filled</td>
                            <td class="account-history__cell account-history__cell--type-amount">Amount</td>
                            <td class="account-history__cell account-history__cell--type-total">Total</td>
                            <td class="account-history__cell account-history__cell--type-status">Status</td>
                        </tr>
                        <tr class="account-history__table-item">
                            <td class="account-history__cell"></td>
                            <td class="account-history__cell"><span class="account-history__limit">Limit</span></td>
                            <td class="account-history__cell"><span class="account-history__side account-history__side--status-sell">Sell</span></td>
                            <td class="account-history__cell"><span class="account-history__amount">0.00000327 <span class="account-history__amount-type">TRX</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00000327</span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00011739</span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00234786 <span class="account-history__amount-type">BTC</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__status">Cancelled</span></td>
                        </tr>
                        <tr class="account-history__table-item">
                            <td class="account-history__cell"></td>
                            <td class="account-history__cell"><span class="account-history__limit">Limit</span></td>
                            <td class="account-history__cell"><span class="account-history__side account-history__side--status-buy">Buy</span></td>
                            <td class="account-history__cell"><span class="account-history__amount">0.00000327 <span class="account-history__amount-type">TRX</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00000327</span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00011739</span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00234786 <span class="account-history__amount-type">BTC</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__status account-history__status--type-open">Open</span></td>
                        </tr>
                        <tr class="account-history__table-item">
                            <td class="account-history__cell"></td>
                            <td class="account-history__cell"><span class="account-history__limit">Limit</span></td>
                            <td class="account-history__cell"><span class="account-history__side account-history__side--status-sell">Sell</span></td>
                            <td class="account-history__cell"><span class="account-history__amount">0.00000327 <span class="account-history__amount-type">TRX</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00000327</span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00011739</span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00234786 <span class="account-history__amount-type">BTC</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__status">Cancelled</span></td>
                        </tr>
                        <tr class="account-history__table-item">
                            <td class="account-history__cell"></td>
                            <td class="account-history__cell"><span class="account-history__limit">Limit</span></td>
                            <td class="account-history__cell"><span class="account-history__side account-history__side--status-buy">Buy</span></td>
                            <td class="account-history__cell"><span class="account-history__amount">0.00000327 <span class="account-history__amount-type">TRX</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00000327</span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00011739</span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00234786 <span class="account-history__amount-type">BTC</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__status account-history__status--type-open">Open</span></td>
                        </tr>
                        <tr class="account-history__table-item">
                            <td class="account-history__cell"></td>
                            <td class="account-history__cell"><span class="account-history__limit">Limit</span></td>
                            <td class="account-history__cell"><span class="account-history__side account-history__side--status-sell">Sell</span></td>
                            <td class="account-history__cell"><span class="account-history__amount">0.00000327 <span class="account-history__amount-type">TRX</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00000327</span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00011739</span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00234786 <span class="account-history__amount-type">BTC</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__status">Cancelled</span></td>
                        </tr>
                        <tr class="account-history__table-item">
                            <td class="account-history__cell"></td>
                            <td class="account-history__cell"><span class="account-history__limit">Limit</span></td>
                            <td class="account-history__cell"><span class="account-history__side account-history__side--status-buy">Buy</span></td>
                            <td class="account-history__cell"><span class="account-history__amount">0.00000327 <span class="account-history__amount-type">TRX</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00000327</span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00011739</span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00234786 <span class="account-history__amount-type">BTC</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__status account-history__status--type-open">Open</span></td>
                        </tr>
                        <tr class="account-history__table-item">
                            <td class="account-history__cell"></td>
                            <td class="account-history__cell"><span class="account-history__limit">Limit</span></td>
                            <td class="account-history__cell"><span class="account-history__side account-history__side--status-sell">Sell</span></td>
                            <td class="account-history__cell"><span class="account-history__amount">0.00000327 <span class="account-history__amount-type">TRX</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00000327</span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00011739</span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00234786 <span class="account-history__amount-type">BTC</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__status">Cancelled</span></td>
                        </tr>
                        <tr class="account-history__table-item">
                            <td class="account-history__cell"></td>
                            <td class="account-history__cell"><span class="account-history__limit">Limit</span></td>
                            <td class="account-history__cell"><span class="account-history__side account-history__side--status-buy">Buy</span></td>
                            <td class="account-history__cell"><span class="account-history__amount">0.00000327 <span class="account-history__amount-type">TRX</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00000327</span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00011739</span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00234786 <span class="account-history__amount-type">BTC</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__status account-history__status--type-open">Open</span></td>
                        </tr>
                        <tr class="account-history__table-item">
                            <td class="account-history__cell"></td>
                            <td class="account-history__cell"><span class="account-history__limit">Limit</span></td>
                            <td class="account-history__cell"><span class="account-history__side account-history__side--status-sell">Sell</span></td>
                            <td class="account-history__cell"><span class="account-history__amount">0.00000327 <span class="account-history__amount-type">TRX</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00000327</span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00011739</span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00234786 <span class="account-history__amount-type">BTC</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__status">Cancelled</span></td>
                        </tr>
                        <tr class="account-history__table-item">
                            <td class="account-history__cell"></td>
                            <td class="account-history__cell"><span class="account-history__limit">Limit</span></td>
                            <td class="account-history__cell"><span class="account-history__side account-history__side--status-buy">Buy</span></td>
                            <td class="account-history__cell"><span class="account-history__amount">0.00000327 <span class="account-history__amount-type">TRX</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00000327</span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00011739</span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__amount">0.00234786 <span class="account-history__amount-type">BTC</span></span></td>
                            <td class="account-history__cell account-history__cell-align-right"><span class="account-history__status account-history__status--type-open">Open</span></td>
                        </tr>
                    </tbody>
                </table>
                <table v-show="activeTab === 2" class="account-history__table account-history__deposit-withdrawals" border="0" cellspacing="0" cellpadding="0">
                    <tbody>
                        <tr class="account-history__table-header">
                            <td class="account-history__cell account-history__cell--type-currency">Currency</td>
                            <td class="account-history__cell account-history__cell--type-date">Date</td>
                            <td class="account-history__cell account-history__cell--type-type">Type</td>
                            <td class="account-history__cell account-history__cell--type-amount">Amount</td>
                            <td class="account-history__cell account-history__cell--type-status">Status</td>
                            <td class="account-history__cell account-history__cell--type-details"></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr class="account-history__table-item">
                            <td class="account-history__cell"></td>
                            <td class="account-history__cell"><span class="account-history__date">18-11-30 - 14:12:06</span></td>
                            <td class="account-history__cell"><span class="account-history__type">Withdraw</span></td>
                            <td class="account-history__cell"><span class="account-history__amount">0.99000000 <span class="account-history__amount-type">BTC</span></span></td>
                            <td class="account-history__cell"><span class="account-history__status account-history__status--type-pending">Pending</span></td>
                            <td class="account-history__cell account-history__cell-align-right"><button class="account-history__details"><span class="icon-arrow-down"></span></button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AccountHistory",
        data () {
            return {
                activeTab: 2
            }
        },
        methods: {
            changeActiveTab: function (currentActiveTab) {
                this.activeTab = currentActiveTab
            }
        }
    }
</script>

<style lang="scss">
    .account-history {
        max-width: 824px;
        width: 100%;

        flex-shrink: 0;
    }

    .account-history__header {
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

    .account-history__tabs {
        height: 100%;
    }

    .account-history__tab {
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

    .account-history__tab--state-active {
        color: #000;
        border-color: #E95A5A;
    }

    .account-history__form {
        position: relative;
        margin-left: auto;
    }

    .account-history__search {
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

    .account-history__find {
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

    .account-history__content {
        height: 388px;

        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        background-color: #fff;
    }

    .account-history__table {
        width: 824px;
        border-spacing: 0;

        td {
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);

            &:first-child {
                padding-left: 32px;
            }

            &:last-child {
                padding-right: 19px;
            }
        }
    }

    .account-history__buy-and-sell {
        .account-history__cell--type-currency {
            width: 111px;
        }

        .account-history__cell--type-date {
            width: 110px;
        }

        .account-history__cell--type-side {
            width: 35px;
        }

        .account-history__cell--type-amount {
            width: 98px;
            text-align: right;
        }

        .account-history__cell--type-rate {
            width: 88px;
            text-align: right;
        }

        .account-history__cell--type-fee {
            width: 85px;
            text-align: right;
        }

        .account-history__cell--type-total {
            width: 88px;
            text-align: right;
        }
    }

    .account-history__advanced-view {
        .account-history__cell--type-currency {
            width: 153px;
        }

        .account-history__cell--type-type {
            width: 67px;
        }

        .account-history__cell--type-side {
            width: 61px;
        }

        .account-history__cell--type-average-price {
            width: 114px;
        }

        .account-history__cell--type-filled {
            width: 63px;
            text-align: right;
        }

        .account-history__cell--type-amount {
            width: 96px;
            text-align: right;
        }

        .account-history__cell--type-total {
            width: 120px;
            text-align: right;
        }

        .account-history__cell--type-status {
            width: 91px;
            text-align: right;
        }
    }

    .account-history__deposit-withdrawals {
        .account-history__cell--type-currency {
            width: 113px;
        }
        .account-history__cell--type-date {
            width: 130px;
        }
        .account-history__cell--type-type {
            width: 99px;
        }
        .account-history__cell--type-amount {
            width: 273px;
        }
        .account-history__cell--type-status {
            width: 131px;
        }
        .account-history__cell--type-details {
            width: 28px;
        }
    }

    .account-history__table-header {
        width: 100%;
        height: 28px;

        td {
            color: rgba(0, 0, 0, 0.5);
            font-weight: 500;
            font-size: 9px;
            letter-spacing: 2px;
            text-transform: uppercase;
        }
    }

    .account-history__side {
        font-size: 10px;
        font-weight: 500;
    }

    .account-history__side--status-sell {
        color: #E95A5A;
    }

    .account-history__side--status-buy {
        color: #54E16F;
    }

    .account-history__amount {
        color: #000000;
        font-size: 10px;
        font-weight: 500;
    }

    .account-history__amount-type {
        color: rgba(0, 0, 0, 0.30);
        margin-left: 6px;
    }

    .account-history__cell-align-right {
        text-align: right;
    }

    .account-history__date {
        color: rgba(0, 0, 0, 0.4);
        font-size: 10px;
        font-weight: 500;
    }

    .account-history__table-item {
        height: 60px;
    }

    .vb > .vb-dragger {
        z-index: 5;
        width: 10px;
        right: 0;
    }

    .vb > .vb-dragger > .vb-dragger-styler {
        width: 4px;
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
        background-color: rgba(224, 224, 224, .5);
        border-radius: 20px;
        margin: 40px 0 0 0;
        height: calc(100% - 50px);
        display: block;
    }

    .vb.vb-scrolling-phantom > .vb-dragger > .vb-dragger-styler {
        background-color: rgba(224, 224, 224, .8);
    }

    .vb > .vb-dragger:hover > .vb-dragger-styler {
        background-color: rgba(224, 224, 224, .8);
        margin: 40px 0 0 0;
        height: calc(100% - 50px);
    }

    .vb.vb-dragging > .vb-dragger > .vb-dragger-styler {
        background-color: rgba(224, 224, 224, .8);
        margin: 40px 0 0 0;
        height: calc(100% - 50px);
    }

    .vb.vb-dragging-phantom > .vb-dragger > .vb-dragger-styler {
        background-color: rgba(224, 224, 224, .8);
    }

    .account-history__table-body {
        width: 100%;
    }

    .account-history__limit {
        color: rgba(0, 0, 0, 0.5);
        font-size: 10px;
        font-weight: 500;
    }

    .account-history__status {
        color: rgba(0, 0, 0, 0.5);
        font-size: 10px;
        font-weight: 500;
    }

    .account-history__status--type-open {
        color: #fff;

        padding: 3px 10px;

        border-radius: 3px;
        background-color: #E95A5A;
    }

    .account-history__type {
        color: #000000;
        font-size: 10px;
        font-weight: 500;
    }

    .account-history__details {
        cursor: pointer;
        outline: none;
        background-color: transparent;
        box-shadow: none;

        width: 17px;
        height: 17px;

        border: 1px solid #ECECEC;
        border-radius: 2px;

        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 0 0 auto;

        .icon-arrow-down {
            color: #E95A5A;
            font-size: 3px;
        }
    }
</style>
