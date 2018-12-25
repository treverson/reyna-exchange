<template>
    <div :class="['primary-inner__breadcrumbs']">
        <account-container :class="['primary-inner__breadcrumbs-container']">
            <router-link to="/swap" :class="['primary-inner__breadcrumb']">
                <slot></slot>
            </router-link>
        </account-container>
    </div>
</template>

<script>
    import AccountContainer from "@/components/Local/Account/AccountContainer/AccountContainer";
    export default {
        name: "Breadcrumbs",
        components: {AccountContainer}
    }
</script>

<style lang="scss">
    @import "Breadcrumbs";
</style>
