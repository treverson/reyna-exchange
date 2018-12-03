<template>
    <div class="information-category">
        <Container>
            <HeadingSection heading="The most trusted digital currency platform" description="Here are a few reasons why you should choose ReynaExchange" />
            <div class="information-category__grid">
                <div class="information-category__item">
                    <IconSection icon-location="assets/image/icon-section/security.svg" class="information-category__icon" />
                    <h4 class="information-category__heading">Secure storage</h4>
                    <p class="information-category__desk">We store the vast majority of the digital assets in secure offline storage.</p>
                    <LearnMore class="information-category__link" href="#">Learn more</LearnMore>
                </div>
                <div class="information-category__item">
                    <IconSection icon-location="assets/image/icon-section/news.svg" class="information-category__icon" />
                    <h4 class="information-category__heading">Protected by insurance</h4>
                    <p class="information-category__desk">Digital currency stored on our servers is covered by our insurance policy.</p>
                    <LearnMore class="information-category__link" href="#">Learn more</LearnMore>
                </div>
                <div class="information-category__item">
                    <IconSection icon-location="assets/image/icon-section/accept.svg" class="information-category__icon" />
                    <h4 class="information-category__heading">Industry best practices</h4>
                    <p class="information-category__desk">ReynaExchange supports a variety of the most popular digital currencies.</p>
                    <LearnMore class="information-category__link" href="#">Learn more</LearnMore>
                </div>
            </div>
        </Container>
    </div>
</template>

<script>
    import Container from '@/components/Container'
    import HeadingSection from '@/components/Landing/HeadingSection'
    import IconSection from '@/components/Landing/IconSection'
    import LearnMore from '@/components/Landing/LearnMore'

    export default {
        name: "InformationCategory",
        components: {
            Container,
            HeadingSection,
            IconSection,
            LearnMore
        }
    }
</script>

<style lang="scss">
    .information-category {
        margin: 90px 0 139px 0;
    }

    .information-category__grid {
        margin: 109px 0 0 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .information-category__item {
        max-width: 324px;
    }

    .information-category__icon {
        margin: 0 auto;
    }

    .information-category__heading {
        margin: 47px 0 0 0;
        color: #151515;
        font-size: 26px;
        line-height: 31px;
        font-weight: 600;
        text-align: center;
    }

    .information-category__desk {
        margin: 15px 0 39px 0;
        color: rgba(21, 21, 21, 0.6);
        font-weight: 500;
        line-height: 26px;
        font-size: 16px;
        text-align: center;
    }

    .information-category__link {
        display: table;
        margin: 0 auto;
    }

    @media (max-width: 992px) {
        .information-category {
            margin: 72px 0 131px 0;
        }

        .information-category__grid {
            margin: 70px 0 0 0;
            flex-direction: column;
        }

        .information-category__item {
            &:not(:last-child) {
                margin: 0 0 81px 0;
            }
        }

        .information-category__heading {
            font-size: 20px;
            line-height: 24px;
            margin: 42px 0 0 0;
        }

        .information-category__desk {
            font-size: 15px;
            line-height: 25px;
            margin: 10px 0 0 0;
        }
    }
</style>
