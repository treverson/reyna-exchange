<template v-if="type === string">
    <router-link v-if="type === 'link'" :to="link" :class="theme">{{ content }}</router-link>
    <input v-else type="submit" :class="theme" :value="content">
</template>

<script>
    export default {
        name: "ButtonComponent",
        props: {
            link: {
                type: String
            },
            theme: {
                type: Array
            },
            content: {
                type: String,
                required: true
            },
            type: {
                type: String,
                default: 'link'
            }
        }
    }
</script>

<style lang="scss">
    .button {
        text-decoration: none;
    }

    .button--theme-normal {
        color: #151515;
        font-weight: bold;
        font-size: 16px;
        line-height: 50px;
        padding: 0 37px;
        border-radius: 5px;
        border: none;

        outline: none;
        cursor: pointer;
        background-color: #FFFFFF;

        transition: .15s ease;

        &:hover,
        &:focus {
            box-shadow: 0 22px 40px rgba(0, 0, 0, 0.05);
        }
    }

    .button--theme-inner {
        display: inline-block;

        color: #fff;
        font-weight: bold;
        font-size: 16px;
        padding: 0 37px;

        line-height: 50px;
        border-radius: 5px;
        background-color: transparent;
        border: 2px solid #fff;

        transition: .15s ease;

        &:hover,
        &:focus {
            color: #F65454;
            background-color: #fff;
        }
    }
</style>
