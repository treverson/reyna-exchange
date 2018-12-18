<template>
    <page>
        <auth-header theme="red" />
        <primary-inner-breadcrumbs>
            Swap Tokens
        </primary-inner-breadcrumbs>
        <primary-inner-content>
            <slot></slot>
        </primary-inner-content>
        <primary-inner-footer theme="red" />
    </page>
</template>

<script>
    import Page from '@/components/Core/Page/Page.vue'
    import AuthHeader from '@/components/Auth/AuthHeader/AuthHeader.vue'
    import PrimaryInnerBreadcrumbs from "@/views/PrimaryInner/components/Breadcrumbs/Breadcrumbs.vue";
    import PrimaryInnerContent from "@/views/PrimaryInner/components/Content/Content.vue";
    import PrimaryInnerFooter from "@/components/Account/Footer/Footer.vue";

    export default {
        name: "PrimaryInner",
        components: {
            PrimaryInnerContent,
            PrimaryInnerBreadcrumbs,
            AuthHeader,
            Page,
            PrimaryInnerFooter
        }
    }
</script>

<style lang="scss">
    p {
        color: #000;
        font-size: 12px;
        letter-spacing: .3px;
        line-height: 16px;
    }

    a {
        color: #1257E2;
        text-decoration: none;
    }
</style>
