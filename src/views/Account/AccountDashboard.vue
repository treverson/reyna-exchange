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

            <!-- available-currencies -->
            <div class="account-dashboard__available-currencies">
              <AvailableCurrencies />
            </div>
            <!-- available-currencies end -->

            <!-- my funds -->
            <div class="account-dashboard__my-funds">
              <MyFunds />
            </div>
            <!-- my funds end -->

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
  import GettingStart from '@/components/Account/UI/GettingStart'
  import AvailableCurrencies from '@/components/Account/UI/AvailableCurrencies'
  import MyFunds from '@/components/Account/UI/MyFunds'

  export default {
    name: 'accountDashboard',
    components: {
        Page,
        Header,
        Footer,
        AccountContainer,
        GettingStart,
        AvailableCurrencies,
        MyFunds
    }
  }
</script>

<style lang="scss">
  .account-dashboard__grid {
    margin-top: 13px;

    display: flex;
    align-items: flex-start;
  }

  .account-dashboard__getting-start {
    flex-shrink: 0;
    max-width: 256px;
    width: 100%;

    margin-right: 17px;
  }

  .account-dashboard__available-currencies {
    flex-shrink: 0;
    max-width: 712px;
    width: 100%;

    margin-right: 16px;
  }

  .account-dashboard__my-funds {
    flex-shrink: 0;
    max-width: 256px;
    width: 100%;
  }
</style>
