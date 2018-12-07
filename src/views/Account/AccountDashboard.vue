<template>
  <Page theme="account">
    <div class="account-dashboard">
      <Header />

        <AccountContainer>
          <div class="account-dashboard__grid">

            <!-- getting start -->
            <div class="account-dashboard__getting-start">
              <GettingStart />
            </div>
            <!-- getting start end -->

          </div>
        </AccountContainer>

      <Footer />
    </div>
  </Page>
</template>

<script>
  import Page from '@/components/Page'
  import Header from '@/components/Account/Header'
  import Footer from '@/components/Account/Footer'
  import AccountContainer from '@/components/Account/AccountContainer'
  import GettingStart from '@/components/Account/GettingStart'

  export default {
    name: 'accountDashboard',
    components: {
        Page,
        Header,
        Footer,
        AccountContainer,
        GettingStart
    }
  }
</script>

<style lang="scss">

</style>
