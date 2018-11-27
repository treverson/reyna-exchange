<template>
    <header class="header">
        <Navigation />
        <Container>
            <h1 class="header__heading">Buy and sell cryptocurrency</h1>
            <p class="header__desk">Reyna is the easiest place to buy, sell, and manage your cryptocurrency portfolio.</p>
            <form action="post" class="header__lead">
                <input type="email" class="header__field" placeholder="Type your e-mail" required>
                <ButtonComponent link="#" :theme="[ 'button', 'button--theme-normal' ]" content="Get Started" type="input" />
            </form>
            <div class="header__charts">
                <currency-tracker heading="TRX" icon-location="assets/image/trx/icon.svg" :line-color="[ 48, 48, 48 ]" />
                <currency-tracker heading="SEED" icon-location="assets/image/seed/icon.svg" :line-color="[ 248, 216, 95 ]" />
                <currency-tracker heading="REY" icon-location="assets/image/rey/icon.svg" :line-color="[ 246, 84, 84 ]" />
                <currency-tracker heading="IGG" icon-location="assets/image/igg/icon.svg" :line-color="[ 0, 100, 255 ]" />
                <currency-tracker heading="LWH" icon-location="assets/image/lwh/icon.svg" :line-color="[ 255, 98, 0 ]" />
            </div>
        </Container>
    </header>
</template>

<script>
    import Container from '@/components/Container.vue'
    import CurrencyTracker from '@/components/CurrencyTracker.vue'
    import Navigation from '@/components/Navigation.vue'
    import ButtonComponent from '@/components/ButtonComponent.vue'

    export default {
        name: "Header",
        components: {
            Container,
            CurrencyTracker,
            Navigation,
            ButtonComponent
        }
    }
</script>

<style lang="scss">
    .header {
        width: 100%;
        background-color: #F65454;
        padding: 223px 0 0 0;
        max-height: 760px;
        box-sizing: border-box;
    }

    .header__heading {
        margin: 0;
        color: #fff;
        font-size: 52px;
        font-weight: bold;
        line-height: 63px;
        text-align: center;
    }

    .header__desk {
        margin: 25px auto 74px auto;

        text-align: center;
        max-width: 407px;

        font-weight: 500;
        font-size: 16px;
        color: #fff;
        line-height: 26px;
    }

    .header__lead {
        display: flex;
        justify-content: space-between;

        max-width: 444px;
        margin: 0 auto;
    }

    .header__field {
        width: 255px;
        height: 50px;
        box-sizing: border-box;

        padding: 0 22px;
        outline: none;

        border-radius: 5px;
        border: none;
        background-color: rgba(0, 0, 0, 0.06);

        color: #fff;
        font-size: 16px;
        font-weight: 500;

        transition: .15s ease;

        &::placeholder {
            color: rgba(255, 255, 255, 0.5);
            font-weight: 500;
            font-size: 16px;
            transition: .15s ease;
        }

        &:focus {
            background-color: rgba(0, 0, 0, 0.1);
            &::placeholder {
                opacity: 0;
            }
        }
    }

    .header__charts {
        position: relative;
        bottom: -108px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        .currency-tracker {
            max-width: 205px;
        }
    }

    @media (max-width: 1200px) {
        .header__charts {
            .currency-tracker {
                max-width: 180px;
            }
        }
    }

    @media (max-width: 992px) {
        .header {
            padding: 0;
            margin: 0 0 1317px 0;

            .button--theme-inner {
                line-height: 38px;
                padding: 0 10px;
                font-size: 14px;
            }
        }

        .header__charts {
            flex-direction: column;

            bottom: 0;
            top: 0;
            left: 0;
            right: 0;
            margin: 131px 0 0 0;

            .currency-tracker {
                max-width: 100%;

                &:not(:last-child) {
                    margin-bottom: 33px;
                }
            }
        }

        .header__heading {
            font-size: 32px;
            line-height: 38px;
            margin: 149px 0 0 0;
        }

        .header__desk {
            font-size: 15px;
            margin: 16px auto 0 auto;
        }

        .header__lead {
            margin: 49px auto 0 auto;
            flex-direction: column;
        }

        .header__field {
            width: 100%;
            margin: 0 0 15px 0;
        }
    }
</style>
