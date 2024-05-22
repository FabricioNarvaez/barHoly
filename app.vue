<template>
  <headerComponent />
  <!-- <div class="bodyContainer"> -->
    <NuxtPage />
  <!-- </div> -->
  <footerComponent />
</template>

<script setup>
  import headerComponent from './assets/components/headerComponent.vue';
  import footerComponent from './assets/components/footerComponent.vue';
</script>

<style scoped>
  /* @import "/assets/css/main/main.css"; */
</style>