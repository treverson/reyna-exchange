<template>
    <div class="about-product">
        <Container>
            <HeadingSection heading="Create your digital currency portfolio today" description="ReynaExchange has a variety of features that make it the best place to start trading" />
            <img src="../assets/about-product-background.png" class="about-product__mobile-background">
            <div class="about-product__grid">
                <div class="about-product__item">
                    <IconSection icon-location="assets/image/icon-section/graph.svg" />
                    <div class="about-product__content">
                        <h4 class="about-product__heading">Manage your portfolio</h4>
                        <p class="about-product__desk">Buy and sell popular digital currencies, keep track of them in the one place.</p>
                    </div>
                </div>
                <div class="about-product__item">
                    <IconSection icon-location="assets/image/icon-section/calendar.svg" />
                    <div class="about-product__content">
                        <h4 class="about-product__heading">Recurring buys</h4>
                        <p class="about-product__desk">Invest in digital currency slowly over time by scheduling buys daily, weekly, or monthly.</p>
                    </div>
                </div>
                <div class="about-product__item">
                    <IconSection icon-location="assets/image/icon-section/protect.svg" />
                    <div class="about-product__content">
                        <h4 class="about-product__heading">Vault protection</h4>
                        <p class="about-product__desk">For added security, store your funds in a vault with time delayed withdrawals.</p>
                    </div>
                </div>
                <div class="about-product__item">
                    <IconSection icon-location="assets/image/icon-section/mobile.svg" />
                    <div class="about-product__content">
                        <h4 class="about-product__heading">Mobile apps</h4>
                        <p class="about-product__desk">Stay on top of the markets with the ReynaExchange app for Android or iOS.</p>
                    </div>
                </div>
            </div>
        </Container>
    </div>
</template>

<script>
    import HeadingSection from '@/components/HeadingSection'
    import Container from '@/components/Container'
    import IconSection from '@/components/IconSection'

    export default {
        name: "AboutProduct",
        components: {
            Container,
            HeadingSection,
            IconSection
        }
    }
</script>

<style lang="scss">
    .about-product {
        margin: 202px 0 0 0;
        overflow: hidden;
        position: relative;
    }

    .about-product__grid {
        margin: 133px 0 0 0;

        padding: 0 0 282px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);

        &:after {
            content: "";
            position: absolute;

            right: 100px;
            top: 340px;

            width: 964px;
            height: 874px;
            display: inline-block;

            background-image: url('../assets/about-product-background.png');
        }
    }

    .about-product__item {
        display: flex;
        align-items: center;

        &:not(:last-child) {
            margin-bottom: 34px;
        }
    }

    .about-product__content {
        max-width: 325px;
        margin: 0 0 0 30px;
    }

    .about-product__heading {
        margin: 0;
        color: #151515;
        font-size: 26px;
        font-weight: bold;
        line-height: 31px;
    }

    .about-product__desk {
        color: rgba(21, 21, 21, 0.6);
        font-weight: 500;
        line-height: 26px;
        font-size: 16px;
        margin: 15px 0 0 0;
    }

    .about-product__mobile-background {
        display: none;
        margin: 39px 0 0 0;
    }

    @media (max-width: 2145px) {
        .about-product__grid:after {
            right: 0;
        }
    }

    @media (max-width: 1900px) {
        .about-product__grid:after {
            right: -200px;
        }
    }

    @media (max-width: 1900px) {
        .about-product__grid:after {
            right: -279px;
        }
    }

    @media (max-width: 1330px) {
        .about-product__grid:after {
            right: -320px;
        }
    }

    @media (max-width: 1200px) {
        .about-product__grid:after {
            right: -50%;
        }
    }

    @media (max-width: 992px) {
        .about-product {
            margin: 80px 0 0 0;
        }

        .about-product__mobile-background {
            display: block;
            width: 100%;
        }

        .about-product__heading {
            font-size: 20px;
            line-height: 24px;
        }

        .about-product__desk {
            font-size: 15px;
            margin: 6px 0 0 0;
            line-height: 24px;
        }

        .about-product__grid {
            position: relative;
            margin: 38px 0 0 0;
            padding: 0 0 82px 0;

            &:after {
                display: none;
                position: relative;
                left: 0;
                right: 0;
                bottom: 0;
                top: 0;
            }
        }

        .about-product__item {
            justify-content: center;
        }
    }
</style>
