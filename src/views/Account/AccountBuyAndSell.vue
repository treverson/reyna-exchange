<template>
  <transition name="fade" mode="out-in">
    <div class="page__content page__content--theme-account">
      <AccountHeader />
      <Container class="container__page-account-buy-and-sell">
        <AccountExchanger />
        <AccountReceipt />
      </Container>
      <AccountFooter />
    </div>
  </transition>
</template>

<script>
  import AccountHeader from '@/components/Account/AccountHeader'
  import Container from '@/components/Container'
  import AccountExchanger from '@/components/Account/AccountExchanger'
  import AccountReceipt from '@/components/Account/AccountReceipt'
  import AccountFooter from '@/components/Account/AccountFooter'

  export default {
    name: 'accountBuyAndSell',
    components: {
        AccountHeader,
        Container,
        AccountExchanger,
        AccountReceipt,
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

  .container__page-account-buy-and-sell {
    max-width: 920px;

    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
</style>
