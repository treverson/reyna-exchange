<template>
    <primary-inner>
        <div :class="['page-swap']">
            <account-container>
                <primary-inner-block-section>
                    <primary-inner-heading>
                        Address: {{ address }}
                    </primary-inner-heading>
                    <p v-show="address === 'Loading...'">
                        Read more about TronLink <a href="#">here</a> or simply download <a href="https://addons.mozilla.org/en-US/firefox/addon/tronlink/">Firefox Extension</a> or go to <a href="https://chrome.google.com/webstore/detail/tronlink/ibnejdfjmmkpcnlpebklmnkoeoihofec">Chrome Web Store</a>.
                    </p>
                    <p v-show="address === 'Loading...'">
                        You can also use TronLink inside the Brave browser.
                    </p>
                    <p v-if="status.length > 0">
                        {{ status }}
                    </p>
                </primary-inner-block-section>
                <primary-inner-block-section>
                    <primary-inner-heading>
                        Swap Tokens
                    </primary-inner-heading>
                    <p>
                        Swap your TRC10 Rey Tokens to TRC20 Tokens by clicking the button below
                    </p>
                    <swap-currency :first-value="firstVal" first-name="TRX10" :second-value="(firstVal / 10).toFixed(6)" second-name="TRX20" :disabled="true" />
                    <user-button type="button" theme="green" class="page-swap__button" @click.native="swapTokens()">
                        Swap Now
                    </user-button>
                </primary-inner-block-section>
            </account-container>
        </div>
    </primary-inner>
</template>

<script>
    /* eslint-disable */
    import TronWeb from 'tronweb'
    import axios from 'axios'
    import qs from 'qs'

    import PrimaryInner from "@/views/PrimaryInner/PrimaryInner";
    import AccountContainer from "@/components/Local/Account/AccountContainer/AccountContainer";
    import PrimaryInnerHeading from "@/views/PrimaryInner/components/Heading/Heading";
    import PrimaryInnerBlockSection from "@/views/PrimaryInner/components/BlockSection/BlockSection";
    import SwapCurrency from "@/components/Global/SwapCurrency/SwapCurrency";
    import UserButton from "@/components/Global/UserButton/UserButton";
    export default {
        name: "PageSwap",
        components: {
            UserButton,
            SwapCurrency,
            PrimaryInnerBlockSection,
            PrimaryInnerHeading,
            AccountContainer,
            PrimaryInner
        },
        data () {
            return {
                address: 'Loading...',
                firstVal: 0,
                secondVal: 0,
                rey10: 0,
                rey20: 0,
                status: ''
            }
        },
        methods: {
            swapTokens: async function () {
                this.status = 'Swap just started'
                let acct = await window.tronWeb.trx.getUnconfirmedAccount()
                let balance = 0

                if ('asset' in acct) {
                    let arrayLength = acct['asset'].length
                    for (var i = 0; i < arrayLength; i++) {
                        let asset = acct['asset'][i]
                        if (asset['key'] === "ReynaToken") {
                            balance = asset['value']
                            break
                        }
                    }
                }

                if (balance === 0) {
                    this.status = 'Balance of ReynaToken is 0. Nothing to swap.'
                    return true
                }

                this.status = 'Balance of ReynaToken is ' + balance + '. Swapping...'
                let to = "TQH3r7WyteKVy1cskhc7BiqbNYSyiyvwPS"

                let transaction = await tronWeb.transactionBuilder.sendToken(to, balance, "ReynaToken")
                let signedTransaction = await tronWeb.trx.sign(transaction)

                let depositAmount = balance
                let playerAddress = window.tronWeb.defaultAddress.hex

                axios.post('https://api.reyna.ml/swap1020', qs.stringify({

                    depositAmount: depositAmount,
                    playerAddress: playerAddress,
                    signedTransaction: JSON.stringify(signedTransaction)

                })).then(response => {

                    this.status = 'REY Token Swap Successful'

                    console.log(response)

                }).catch(error => {

                    this.status = 'REY Token Swap Failed'

                    console.log(error.response)

                })
            }
        },
        created () {
            let address = false
            let rey10 = 0
            let self = this

            window.onload = function() {
                if (!window.tronWeb) {
                    const HttpProvider = TronWeb.providers.HttpProvider
                    const fullNode = new HttpProvider('https://api.trongrid.io')
                    const solidityNode = new HttpProvider('https://api.trongrid.io')
                    const eventServer = 'https://api.trongrid.io/'
                    const tronWeb = new TronWeb(
                        fullNode,
                        solidityNode,
                        eventServer,
                    )
                    window.tronWeb = tronWeb
                }

                setTimeout(() => {
                    address = window.tronWeb.defaultAddress.base58
                    self.address = address ? (address.slice(0, 5) + "…" + address.slice(-5)) : "Please login to TronLink"

                    if(!address) return true

                    tronWeb.trx.getUnconfirmedAccount(window.tronWeb.defaultAddress.base58, (err, account) => {

                        for (let i = 0; i < account.asset.length; i++) {
                            if(account.asset[i].key === "ReynaToken") {
                                rey10 = account.asset[i].value;
                            }
                        }

                        self.firstVal = rey10
                    })
                }, 1000)
            }
        }
    }
</script>

<style lang="scss">
    @import "PageSwap";
</style>
