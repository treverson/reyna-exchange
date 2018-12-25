<template>
    <div :class="navigationClass">
        <Container>
            <a href="#" class="navigation__logo">ReynaExchange</a>
            <ul :class="navigationMenuClass">
                <li class="navigation__item">
                    <router-link to="#" class="navigation__link">Exchange</router-link>
                </li>
                <li class="navigation__item">
                    <a href="https://tronscan.org/#/token/ReynaExchange/TYftfpnCitoxju9rMYx6XNegUHmFoPMary" target="_blank" class="navigation__link">Buy Token</a>
                </li>
                <li class="navigation__item">
                    <a href="https://reyna.network/#/docs" target="_blank" class="navigation__link">Company</a>
                </li>
                <li class="navigation__item navigation__item--type-button">
                    <router-link to="/products" class="navigation__link navigation__link--type-button">Sign In</router-link>
                </li>
            </ul>
            <div class="navigation__auth">
                <router-link to="/auth/sign-in" class="navigation__login">Sign in</router-link>
                <ButtonComponent link="/auth/register" :theme="[ 'button', 'button--theme-inner', 'navigation__button' ]" content="Get Started" type="link" />
            </div>
            <HamburgerComponent @onClick="changeNavigationStatus()" />
        </Container>
    </div>
</template>

<script>
    import Container from '@/components/Global/Container/Container.vue'
    import ButtonComponent from '@/components/Local/Landing/ButtonComponent.vue'
    import HamburgerComponent from '@/components/Local/Landing/HamburgerComponent.vue'

    export default {
        name: "Navigation",
        components: {
            Container,
            ButtonComponent,
            HamburgerComponent
        },
        data () {
            return {
                navigationStatus: false
            }
        },
        methods: {
            changeNavigationStatus: function () {
                this.navigationStatus = !this.navigationStatus
            }
        },
        computed: {
            navigationMenuClass: function () {
                return {
                    'navigation__menu': true,
                    'navigation__menu--state-active': this.navigationStatus === true
                }
            },
            navigationClass: function () {
                return {
                    'navigation': true,
                    'navigation--showMenu-active': this.navigationStatus === true
                }
            }
        }
    }
</script>

<style lang="scss">
    .navigation {
        position: absolute;
        top: 46px;
        left: 0;
        right: 0;

        .container {
            display: flex;
            align-items: center;
        }
    }

    .navigation__logo {
        color: #fff;
        font-size: 32px;
        line-height: 38px;
        font-weight: bold;
        text-decoration: none;
    }

    .navigation__menu {
        padding: 0;
        margin: 0 auto;
        list-style: none;

        display: flex;
        align-items: center;
    }

    .navigation__item {
        &:not(:last-child) {
            margin-right: 39px;
        }
    }

    .navigation__link {
        color: #fff;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        text-decoration: none;

        transition: .15s ease;
        &:hover,
        &:focus {
            opacity: .6;
        }
    }

    .navigation__auth {
        display: flex;
    }

    .navigation__login {
        display: flex;
        align-items: center;

        padding: 0 30px;

        color: #fff;
        font-size: 16px;
        font-weight: bold;
        line-height: 19px;
        text-decoration: none;

        transition: .15s ease;
        &:hover,
        &:focus {
            opacity: .6;
        }
    }

    .navigation__item--type-button {
        display: none;
    }

    @media (max-width: 992px) {
        .navigation {
            top: 0;
            padding: 14px 0;
            position: static;
            min-height: 42px;
        }

        .navigation__logo {
            font-size: 18px;
        }

        .navigation__menu {
            position: absolute;
            width: 100%;
            background-color: #fff;

            pointer-events: none;
            visibility: hidden;
            opacity: 0;


            top: 45px;
            left: 0;
            right: 0;
            z-index: 1;

            flex-direction: column;

            transition: .15s ease;

            &--state-active {
                pointer-events: auto;
                visibility: visible;
                opacity: 1;
                top: 65px;
            }
        }

        .navigation__item {
            width: 100%;
            max-width: 720px;

            &:not(:last-child) {
                margin-right: 0;
            }
        }

        .navigation__link {
            width: 100%;
            display: block;
            color: #262626;
            font-weight: 500;
            padding: 15px 0;
            box-sizing: border-box;

            background-color: #fff;
            border-bottom: 1px solid rgba(151, 151, 151, 0.10);

            &:hover,
            &:focus {
                opacity: 1;
                color: #F65454;
            }
        }

        .navigation__link--type-button {
            width: auto;
            display: table;
            margin: 36px auto;
            padding: 0 20px;

            letter-spacing: 1px;
            color: #fff;
            line-height: 40px;
            border-radius: 50px;
            background-color: #EB5353;
        }

        .navigation__auth {
            margin: 0 0 0 auto;
        }

        .navigation__login {
            display: none;
        }

        .navigation--showMenu-active {
            background-color: #fff;

            .navigation__logo {
                color: #000000;
            }

            .navigation__button {
                display: none;
            }
        }
    }

    @media (max-width: 768px) {
        .navigation__item {
             max-width: 540px;
         }
    }

    @media (max-width: 576px) {
        .navigation__item {
            max-width: 100%;
        }

        .navigation__link {
            padding: 15px;
        }

        .navigation__link--type-button {
            padding: 0 20px;
        }
    }
</style>
