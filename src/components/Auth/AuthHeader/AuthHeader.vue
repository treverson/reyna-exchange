<template>
    <header class="auth-header">
        <router-link to="/" :class="['auth-header__logo']">
            Reyna Exchange
        </router-link>
        <nav class="auth-header__menu">
            <router-link to="/" :class="['auth-header__item']">
                Exchange
            </router-link>
            <router-link to="/" :class="['auth-header__item']">
                Buy Token
            </router-link>
            <router-link to="/" :class="['auth-header__item']">
                Company
            </router-link>
        </nav>
        <div :class="['auth-header__profile']">
            <router-link to="/auth/sign-in" :class="['auth-header__signIn']">
                Sign In
            </router-link>
            <router-link to="/auth/register" :class="['auth-header__getStarted']">
                Get Started
            </router-link>
        </div>
    </header>
</template>

<script>
    export default {
        name: "AuthHeader"
    }
</script>

<style lang="scss">
    @import "AuthHeader";
</style>
