<template>
  <Page theme="account">
    <div class="account-dashboard">
      <Header />
      <Footer />
    </div>
  </Page>
</template>

<script>
  import Page from '@/components/Page'
  import Header from '@/components/Account/Header'
  import Footer from '@/components/Account/Footer'

  export default {
    name: 'accountDashboard',
    components: {
        Page,
        Header,
        Footer
    }
  }
</script>

<style lang="scss">

</style>
