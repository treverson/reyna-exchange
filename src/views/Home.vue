<template>
  <transition name="fade" mode="out-in">
    <PageWrapper>
      <Header />
      <AboutProduct />
      <InformationCategory />
      <ProjectDashboard />
      <Footer />
    </PageWrapper>
  </transition>
</template>

<script>
  import PageWrapper from '@/components/PageWrapper'
  import Header from '@/components/Landing/Header'
  import AboutProduct from '@/components/Landing/AboutProduct'
  import InformationCategory from '@/components/Landing/InformationCategory'
  import ProjectDashboard from '@/components/Landing/ProjectDashboard'
  import Footer from '@/components/Landing/Footer'

  export default {
    name: 'home',
    components: {
        PageWrapper,
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
