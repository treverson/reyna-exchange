<template>
  <div id="page">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import "./assets/fonts/fonts";

  html {
      min-height: 100%;
  }

  #page {
      font: 13px "SF UI Display", "SF UI Display Fixed", sans-serif;
      line-height: 1.5;

      min-height: 100%;
      margin: 0;

      color: #262626;
      background: #fff;
  }

  .fade-enter-active,
  .fade-leave-active {
      transition: opacity .35s;
  }

  .fade-enter,
  .fade-leave-to {
      opacity: 0
  }

  a,
  a:hover,
  a:focus {
    text-decoration: none;
    outline: none;
  }
</style>
