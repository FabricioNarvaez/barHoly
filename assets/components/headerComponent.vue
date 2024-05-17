<template>
    <header>
        <NuxtLink to="/" title="Bar Restaurante Holy" class="logoLink">
                <img src="../images/icon.svg" alt="Bar Holy icon" title="Bar Restaurante Holy"/>
                <span>Bar Restaurante Holy</span>
        </NuxtLink>
        <nav class="navMenu">
            <NuxtLink class="navMenuItem" title="Inicio | Bar Restaurante Holy" to="/">Inicio</NuxtLink>
            <NuxtLink class="navMenuItem" title="Sobre Nosotros | Bar Restaurante Holy" to="/sobre-nosotros">Sobre Nosotros</NuxtLink>
            <div @click="toggleDropdown">
                <span class="navMenuItem dropdown">Carta y Menús <svg class="navMenuIcon" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 15 15"><path fill="currentColor" d="M7.5 10.207L11.707 6H3.293z"/></svg></span>
                <div class="dropdownMenu" :class="{ dropdownActive: isDropdownActive}" >
                    <NuxtLink class="navMenuItem" title="Menú | Bar Restaurante Holy" to="/menu">Menú</NuxtLink>
                    <NuxtLink class="navMenuItem" title="Nuestros Pinchos | Bar Restaurante Holy" to="/nuestros-pinchos">Nuestros Pinchos</NuxtLink>
                    <NuxtLink class="navMenuItem" title="Bebidas | Bar Restaurante Holy" to="/bebidas">Bebidas</NuxtLink>
                    <NuxtLink class="navMenuItem" title="Vinos | Bar Restaurante Holy" to="/vinos">Vinos</NuxtLink>
                </div>
            </div>
            <NuxtLink class="navMenuItem" title="Contacto | Bar Restaurante Holy" to="/contacto">Contacto y Horario</NuxtLink>
        </nav>    
    </header>
</template>

<script setup>
    import { ref } from "vue";

    const isDropdownActive = ref(false);
    const toggleDropdown = () => {
        isDropdownActive.value = !isDropdownActive.value;
    }
</script>

<style scoped>
    @import "/assets/css/main/header.css";
</style>