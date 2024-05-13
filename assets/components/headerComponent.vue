<template>
    <header>
        <NuxtLink to="/" title="Bar Restaurante Holy" class="logoLink">
                <img src="../images/icon.svg" alt="Bar Holy icon" title="Bar Restaurante Holy"/>
                <span>Bar Restaurante Holy</span>
        </NuxtLink>
        <nav class="navMenu">
            <NuxtLink to="/">Inicio</NuxtLink>
            <NuxtLink to="/sobre-nosotros">Sobre Nosotros</NuxtLink>
            <NuxtLink to="/" class="dropdown">Carta y Menús <svg class="navMenuIcon" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 15 15"><path fill="currentColor" d="M7.5 10.207L11.707 6H3.293z"/></svg></NuxtLink>
            <NuxtLink to="/">Contacto y Horario</NuxtLink>
        </nav>    
    </header>
</template>

<script>
    export default {
        name: 'TeenyiconsDownSmallSolid'
    }
</script>

<style scoped>
    @import "/assets/css/main/header.css";
</style>