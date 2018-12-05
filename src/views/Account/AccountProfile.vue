<template>
  <transition name="fade" mode="out-in">
    <PageWrapper theme="account">
      <AccountHeader />
      <PageContent>
        <Container>
          <AccountHeading>Account profile</AccountHeading>
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
    import AccountFooter from '@/components/Account/AccountFooter'

    export default {
        name: 'accountProfile',
        components: {
            PageWrapper,
            PageContent,
            AccountHeader,
            Container,
            AccountHeading,
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
