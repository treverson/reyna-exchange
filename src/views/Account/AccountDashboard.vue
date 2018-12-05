<template>
  <transition name="fade" mode="out-in">
    <PageWrapper theme="account">
      <AccountHeader />
      <PageContent>
        <Container class="container__account-dashboard">
          <AccountMyFunds />
          <main class="page__wrapper">
            <div class="page__section">
              <AccountGettingStarted />
            </div>
            <div class="page__section">
            </div>
          </main>
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
  import AccountGettingStarted from '@/components/Account/AccountGettingStarted'
  import AccountMyFunds from '@/components/Account/AccountMyFunds'
  import AccountFooter from '@/components/Account/AccountFooter'

  export default {
    name: 'accountDashboard',
    components: {
        PageWrapper,
        PageContent,
        AccountHeader,
        Container,
        AccountGettingStarted,
        AccountMyFunds,
        AccountFooter
    }
  }
</script>

<style lang="scss">
  .container__account-dashboard {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
</style>
