<template>
  <headerComponent />
  <div class="bodyContainer">
    <NuxtPage />
  </div>
</template>

<script setup>
  import headerComponent from './assets/components/headerComponent.vue'
</script>

<style scoped>
  @import "/assets/css/main/main.css";
</style>