<template>
    <footer class="footer">
        <Container>
            <div class="footer__email-section">
                <h3 class="footer__lead">Make your first digital currency purchase today</h3>
                <form action="post" class="footer__form">
                    <input type="email" class="footer__field" placeholder="Type your e-mail" required>
                    <ButtonComponent link="#" :theme="[ 'button', 'button--theme-normal', 'footer__button' ]" content="Get Started" type="input" />
                </form>
            </div>
            <div class="footer__main-section">
                <a href="#" class="footer__logo">ReynaExchange</a>
                <span class="footer__copyright">© 2018 ReynaProject</span>
                <ul class="footer__menu">
                    <li class="footer__item">
                        <router-link to="#" class="footer__link">Exchange</router-link>
                    </li>
                    <li class="footer__item">
                        <a href="https://tronscan.org/#/token/ReynaExchange/TYftfpnCitoxju9rMYx6XNegUHmFoPMary" target="_blank" class="footer__link">Buy Token</a>
                    </li>
                    <li class="footer__item">
                        <a href="https://reyna.network/#/docs" target="_blank" class="footer__link">Company</a>
                    </li>
                </ul>
            </div>
        </Container>
    </footer>
</template>

<script>
    import Container from '@/components/Container'
    import ButtonComponent from '@/components/ButtonComponent'

    export default {
        name: "Footer",
        components: {
            Container,
            ButtonComponent
        }
    }
</script>

<style lang="scss">
    .footer {
        width: 100%;
        background-color: #2F2F2F;
    }

    .footer__email-section {
        padding: 74px 0 57px 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .footer__lead {
        color: #fff;
        font-size: 24px;
        font-weight: bold;
        line-height: 29px;
        margin: 0;
        text-align: center;
    }

    .footer__form {
        margin: 34px 0 0 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .footer__field {
        width: 382px;
        height: 50px;
        box-sizing: border-box;

        padding: 0 22px;
        outline: none;

        border-radius: 5px;
        border: none;
        background-color: rgba(255, 255, 255, 0.06);

        color: #fff;
        font-size: 16px;
        font-weight: 500;
        margin: 0 30px 0 0;

        transition: .15s ease;

        &::placeholder {
            color: rgba(255, 255, 255, 0.5);
            font-weight: 500;
            font-size: 16px;
            transition: .15s ease;
        }

        &:focus {
            background-color: rgba(255, 255, 255, 0.1);
            &::placeholder {
                opacity: 0;
            }
        }
    }

    .footer__main-section {
        padding: 47px 0 60px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .footer__logo {
        font-size: 32px;
        color: #fff;
        font-weight: bold;
        line-height: 38px;
        text-decoration: none;
    }

    .footer__copyright {
        font-size: 16px;
        color: rgba(255, 255, 255, 0.6);
        line-height: 19px;
        font-weight: 500;
    }

    .footer__menu {
        padding: 0;
        margin: 0;
        list-style: none;

        display: flex;
        align-items: center;
    }

    .footer__item {
        &:not(:last-child) {
            margin-right: 39px;
        }
    }

    .footer__link {
        color: rgba(255, 255, 255, 0.6);
        font-size: 16px;
        font-weight: bold;
        line-height: 19px;
        text-decoration: none;

        transition: .15s ease;
        &:hover {
            color: #fff;
        }
    }

    @media (max-width: 992px) {
        .footer__form {
            flex-direction: column;
        }

        .footer__field {
            width: 100%;
            margin: 0 0 15px 0;
        }

        .footer__button {
            width: 100%;
        }

        .footer__main-section {
            flex-direction: column;
            padding: 50px 0 84px 0;
        }

        .footer__logo {
            font-size: 18px;
            line-height: 21px;
            margin: 0 0 43px 0;
        }

        .footer__copyright {
            font-size: 16px;
            line-height: 19px;
            margin: 0 0 40px 0;
        }

        .footer__menu {
            width: 100%;
            flex-direction: column;
        }

        .footer__item {
            width: 100%;
            text-align: center;

            &:not(:last-child) {
                margin: 0 0 15px 0;
            }
        }

        .footer__link {
            width: 100%;
            display: block;
        }

        .footer__lead {
            font-size: 20px;
            line-height: 30px;
        }

        .footer__email-section {
            padding: 54px 15px;
        }
    }
</style>
