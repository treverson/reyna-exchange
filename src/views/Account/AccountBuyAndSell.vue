<template>
  <transition name="fade" mode="out-in">
    <PageWrapper theme="account">
      <AccountHeader />
      <PageContent>
        <Container class="container__page-account-buy-and-sell">
          <AccountExchanger />
          <AccountReceipt />
        </Container>
      </PageContent>
      <AccountFooter />
    </PageWrapper>
  </transition>
</template>

<script>
  import PageWrapper from '@/components/PageWrapper'
  import PageContent from '@/components/PageContent'
  import AccountHeader from '@/components/Account/AccountHeader'
  import Container from '@/components/Container'
  import AccountExchanger from '@/components/Account/AccountExchanger'
  import AccountReceipt from '@/components/Account/AccountReceipt'
  import AccountFooter from '@/components/Account/AccountFooter'

  export default {
    name: 'accountBuyAndSell',
    components: {
        PageWrapper,
        PageContent,
        AccountHeader,
        Container,
        AccountExchanger,
        AccountReceipt,
        AccountFooter
    }
  }
</script>

<style lang="scss">
  .container__page-account-buy-and-sell {
    max-width: 920px;

    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
</style>
