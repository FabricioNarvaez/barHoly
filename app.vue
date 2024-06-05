<template>
  <headerComponent />
  <NuxtPage />
  <button v-if="isVisible" id="topButton" @click="scrollToTop">
    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 40 40">
      <path fill="currentColor" d="M4.659 28.167h30.682L20 7.833z" />
    </svg>
  </button>
  <footerComponent />
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import headerComponent from './assets/components/headerComponent.vue';
  import footerComponent from './assets/components/footerComponent.vue';

  const isVisible = ref(false);
  onMounted(() => {
    const handleScroll = () => {
      isVisible.value = window.scrollY > 40;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
</script>