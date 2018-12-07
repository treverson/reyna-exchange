<template>
    <footer class="account-footer">
        <span class="account-footer__copyright">© 2018-2019 ReynaExchange. All rights reserved</span>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style lang="scss">
    .account-footer {
        position: absolute;

        width: 100%;
        height: 27px;

        background-color: #F5EBEB;

        padding: 0 59.2px 0 50px;
        box-sizing: border-box;

        display: flex;
        align-items: center;

        bottom: 0;

        border-top: 1px solid rgba(192, 141, 141, 0.19);
    }

    .account-footer__copyright {
        color: rgba(139, 47, 47, 0.5);
        font-size: 10px;
        line-height: 12px;
    }
</style>

