<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
  @import "./assets/fonts/fonts";

  html {
      min-height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  #app {
    font: 13px "SF UI Display", "SF UI Display Fixed", sans-serif;
    line-height: 1.5;

    position: relative;
    min-height: 100vh;
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

  @font-face {
    font-family: 'icomoon';
    src:  url('assets/fonts/icomoon/icomoon.eot?bsrz18');
    src:  url('assets/fonts/icomoon/icomoon.eot?bsrz18#iefix') format('embedded-opentype'),
    url('assets/fonts/icomoon/icomoon.ttf?bsrz18') format('truetype'),
    url('assets/fonts/icomoon/icomoon.woff?bsrz18') format('woff'),
    url('assets/fonts/icomoon/icomoon.svg?bsrz18#icomoon') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  [class^="icon-"], [class*=" icon-"] {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'icomoon' !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-search:before {
    content: "\e905";
  }
  .icon-arrow-down:before {
    content: "\e904";
  }
  .icon-icon-history:before {
    content: "\e903";
  }
  .icon-icon-advanced-view:before {
    content: "\e900";
  }
  .icon-icon-buysell:before {
    content: "\e901";
  }
  .icon-icon-dashboard:before {
    content: "\e902";
  }
</style>
