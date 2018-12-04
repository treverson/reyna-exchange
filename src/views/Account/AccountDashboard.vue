<template>
  <transition name="fade" mode="out-in">
    <div class="page__content page__content--theme-account">
      <AccountHeader />
      <Container class="container__page-account-dashboard">
        <AccountGettingStarted />
        <AccountMyFunds />
      </Container>
      <AccountFooter />
    </div>
  </transition>
</template>

<script>
  import AccountHeader from '@/components/Account/AccountHeader'
  import Container from '@/components/Container'
  import AccountGettingStarted from '@/components/Account/AccountGettingStarted'
  import AccountMyFunds from '@/components/Account/AccountMyFunds'
  import AccountFooter from '@/components/Account/AccountFooter'

  export default {
    name: 'accountDashboard',
    components: {
        AccountHeader,
        Container,
        AccountGettingStarted,
        AccountMyFunds,
        AccountFooter
    }
  }
</script>

<style lang="scss">
  .page__content {
    min-height: 100vh;

    box-sizing: border-box;
    padding-bottom: 100px;
  }

  .page__content--theme-account {
    overflow: hidden;
    background-color: #F3F3F3;
  }

  .container__page-account-dashboard {}
</style>
