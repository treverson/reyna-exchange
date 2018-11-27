<template>
    <div class="icon-section">
        <div class="icon-section__background" :style="{ backgroundImage: 'url(' + iconLocation + ')' }"></div>
    </div>
</template>

<script>
    export default {
        name: "IconSection",
        props: {
            iconLocation: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="scss">
    .icon-section {
        width: 120px;
        height: 120px;

        flex-shrink: 0;

        border-radius: 50%;

        background: rgb(217,79,79);
        background: -moz-linear-gradient(45deg, rgba(217,79,79,1) 0%, rgba(245,133,133,1) 100%);
        background: -webkit-linear-gradient(45deg, rgba(217,79,79,1) 0%,rgba(245,133,133,1) 100%);
        background: linear-gradient(45deg, rgba(217,79,79,1) 0%,rgba(245,133,133,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d94f4f', endColorstr='#f58585',GradientType=1 );
    }

    .icon-section__background {
        width: 100%;
        height: 100%;

        background-repeat: no-repeat;
        background-position: center;
    }

    @media (max-width: 992px) {
        .icon-section {
            width: 84px;
            height: 84px;
        }

        .icon-section__background {
            background-size: 30%;
        }
    }
</style>
