<template>
  <transition name="fade" mode="out-in">
    <div class="page__content page__content--theme-account">
      <AccountHeader />
      <Container>
        <AccountHeading>Account profile</AccountHeading>
      </Container>
      <AccountFooter />
    </div>
  </transition>
</template>

<script>
    import AccountHeader from '@/components/Account/AccountHeader'
    import Container from '@/components/Container'
    import AccountHeading from '@/components/Account/AccountHeading'
    import AccountFooter from '@/components/Account/AccountFooter'

    export default {
        name: 'accountProfile',
        components: {
            AccountHeader,
            Container,
            AccountHeading,
            AccountFooter
        }
    }
</script>

<style lang="scss">
  .page__content {
    min-height: 100vh;
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
