<template>
    <button :class="buttonClass"><slot></slot></button>
</template>

<script>
    export default {
        name: "ButtonComponent",
        props: {
            buttonClass: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style lang="scss">
    .button-component {
        padding: 0 25px;
        height: 40px;

        border: none;
        outline: none;
        cursor: pointer;

        color: #FFFFFF;
        font-size: 12px;
        font-weight: bold;
        letter-spacing: .5px;

        border-radius: 2px;
        background-color: #E95A5A;

        transition: .15s ease;

        &:hover,
        &:focus {
            background-color: #da5555;
        }
    }

    .button-component--type-fluid {
        width: 100%;
    }

    .button-component--theme-gray {
        color: #000000;
        background-color: #ECECEC;

        &:hover {
            background-color: #cecece;
        }
    }
</style>
