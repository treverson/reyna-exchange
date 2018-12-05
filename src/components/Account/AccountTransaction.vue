<template>
    <div class="account-transaction">
        <div class="account-transaction__icons">
            <div class="account-transaction__icon account-transaction__icon--type-for"></div>
            <div class="account-transaction__icon account-transaction__icon--type-to"></div>
        </div>
        <div class="account-transaction__content">
            <span class="account-transaction__heading">{{ from }}</span>
            <span class="account-transaction__desk">for {{ to }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AccountTransaction",
        props: {
            from: {
                type: String,
                required: true
            },
            to: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="scss">
    .account-transaction {
        display: flex;
    }

    .account-transaction__icons {
        display: flex;
        align-items: center;
        margin-right: 7px;
    }

    .account-transaction__icon {
        width: 22px;
        height: 22px;

        border-radius: 50%;
    }

    .account-transaction__icon--type-for {
        background-color: #FAAFAF;
    }

    .account-transaction__icon--type-to {
        background-color: #878BDE;
        position: relative;
        left: -8px;
        margin-right: -8px;
    }

    .account-transaction__heading {
        display: block;

        color: #000000;
        font-weight: 500;
        line-height: 12px;

        margin-bottom: 3px;
    }

    .account-transaction__desk {
        display: block;

        color: rgba(0, 0, 0, 0.5);
        font-size: 8px;
        font-weight: 500;
        line-height: 10px;
    }
</style>
