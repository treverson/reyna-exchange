<template>
  <transition name="fade" mode="out-in">
    <div class="page__content page__content--theme-account">
      <AccountHeader />
      <Container>
        <AccountHeading>History</AccountHeading>
      </Container>
      <Container class="container__page-account-history">
        <AccountHistory />
        <AccountSidebarFilter />
      </Container>
      <AccountFooter />
    </div>
  </transition>
</template>

<script>
  import AccountHeader from '@/components/Account/AccountHeader'
  import Container from '@/components/Container'
  import AccountHeading from '@/components/Account/AccountHeading'
  import AccountHistory from '@/components/Account/AccountHistory'
  import AccountSidebarFilter from '@/components/Account/AccountSidebarFilter'
  import AccountFooter from '@/components/Account/AccountFooter'

  export default {
    name: 'accountHistory',
    components: {
        AccountHeader,
        Container,
        AccountHeading,
        AccountSidebarFilter,
        AccountHistory,
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

  .container__page-account-history {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
</style>
