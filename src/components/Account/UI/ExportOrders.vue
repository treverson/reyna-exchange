<template>
    <div class="export-orders">
        <h3 class="export-orders__heading">Export orders</h3>
        <div class="export-orders__content">
            <Button to="/account" theme="green">Download CSV file</Button>
        </div>
    </div>
</template>

<script>
    import Button from '@/components/Account/Button'

    export default {
        name: "ExportOrders",
        components: {
            Button
        }
    }
</script>

<style lang="scss">
    .export-orders {
        width: 100%;
    }

    .export-orders__heading {
        width: 100%;
        height: 50px;

        margin: 0;
        color: #000000;
        font-size: 14px;
        font-weight: bold;
        line-height: 16px;
        text-transform: uppercase;

        padding: 0 20px;
        box-sizing: border-box;

        letter-spacing: .3px;

        display: flex;
        align-items: center;

        background-color: #fff;
        border-bottom: 1px solid rgba(246, 84, 84, 0.17);
    }

    .export-orders__content {
        padding: 19px 20.5px;
        background-color: #fff;
    }
</style>
