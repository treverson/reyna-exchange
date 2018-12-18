<template>
    <header :class="objectClass">
        <account-container :class="['auth-header__container']">
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
        </account-container>
    </header>
</template>

<script>
    import AccountContainer from "@/components/Account/AccountContainer/AccountContainer";

    export default {
        name: "AuthHeader",
        props: {
            theme: {
                type: String
            }
        },
        components: {
            AccountContainer
        },
        computed: {
            objectClass: function () {
                return {
                    'auth-header': true,
                    'auth-header--theme-red': this.theme === 'red'
                }
            }
        }
    }
</script>

<style lang="scss">
    @import "AuthHeader";
</style>
