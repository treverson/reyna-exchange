<template>
    <footer class="account-footer">
        <Container class="account-footer__container">
            <span class="account-footer__copyright">© 2018-2019 ReynaExchange.  All rights reserved</span>
        </Container>
    </footer>
</template>

<script>
    import Container from '@/components/Container'

    export default {
        name: "AccountFooter",
        components: {
            Container
        }
    }
</script>

<style lang="scss">
    .account-footer {
        position: fixed;

        bottom: 0;

        width: 100%;
        height: 100px;

        background-color: #fff;
    }

    .account-footer__container {
        height: 100%;

        display: flex;
        align-items: center;
    }

    .account-footer__copyright {
        color: rgba(0, 0, 0, 0.3);
        font-size: 12px;
        font-weight: 500;
        line-height: 14px;
    }
</style>
