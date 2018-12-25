<template>
  <Page>
    <Header />
    <AboutProduct />
    <InformationCategory />
    <ProjectDashboard />
    <Footer />
  </Page>
</template>

<script>
  import Header from '@/components/Local/Landing/Header'
  import AboutProduct from '@/components/Local/Landing/AboutProduct'
  import InformationCategory from '@/components/Local/Landing/InformationCategory'
  import Page from '@/components/Global/Page/Page'
  import ProjectDashboard from '@/components/Local/Landing/ProjectDashboard'
  import Footer from '@/components/Local/Landing/Footer'

  export default {
    name: 'home',
    components: {
        Page,
        Header,
        AboutProduct,
        InformationCategory,
        ProjectDashboard,
        Footer
    }
  }
</script>

<style lang="scss">

</style>
