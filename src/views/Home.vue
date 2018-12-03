<template>
  <transition name="fade" mode="out-in">
    <div class="page__content">
      <Header />
      <AboutProduct />
      <InformationCategory />
      <ProjectDashboard />
      <Footer />
    </div>
  </transition>
</template>

<script>
  import Header from '@/components/Landing/Header'
  import AboutProduct from '@/components/Landing/AboutProduct'
  import InformationCategory from '@/components/Landing/InformationCategory'
  import ProjectDashboard from '@/components/Landing/ProjectDashboard'
  import Footer from '@/components/Landing/Footer'

  export default {
    name: 'home',
    components: {
        Header,
        AboutProduct,
        InformationCategory,
        ProjectDashboard,
        Footer
    }
  }
</script>

<style lang="scss">
  .page__content {
    min-height: 100vh;
  }
</style>
