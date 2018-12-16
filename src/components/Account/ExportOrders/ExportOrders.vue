<template>
    <div :class="['export-orders']">
        <h3 :class="['export-orders__heading']">
            Export orders
        </h3>
        <div :class="['export-orders__content']">
            <user-button to="/account" theme="green" :class="['export-orders__button']">
                Download CSV file
            </user-button>
        </div>
    </div>
</template>

<script>
    import UserButton from '@/components/Core/UserButton/UserButton.vue'

    export default {
        name: "ExportOrders",
        components: {
            UserButton
        }
    }
</script>

<style lang="scss">
    @import "ExportOrders";
</style>
