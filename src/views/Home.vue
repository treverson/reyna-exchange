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
  import Header from '@/components/Landing/Header'
  import AboutProduct from '@/components/Landing/AboutProduct'
  import InformationCategory from '@/components/Landing/InformationCategory'
  import Page from '@/components/Page'
  import ProjectDashboard from '@/components/Landing/ProjectDashboard'
  import Footer from '@/components/Landing/Footer'

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
