<template>
  <transition name="fade" mode="out-in">
    <div id="page__content">
      <Header />
      <AboutProduct />
      <InformationCategory />
      <ProjectDashboard />
      <Footer />
    </div>
  </transition>
</template>

<script>
  import Header from '@/components/Header'
  import AboutProduct from '@/components/AboutProduct'
  import InformationCategory from '@/components/InformationCategory'
  import ProjectDashboard from '@/components/ProjectDashboard'
  import Footer from '@/components/Footer'

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
