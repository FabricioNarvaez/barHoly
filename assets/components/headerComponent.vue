<template>
    <header v-if="MAINTENANCE_MODE">
        <div class="logoLink">
            <img  class="logoImg" src="../images/icon.svg" alt="Bar Holy icon" title="Bar Restaurante Holy"/>
            <span class="logoName">Bar Restaurante Holy</span>
        </div>
    </header>
    <header v-else>
        <NuxtLink to="/" title="Bar Restaurante Holy" class="logoLink">
                <img  class="logoImg" src="../images/icon.svg" alt="Bar Holy icon" title="Bar Restaurante Holy"/>
                <span class="logoName">Bar Restaurante Holy</span>
        </NuxtLink>
        <div class="navContainer">
            <div class="hamburger" :class="{ active: isMenuActive}" @click="toggleMenu">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav class="navMenu" :class="{ active: isMenuActive}">
                <NuxtLink class="navMenuItem" title="Inicio | Bar Restaurante Holy" to="/">Inicio</NuxtLink>
                <!-- <NuxtLink class="navMenuItem" title="Sobre Nosotros | Bar Restaurante Holy" to="/sobre-nosotros">Sobre Nosotros</NuxtLink> -->
                <div class="navDropdown" @click="toggleDropdown">
                    <span class="navMenuItem dropdown">Carta y Menús <svg class="navMenuIcon" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 15 15"><path fill="currentColor" d="M7.5 10.207L11.707 6H3.293z"/></svg></span>
                    <div class="dropdownMenu" :class="{ dropdownActive: isDropdownActive}" @mouseleave="toggleDropdown">
                        <NuxtLink class="navMenuItem" title="Menú | Bar Restaurante Holy" to="/carta-y-menu/menu">Menú</NuxtLink>
                        <NuxtLink class="navMenuItem" title="Nuestros Pinchos | Bar Restaurante Holy" to="/carta-y-menu/nuestros-pinchos">Nuestros Pinchos</NuxtLink>
                        <NuxtLink class="navMenuItem" title="Bebidas | Bar Restaurante Holy" to="/carta-y-menu/bebidas">Bebidas</NuxtLink>
                        <NuxtLink class="navMenuItem" title="Vinos | Bar Restaurante Holy" to="/carta-y-menu/vinos">Vinos</NuxtLink>
                    </div>
                </div>
                <NuxtLink class="navMenuItem" title="Contacto | Bar Restaurante Holy" to="/contacto">Contacto y Horario</NuxtLink>
            </nav>    
        </div>
    </header>
</template>

<script setup>
    import { ref, watch} from "vue";
    import { useRoute  } from 'vue-router';
    import { useRuntimeConfig } from '#app';

    const config = useRuntimeConfig()
    const MAINTENANCE_MODE = config.public.MAINTENANCE_MODE;
    
    const route = useRoute();
    const currentPath = ref(route.path);

    const isDropdownActive = ref(false);
    const isMenuActive = ref(false);
    const toggleDropdown = () => {
        isDropdownActive.value = !isDropdownActive.value;
    }
    const toggleMenu = () => {
        isMenuActive.value = !isMenuActive.value;
    }

    watch(() => route.path, (newPath, oldPath) => {
        isMenuActive.value = false;
        isDropdownActive.value = false;
        currentPath.value = newPath;
    });
</script>

<style scoped>
    @import "/assets/css/main/header.css";
</style>