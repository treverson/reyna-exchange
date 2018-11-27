<template>
    <div class="heading-section">
        <h3 class="heading-section__heading">{{ heading }}</h3>
        <p class="heading-section__desk">{{ description }}</p>
    </div>
</template>

<script>
    export default {
        name: "HeadingSection",
        props: {
            heading: {
                type: String,
                required: true
            },
            description: {
                type: String
            }
        }
    }
</script>

<style lang="scss">
    .heading-section {}

    .heading-section__heading {
        color: #151515;
        font-weight: bold;
        line-height: 63px;
        text-align: center;
        max-width: 599px;
        margin: 0 auto;
        font-size: 52px;
    }

    .heading-section__desk {
        color: rgba(21, 21, 21, 0.60);
        font-weight: 500;
        font-size: 16px;
        line-height: 26px;
        max-width: 375px;
        margin: 30px auto 0 auto;
        text-align: center;
    }

    @media (max-width: 992px) {
        .heading-section__heading {
            font-size: 32px;
            line-height: 38px;
        }

        .heading-section__desk {
            font-size: 15px;
            line-height: 25px;
            margin: 23px auto 0 auto;
        }
    }
</style>
