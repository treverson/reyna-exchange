<template>
    <div class="project-dashboard">
        <Container>
            <div class="project-dashboard__grid">
                <div class="project-dashboard__item">
                    <h4 class="project-dashboard__heading">0</h4>
                    <p class="project-dashboard__desk">Digital currency exchanged</p>
                </div>
                <div class="project-dashboard__item">
                    <h4 class="project-dashboard__heading">0</h4>
                    <p class="project-dashboard__desk">Days running</p>
                </div>
                <div class="project-dashboard__item">
                    <h4 class="project-dashboard__heading">0</h4>
                    <p class="project-dashboard__desk">Customers served</p>
                </div>
            </div>
        </Container>
    </div>
</template>

<script>
    import Container from '@/components/Container'

    export default {
        name: "ProjectDashboard",
        components: {
            Container
        }
    }
</script>

<style lang="scss">
    .project-dashboard {
        width: 100%;
        padding: 76px 0 87px 0;
        background-color: #F65454;
    }

    .project-dashboard__grid {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .project-dashboard__item {
        min-width: 220px;
    }

    .project-dashboard__heading {
        margin: 0;
        color: #fff;
        font-size: 48px;
        line-height: 58px;
        font-weight: bold;
        text-align: center;
    }

    .project-dashboard__desk {
        margin: 18px 0 0 0;
        color: rgba(255, 255, 255, 0.6);
        font-weight: 500;
        line-height: 21px;
        font-size: 18px;
        text-align: center;
    }

    @media (max-width: 992px) {
        .project-dashboard__grid {
            flex-direction: column;
        }

        .project-dashboard__item {
            min-width: 100%;

            &:not(:last-child) {
                margin: 0 0 60px 0;
            }
        }

        .project-dashboard__heading {
            font-size: 38px;
            line-height: 45px;
        }

        .project-dashboard__desk {
            font-size: 16px;
            line-height: 19px;
            margin: 13px 0 0 0;
        }
    }
</style>
