<template>
  <transition name="fade" mode="out-in">
    <div class="page__content page__content--theme-account">
      <AccountHeader />
      <Container class="container__page-account-buy-and-sell">
        <AccountExchanger />
      </Container>
      <AccountFooter />
    </div>
  </transition>
</template>

<script>
  import AccountHeader from '@/components/Account/AccountHeader'
  import Container from '@/components/Container'
  import AccountExchanger from '@/components/Account/AccountExchanger'
  import AccountFooter from '@/components/Account/AccountFooter'

  export default {
    name: 'accountBuyAndSell',
    components: {
        AccountHeader,
        Container,
        AccountExchanger,
        AccountFooter
    }
  }
</script>

<style lang="scss">
  .page__content {
    min-height: 100vh;
  }

  .page__content--theme-account {
    overflow: hidden;
    background-color: #F3F3F3;
  }

  .container__page-account-buy-and-sell {}
</style>
