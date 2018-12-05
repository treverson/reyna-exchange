<template>
  <transition name="fade" mode="out-in">
    <PageWrapper theme="account">
      <AccountHeader />
      <PageContent>
        <Container>
          <AccountHeading>History</AccountHeading>
        </Container>
        <Container class="container__page-account-history">
          <AccountHistory />
          <AccountSidebarFilter />
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
  import AccountHeading from '@/components/Account/AccountHeading'
  import AccountHistory from '@/components/Account/AccountHistory'
  import AccountSidebarFilter from '@/components/Account/AccountSidebarFilter'
  import AccountFooter from '@/components/Account/AccountFooter'

  export default {
    name: 'accountHistory',
    components: {
        PageWrapper,
        PageContent,
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
  .container__page-account-history {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
</style>
