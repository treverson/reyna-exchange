<template>
  <Page theme="account">
    <div class="account-dashboard">
      <Header />
    </div>
  </Page>
</template>

<script>
  import Page from '@/components/Page'
  import Header from '@/components/Account/Header'

  export default {
    name: 'accountDashboard',
    components: {
        Page,
        Header
    }
  }
</script>

<style lang="scss">

</style>
