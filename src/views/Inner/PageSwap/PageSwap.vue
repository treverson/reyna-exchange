<template>
    <primary-inner>
        <div :class="['page-swap']">
            <account-container>
                <primary-inner-block-section>
                    <primary-inner-heading>
                        Address: {{ address }}
                    </primary-inner-heading>
                    <p>
                        Read more about TronLink <a href="#">here</a> or simply download <a href="#">Firefox Extension</a> or go to <a href="#">Chrome Web Store</a>
                    </p>
                </primary-inner-block-section>
                <primary-inner-block-section>
                    <primary-inner-heading>
                        Swap Tokens
                    </primary-inner-heading>
                    <p>
                        Swap your TRC10 Rey Tokens to TRC20 Tokens by clicking the button below
                    </p>
                    <swap-currency />
                    <user-button type="button" theme="green" class="page-swap__button" @click.native="swapTokens()">
                        Swap Now
                    </user-button>
                </primary-inner-block-section>
                trc10: {{ rey10 }}
                trc20: {{ rey20 }}
            </account-container>
        </div>
    </primary-inner>
</template>

<script>
    /* eslint-disable */

    import TronWeb from 'tronweb'
    import axios from 'axios'

    import PrimaryInner from "@/views/PrimaryInner/PrimaryInner";
    import AccountContainer from "@/components/Account/AccountContainer/AccountContainer";
    import PrimaryInnerHeading from "@/views/PrimaryInner/components/Heading/Heading";
    import PrimaryInnerBlockSection from "@/views/PrimaryInner/components/BlockSection/BlockSection";
    import SwapCurrency from "@/components/Core/SwapCurrency/SwapCurrency";
    import UserButton from "@/components/Core/UserButton/UserButton";

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
                rey10: 0,
                rey20: 0
            }
        },
        methods: {
            numberWithCommas: function (x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            },
            swapTokens: async function () {
                return true

                let acct = await window.tronWeb.trx.getUnconfirmedAccount()
                let balance = 0
                if ('asset' in acct) {
                    var arrayLength = acct['asset'].length
                    for (var i = 0; i < arrayLength; i++) {
                        var asset = acct['asset'][i]
                        if (asset['key'] == "REY") {
                            balance = asset['value']
                            break
                        }
                    }
                }

                if (balance == 0) return true

                let to = "TQH3r7WyteKVy1cskhc7BiqbNYSyiyvwPS"

                let transaction = await TronWeb.transactionBuilder.sendToken(to, balance, "REY")
                let signedTransaction = await TronWeb.trx.sign(transaction)

                let depositAmount = balance
                let playerAddress = window.tronWeb.defaultAddress.hex

                let postData = {
                    depositAmount: depositAmount,
                    playerAddress: playerAddress,
                    signedTransaction: JSON.stringify(signedTransaction)
                }

                axios.post('/swap1020', postData).then(response => {
                    alert("REY Token Swap Successful")
                    console.log(response)

                    this.rey10 = 0
                    this.rey20 = this.numberWithCommas(this.rey10) + " REY"
                }).catch(error => {
                    alert("Failed, please retry")
                    console.log(error.response)
                })
            }
        },
        mounted () {
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

            let getAddress = window.tronWeb.defaultAddress.base58
            let rey10 = 0

            setTimeout(function () {
                this.address = getAddress ? (getAddress.slice(0, 5) + "…" + getAddress.slice(-5)) : "Please login to TronLink"

                if(!getAddress) return true

                tronWeb.trx.getUnconfirmedAccount(window.tronWeb.defaultAddress.base58, function(err, account) {
                    for (let i = 0; i < account.asset.length; i++) {
                        if(account.asset[i].key === "ReynaToken") {
                            rey10 = account.asset[i].value
                        }
                    }
                })

            }.bind(this), 1000)
        }
    }
</script>

<style lang="scss">
    @import "PageSwap";
</style>
